import React, {useEffect, useState} from 'react';
import firebase from '../../../context/firebase'
import {useHistory} from 'react-router-dom'
import {useGlobalContext} from '../../../context'

import { Container, Modal } from './styles';

import Footer from '../../../components/Footer'

import stethoscopeRed from '../../../assets/stethoscopeRed.svg'
import stethoscopeGreen from '../../../assets/stethoscopeGreen.svg'

function Home() {
    const [pacientes, setPacientes] = useState([])
    const [selectedSetor, setSelectedSetor] = useState('todos')
    const [search, setSearch]=useState(false)
    const [status, setStatus]=useState('todos')
    const [length, setLength] = useState(0)
   
    const history = useHistory()

    const {
        footerSetor, 
        setFooterSetor, 
        footerStatus, 
        setFooterStatus, 
        footerNome, 
        setFooterNome
    } = useGlobalContext()

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

    function arraySearch(arr,val) {
        for (var i=0; i<arr.length; i++)
            if (arr[i] === val)                    
                return i;
        return false;
      }

    return(
        <Container>

            {footerSetor&&(
                <Modal>
                    <div id="content">
                        <h2>Selecione o setor</h2>
                        <select defaultValue={selectedSetor} onChange={e=>{
                            setSelectedSetor(e.target.value)
                            setFooterSetor(false)
                        }}>
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
                    </div>
                </Modal>
            )}
            {footerNome&&(
                <Modal>
                    <div id="content">
                    <h2>Pesquisar por nome</h2>
                    <input 
                        placeholder='Algumas letras já bastam' 
                        type="text" 
                        onChange={e=>setSearch(e.target.value)}
                        value={search!==false?search:''}
                    />
                    <button onClick={()=>setFooterNome(false)}>Ok</button>
                    </div>
                </Modal>
            )}
            {footerStatus &&(
                <Modal>
                    <div id="content">
                        <h2>Filtre atendimentos pendentes</h2>
                        <select defaultValue={status} onChange={e=>{
                                setStatus(e.target.value)
                                setFooterStatus(false)
                            }}>
                                <option value='false'>Em alta</option>
                                <option value='true'>Pendentes</option>
                                <option value="todos">Todos</option>
                                
                        </select>
                    </div>
                </Modal>
            )}
            
            <Footer length={length}/>
            { (search || status!=='todos'||selectedSetor!=='todos')?
                <header>
                <ul>
                    {selectedSetor!=='todos'&&<li onClick={()=>setSelectedSetor('todos')}><span>Setor: </span><span>{selectedSetor}</span></li>}
                    {search && <li onClick={()=>setSearch(false)}><span>Nome: </span><span>{search}</span></li>}
                    {status!=='todos'&&<li onClick={()=>setStatus('todos')}><span>Status: </span><span>{status?'Pendentes':'Em alta'}</span></li>}
                </ul>
                <button onClick={()=>{
                    setSearch(false)
                    setStatus('todos')
                    setSelectedSetor('todos')
                }}>Limpar Filtros</button>
                </header>:<></>
            }
            <table>
               <thead>
                  <td>Status</td><td>Nome</td>
               </thead>
                <tbody>
                {pacientes
                      .filter(o=> {
                        if(selectedSetor === 'todos' &&
                          o.nome
                        ){
                          return search?o.nome.toLowerCase().includes(search.toLowerCase())?o:'':o
                        }else{
                          return String(o.setor) === String(selectedSetor)
                        }
                      })
                      .filter(o=>{
                          if(status!=='todos'){
                            return String(o.status) === status
                          }
                          else{
                              return o
                          }
                      })
                    .sort((a, b)=>{
                        return  a.obito? 1:(a.status === b.status)? 0: a.status? -1 :1;
                      })
                    .map(paciente=>(
                        <tr onClick={()=>{
                            const i = arraySearch(pacientes, paciente)
                            history.push({
                                pathname:'/detalhes',
                                state:{paciente:paciente, index:i}
                            })
                        }}>
                            <td>{paciente.status?<img src={stethoscopeGreen}/>:<img src={stethoscopeRed}/>}</td><td>{paciente.nome}</td>
                        </tr>
                ))}
                </tbody>
            </table>
            
        </Container>
    )
}

export default Home;