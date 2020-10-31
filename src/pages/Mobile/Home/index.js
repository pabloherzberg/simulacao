import React, {useEffect, useState} from 'react';
import firebase from '../../../context/firebase'
import {useHistory} from 'react-router-dom'

import { Container } from './styles';

import stethoscopeRed from '../../../assets/stethoscopeRed.svg'
import stethoscopeGreen from '../../../assets/stethoscopeGreen.svg'

function Home() {
    const [pacientes, setPacientes] = useState([])
   
    const history = useHistory()

    useEffect(()=>{
        firebase
            .database()
            .ref('pacientes')
            .on('value', snapshot=>{
                setPacientes(snapshot.val())
            })
    },[])

    function arraySearch(arr,val) {
        for (var i=0; i<arr.length; i++)
            if (arr[i] === val)                    
                return i;
        return false;
      }

    return(
        <Container>
       
            <table>
               <thead>
                  <td>Status</td><td>Nome</td>
               </thead>
                <tbody>
                {pacientes
                    .filter(o=> o.nome?o:'')
                    .sort((a, b)=>{
                        return  a.obito? 1:(a.status === b.status)? 0: a.status? -1 :1;
                      })
                    .map(paciente=>(
                        <tr onClick={()=>{
                            const i = arraySearch(pacientes, paciente)
                            history.push({
                                pathname:'/detalhes',
                                state:{paciente:paciente, index:i}
                            })
                        }}>
                            <td>{paciente.status?<img src={stethoscopeGreen}/>:<img src={stethoscopeRed}/>}</td><td>{paciente.nome}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}

export default Home;