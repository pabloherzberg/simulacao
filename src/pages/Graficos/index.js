/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import firebase from "../../context/firebase";
import PieChartComponent from '../../components/PieChart/index.js'
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
  const [selectedPeriod, setSelectedPeriod] = useState('2020-10-30')
  const [pieChartData, setPieChartData] = useState()

  const [chartDataPeriod2, setChartDataPeriod2] = useState()
  const [periodOptions2, setPeriodOptions2] = useState()
  const [selectedPeriod2, setSelectedPeriod2] = useState('2020-10-30')
  const [pieChartData2, setPieChartData2] = useState()

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
      const monthNames = ["Janeiro (2 fonos)", "Fevereiro (2 fonos)", "Março (2 fonos)", "Abril (2 fonos)", "Maio (2 fonos)", "Junho (2 fonos)",
        "Julho (2 fonos)", "Agosto (2 fonos)", "Setembro (2 fonos)", "Outubro (4 fonos)", "Novembro (2 fonos)", "Dezembro (2 fonos)"]
      
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
        setPeriodOptions2(filteredArr)
      })
    }
  },[data])


  useEffect(()=>{
    let listData = []
   
      Object.entries(data)
        .filter(item=>{
          let key = item[0].split('-')
          key.pop()
          let result = key.join('-')
          
          let key2 = selectedPeriod.split('-')
          key2.pop()
          let result2 = key2.join('-')

          return result === result2
        })
        .map((item)=>{
          listData.push(Object.entries(item[1]).map(setor=>{
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

      var dataPie = [
        {
          name: "Atendimentos",
          value: 0,
          fill: colors.verdeagua,
        },
        {
          name: "Pendências",
          value: 0,
          fill: colors.pink,
        },
      ];


      listData.map(item=>{
        utiNeo.atendimentos += Number(item.filter(setor => setor.name ==='uti_neo')[0].atendidos)
        utiNeo.pendencias += Number(item.filter(setor => setor.name ==='uti_neo')[0].pendencias)

        utiPed.atendimentos += Number(item.filter(setor => setor.name ==='uti_ped')[0].atendidos)
        utiPed.pendencias += Number(item.filter(setor => setor.name ==='uti_ped')[0].pendencias)

        uti1.atendimentos += Number(item.filter(setor => setor.name ==='uti_1')[0].atendidos)
        uti1.pendencias += Number(item.filter(setor => setor.name ==='uti_1')[0].pendencias)

        uti2.atendimentos += Number(item.filter(setor => setor.name ==='uti_2')[0].atendidos)
        uti2.pendencias += Number(item.filter(setor => setor.name ==='uti_2')[0].pendencias)

        uti3.atendimentos += Number(item.filter(setor => setor.name ==='uti_3')[0].atendidos)
        uti3.pendencias += Number(item.filter(setor => setor.name ==='uti_3')[0].pendencias)

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


        dataPie[0].value += item.reduce((sum, obj) =>{
          return sum + Number(obj.atendidos)
        },0)
        
        dataPie[1].value += item.reduce((sum, obj) =>{
          return sum + Number(obj.pendencias)
        },0)

  
      })
      setChartDataPeriod([ utiNeo, utiPed, uti1, uti2, uti3, uti4, posto2, andar4, andar5, andar6, andar7, andar8, andar9, andar10, andar12]) 
      setPieChartData(dataPie)
    
  },[data, selectedPeriod])

  useEffect(()=>{
    let listData = []
   
      Object.entries(data)
        .filter(item=>{
          let key = item[0].split('-')
          key.pop()
          let result = key.join('-')
          
          let key2 = selectedPeriod2.split('-')
          key2.pop()
          let result2 = key2.join('-')

          return result === result2
        })
        .map((item)=>{
          listData.push(Object.entries(item[1]).map(setor=>{
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

      var dataPie = [
        {
          name: "Atendimentos",
          value: 0,
          fill: colors.verdeagua,
        },
        {
          name: "Pendências",
          value: 0,
          fill: colors.pink,
        },
      ];

      listData.map(item=>{
        utiNeo.atendimentos += Number(item.filter(setor => setor.name ==='uti_neo')[0].atendidos)
        utiNeo.pendencias += Number(item.filter(setor => setor.name ==='uti_neo')[0].pendencias)

        utiPed.atendimentos += Number(item.filter(setor => setor.name ==='uti_ped')[0].atendidos)
        utiPed.pendencias += Number(item.filter(setor => setor.name ==='uti_ped')[0].pendencias)

        uti1.atendimentos += Number(item.filter(setor => setor.name ==='uti_1')[0].atendidos)
        uti1.pendencias += Number(item.filter(setor => setor.name ==='uti_1')[0].pendencias)

        uti2.atendimentos += Number(item.filter(setor => setor.name ==='uti_2')[0].atendidos)
        uti2.pendencias += Number(item.filter(setor => setor.name ==='uti_2')[0].pendencias)

        uti3.atendimentos += Number(item.filter(setor => setor.name ==='uti_3')[0].atendidos)
        uti3.pendencias += Number(item.filter(setor => setor.name ==='uti_3')[0].pendencias)

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


        dataPie[0].value += item.reduce((sum, obj) =>{
          return sum + Number(obj.atendidos)
        },0)
        
        dataPie[1].value += item.reduce((sum, obj) =>{
          return sum + Number(obj.pendencias)
        },0)
  
      })
      setChartDataPeriod2([utiNeo, utiPed, uti1, uti2, uti3, uti4, posto2, andar4, andar5, andar6, andar7, andar8, andar9, andar10, andar12]) 
      setPieChartData2(dataPie)
    
  },[data, selectedPeriod2])

  return (
    <Container>
      <h2>Demanda por período</h2>
      <div id='legenda'>
        <h6>COVID-19</h6>
        <ul>
          <li>UTI 1</li>
          <li>UTI 2</li>
          <li>UTI 3</li>
          <li>Andar 10</li>
          <li>Andar 12</li>
          <li>Posto 2 (emergência)</li>
        </ul>
      </div>
      <div id='chart'>
        <select name="period" id="periodSelect" onChange={(e)=>setSelectedPeriod(e.target.value)}>
          {
            periodOptions && periodOptions.map(item=><option value={item.value}>{item.label}</option>)
          }
        </select>
    
        <div className='charts'>
          <PieChartComponent className='pie' data={pieChartData}/>

          <ResponsiveContainer className='bar' width='100%' height='100%'>
            <BarChart margin={{top:20, right:20}} width={600} height={300} data={chartDataPeriod}>
              <CartesianGrid />
              <XAxis style={{fontSize:'12px'}} dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar barSize={25}  type="monotone" dataKey="atendimentos" stackId='a' fill={colors.verdeagua} >
                <LabelList dataKey="atendimentos" position="right" style={{ fill: colors.verdeagua }}/>
              </Bar>
              <Bar barSize={25}  type="monotone" dataKey="pendencias" stackId='a' fill={colors.pink} >
              <LabelList dataKey="pendencias" position="top" style={{ fill: colors.pink }}/>
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div id='chart2'>
        <select name="period" id="periodSelect" onChange={(e)=>setSelectedPeriod2(e.target.value)}>
          {
            periodOptions2 && periodOptions2.map(item=><option value={item.value}>{item.label}</option>)
          }
        </select>
       
        <div className='charts'>
          <PieChartComponent className='pie' data={pieChartData2}/> 
      
          <ResponsiveContainer className='bar' width='100%' height='100%'>
            <BarChart margin={{top:20, right:20}} width={600} height={300} data={chartDataPeriod2}>
              <CartesianGrid />
              <XAxis style={{fontSize:'12px'}} dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar barSize={25}  type="monotone" dataKey="atendimentos" stackId='a' fill={colors.verdeagua} >
                <LabelList dataKey="atendimentos" position="right" style={{ fill: colors.verdeagua }}/>
              </Bar>
              <Bar barSize={25}  type="monotone" dataKey="pendencias" stackId='a' fill={colors.pink} >
              <LabelList dataKey="pendencias" position="top" style={{ fill: colors.pink }}/>
              </Bar>
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
      </div>
    </Container>
  );
}

export default Home;
