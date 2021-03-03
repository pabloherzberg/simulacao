import React, {useState, useEffect} from 'react';
import firebase from '../../../context/firebase'
import { Container } from './styles';

function Atendimentos() {

    const curranteDate = new Date().toLocaleDateString('fr-CA')
    const [date, setDate] = useState(curranteDate)
    const [atendimentos, setAtendimentos] = useState({
        uti_neo:{
            atendidos:0,
            pendencias:0
        },
        uti_ped:{
            atendidos:0,
            pendencias:0
        },
        uti_1:{
            atendidos:0,
            pendencias:0
        },
        uti_2:{
            atendidos:0,
            pendencias:0
        },
        uti_3:{
            atendidos:0,
            pendencias:0
        },
        uti_4:{
            atendidos:0,
            pendencias:0
        },
        posto_2:{
            atendidos:0,
            pendencias:0
        },
        andar_4:{
            atendidos:0,
            pendencias:0
        },
        andar_5:{
            atendidos:0,
            pendencias:0
        },
        andar_6:{
            atendidos:0,
            pendencias:0
        },
        andar_7:{
            atendidos:0,
            pendencias:0
        },
        andar_8:{
            atendidos:0,
            pendencias:0
        },
        andar_9:{
            atendidos:0,
            pendencias:0
        },
        andar_10:{
            atendidos:0,
            pendencias:0
        },
        andar_12:{
            atendidos:0,
            pendencias:0
        },
    })

    useEffect(()=>{
        firebase
            .database()
            .ref(`atendimentos/${date}`)
            .on('value', snapshot=>{
              if(snapshot.val()){
                  setAtendimentos({...snapshot.val()})
              }
              else{
                  setAtendimentos({
                    uti_neo:{
                        atendidos:0,
                        pendencias:0
                    },
                    uti_ped:{
                        atendidos:0,
                        pendencias:0
                    },
                    uti_1:{
                        atendidos:0,
                        pendencias:0
                    },
                    uti_2:{
                        atendidos:0,
                        pendencias:0
                    },
                    uti_3:{
                        atendidos:0,
                        pendencias:0
                    },
                    uti_4:{
                        atendidos:0,
                        pendencias:0
                    },
                    posto_2:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_4:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_5:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_6:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_7:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_8:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_9:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_10:{
                        atendidos:0,
                        pendencias:0
                    },
                    andar_12:{
                        atendidos:0,
                        pendencias:0
                    },
                })
              }
            })
    },[date])

    function handleSave(){
      
        firebase
        .database()
        .ref(`atendimentos/${date}`)
        .set(atendimentos)
        .then(()=>{
            alert('Foi salvo')
        })
    }

  return <Container >
      <div>
          <span>Dia</span>
          <input type="date" name="data_atendimento" onChange={(e)=>setDate(e.target.value || curranteDate)} value={date} />
      </div>
      <table>
          <thead>
            <tr>
              <td>Setor</td><td>Atendidos</td><td>Pendencias</td>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td>UTI Neonatal</td><td>
                  <input 
                    onChange={e=>setAtendimentos({...atendimentos,uti_neo:{atendidos:e.target.value, pendencias:atendimentos.uti_neo.pendencias}})} 
                    value={atendimentos.uti_neo.atendidos} type="number" name="uti_neo" /></td>
                  <td>
                  <input 
                    onChange={e=>setAtendimentos({...atendimentos,uti_neo:{atendidos:atendimentos.uti_neo.atendidos, pendencias:e.target.value}})}  
                    value={atendimentos.uti_neo.pendencias} type="number" name="uti_neo" />
                </td>
              </tr>
              <tr>
                  <td>UTI Pediátrica</td><td><input  onChange={e=>setAtendimentos({...atendimentos,uti_ped:{atendidos:e.target.value, pendencias:atendimentos.uti_ped.pendencias}})} value={atendimentos.uti_ped.atendidos} type="number" name="uti_ped" /></td>
                  <td><input  onChange={e=>setAtendimentos({...atendimentos,uti_ped:{atendidos:atendimentos.uti_ped.atendidos, pendencias:e.target.value}})} value={atendimentos.uti_ped.pendencias} type="number" name="uti_ped" /></td>
              </tr>
              <tr>
                  <td>UTI 1</td><td><input onChange={e=>setAtendimentos({...atendimentos,uti_1:{atendidos:e.target.value, pendencias:atendimentos.uti_1.pendencias}})} value={atendimentos.uti_1.atendidos} type="number" name="uti_1" /></td>
                  <td><input  onChange={e=>setAtendimentos({...atendimentos,uti_1:{atendidos:atendimentos.uti_1.atendidos, pendencias:e.target.value}})} value={atendimentos.uti_1.pendencias} type="number" name="uti_1" /></td>
              </tr>
              <tr>
                  <td>UTI 2</td><td><input onChange={e=>setAtendimentos({...atendimentos,uti_2:{atendidos:e.target.value, pendencias:atendimentos.uti_2.pendencias}})}  value={atendimentos.uti_2.atendidos} type="number" name="uti_2" /></td>
                  <td><input   onChange={e=>setAtendimentos({...atendimentos,uti_2:{atendidos:atendimentos.uti_2.atendidos, pendencias:e.target.value}})}   value={atendimentos.uti_2.pendencias} type="number" name="uti_2" /></td>
              </tr>
              <tr>
                  <td>UTI 3</td><td><input onChange={e=>setAtendimentos({...atendimentos,uti_3:{atendidos:e.target.value, pendencias:atendimentos.uti_3.pendencias}})}  value={atendimentos.uti_3.atendidos} type="number" name="uti_3" /></td>
                  <td><input   onChange={e=>setAtendimentos({...atendimentos,uti_3:{atendidos:atendimentos.uti_3.atendidos, pendencias:e.target.value}})}   value={atendimentos.uti_3.pendencias} type="number" name="uti_3" /></td>
              </tr>
              <tr>
                  <td>UTI 4</td><td><input onChange={e=>setAtendimentos({...atendimentos,uti_4:{atendidos:e.target.value, pendencias:atendimentos.uti_4.pendencias}})}  value={atendimentos.uti_4.atendidos} type="number" name="uti_4" /></td>
                  <td><input onChange={e=>setAtendimentos({...atendimentos,uti_4:{atendidos:atendimentos.uti_4.atendidos, pendencias:e.target.value}})} value={atendimentos.uti_4.pendencias} type="number" name="uti_4" /></td>
              </tr>
              <tr>
                  <td>Posto 2</td><td><input onChange={e=>setAtendimentos({...atendimentos,posto_2:{atendidos:e.target.value, pendencias:atendimentos.posto_2.pendencias}})} value={atendimentos.posto_2.atendidos} type="number" name="posto_2" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,posto_2:{atendidos:atendimentos.posto_2.atendidos, pendencias:e.target.value}})} value={atendimentos.posto_2.pendencias} type="number" name="posto_2" /></td>
              </tr>
              <tr>
                  <td>Andar 4</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_4:{atendidos:e.target.value, pendencias:atendimentos.andar_4.pendencias}})} value={atendimentos.andar_4.atendidos} type="number" name="andar_4" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_4:{atendidos:atendimentos.andar_4.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_4.pendencias} type="number" name="andar_4" /></td>
              </tr>
              <tr>
                  <td>Andar 5</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_5:{atendidos:e.target.value, pendencias:atendimentos.andar_5.pendencias}})} value={atendimentos.andar_5.atendidos} type="number" name="andar_5" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_5:{atendidos:atendimentos.andar_5.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_5.pendencias} type="number" name="andar_5" /></td>
              </tr>
              <tr>
                  <td>Andar 6</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_6:{atendidos:e.target.value, pendencias:atendimentos.andar_6.pendencias}})} value={atendimentos.andar_6.atendidos} type="number" name="andar_6" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_6:{atendidos:atendimentos.andar_6.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_6.pendencias} type="number" name="andar_6" /></td>
              </tr>
              <tr>
                  <td>Andar 7</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_7:{atendidos:e.target.value, pendencias:atendimentos.andar_7.pendencias}})} value={atendimentos.andar_7.atendidos} type="number" name="andar_7" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_7:{atendidos:atendimentos.andar_7.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_7.pendencias} type="number" name="andar_7" /></td>
              </tr>
              <tr>
                  <td>Andar 8</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_8:{atendidos:e.target.value, pendencias:atendimentos.andar_8.pendencias}})} value={atendimentos.andar_8.atendidos} value={atendimentos.andar_8.atendidos} type="number" name="andar_8" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_8:{atendidos:atendimentos.andar_8.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_8.pendencias} type="number" name="andar_8" /></td>
              </tr>
              <tr>
                  <td>Andar 9</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_9:{atendidos:e.target.value, pendencias:atendimentos.andar_9.pendencias}})} value={atendimentos.andar_9.atendidos} value={atendimentos.andar_9.atendidos} type="number" name="andar_9" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_9:{atendidos:atendimentos.andar_9.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_9.pendencias} type="number" name="andar_9" /></td>
              </tr>
              <tr>
                  <td>Andar 10</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_10:{atendidos:e.target.value, pendencias:atendimentos.andar_10.pendencias}})} value={atendimentos.andar_10.atendidos} type="number" name="andar_10" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_10:{atendidos:atendimentos.andar_10.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_10.pendencias} type="number" name="andar_10" /></td>
              </tr>
              <tr>
                  <td>Andar 12</td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_12:{atendidos:e.target.value, pendencias:atendimentos.andar_12.pendencias}})} value={atendimentos.andar_12.atendidos} type="number" name="andar_12" />
                  </td><td><input onChange={e=>setAtendimentos({...atendimentos,andar_12:{atendidos:atendimentos.andar_12.atendidos, pendencias:e.target.value}})} value={atendimentos.andar_12.pendencias} type="number" name="andar_12" /></td>
              </tr>
          </tbody>
      </table>
      <button onClick={handleSave}>Salvar</button>
  </Container>;
}

export default Atendimentos;