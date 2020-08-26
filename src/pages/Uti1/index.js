import React, { useState, useEffect } from "react";
import { Wrapper, Wrap, ChatDiv, Content } from "./style.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Uti1() {
  const [fonos, setFonos] = useState(2);
  const [pacientes, setPacientes] = useState(250);
  const [mediaAtendimento, setMediaAtendimento] = useState(50);
  const [pendencia, setPendencia] = useState(0);
  const [aux, setAux] = useState(0);
  const [pv, setPv] = useState(5);
  const [uv, setUv] = useState(0);
  const [week, setWeek] = useState([
    { uv: uv, pv: pv },
    { uv: uv, pv: pv },
    { uv: uv, pv: pv },
    { uv: uv, pv: pv },
  ]);

  useEffect(() => {
    setUv(pacientes / fonos);
    setPv(pacientes - fonos);
    setWeek([
      { uv: pacientes - mediaAtendimento, pv: pv },
      { uv: pacientes - mediaAtendimento * 2, pv: pv - fonos },
      { uv: pacientes - mediaAtendimento * 3, pv: pv - fonos * 2 },
      { uv: pacientes - mediaAtendimento * 4, pv: pv - fonos * 3 },
    ]);
  }, [fonos, pacientes, pv, aux]);

  console.log(aux);

  const data = [
    { name: "Semana 1", uv: week[0].uv, pv: week[0].pv, amt: 2400 },
    { name: "Semana 2", uv: week[1].uv, pv: week[1].pv, amt: 2400 },
    { name: "Semana 3", uv: week[2].uv, pv: week[2].pv, amt: 2400 },
    { name: "Semana 4", uv: week[3].uv, pv: week[3].pv, amt: 2400 },
  ];

  return (
    <Wrapper>
      <Content>
        <ChatDiv>
          <BarChart responsive={true} width={600} height={300} data={data}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="uv" fill="#8884d8" />
            <Bar type="monotone" dataKey="pv" fill="#82ca9d" />
          </BarChart>
        </ChatDiv>

        <Wrap>
          <input
            placeholder="Quantidade de profissionais"
            type="text"
            name="fonos"
            id="fonos"
            onChange={(e) => setFonos(e.target.value)}
          />
          <input
            placeholder="Quantidade de pacientes"
            type="text"
            name="fonos"
            id="fonos"
            onChange={(e) => setPacientes(e.target.value)}
          />
          <input
            placeholder="Média de atendimentos por semana"
            type="text"
            name="fonos"
            id="fonos"
            onChange={(e) => setMediaAtendimento(e.target.value)}
          />
        </Wrap>
      </Content>
    </Wrapper>
  );
}

export default Uti1;
