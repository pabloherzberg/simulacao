import React, {useState, useEffect} from 'react';
import firebase from "../../../context/firebase";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import Tooltip from '../Tooltip/index'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Loading from '../../../components/Loading'

import stethoscopeGreen from '../../../assets/stethoscopeGreen.svg'
import stethoscopeRed from '../../../assets/stethoscopeRed.svg'
import stethoscopeBlack from '../../../assets/stethoscopeBlack.svg'
import addPerson from '../../../assets/add-user.svg'
import deletePerson from '../../../assets/delete.svg'
import matar from '../../../assets/death.svg'
import ressussitar from '../../../assets/live.svg'

import {Wrapper, Select} from './styles'

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  head:{
      background:'#002'
  }
});

export default function CustomPaginationActionsTable({select, setLength, length, setSelectedKey, setNewPerson}) {

  const classes = useStyles2();
  const [rows, setRows] = useState([])
  const [selectedSetor, setSelectedSetor] = useState('todos')
  const [search, setSearch] =useState(false)
  const [selectedPerson, setSelectedPerson] = useState()

  useEffect(() => {
    firebase
      .database()
      .ref("pacientes")
      .on("value",(snapshot) => {
        setRows(snapshot.val())
        setLength(snapshot.val().length)
      } )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length]);

  console.log(rows)

  function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
  }

  function handleChangeStatus(row){
    const index = arraySearch(rows, row)
    const text = row.status? 'DESEJA ALTERAR PARA ALTA FONOAUDIOLÓGICA?': 'DESEJA ALTERAR PARA EM ACOMPANHAMENTO FONOAUDIOLÓGICO?'
    const res = window.confirm(text)
    if(res){     
      firebase.database().ref(`pacientes/${index}`).child('status').set(!row.status)
    }else{
      return
    }
  }

  function handleDelete(row){
    const index = arraySearch(rows, row)

    const res = window.confirm('Deseja DELETAR este paciente?')
    if(res){
      firebase.database().ref(`pacientes/${index}`).set('deletado')
    }else{
      return
    }
  }

  function handleDeath(row){
    const index = arraySearch(rows, row)

    const text = row.obito? 'DESEJA DESFAZER O STATUS DE ÓBITO?' : 'DESEJA ALTERAR O STATUS PARA ÓBITO?'

    const res = window.confirm(text)
    if(res){
      firebase.database().ref(`pacientes/${index}`).child('obito').set(!row.obito)   
      
    }else{
      return
    }
  }

  function scrollPage(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function nameToInitials( name,delimeter ) {

    if( name ) {

        var array = name.split( delimeter );

        switch ( array.length ) {

            case 1:
                return array[0].charAt(0).toUpperCase();
                break;
            default:
                return array[0].charAt(0).toUpperCase() + array[ array.length -1 ].charAt(0).toUpperCase();
        }

    }

    return false;

}

  return (
    <Wrapper>
     {/*  <Tooltip selected={selectedPerson}/> */}
       {rows.length<1&&<Loading/>}
    <TableContainer component={Paper}>
      <Table  className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow >
            <TableCell >
              <div style={{width:'45px', height:'45px', display:'flex'}}>
                <img style={{width:'100%', objectFit:'contain'}} src={stethoscopeGreen}/>
                <p style={{fontSize:'10px'}}>Em acompanhamento</p>
              </div>
            </TableCell>
            <TableCell >
              <div style={{width:'45px', height:'45px', display:'flex'}}>
                <img style={{width:'100%', objectFit:'contain'}} src={stethoscopeRed}/>
                <p style={{fontSize:'10px'}}>Em alta</p>
              </div>
            </TableCell>
            <TableCell >
              <div style={{width:'45px', height:'45px', display:'flex'}}>
                <img style={{width:'100%', objectFit:'contain'}} src={stethoscopeBlack}/>
                <p style={{fontSize:'10px'}}>Óbito</p>
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell align='center'>
              <Select>
              <select onChange={e=>setSelectedSetor(e.target.value)}>
                <option value="todos">TODOS</option>
                <option value="uti_neo">UTI NEONATAL</option>
                <option value="uti_ped">UTI PEDIÁTRICA</option>
                <option value="uti_1">UTI 1</option>
                <option value="uti_2">UTI 2</option>
                <option value="uti_3">UTI 3</option>
                <option value="uti_4">UTI 4</option>
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
              </Select>
              </TableCell>
            
            <TableCell>
              <input 
                disabled={selectedSetor !== 'todos'?true:false} 
                placeholder='Pesquisar por nome' 
                type="text" 
                onChange={e=>setSearch(e.target.value)}
              />
            </TableCell>
            <TableCell>
            <ReactHTMLTableToExcel
                id="buttonExportExcel"
                table="exportExcel"
                filename="ListaParticipantes"
                sheet="pagina 1"
                buttonText="Exportar dados"
                className="download-excel"
              />
            </TableCell>
            <TableCell align='right' style={{cursor:'pointer'}}>
              <div style={{width:'45px', height:'45px', display:'flex'}} 
                onClick={()=> setNewPerson(selectedSetor)}>
                  <img style={{width:'100%', objectFit:"contain"}} src={addPerson}/>
                  <label style={{fontSize:'12px', color:'#164921'}}>Adicionar paciente</label>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Status</TableCell>
            <TableCell >Paciente</TableCell>
            <TableCell>Setor</TableCell>
            <TableCell >Idade</TableCell>
            <TableCell>Via de Alimentação</TableCell>
            <TableCell align='right'>Último Atendimento</TableCell>
            <TableCell align='center'>Alterar status de Vida/Óbito</TableCell>
            <TableCell align='right'>Apagar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (rows
              .filter(o=> {
                if(selectedSetor === 'todos' &&
                  o.nome
                ){
                  return search?o.nome.toLowerCase().includes(search.toLowerCase())?o:'':o
                }else{
                  return String(o.setor) === String(selectedSetor)
                }
              })
              .sort((a, b)=>{
                return  a.obito? 1:(a.status === b.status)? 0: a.status? -1 :1;
              })
            ).map((row, index) => (
            <TableRow
              style={{cursor:'pointer'}} 
              onClick={()=>{
                setSelectedPerson(row)
                select(row); 
                setSelectedKey(arraySearch(rows, row)); 
                setNewPerson(false)
                scrollPage()
              }} key={index}>
               <TableCell onClick={()=>handleChangeStatus(row)} style={{ width: 160 }} align="right">
                {row.obito? <img style={{width:'25%'}} src={stethoscopeBlack}/>: row.status? <img style={{width:'25%'}} src={stethoscopeGreen}/>:<img style={{width:'25%'}} src={stethoscopeRed}/>}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell>
                {row.setor}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idade}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.via}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {(row.ultimo_atendimento).toString().split('-').reverse().join('/')}
              </TableCell>
              <TableCell style={{ width: 160 }} align='center' onClick={()=>handleDeath(row)} component="th" scope="row">
                {row.obito?<img src={ressussitar} style={{width:"25%", objectFit:'contain'}}/>:<img src={matar} style={{width:"25%", objectFit:'contain'}}/>}
              </TableCell>
              <TableCell style={{ width: 160 }} align='right' onClick={()=>handleDelete(row)} component="th" scope="row">
                <img src={deletePerson} style={{width:"25%", objectFit:'contain'}}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    </TableContainer>



    {/* tabela para exportar*/}

    <TableContainer style={{display:'none'}}>
    <Table id='exportExcel'>
      <TableHead>
          <TableRow>
            <TableCell >Paciente</TableCell>
            <TableCell >Idade</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Setor</TableCell>
            <TableCell>Leito</TableCell>
            <TableCell>Especialidade</TableCell>
            <TableCell>Nº do prontuário</TableCell>
            <TableCell>Médico solicitante</TableCell>
            <TableCell>Prescrição médica</TableCell>
            <TableCell>Início da fono</TableCell>
            <TableCell>Alta da fono</TableCell>
            <TableCell>Entrada</TableCell>
            <TableCell>Saída</TableCell>
            <TableCell>Tempo de internação</TableCell>
            <TableCell>Diagnóstico</TableCell>
            <TableCell>Linguágem</TableCell>
            <TableCell>OFAS</TableCell>
            <TableCell>Voz</TableCell>
            <TableCell>Respiração</TableCell>
            <TableCell>Decanulado</TableCell>
            <TableCell>Via de Alimentação inicial</TableCell>
            <TableCell>Via de Alimentação final</TableCell>
            <TableCell>Cuidados paliativos</TableCell>
            <TableCell>PGC</TableCell>
            <TableCell>Orientação</TableCell>
            <TableCell align='right'>Último Atendimento</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {
            (rows
              .filter(o=> {
                if(selectedSetor === 'todos' &&
                  o.nome
                ){
                  return search?o.nome.toLowerCase().includes(search.toLowerCase())?o:'':o
                }else{
                  return String(o.setor) === String(selectedSetor)
                }
              })
              .sort((a, b)=>{
                return  a.obito? 1:(a.status === b.status)? 0: a.status? -1 :1;
              })
            ).map((row, index) => (
            <TableRow
              style={{cursor:'pointer'}} 
              onClick={()=>{
                setSelectedPerson(row)
                select(row); 
                setSelectedKey(arraySearch(rows, row)); 
                setNewPerson(false)
                scrollPage()
              }} key={index}>
           
              <TableCell component="th" scope="row">
                {nameToInitials(row.nome, " ")}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idade}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.sexo}
              </TableCell>
              <TableCell>
                {row.setor}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.leito}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.especialidade}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.prontuario_num}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.med_solicitante}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.prescricao}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.entrada_fono}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.alta_fono}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.entrada}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.saida}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.tempo_internacao && row.tempo_internacao}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.diagnostico}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.linguagem}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.OFAS}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.voz}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.respiracao}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.decanulado}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.via_inicial}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.via}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.paliativos && row.paliativos}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.pgc && row.pgc}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.orientacao && row.orientacao}
              </TableCell>

             
              <TableCell style={{ width: 160 }} align="right">
                {(row.ultimo_atendimento).toString().split('-').reverse().join('/')}
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
      </TableContainer>

    </Wrapper>
  );
}
