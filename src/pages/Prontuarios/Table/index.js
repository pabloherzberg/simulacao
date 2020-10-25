import React, {useState, useEffect} from 'react';
import firebase from "../../../context/firebase";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import stethoscopeGreen from '../../../assets/stethoscopeGreen.svg'
import stethoscopeRed from '../../../assets/stethoscopeRed.svg'
import addPerson from '../../../assets/add-user.svg'

import {Select} from './styles'



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
  const [selectedSetor, setSelectedSetor] = useState('uti_neo')

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

  console.log(selectedSetor)

  function handleChangeStatus(index, row){
    const res = window.confirm('Deseja alterar o status para ATENDIMENTO JÁ REALIZADO?')
    if(res){
      firebase.database().ref(`pacientes/${index}`).child('status').set(true)
      firebase.database().ref(`pacientes/${index}`).child('ultimo_atendimento').set(new Date().toLocaleDateString())
    }else{
      console.log(row.status)
    }
  }
  console.log(rows)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow >
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align='center'>
              <Select>
              <select onChange={e=>setSelectedSetor(e.target.value)}>
                <option value="uti_neo">UTI NEO-NATAL</option>
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
            <TableCell></TableCell>
            <TableCell style={{cursor:'pointer'}}>
              <div style={{width:'50px', height:'50px', display:'flex'}} 
                onClick={()=> setNewPerson(selectedSetor)}>
                  <img style={{width:'100%', objectFit:"contain"}} src={addPerson}/>
                  <label style={{fontSize:'12px', color:'#164921'}}>Adicionar paciente</label>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='right'>Status</TableCell>
            <TableCell >Paciente</TableCell>
            <TableCell >Idade</TableCell>
            <TableCell>Via de Alimentação</TableCell>
            <TableCell align='right'>Último Atendimento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows.filter(o=> String(o.setor) === String(selectedSetor))
          ).map((row, index) => (
            <TableRow style={{cursor:'pointer'}} 
              onClick={()=>{
                select(row); 
                setSelectedKey(index); 
                setNewPerson(false)
              }} key={index}>
               <TableCell onClick={()=>handleChangeStatus(index, row)} style={{ width: 160 }} align="right">
                {row.status? <img style={{width:'25%'}} src={stethoscopeGreen}/>:<img style={{width:'25%'}} src={stethoscopeRed}/>}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.idade}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.via}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.ultimo_atendimento}
              </TableCell>
             
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
       
      </Table>
    </TableContainer>
  );
}