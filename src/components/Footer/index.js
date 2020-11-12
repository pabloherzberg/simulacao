import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom'
import { Container } from './styles';

import {useGlobalContext} from '../../context/index'

function Footer({length, pacientesCheck}) {
    const [ eixoY, setEixoY] = useState(0)

    const tela = document.body.clientHeight;

    const {setFooterSetor, setFooterNome, setFooterStatus} = useGlobalContext()

    const history = useHistory()

    window.addEventListener('scroll',()=>{
        setEixoY(window.scrollY)
    })

    useEffect(()=>{
        console.log(tela)
        console.log(eixoY/document.body.clientHeight)
    },[eixoY])

  return (
    <Container style={{display:eixoY/tela > 0.6?'none':'block'}}>
        <ul>
            <li onClick={()=>setFooterSetor(true)}><span> Setor </span></li>
            <li onClick={()=>setFooterNome(true)}><span> Nome </span></li>
            <li onClick={()=>setFooterStatus(true)}><span> Status </span></li>
            <li onClick={()=>history.push({
                pathname:'/edit',
                state:{newPerson:true, length:length}
            })}><span> Adicionar paciente </span></li>
             <li onClick={()=>history.push({
                pathname:'/contatos',
                state:{pacientesCheck:false}
            })}><span> Contatos </span></li>
             <li onClick={()=>{
                    pacientesCheck.length>0?
                    history.push({
                        pathname:'/contatos',
                        state:{pacientesCheck:pacientesCheck}
                    }):
                    alert('Selecione pelo menos um paciente para enviar.')
                }}><span> Enviar </span></li>
        </ul>
    </Container>
  )
}

export default Footer;