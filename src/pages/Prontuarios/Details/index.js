import React, {useState, useEffect} from 'react';
import firebase from '../../../context/firebase'

import { Container } from './style';
import saveSVG from '../../../assets/save.svg'
/* "vias" : [ "SNE", "GTT", "6X 200ml PL + LF + SNE", "6X 200ml PL + LE + SNE", "PASTOSA + LF + SNE em desuso", "PASTOSA + LF", "BRANDA", "BRANDA + SNE em desuso", "OUTRO", "SNG + VO ZERO", "LILLO + SNG em desuso", "BICO REDONDO + SNG em desuso", "ORTODÔNTICA + SNG em desuso", "LILLO volume total", "BICO REDONDO volume total", "ORTODÔNTICA volume total" ]
 */
function Details({selected, selectKey}) {
  const [inputs, setInputs] = useState({...selected})
   
  useEffect(()=>{
    setInputs({...selected})
  },[selected])
  
  function handleChange(e){
    if(e.target.type === 'date'){
      setInputs({...inputs, [e.target.name]: new Date(e.target.value)})   
    }
    setInputs({...inputs, [e.target.name]: e.target.value, ultimo_atendimento: currentDate})
  }
 
  function handleSave(){
    firebase.database().ref(`pacientes/${selectKey}`).set(inputs)
  }

  const currentDate = (new Date().toLocaleDateString())
 
  return (
   <Container>
      {selected && (<>
          <ul>
            <li><span>Nome:</span> <input onChange={handleChange} type="text" name="nome" value={inputs.nome}/> </li>
            <li><span>Setor:</span> <input onChange={handleChange} type="text" name="setor" value={inputs.setor} /> </li>
            <li><span>Médico solicitante:</span> <input onChange={handleChange} type="text" name="med_solicitante" value={inputs.med_solicitante} /> </li>
            <li><span>Entrada:</span> <input onChange={handleChange} type="date" name="entrada" value={inputs.entrada} /> </li>
            <li><span>Alta na fono:</span> <input onChange={handleChange} type="date" name="alta_fono" value={inputs.alta_fono} /> </li>
            <li><span>Saída:</span> <input onChange={handleChange} type="date" name="saida" value={inputs.saida} /> </li>
          </ul>
          <div>
            <p> <span>Diagnóstico:</span> <input onChange={handleChange} type="text" name="diagnostico" value={inputs.diagnostico} /></p>
            <p> <span>Linguagem:</span> <input onChange={handleChange} type="text" name="linguagem" value={inputs.linguagem} /></p>
            <p> <span>OFAS:</span> <input onChange={handleChange} type="text" name="OFAS" value={inputs.OFAS} /></p>
            <p> <span>Voz:</span> <input onChange={handleChange} type="text" name="voz" value={inputs.voz} /></p>
            <p> <span>Respiração:</span> <input onChange={handleChange} type="text" name="respiracao" value={inputs.respiracao} /></p>
            <p> <span>Via:</span> <input onChange={handleChange} type="text" name="via" value={inputs.via} /></p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p> <span>Observações:</span> <textarea onChange={handleChange} name="observacoes" value={inputs.observacoes} id="" cols="30" rows="5"></textarea></p>
            <div id='save' onClick={handleSave}><img src={saveSVG} /><label>Salvar Alterações</label></div>
          </div>

          </>
     )}
      </Container>
  )
}

export default Details;