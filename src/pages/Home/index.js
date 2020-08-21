import React, { useState, useEffect } from "react";
import { Wrapper, Wrap, ChatDiv } from "./style.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

function Home() {
  const [fonos, setFonos] = useState(5);
  const [pacientes, setPacientes] = useState(20);
  const [mediaAtendimento, setMediaAtendimento] = useState(15);
  const [pv, setPv] = useState(5);
  const [uv, setUv] = useState(0);
  const [aux, setAux] = useState(0);
  const [week, setWeek] = useState([
    { uv: uv, pv: pv },
    { uv: uv, pv: pv },
    { uv: uv, pv: pv },
    { uv: uv, pv: pv },
  ]);

  useEffect(() => {
    setUv(uv + fonos - pacientes);
    setPv(pacientes - fonos);
    setWeek([
      { uv: uv, pv: pv },
      { uv: uv, pv: pv - fonos },
      { uv: uv, pv: pv - fonos * 2 },
      { uv: uv, pv: pv - fonos * 3 },
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
      <ChatDiv>
        <h3>Simulação de pendências ao longo do mês</h3>
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
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#ff0000" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ChatDiv>
    </Wrapper>
  );
}

export default Home;
