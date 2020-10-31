import React, {useState, useEffect} from 'react';
import firebase from "../../../context/firebase";

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

  return (
    <Wrapper>
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
            <TableCell></TableCell>
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
    </Wrapper>
  );
}
