import React, { useState, useEffect } from "react";
import firebase from "../../context/firebase";
import { useGlobalContext } from "../../context/index.js";
import { Container, ChartContainer, NavBar } from "./style.js";
import { colors } from "../../constants/colors.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Home() {
  const { tableContext } = useGlobalContext();
  const [state, setState] = useState({ activeIndex: 0 });
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [totalSetor, setTotalSetor] = useState({
    utineo: 49,
    utiped: 18,
    uti1: 18,
    uti2: 11,
    uti3: 24,
    uti4: 24,
    uti5: 1,
    uti6: 64,
    uti7: 4,
    uti8: 22,
    uti9: 0,
    uti10: 15,
    uti11: 10,
    uti12: 0,
  });
  const [totalSemana, setTotalSemana] = useState([0, 0, 0, 0]);
  const [pendenciasSetor, setPendenciasSetor] = useState({
    utineo: [0, 0, 0, 0],
    utiped: [0, 0, 0, 0],
    uti1: [0, 0, 0, 0],
    uti2: [0, 0, 0, 0],
    uti3: [0, 0, 0, 0],
    uti4: [0, 0, 0, 0],
    uti5: [0, 0, 0, 0],
    uti6: [0, 0, 0, 0],
    uti7: [0, 0, 0, 0],
    uti8: [0, 0, 0, 0],
    uti9: [0, 0, 0, 0],
    uti10: [0, 0, 0, 0],
    uti11: [0, 0, 0, 0],
    uti12: [0, 0, 0, 0],
  });
  const [pendenciasSemana, setPendenciasSemana] = useState([0, 0, 0, 0]);
  const [dataTable, setDataTable] = useState(tableContext);
  const [meses, setMeses] = useState([
    "Novembro 2019",
    "Dezembro 2019",
    "Janeiro 2020",
    "Fevereiro 2020",
    "Março 2020",
    "Abril 2020",
    "Maio 2020",
    "Junho 2020",
    "Julho 2020",
    "Agosto 2020",
    "Setembro 2020",
    "Outubro 2020",
  ]);

  useEffect(() => {
    firebase
      .database()
      .ref("tabela")
      .once("value")
      .then((snapshot) => setDataTable(snapshot.val()));
  }, []);

  useEffect(() => {
    setData(dataTable[count].data);
    setTotalSetor(dataTable[count].totalSetor);
    setTotalSemana(dataTable[count].totalSemana);
    setPendenciasSetor(dataTable[count].pendenciasSetor);
    setPendenciasSemana(dataTable[count].pendenciasSemana);
  }, [count, dataTable]);

  console.log(totalSetor);
  console.log(pendenciasSetor);

  const chartData = [
    {
      name: "UTI-NEO",
      atendimentos: totalSetor.utineo,
      pendencias: pendenciasSetor.utineo.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "UTI-PED",
      atendimentos: totalSetor.utiped,
      pendencias: pendenciasSetor.utiped.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "UTI-1",
      atendimentos: totalSetor.uti1,
      pendencias: pendenciasSetor.uti1.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "UTI-2",
      atendimentos: totalSetor.uti2,
      pendencias: pendenciasSetor.uti2.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "UTI-3",
      atendimentos: totalSetor.uti3,
      pendencias: pendenciasSetor.uti3.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "POSTO-2",
      atendimentos: totalSetor.uti11,
      pendencias: pendenciasSetor.uti11.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "4º",
      atendimentos: totalSetor.uti4,
      pendencias: pendenciasSetor.uti4.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "5º",
      atendimentos: totalSetor.uti5,
      pendencias: pendenciasSetor.uti5.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "6º",
      atendimentos: totalSetor.uti6,
      pendencias: pendenciasSetor.uti6.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "7º",
      atendimentos: totalSetor.uti7,
      pendencias: pendenciasSetor.uti7.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "8º",
      atendimentos: totalSetor.uti8,
      pendencias: pendenciasSetor.uti8.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "9º",
      atendimentos: totalSetor.uti9,
      pendencias: pendenciasSetor.uti9.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "10º",
      atendimentos: totalSetor.uti10,
      pendencias: pendenciasSetor.uti10.reduce((tot, val) => tot + val),
      amt: 2400,
    },
    {
      name: "12º",
      atendimentos: totalSetor.uti12,
      pendencias: pendenciasSetor.uti12.reduce((tot, val) => tot + val),
      amt: 2400,
    },
  ];

  return (
    <Container>
      <NavBar>
        <button
          id="anterior"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        ></button>
        <span>{meses[count]}</span>
        <button
          id="posterior"
          onClick={() => {
            if (count < 11) {
              setCount(count + 1);
            }
          }}
        ></button>
      </NavBar>
      <ChartContainer>
        <BarChart responsive={true} width={1200} height={400} data={chartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            type="monotone"
            stackId="a"
            dataKey="atendimentos"
            fill={colors.verdeagua}
          />
          <Bar
            type="monotone"
            stackId="a"
            dataKey="pendencias"
            fill={colors.pink}
          />
          <Legend />
        </BarChart>
      </ChartContainer>
    </Container>
  );
}

export default Home;
