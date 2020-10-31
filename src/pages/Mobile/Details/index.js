import React, {useState} from 'react';
import firebase from '../../../context/firebase'
import {useLocation} from 'react-router-dom'
import { Container } from './styles';

function Details() {
    const location = useLocation()
    const {paciente, index} = location.state
    const [image, setImage] = useState("");
    const [imageFullData, setImageFullData] = useState("");


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
    async function handleSubmit(e) {
        e.preventDefault();
    
        /* firebase
          .database()
          .ref(`${folder}/${candyIndex}`)
          .set({
            name: newCandyName || candy.name,
            value: newCandyPrice || candy.value,
          }); */
    
        firebase
          .storage()
          .ref(`pacientes/${index}`)
          .put(imageFullData)
          .then((snapshot) => console.log("upload"))
          .catch((e) => console.error(e));
      }

  return <Container>
      <h2>Detalhes</h2>
      <ul>
          {paciente && Object.entries(paciente).map(item=>(
          <li>
              <span>{item[0]}: </span>
                <span>{item[1]}</span>
          </li>)
          )}
      </ul>
     {/*  <form onSubmit={handleSubmit}>
          <input name='captureImg' type="file" accept='image/*' capture='camera'/>
          <input type="submit" value="Atualizar"/>
      </form> */}
    
      </Container>
}

export default Details;