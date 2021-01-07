import React, {useState, useEffect} from 'react';
import firebase from '../../../context/firebase'
import {useHistory, useLocation} from 'react-router-dom'

import { Container, Modal } from './style';
import saveSVG from '../../../assets/save.svg'
import diagnosisSVG from '../../../assets/diagnosis.svg'

function Edit() {
  const [inputs, setInputs] = useState(false)
  const [showViaFinal, setShowViaFinal] = useState(false)
  const [showViaInicial, setShowViaInicial] = useState(false)
  const [showVoz, setShowVoz] = useState(false)
  const [showOrientacao, setShowOrientacao] = useState(false)
  const [showOFAS, setShowOFAS] = useState(false)
  const [showRespiracao, setShowRespiracao] = useState(false)

  const history = useHistory()
  const location = useLocation()
  const {selected, selectKey, newPerson, length} = location.state
   
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
        prescricao:'',
        demanda:'',
        nome:'',
        observacoes:'',
        pendencia:'',
        respiracao:'',
        saida:'',
        setor:newPerson,
        leito:'',
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
      setShowViaFinal(true)
    }
    if(e.target.name === 'via_inicial'){
      setShowViaInicial(true)
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
    if(e.target.name === 'orientacao'){
      setShowOrientacao(true)
    }
    if(e.target.type === 'date'){
      setInputs({...inputs, [e.target.name]: new Date(e.target.value)})   
    }
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
 
  function handleSave(){
    if(inputs.setor==='todos'){
      alert('Selecione um SETOR')
    }else{
      if(newPerson){
        firebase.database().ref(`pacientes/${length}`).set(inputs).then(()=>{
          alert('Dados Salvos')
          history.push('/')
        })
        
      }else{
        firebase.database().ref(`pacientes/${selectKey}`).set(inputs).then(()=>{
          alert('Dados Salvos')
          history.push('/')
        })
        
      }
    }
  }

  function handleClose(e){
    if(e.target.id ==='showVia' ||
      e.target.id ==='showOFAS' ||
      e.target.id ==='showVoz' ||
      e.target.id ==='showOrientacao' ||
      e.target.id ==='showRespiracao'
    ){
      setShowViaFinal(false)
      setShowViaInicial(false)
      setShowOFAS(false)
      setShowVoz(false)
      setShowRespiracao(false)
      setShowOrientacao(false)
      
    }
  }

  return (
   <Container>
      {(inputs ) && (<>
        <section id='one'>
          <div id='header'>
            <h2>Detalhes do paciente</h2>
          </div>
          <ul>
            <li>
              <span>Nome:</span>
              <input onChange={handleChange} type="text" name="nome" value={inputs.nome}/>
            </li>
            <li>
              <span>Idade:</span>
              <input onChange={handleChange} type="text" name="idade" value={inputs.idade}/> 
            </li>
            <li>
                <span>Sexo:</span>
                <select onChange={handleChange} type="text" name="sexo" value={inputs.sexo} >
                  <option value=""></option>
                  <option value="masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>  
            </li>
            <li>
              <span>Setor:</span>
              <select onChange={handleChange} type="text" name="setor" value={inputs.setor} >
                <option value=""></option>
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
            <li>
              <span>Leito:</span>
              <input onChange={handleChange} type="text" name="leito" value={inputs.leito}/> 
            </li>
            <li>
              <span>Especialidade:</span>
              <select onChange={handleChange} type="text" name="especialidade" value={inputs.especialidade} >
                <option value=""></option>
                <option value="geriatria">Geriatria</option>
                <option value="oncolologia">Oncologia</option>
                <option value="neurologia">Neurologia</option>
                <option value="clinica_medica">Clinica médica</option>
                <option value="cirurgia">Cirurgia</option>
                
              </select> 
            </li>
            <li>
              <span>Nº do prontuário:</span>
              <input onChange={handleChange} type="text" name="prontuario_num" value={inputs.pronturario_num}/> 
            </li>
            <li>
              <span>Médico solicitante:</span>
              <input onChange={handleChange} type="text" name="med_solicitante" value={inputs.med_solicitante} />
            </li>
            <li>
              <span>Prescrição médica:</span>
              <select onChange={handleChange} type="text" name="prescricao" value={inputs.prescricao} >
                <option value=""></option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select> 
            </li>
            <li>
              <span>Demanda espontânea:</span>
              <select onChange={handleChange} type="text" name="demanda" value={inputs.demanda} >
                <option value=""></option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select> 
            </li>
            <li>
              <span>Início na Fono:</span>
              <input onChange={handleChange} type="date" name="entrada_fono" value={inputs.entrada_fono} />
            </li>
            <li>
              <span>Alta na Fono:</span>
              <input onChange={handleChange} type="date" name="alta_fono" value={inputs.alta_fono} />
            </li>            
            <li>
              <span>Último Atendimento:</span>
              <input onChange={handleChange} type="date" name="ultimo_atendimento" value={inputs.ultimo_atendimento} />
            </li>
            <li>
              <span>Entrada:</span>
              <input onChange={handleChange} type="date" name="entrada" value={inputs.entrada} />
            </li>
            <li>
              <span>Saída:</span>
              <input onChange={handleChange} type="date" name="saida" value={inputs.saida} />
            </li>              
            <li>
              <span>Tempo de Internação:</span>
              <input onChange={handleChange} type="text" name="tempo_internacao" value={inputs.tempo_internacao} />
            </li>
            <li>
              <span>Diagnóstico:</span>
              <input onChange={handleChange} type="text" name="diagnostico" value={inputs.diagnostico} />
            </li>
            <li>
              <span>Linguagem:</span> 
              <input onChange={handleChange} type="text" name="linguagem" value={inputs.linguagem} />
            </li>
            <li>         
              <span>OFAS:</span>
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
            </li>
            <li> 
             <span>Voz:</span>
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
            </li>       
            <li> 
              <span>Respiração:</span>
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
             </li>
             <li>
              <span>Decanulado:</span>
              <select onChange={handleChange} type="text" name="decanulado" value={inputs.decanulado} >
                <option value=""></option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select> 
            </li>
             <li> 
              <span>Via de alimentação inicial:</span> 
              <select onChange={handleChange} type="text" name="via_inicial" value={inputs.via_inicial} >
                <optgroup label='ADULTO'>
                  <option value=""></option>
                  <option value="SNE + VO ZERO">SNE + VO ZERO</option>
                  <option value="GTT + VO ZERO">GTT + VO ZERO</option>
                  <option value="PL + LF">PL + LF</option>
                  <option value="PL + LE">PL + LE</option>
                  <option value="6X 200ml PL + LF + SNE">6X 200ml PL + LF + SNE</option>
                  <option value="6X 200ml PL + LE + SNE">6X 200ml PL + LE + SNE</option>
                  <option value="PASTOSA + LF + SNE em desuso">PASTOSA + LF + SNE em desuso</option>
                  <option value="PASTOSA + LE + SNE em desuso">PASTOSA + LE + SNE em desuso</option>
                  <option value= "PASTOSA + LF">PASTOSA + LF</option>
                  <option value="BRANDA + SNE em desuso">BRANDA + SNE em desuso</option>
                  <option value= "BRANDA">BRANDA</option>
                </optgroup>
                <optgroup label='INFANTIL'>
                  <option value=""></option>
                  <option value="VO + Amamentação">VO + Amamentação</option>
                  <option value="SNG + VO ZERO">SNG + VO ZERO</option>
                  <option value="SNG + VO ZERO + ESTÍMULO NÃO NUTRITIVO">SNG + VO ZERO + ESTÍMULO NÃO NUTRITIVO</option>
                  <option value="SOG + VO ZERO">SOG + VO ZERO</option>
                  <option value="GTT + VO ZERO">GTT + VO ZERO</option>
                  <option value="LILLO + SNG em desuso">LILLO + SNG em desuso</option>
                  <option value= "BICO REDONDO + SNG em desuso">BICO REDONDO + SNG em desuso</option>
                  <option value="ORTODÔNTICA + SNG em desuso">ORTODÔNTICA + SNG em desuso</option>
                  <option value="LILLO + SNG">LILLO + SNG </option>
                  <option value= "BICO REDONDO + SNG ">BICO REDONDO + SNG </option>
                  <option value="ORTODÔNTICA + SNG ">ORTODÔNTICA + SNG </option>
                  <option value= "LILLO volume total">LILLO volume total</option>
                  <option value="BICO REDONDO volume total">BICO REDONDO volume total</option>
                  <option value="ORTODÔNTICA volume total">ORTODÔNTICA volume total</option>
                </optgroup>
                <optgroup label='Selecionado'>
                  <option id='edit' value={inputs.via.toUpperCase()}>{inputs.via}</option>
                </optgroup>
              </select>
            </li>
            <li> 
              <span>Via de alimentação final:</span> 
              <select onChange={handleChange} type="text" name="via" value={inputs.via} >
                <optgroup label='ADULTO'>
                  <option value="SNE + VO ZERO">SNE + VO ZERO</option>
                  <option value="GTT + VO ZERO">GTT + VO ZERO</option>
                  <option value="PL + LF">PL + LF</option>
                  <option value="PL + LE">PL + LE</option>
                  <option value="6X 200ml PL + LF + SNE">6X 200ml PL + LF + SNE</option>
                  <option value="6X 200ml PL + LE + SNE">6X 200ml PL + LE + SNE</option>
                  <option value="PASTOSA + LF + SNE em desuso">PASTOSA + LF + SNE em desuso</option>
                  <option value="PASTOSA + LE + SNE em desuso">PASTOSA + LE + SNE em desuso</option>
                  <option value= "PASTOSA + LF">PASTOSA + LF</option>
                  <option value="BRANDA + SNE em desuso">BRANDA + SNE em desuso</option>
                  <option value= "BRANDA">BRANDA</option>
                </optgroup>
                <optgroup label='INFANTIL'>
                  <option value="VO + Amamentação">VO + Amamentação</option>
                  <option value="SNG + VO ZERO">SNG + VO ZERO</option>
                  <option value="SNG + VO ZERO + ESTÍMULO NÃO NUTRITIVO">SNG + VO ZERO + ESTÍMULO NÃO NUTRITIVO</option>
                  <option value="SOG + VO ZERO">SOG + VO ZERO</option>
                  <option value="GTT + VO ZERO">GTT + VO ZERO</option>
                  <option value="LILLO + SNG em desuso">LILLO + SNG em desuso</option>
                  <option value= "BICO REDONDO + SNG em desuso">BICO REDONDO + SNG em desuso</option>
                  <option value="ORTODÔNTICA + SNG em desuso">ORTODÔNTICA + SNG em desuso</option>
                  <option value="LILLO + SNG">LILLO + SNG </option>
                  <option value= "BICO REDONDO + SNG ">BICO REDONDO + SNG </option>
                  <option value="ORTODÔNTICA + SNG ">ORTODÔNTICA + SNG </option>
                  <option value= "LILLO volume total">LILLO volume total</option>
                  <option value="BICO REDONDO volume total">BICO REDONDO volume total</option>
                  <option value="ORTODÔNTICA volume total">ORTODÔNTICA volume total</option>
                </optgroup>
                <optgroup label='Selecionado'>
                  <option id='edit' value={inputs.via.toUpperCase()}>{inputs.via}</option>
                </optgroup>
              </select>
            </li>
            <li>
              <span>Cuidados paliativos:</span>
              <select onChange={handleChange} type="text" name="paliativos" value={inputs.paliativos} >
                <option value=""></option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select> 
            </li>
            <li>
              <span>PGC:</span>
              <select onChange={handleChange} type="text" name="pgc" value={inputs.pgc} >
                <option value=""></option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select> 
            </li>
            <li>
              <span>Orientação:</span>
              <select onChange={handleChange} type="text" name="orientacao" value={inputs.orientacao} >
                <option value=""></option>
                <option value="Sim, mãe orientada">Sim, mãe orientada</option>
                <option value="Sim, pai orientado">Sim, pai orientado</option>
                <option value="Sim, pais orientados">Sim, pais orientados</option>
                <option value="Sim, cuidador(a) orientado(a)">Sim, cuidador(a) orientado(a)</option>                
              </select> 
            </li>
            <li>
              <span>Observações:</span> 
              <textarea onChange={handleChange} name="observacoes" value={inputs.observacoes.toUpperCase()} id="" cols="30" rows="5"></textarea>
            </li>
          </ul>
        </section>
        <section id='two'>
          <div id='save' onClick={handleSave}>
            <img src={saveSVG} />
            <label>Salvar</label>
          </div>
        </section>
          {showViaFinal&&
            <Modal onClick={handleClose} id='showVia'>
              <div id='content'>
                <h2>Editar via de alimentação final</h2>
                <input onChange={handleChange} type="text" name="via" value={inputs.via} />
                <button onClick={()=>setShowViaFinal(false)}>Ok</button>
              </div>
            </Modal>
            }
            {showViaInicial&&
            <Modal onClick={handleClose} id='showVia'>
              <div id='content'>
                <h2>Editar via de alimentação inicial</h2>
                <input onChange={handleChange} type="text" name="via_inicial" value={inputs.via_inicial} />
                <button onClick={()=>setShowViaInicial(false)}>Ok</button>
              </div>
            </Modal>
            }
            {showOFAS&&
            <Modal onClick={handleClose} id='showOFAS'>
              <div id='content'>
                <h2>Editar OFAS</h2>
                <input onChange={handleChange} type="text" name="OFAS" value={inputs.OFAS} />
                <button onClick={()=>setShowOFAS(false)}>Ok</button>
              </div>
            </Modal>
            }
             {showVoz&&
            <Modal onClick={handleClose} id='showVoz'>
              <div id='content'>
                <h2>Editar Voz</h2>
                <input onChange={handleChange} type="text" name="voz" value={inputs.voz} />
                <button onClick={()=>setShowVoz(false)}>Ok</button>
              </div>
            </Modal>
            }
              {showRespiracao&&
            <Modal onClick={handleClose} id='showRespiracao'>
              <div id='content'>
                <h2>Editar tipo de Respiração</h2>
                <input onChange={handleChange} type="text" name="respiracao" value={inputs.respiracao} />
                <button onClick={()=>setShowRespiracao(false)}>Ok</button>
              </div>
            </Modal>
            }
             {showOrientacao&&
            <Modal onClick={handleClose} id='showOrientacao'>
              <div id='content'>
                <h2>Editar tipo como foi passada a orientação</h2>
                <input onChange={handleChange} type="text" name="orientacao" value={inputs.orientacao} />
                <button onClick={()=>setShowRespiracao(false)}>Ok</button>
              </div>
            </Modal>
            }
          </>
     )}
      </Container>
  )
}

export default Edit;