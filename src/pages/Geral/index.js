import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container, ChartContainer, NavBar } from "./style.js";
import { TextField, Button } from "@material-ui/core";

function Home() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [totalSetor, setTotalSetor] = useState();
  const [totalSemana, setTotalSemana] = useState([0, 0, 0, 0]);
  const [pendenciasSetor, setPendenciasSetor] = useState();
  const [pendenciasSemana, setPendenciasSemana] = useState([0, 0, 0, 0]);
  const [dataTable, setDataTable] = useState(
    JSON.parse(sessionStorage.getItem("table"))
  );
  const [meses, setMeses] = useState([
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]);

  useEffect(() => {
    setData(dataTable[count].data);
    setTotalSetor(dataTable[count].totalSetor);
    setTotalSemana(dataTable[count].totalSemana);
    setPendenciasSetor(dataTable[count].pendenciasSetor);
    setPendenciasSemana(dataTable[count].pendenciasSemana);
  }, [count]);

  const chartData = [
    {
      name: "Semana 1",
      atendimentos: totalSemana[0],
      pendencias: pendenciasSemana[0],
      amt: 2400,
    },
    {
      name: "Semana 2",
      atendimentos: totalSemana[1],
      pendencias: pendenciasSemana[1],
      amt: 2400,
    },
    {
      name: "Semana 3",
      atendimentos: totalSemana[2],
      pendencias: pendenciasSemana[2],
      amt: 2400,
    },
    {
      name: "Semana 4",
      atendimentos: totalSemana[3],
      pendencias: pendenciasSemana[3],
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
        <BarChart responsive={true} width={800} height={400} data={chartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="atendimentos" fill="#8884d8" />
          <Bar
            type="monotone"
            stackId="a"
            dataKey="pendencias"
            fill="#82ca9d"
          />
        </BarChart>
      </ChartContainer>
    </Container>
  );
}

export default Home;
