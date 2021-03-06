import React, {useEffect, useState} from 'react';

import {useLocation, useHistory} from 'react-router-dom'
import firebase from '../../context/firebase'

import { Container } from './styles';

import none from '../../assets/no-touch.svg'
import selfie from '../../assets/file.svg'
import Uploading from  '../../components/Uploading'

function Evolucoes() {

  const location = useLocation()
  const {paciente, index} = location.state
  const [imgURL, setImgUrl] = useState([])
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [carregar, setCarregar] = useState(0)
  const [image, setImage] = useState("");
  const [imageFullData, setImageFullData] = useState("");

  const history = useHistory()

  useEffect(()=>{
    CarregarProntuarios()    
  },[carregar])

  useEffect(()=>{
    setList([...list, imgURL])
  },[imgURL])

  function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
}
  
  function CarregarProntuarios(){
    setLoading(true)
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
              setImgUrl({url:url, time:time, data:data})
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

  async function handleDelete(item){
    const filePath = (item.data.fullPath)
      firebase
      .storage()
      .ref(filePath)
      .delete()
      .finally(()=>history.goBack())   
  }

  console.log(list)
  
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
        {list.length>1?
        <ul>
          {list
            .sort((a,b)=>{
              return new Date(b.time) - new Date(a.time)
            })
            .map(item=>(
              item.url &&
              
                <li>
                  <span>{String(item.time)}</span>
                  <img onClick={()=>history.push({
                      pathname: '/image',
                      state: {url:item.url}})}
                   src={item.url}/>
                  <button onClick={()=>handleDelete(item)}>Excluir</button>
                </li>

              )
            )}
        </ul>:
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

          <img width="100%" height='50%' src={none} />
          <p style={{fontSize:'1.2em', fontWeight:'bold'}}>Nenhum prontuário para este paciente foi carregado até agora.</p>
        
        </div>
        }
      </>
      }
    </Container>
  )
}

export default Evolucoes;