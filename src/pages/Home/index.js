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
import { Container, ChartContainer, FormContainer } from "./style.js";
import { TextField, Button } from "@material-ui/core";

function Home() {
  const [fonos, setFonos] = useState(2);
  const [pacientes, setPacientes] = useState(100);
  const [entradas, setEntradas] = useState(10);
  const [mediaAtendimento, setMediaAtendimento] = useState(0);
  const [pendencias, setPendencias] = useState([]);
  const [atendimentos, setAtendimentos] = useState([]);
  const [aux, setAux] = useState(10);
  const [total, setTotal] = useState([]);
  const [resto, setResto] = useState(0);
  const [week, setWeek] = useState([
    { atendimentos, pendencias },
    { atendimentos, pendencias },
    { atendimentos, pendencias },
    { atendimentos, pendencias },
  ]);

  useEffect(() => {
    setMediaAtendimento(aux * fonos);
  }, [fonos, aux]);

  useEffect(() => {
    const pen1 = pacientes - mediaAtendimento;
    const pen2 = pen1 - mediaAtendimento;
    const pen3 = pen2 - mediaAtendimento;
    const pen4 = pen3 - mediaAtendimento;
    setPendencias([pen1, pen2, pen3, pen4]);

    const aten1 = mediaAtendimento;
    const aten2 = mediaAtendimento * 2;
    const aten3 = mediaAtendimento * 3;
    const aten4 = mediaAtendimento * 4;
    setAtendimentos([aten1, aten2, aten3, aten4]);
  }, [fonos, pacientes, mediaAtendimento]);

  useEffect(() => {
    setWeek([
      {
        atendimentos: atendimentos[0],
        pendencias: pendencias[0],
        entradas: entradas,
      },
      {
        atendimentos: atendimentos[1],
        pendencias: pendencias[1],
        entradas: entradas,
      },
      {
        atendimentos: atendimentos[2],
        pendencias: pendencias[2],
        entradas: entradas,
      },
      {
        atendimentos: atendimentos[3],
        pendencias: pendencias[3],
        entradas: entradas,
      },
    ]);
  }, [pendencias, entradas]);

  console.log(pendencias);
  const data = [
    {
      name: "Semana 1",
      atendimentos: week[0].atendimentos,
      pendencias: week[0].pendencias,
      entradas: week[0].entradas,
      amt: 2400,
    },
    {
      name: "Semana 2",
      atendimentos: week[1].atendimentos,
      pendencias: week[1].pendencias,
      entradas: week[1].entradas,
      amt: 2400,
    },
    {
      name: "Semana 3",
      atendimentos: week[2].atendimentos,
      pendencias: week[2].pendencias,
      entradas: week[2].entradas,
      amt: 2400,
    },
    {
      name: "Semana 4",
      atendimentos: week[3].atendimentos,
      pendencias: week[3].pendencias,
      entradas: week[3].entradas,
      amt: 2400,
    },
  ];

  return (
    <Container>
      <ChartContainer>
        <BarChart responsive={true} width={600} height={300} data={data}>
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
          <Bar type="monotone" stackId="a" dataKey="entradas" fill="#ff55f5" />
        </BarChart>
      </ChartContainer>
      {/* <FormContainer>
        <TextField
          className="inputfield"
          defaultValue={fonos}
          onChange={(e) => setFonos(e.target.value)}
          label="Quantidade de profissionais"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          className="inputfield"
          defaultValue={aux}
          onChange={(e) => setAux(e.target.value)}
          label="Média de atendimentos por profissional na semana"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className="inputfield"
          defaultValue={pacientes}
          onChange={(e) => setPacientes(e.target.value)}
          label="Quantidade de pacientes"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          className="inputfield"
          defaultValue={entradas}
          onChange={(e) => setEntradas(e.target.value)}
          label="Entradas por semena"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </FormContainer> */}
    </Container>
  );
}

export default Home;
