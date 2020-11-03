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
  const [url, setUrl] = useState('')
  const [tempo, setTempo] = useState(new Date())

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
    },[])

  return (
    <Container>
      {loading?<></>:
        <ul>
          {list
            .sort((a,b)=>{
              return b.time - a.time
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
      }
    </Container>
  )
}

export default Evolucoes;