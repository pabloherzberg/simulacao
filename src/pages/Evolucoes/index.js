import React, {useEffect, useState} from 'react';

import {useLocation, useHistory} from 'react-router-dom'
import firebase from '../../context/firebase'

import { Container } from './styles';

import selfie from '../../assets/file.svg'
import Uploading from  '../../components/Uploading'

function Evolucoes() {

  const location = useLocation()
  const {paciente, index} = location.state
  const [imgURL, setImgUrl] = useState([])
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [url, setUrl] = useState('')
  const [tempo, setTempo] = useState(new Date())
  const [image, setImage] = useState("");
  const [imageFullData, setImageFullData] = useState("");

  const history = useHistory()

  useEffect(()=>{
    CarregarProntuarios()    
  },[])

  useEffect(()=>{
    setList([...list, imgURL])
  },[imgURL])

  
  function CarregarProntuarios(){
    firebase
      .storage()
      .ref(`pacientes/${index}`)
      .listAll()
      .then(function(result) {
        
        result.items.forEach(function(imageRef) {
          // And finally display them
          imageRef.getDownloadURL()
          .then((url) => {            
            imageRef.getMetadata()
            .then(data=>{
              const time = new Date(data.timeCreated).toLocaleString()
              setImgUrl({url:url, time:time})
            }).catch(e=>console.log('erro dentro'))
          })
          .catch((e) => {
           console.log(e)
          });         

        });
        setLoading(false)
      }).catch(function(error) {
        // Handle any errors
      });     
  }

  async function fileHandler(event) {
      const fileObj = event.target.files[0];
  
      if (fileObj) {
        const image = URL.createObjectURL(fileObj);
        setImage(image);
        setImageFullData(fileObj);  
      } else {
        console.log("Imagem não carregada");
      }
  }

  async function uploadImg(e) {
      e.preventDefault();
      setLoading(true)
      
      const current = new Date().getTime()
  
      firebase
        .database()
        .ref(`pacientes/${index}/prontuarios/`)
        .push(current)
  
      firebase
        .storage()
        .ref(`pacientes/${index}/${current}`)
        .put(imageFullData)
        .then(() => {
          setLoading(false)
          alert("Novo prontuário salvo com sucesso!")
          history.push('/')
        })
        .catch((e) => {
          setLoading(false)
          console.error(e)
        });
  }
  
  return (
    <Container>
      {loading?<Uploading/>:
      <>
        <header>
          <img height='100%' src={image}/>
          <form onSubmit={uploadImg}>
            <label htmlFor="upload-photo"><img src={selfie} /><span>Anexar novo arquivo de prontuário</span></label>
            <input id='upload-photo' onChange={fileHandler} name='captureImg' type="file" accept='image/*' capture='camera'/>
            <input id='submit' style={{opacity:image?'1':'0.5'}} disabled={image?false:true} type="submit" value="Salvar"/>
          </form>
        </header>
        <ul>
          {list
            .sort((a,b)=>{
              return new Date(b.time) - new Date(a.time)
            })
            .map(item=>(
              item.url &&
              <a href={item.url}>
                <li>
                  <img src={item.url}/>
                  <span>{String(item.time)}</span>
                </li>
              </a>)
            )}
        </ul>
      </>
      }
    </Container>
  )
}

export default Evolucoes;