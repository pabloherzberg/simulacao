/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import firebase from "../../context/firebase";
import { Container } from "./style.js";
import { colors } from "../../constants/colors.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from "recharts";

function Home() {

  const [data, setData] = useState(false)
  const [chartDataPeriod, setChartDataPeriod] = useState()
  const [periodOptions, setPeriodOptions] = useState()
  const [selectedPeriod, setSelectedPeriod] = useState([])

  useEffect(()=>{
    firebase
      .database()
      .ref(`atendimentos/`)
      .once('value',snapshot=>{
        setData(snapshot.val())
      })
  },[])

  useEffect(()=>{
    const listOfDates = Object.keys(data)
    if(listOfDates){
      let listOfMonths = []
      const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
      
      listOfDates.forEach(date=>{
        const dia = (new Date(date))
        dia.setDate(dia.getDate() +1)
        const year = dia.getFullYear()
        const month = monthNames[dia.getMonth()]


        listOfMonths.push({label:`${month} - ${year}`, value:dia.toLocaleDateString('fr-CA')})
        
        const filteredArr = listOfMonths.reduce((acc, current) => {
          const x = acc.find(item => item.label === current.label);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setPeriodOptions(filteredArr)
      })
    }
  },[data])


  useEffect(()=>{
    let listData = []
    if(selectedPeriod.length ===0){
      Object.values(data).map((item)=>{
        listData.push(Object.entries(item).map(setor=>{
          return {name:setor[0], ...setor[1]}
        }))
      })

      var utiNeo = {name:'UTI NEO', atendimentos:0, pendencias:0}
      var utiPed = {name:'UTI PED', atendimentos:0, pendencias:0}
      var uti1 = {name:'UTI 1', atendimentos:0, pendencias:0}
      var uti2 = {name:'UTI 2', atendimentos:0, pendencias:0}
      var uti3 = {name:'UTI 3', atendimentos:0, pendencias:0}
      var uti4 = {name:'UTI 4', atendimentos:0, pendencias:0}
      var posto2 = {name:'Posto 2', atendimentos:0, pendencias:0}
      var andar4 = {name:'Andar 4', atendimentos:0, pendencias:0}
      var andar5 = {name:'Andar 5', atendimentos:0, pendencias:0}
      var andar6 = {name:'Andar 6', atendimentos:0, pendencias:0}
      var andar7 = {name:'Andar 7', atendimentos:0, pendencias:0}
      var andar8 = {name:'Andar 8', atendimentos:0, pendencias:0}
      var andar9 = {name:'Andar 9', atendimentos:0, pendencias:0}
      var andar10 = {name:'Andar 10', atendimentos:0, pendencias:0}
      var andar12 = {name:'Andar 12', atendimentos:0, pendencias:0}

      listData.map(item=>{
        utiNeo.atendimentos += Number(item.filter(setor => setor.name ==='uti_neo')[0].atendidos)
        utiNeo.pendencias += Number(item.filter(setor => setor.name ==='uti_neo')[0].pendencias)

        utiPed.atendimentos += Number(item.filter(setor => setor.name ==='uti_ped')[0].atendidos)
        utiPed.pendencias += Number(item.filter(setor => setor.name ==='uti_ped')[0].pendencias)

        uti1.atendimentos += Number(item.filter(setor => setor.name ==='uti_1')[0].atendidos)
        uti1.pendencias += Number(item.filter(setor => setor.name ==='uti_1')[0].pendencias)

        uti2.atendimentos += Number(item.filter(setor => setor.name ==='uti_2')[0].atendidos)
        uti2.pendencias += Number(item.filter(setor => setor.name ==='uti_2')[0].pendencias)

        uti3.atendimentos += Number(item.filter(setor => setor.name ==='uti_4')[0].atendidos)
        uti3.pendencias += Number(item.filter(setor => setor.name ==='uti_4')[0].pendencias)

        uti4.atendimentos += Number(item.filter(setor => setor.name ==='uti_4')[0].atendidos)
        uti4.pendencias += Number(item.filter(setor => setor.name ==='uti_4')[0].pendencias)

        posto2.atendimentos += Number(item.filter(setor => setor.name ==='posto_2')[0].atendidos)
        posto2.pendencias += Number(item.filter(setor => setor.name ==='posto_2')[0].pendencias)

        andar4.atendimentos += Number(item.filter(setor => setor.name ==='andar_4')[0].atendidos)
        andar4.pendencias += Number(item.filter(setor => setor.name ==='andar_4')[0].pendencias)

        andar5.atendimentos += Number(item.filter(setor => setor.name ==='andar_5')[0].atendidos)
        andar5.pendencias += Number(item.filter(setor => setor.name ==='andar_5')[0].pendencias)

        andar6.atendimentos += Number(item.filter(setor => setor.name ==='andar_6')[0].atendidos)
        andar6.pendencias += Number(item.filter(setor => setor.name ==='andar_6')[0].pendencias)

        andar7.atendimentos += Number(item.filter(setor => setor.name ==='andar_7')[0].atendidos)
        andar7.pendencias += Number(item.filter(setor => setor.name ==='andar_7')[0].pendencias)

        andar8.atendimentos += Number(item.filter(setor => setor.name ==='andar_8')[0].atendidos)
        andar8.pendencias += Number(item.filter(setor => setor.name ==='andar_8')[0].pendencias)

        andar9.atendimentos += Number(item.filter(setor => setor.name ==='andar_9')[0].atendidos)
        andar9.pendencias += Number(item.filter(setor => setor.name ==='andar_9')[0].pendencias)

        andar10.atendimentos += Number(item.filter(setor => setor.name ==='andar_10')[0].atendidos)
        andar10.pendencias += Number(item.filter(setor => setor.name ==='andar_10')[0].pendencias)

        andar12.atendimentos += Number(item.filter(setor => setor.name ==='andar_12')[0].atendidos)
        andar12.pendencias += Number(item.filter(setor => setor.name ==='andar_12')[0].pendencias)

      })
      setChartDataPeriod([ utiNeo, utiPed, uti1, uti2, uti3, uti4, posto2, andar4, andar5, andar6, andar7, andar8, andar9, andar12]) 
    }

    
  },[data, selectedPeriod])



  function handleAddPeriod(e){
    if(e.target.value === '-1'){
      setSelectedPeriod([])
    }else{
      if(selectedPeriod.includes(e.target.value)){
        return
      }else{
        setSelectedPeriod([...selectedPeriod,e.target.value])
      }      
    }
  }
    

  return (
    <Container>
      <h1>Projeção de Demanda por Período</h1>
      <ul>
        <li>
        
          <select name="period" id="periodSelect" onChange={handleAddPeriod}>
            <option value='-1'>Todos</option>
            {
              periodOptions && periodOptions.map(item=><option value={item.value}>{item.label}</option>)
            }
          </select>
          <button>Adicionar +</button>
        </li>
      </ul>

     <div id='chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart margin={{top:20, right:20}} width={6000} height={400} data={chartDataPeriod}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar barSize={40}  type="monotone" dataKey="atendimentos" stackId='a' fill={colors.verdeagua} >
              <LabelList dataKey="atendimentos" position="right" style={{ fill: colors.verdeagua }}/>
            </Bar>
            <Bar barSize={40}  type="monotone" dataKey="pendencias" stackId='a' fill={colors.pink} >
            <LabelList dataKey="pendencias" position="top" style={{ fill: colors.pink }}/>
            </Bar>
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
}

export default Home;
