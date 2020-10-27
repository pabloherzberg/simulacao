import React, {useState, useEffect} from 'react';
import firebase from "../../../context/firebase";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import stethoscopeGreen from '../../../assets/stethoscopeGreen.svg'
import stethoscopeRed from '../../../assets/stethoscopeRed.svg'
import stethoscopeBlack from '../../../assets/stethoscopeBlack.svg'
import addPerson from '../../../assets/add-user.svg'
import deletePerson from '../../../assets/delete.svg'
import matar from '../../../assets/death.svg'

import {Wrapper, Select} from './styles'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([])
  const [selectedSetor, setSelectedSetor] = useState('todos')
  const [kill, setKill ] = useState(false)


  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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

  useEffect(()=>{
    if(kill){
      setTimeout(() => {
        setKill(false)
      }, 1000);
    }
  }, [kill])


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
    const res = window.confirm('FINISH HIM!')
    if(res){
      firebase.database().ref(`pacientes/${index}`).child('obito').set(true)   
      setKill(true)
    }else{
      return
    }
  }

  return (
    <Wrapper>
      { kill && <div className='kill' id="finish"></div>}
    <TableContainer component={Paper}>
      <Table  className={classes.table} aria-label="custom pagination table">
      <TableHead>
          <TableRow >
            <TableCell style={{ width: 160 }}>
              <img style={{width:'20%', marginRight:'1em'}} src={stethoscopeGreen}/>
              <p style={{fontSize:'10px'}}>Em acompanhamento</p>
            </TableCell>
            <TableCell style={{ width: 160 }}>
              <img style={{width:'20%', marginRight:'1em'}} src={stethoscopeRed}/>
              <p style={{fontSize:'10px'}}>Em alta</p>
            </TableCell>
            <TableCell style={{ width: 160 }}>
              <img style={{width:'20%', marginRight:'1em'}} src={stethoscopeBlack}/>
              <p style={{fontSize:'10px'}}>Tá MORTOOOO</p>
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
            
            
            <TableCell></TableCell>
            <TableCell align='right' style={{cursor:'pointer'}}>
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
            <TableCell>Setor</TableCell>
            <TableCell >Idade</TableCell>
            <TableCell>Via de Alimentação</TableCell>
            <TableCell align='right'>Último Atendimento</TableCell>
            <TableCell align='center'>MATAR</TableCell>
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
                  return o
                }else{
                  return String(o.setor) === String(selectedSetor)
                }
              })
              .sort((a, b)=>{
                return (a.status === b.status)? 0: a.status? -1 :1;
              })
            ).map((row, index) => (
            <TableRow
      
              style={{cursor:'pointer'}} 
              onClick={()=>{
                select(row); 
                setSelectedKey(arraySearch(rows, row)); 
                setNewPerson(false)
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
                <img src={matar} style={{width:"25%", objectFit:'contain'}}/>
              </TableCell>
              <TableCell style={{ width: 160 }} align='right' onClick={()=>handleDelete(row)} component="th" scope="row">
                <img src={deletePerson} style={{width:"25%", objectFit:'contain'}}/>
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
    </Wrapper>
  );
}
