import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import firebase from '../../../context/firebase'
import {useLocation} from 'react-router-dom'
import { Container } from './styles';
import selfie from '../../../assets/selfie.svg'
import pencil from '../../../assets/editar.svg'
import Uploading from  '../../../components/Uploading'

function Details() {
    const location = useLocation()
    const {paciente, index} = location.state
    const [image, setImage] = useState("");
    const [imageFullData, setImageFullData] = useState("");
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function fileHandler(event) {
        const fileObj = event.target.files[0];
    
        if (fileObj) {
          const image = URL.createObjectURL(fileObj);
          setImage(image);
          setImageFullData(fileObj);
          //uploadImg(fileObj)
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
          })
          .catch(() => {
            setLoading(false)
            
          });
    }

  return <Container>
    {loading&&<Uploading/>}
      <section id='one'>
        <div id='header'>
          <h2>Detalhes</h2>
            <button onClick={()=>history.push({
              pathname:'/edit',
              state:{selected:paciente, selectKey:index}
            })}><img src={pencil} />Editar</button>
          </div>
        <ul>
            
            {paciente && Object.entries(paciente).map(item=>
            item[0]==='prontuarios'?"":
            item[0]==='status'?
            (
              <li>
                <span>Status: </span>
                <span>{item[1]?'Em baixa fonoaudiológica': 'Em alta fonoaudiológica'}</span>
              </li>
            ):
            item[0]==='observacoes'?
            (
              <li>
                <span>{item[0]}: </span>
                <mark>{item[1].toUpperCase()}</mark>
            </li>
            ):
            (<li>
                <span>{item[0]}: </span>
                  <span>{item[1]}</span>
            </li>)
            )}
            <li style={{height:'3em'}} id='evolucoes'
              onClick={()=>history.push({
                pathname:"/evolucoesMobile",
                state:{paciente:paciente, index:index}
              })}>Ver Evoluções</li>
        </ul>
      </section>
      <section id='two'>
        <h2>Enviar foto de prontuário</h2>
        <form onSubmit={uploadImg}>
            <label htmlFor="upload-photo">
              <img src={selfie} />
              <span>Abrir Câmera</span>
            </label>
            <input id='upload-photo' onChange={fileHandler} name='captureImg' type="file" accept='image/*' capture='camera'/>
            <input id='submit' style={{opacity:image?'1':'0.5'}} disabled={image?false:true} type="submit" value="Fazer upload da foto"/>
        </form>
      </section>
      </Container>
}

export default Details;