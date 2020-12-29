import React, {useEffect, useState} from 'react';
import firebase from '../../../context/firebase'
import { Container } from './styles';

function Dados() {
    const [pacientes, setPacientes] = useState([])
    const [length, setLength] = useState(0)

    useEffect(()=>{
        firebase
            .database()
            .ref('pacientes')
            .on('value', snapshot=>{
                setPacientes(snapshot.val())
                const tamanho = snapshot.numChildren()
                setLength(tamanho +1)
            })
    },[])

    const deleted = pacientes.filter( o => o==='deletado' || o==='default')
    const qtdPacientes =  (pacientes.length - deleted.length)


  return <div />;
}

export default Dados;