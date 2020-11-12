import React,{ useState , useEffect} from 'react';
import {useLocation} from 'react-router-dom'

import { Container } from './styles';

import phone from '../../../assets/phone.svg'
import medico from '../../../assets/medico.svg'

function Contatos() {

    const location = useLocation()
    const {pacientesCheck} = location.state

    const contatos =[
  
        {nome:'Dra. Ana Clara',telefone:5571991328666},
        {nome:'Dra. Carolina', telefone:5571981388100},
        {nome:'Dr. Felipe',telefone:5571999364584},
        {nome:'Dra. Melina', telefone:5571988229570},
        {nome:'Dra. Lílian',telefone:5586981544141},
        {nome:'Dra. Thais', telefone:5571988803092},
        {nome:'Dra. Sheila',telefone:5571991414862},
        {nome:'Dra. Carla', telefone:5571991389014},
        {nome:'Dra. Marcela',telefone:5571991583652},
        {nome:'Dra. Joana', telefone:5571999291904},
        {nome:'Dra. Stephanie',telefone:5571991970088},
        {nome:'Dra. Fabiana', telefone:5571981148890},
        {nome:'Dra. Alina', telefone:5571991829541},
        {nome:'Dr. Hélio',telefone:5571986855922},
        {nome:'Dr. André', telefone:5571994065155},
        {nome:'Dr. José Rodolfo',telefone:5573999448728},
    ]

    const [msg, setMsg]= useState('Oi!')

    useEffect(()=>{
        if(pacientesCheck){
            let message = []
            for(let paciente of pacientesCheck) {
                message.push(`*Setor:* ${paciente.setor} %0a*Leito*: ${paciente.leito ? paciente.leito: ''} %0a*Nome:* ${paciente.nome} %0a*Via de alimentação:* ${encodeURIComponent(paciente.via)}`)
            }
           const mesg = (message.splice(',').join('%0a%0a'))
           window.open(`https://wa.me/?text=${mesg}`);
         }
    },[])
    

  return <Container>
      <h2>Lista de médicos</h2>
      <table>
          <tbody>
          {/*   <tr onClick={()=>{
                window.open(`https://wa.me/?text=${msg}`);
                }}><td><img src={medico}/></td><td>Whatsapp grupo</td>
            </tr> */}
              {contatos.map(contato=>(
                  <tr onClick={()=>{
                    window.open(`https://wa.me/${contato.telefone}?text=${msg}`);
                  }}><td><img src={medico}/></td><td>{contato.nome}</td></tr>
              ))}
          </tbody>
      </table>
  </Container>
}

export default Contatos;