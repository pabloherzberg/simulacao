import React, {useState, useEffect} from 'react';
import firebase from '../../../context/firebase'

import { Container } from './style';
import saveSVG from '../../../assets/save.svg'
import diagnosisSVG from '../../../assets/diagnosis.svg'

function Details({selected, selectKey, newPerson, length}) {
  const [inputs, setInputs] = useState()
  const [showVia, setShowVia] = useState(false)
  const [showVoz, setShowVoz] = useState(false)
  const [showOFAS, setShowOFAS] = useState(false)
  const [showRespiracao, setShowRespiracao] = useState(false)
   
  useEffect(()=>{
    if(newPerson){
      setInputs({
        OFAS:'',
        alta_fono:'',
        diagnostico:'',
        entrada:'',
        evolucoes:{},
        idade:'',
        linguagem:'',
        med_solicitante:'',
        nome:'',
        observacoes:'',
        pendencia:'',
        respiracao:'',
        saida:'',
        setor:newPerson,
        status:true,
        ultimo_atendimento:'',
        via:'',
        voz:''
      })
    }else{
      setInputs({...selected})
    }
  },[selected, newPerson])
  
  function handleChange(e){
    if(e.target.name ==='via'){
      setShowVia(true)
    }
    if(e.target.name ==='OFAS'){
      setShowOFAS(true)
    }
    if(e.target.name ==='voz'){
        setShowVoz(true)
    }
    if(e.target.name ==='respiracao'){
      setShowRespiracao(true)
    }
    if(e.target.type === 'date'){
      setInputs({...inputs, [e.target.name]: new Date(e.target.value)})   
    }
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
 
  function handleSave(){
    if(newPerson){
      firebase.database().ref(`pacientes/${length}`).set(inputs)
    }else{
      firebase.database().ref(`pacientes/${selectKey}`).set(inputs)
    }
  }

  function handleClose(e){
    if(e.target.id ==='showVia' ||
      e.target.id ==='showOFAS' ||
      e.target.id ==='showVoz' ||
      e.target.id ==='showRespiracao'
    ){
      setShowVia(false)
      setShowOFAS(false)
      setShowVoz(false)
      setShowRespiracao(false)
    }
  }

  return (
   <Container>
      {(selected || newPerson) && (<>

        
          <ul>
            <li><span>Nome:</span> <input onChange={handleChange} type="text" name="nome" value={inputs.nome}/> </li>
            <li><span>Idade:</span> <input onChange={handleChange} type="text" name="idade" value={inputs.idade}/> </li>
            <li><span>Setor:</span> 
            <select onChange={handleChange} type="text" name="setor" value={inputs.setor} >
              <option value="uti_neo">UTI NEONATAL</option>
                <option value="uti_ped">UTI PEDIÁTRICA</option>
                <option value="uti_1">UTI 1</option>
                <option value="uti_2">UTI 2</option>
                <option value="uti_3">UTI 3</option>
                <option value="posto2">POSTO 2</option>
                <option value="andar4">ANDAR 4</option>
                <option value="andar5">ANDAR 5</option>
                <option value="andar6">ANDAR 6</option>
                <option value="andar7">ANDAR 7</option>
                <option value="andar8">ANDAR 8</option>
                <option value="andar9">ANDAR 9</option>
                <option value="andar10">ANDAR 10</option>
                <option value="andar12">ANDAR 12</option>
              </select> 
             </li>
            <li><span>Médico solicitante:</span> <input onChange={handleChange} type="text" name="med_solicitante" value={inputs.med_solicitante} /> </li>
            
            <li>
              <div><span>Início na Fono:</span> <input onChange={handleChange} type="date" name="entrada_fono" value={inputs.entrada_fono} /></div>
              <div><span>Alta na Fono:</span> <input onChange={handleChange} type="date" name="alta_fono" value={inputs.alta_fono} /></div>
              <div><span>Último Atendimento:</span> <input onChange={handleChange} type="date" name="ultimo_atendimento" value={inputs.ultimo_atendimento} /></div>
            </li>
            

            <li>
              <div><span>Entrada:</span> <input onChange={handleChange} type="date" name="entrada" value={inputs.entrada} /></div>
              <div><span>Saída:</span> <input onChange={handleChange} type="date" name="saida" value={inputs.saida} /></div>
              <div><span>Tempo de Internação:</span> <input onChange={handleChange} type="text" name="tempo_internacao" value={inputs.tempo_internacao} /></div>
            </li>
            
          </ul>
          <div>
            <p> <span>Diagnóstico:</span> <input onChange={handleChange} type="text" name="diagnostico" value={inputs.diagnostico} /></p>
            <p> <span>Linguagem:</span> 
  
              <input onChange={handleChange} type="text" name="linguagem" value={inputs.linguagem} />
                     
                 {/* lúcido, orientado, responsivo verbarlmente, responsivo por gestos, desorientado, não responsivo,
                  contactante, não contactante, alerta, não alerta, fala lentificada, hipoativo, disártrico, apráxico,
                  sonolento
                 */}
     
                              
              </p>
            <p> <span>OFAS:</span>
         
             <select onChange={handleChange} type="text" name="OFAS" value={inputs.OFAS} >
                     
                     <option value="Funcionais">Funcionais</option>
                     <option value="Funcionais, dentado">Funcionais, dentado</option>
                     <option value="Funcionais, edentado parcial">Funcionais, edentado parcial</option>
                     <option value="Funcionais, edentado total">Funcionais, edentado total</option>
                     <option value="Força, tonus e mobilidade reduzidos, dentado ">Força, tônus e mobilidade reduzidos, dentado </option>
                     <option value="Força, tonus e mobilidade reduzidos, edentado parcial ">Força, tônus e mobilidade reduzidos, edentado parcial </option>
                     <option value="Força, tonus e mobilidade reduzidos, edentado total ">Força, tônus e mobilidade reduzidos, edentado total </option>
                     <option value="Paralisia Facial Periferica">Paralisia Facial Periférica</option>
                     <option value="Paralisia Facial Central">Paralisia Facial Central</option>
                    <option id='edit' value={inputs.OFAS}>{inputs.OFAS}</option>              
     
                 </select>
             </p>
            <p> <span>Voz:</span>
             <select onChange={handleChange} type="text" name="voz" value={inputs.voz} >
                 <option value=""></option>    
                <option value="Adequada">Adequada</option>
                <option value="Loudness reduzido">Loudness reduzido</option>
                <option value="Rouco-soprosa">Rouco-soprosa</option>
                <option value="Soprosa">Soprosa</option>
                <option value="Aspera">Áspera</option>
                <option value="Irregular">Irregular</option>
                <option value="Astenica">Astênica</option>
                <option value="Tensa">Tensa</option>
                <option value="Afonico">Afônico</option>
                <optgroup label='Selecionado'>
                  <option id='edit' value={inputs.voz}>{inputs.voz}</option>    
                </optgroup>
            </select>
            </p>
            
            
            <p> <span>Respiração:</span>
            
             <select onChange={handleChange} type="text" name="respiracao" value={inputs.respiracao} >
            
                 
                  <option value="VE ao AA">VE ao AA</option>
                  <option value="VE com catéter de O2">VE com catéter de O2</option>
                  <option value="VM">VM</option>
                  <option value="TQT plástica com cuff insuflado">TQT plástica com cuff insuflado</option>
                  <option value="TQT plástica aberta com cuff desinsuflado">TQT plástica aberta com cuff desinsuflado</option>
                  <option value="TQT plástica tamponada">TQT plástica tamponada</option>
                  <option value="TQT metática aberta">TQT metática aberta</option>
                  <option value="TQT metálica tamponada">TQT metálica tamponada</option> 
                  <optgroup label='Selecionado'>
                    <option id='edit' value={inputs.respiracao}>{inputs.respiracao}</option>    
                  </optgroup>      


              </select>
             
             
             </p>
            <p> <span>Via de alimentação:</span> 
              <select onChange={handleChange} type="text" name="via" value={inputs.via} >
            
                <optgroup label='ADULTOS'>
                  <option value="SNE + VO ZERO">SNE + VO ZERO</option>
                  <option value="GTT + VO ZERO">GTT + VO ZERO</option>
                  <option value="PL + LF">PL + LF</option>
                  <option value="6X 200ml PL + LF + SNE">6X 200ml PL + LF + SNE</option>
                  <option value="6X 200ml PL + LE + SNE">6X 200ml PL + LE + SNE</option>
                  <option value="PASTOSA + LF + SNE em desuso">PASTOSA + LF + SNE em desuso</option>
                  <option value= "PASTOSA + LF">PASTOSA + LF</option>
                  <option value="BRANDA + SNE em desuso">BRANDA + SNE em desuso</option>
                  <option value= "BRANDA">BRANDA</option>
                </optgroup>
                <optgroup label='RNs'>
                  <option value="VO + Amamentação">VO + Amamentação</option>
                  <option value="SNG + VO ZERO">SNG + VO ZERO</option>
                  <option value="GTT + VO ZERO">GTT + VO ZERO</option>
                  <option value="LILLO + SNG em desuso">LILLO + SNG em desuso</option>
                  <option value= "BICO REDONDO + SNG em desuso">BICO REDONDO + SNG em desuso</option>
                  <option value="ORTODÔNTICA + SNG em desuso">ORTODÔNTICA + SNG em desuso</option>
                  <option value= "LILLO volume total">LILLO volume total</option>
                  <option value="BICO REDONDO volume total">BICO REDONDO volume total</option>
                  <option value="ORTODÔNTICA volume total">ORTODÔNTICA volume total</option>
                </optgroup>
                <optgroup label='Selecionado'>
                  <option id='edit' value={inputs.via}>{inputs.via}</option>
                </optgroup>

              </select>
            </p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p> <span>Observações:</span> <textarea onChange={handleChange} name="observacoes" value={inputs.observacoes} id="" cols="30" rows="5"></textarea></p>
            <div id='wrapperButtons'>
              <div id='prontuarios'>
                <img src={diagnosisSVG} />
                <label>Evoluções</label>
              </div>
              <div id='save' onClick={handleSave}>
                <img src={saveSVG} />
                <label>Salvar</label>
              </div>
            </div>
          </div>
            {showVia&&
            <div onClick={handleClose} id='showVia'>
              <div id='content'>
                <h2>Editar via de alimentação</h2>
                <input onChange={handleChange} type="text" name="via" value={inputs.via} />
                <button onClick={()=>setShowVia(false)}>Ok</button>
              </div>
            </div>
            }
            {showOFAS&&
            <div onClick={handleClose} id='showOFAS'>
              <div id='content'>
                <h2>Editar OFAS</h2>
                <input onChange={handleChange} type="text" name="OFAS" value={inputs.OFAS} />
                <button onClick={()=>setShowOFAS(false)}>Ok</button>
              </div>
            </div>
            }
             {showVoz&&
            <div onClick={handleClose} id='showVoz'>
              <div id='content'>
                <h2>Editar Voz</h2>
                <input onChange={handleChange} type="text" name="voz" value={inputs.voz} />
                <button onClick={()=>setShowVoz(false)}>Ok</button>
              </div>
            </div>
            }
              {showRespiracao&&
            <div onClick={handleClose} id='showRespiracao'>
              <div id='content'>
                <h2>Editar tipo de Respiração</h2>
                <input onChange={handleChange} type="text" name="respiracao" value={inputs.respiracao} />
                <button onClick={()=>setShowRespiracao(false)}>Ok</button>
              </div>
            </div>
            }
          </>
     )}
      </Container>
  )
}

export default Details;