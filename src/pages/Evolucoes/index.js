import React, {useEffect, useState} from 'react';

import {useLocation} from 'react-router-dom'
import firebase from '../../context/firebase'

import { Container } from './styles';

function Evolucoes() {

  const location = useLocation()
  const {paciente, index} = location.state
  const [imgURL, setImgUrl] = useState([])
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  useEffect(()=>{
    setList([...list, imgURL])
  },[imgURL])

  useEffect(()=>{
    firebase
      .storage()
      .ref(`pacientes/${index}`)
      .listAll()
      .then(function(result) {
        result.items.forEach(function(imageRef) {
          // And finally display them
          imageRef.getDownloadURL()
          .then((url) => {
            setImgUrl({url:url})
          })
          .catch(() => {
           console.log('erro')
          });
        });
        setLoading(false)
      }).catch(function(error) {
        // Handle any errors
      });     
    },[])
    

  return (
    <Container>
      {loading?<></>:
        <ul>
          {list.map(item=><li>
            <img src={item.url}/>
          </li>)}
        </ul>
      }
    </Container>
  )
}

export default Evolucoes;