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
  const [pacientes, setPacientes] = useState(250);
  const [pendencias, setPendencias] = useState([]);
  const [atendimentos, setAtendimentos] = useState([]);
  const [mediaAtendimento, setMediaAtendimento] = useState(25);
  const [resto, setResto] = useState(0);
  const [week, setWeek] = useState([
    { atendimentos, pendencias },
    { atendimentos, pendencias },
    { atendimentos, pendencias },
    { atendimentos, pendencias },
  ]);

  useEffect(() => {
    setMediaAtendimento(25 * fonos);
  }, [fonos]);

  useEffect(() => {
    const pen1 = pacientes - mediaAtendimento;
    const pen2 = pen1 - mediaAtendimento;
    const pen3 = pen2 - mediaAtendimento;
    const pen4 = pen3 - mediaAtendimento;
    setPendencias([pen1, pen2, pen3, pen4]);
    setResto(resto + pen4);

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
      },
      {
        atendimentos: atendimentos[1],
        pendencias: pendencias[1],
      },
      {
        atendimentos: atendimentos[2],
        pendencias: pendencias[2],
      },
      {
        atendimentos: atendimentos[3],
        pendencias: pendencias[3],
      },
    ]);
  }, [pendencias]);

  console.log(mediaAtendimento);

  const data = [
    {
      name: "Semana 1",
      atendimentos: week[0].atendimentos,
      pendencias: week[0].pendencias,
      amt: 2400,
    },
    {
      name: "Semana 2",
      atendimentos: week[1].atendimentos,
      pendencias: week[1].pendencias,
      amt: 2400,
    },
    {
      name: "Semana 3",
      atendimentos: week[2].atendimentos,
      pendencias: week[2].pendencias,
      amt: 2400,
    },
    {
      name: "Semana 4",
      atendimentos: week[3].atendimentos,
      pendencias: week[3].pendencias,
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
          <Bar type="monotone" dataKey="pendencias" fill="#82ca9d" />
        </BarChart>
      </ChartContainer>
      <FormContainer>
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
          defaultValue={mediaAtendimento}
          onChange={(e) => setMediaAtendimento(e.target.value)}
          label="Média de atendimentos por profissional na semana"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </FormContainer>
    </Container>
  );
}

export default Home;
