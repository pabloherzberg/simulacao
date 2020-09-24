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
  ]);
  const [arraytotaisAtendimentos, setArraytotaisAtendimentos] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [arraytotaisPendencias, setArraytotaisPendencias] = useState([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);

  useEffect(() => {
    firebase
      .database()
      .ref("tabela")
      .once("value")
      .then((snapshot) => setDataTable(snapshot.val()));
  }, []);

  useEffect(() => {
    let arraySetores = [];
    let arrayPendencias = [];
    dataTable.forEach((element) => {
      let totalSetores = Object.values(element.totalSetor).reduce(
        (total, acc) => {
          return total + acc;
        }
      );

      let totalPendenciasarray = Object.values(element.pendenciasSemana).reduce(
        (total, acc) => {
          return total + acc;
        }
      );

      arrayPendencias.push(totalPendenciasarray);

      arraySetores.push(totalSetores);
    });
    setArraytotaisAtendimentos(arraySetores);
    setArraytotaisPendencias(arrayPendencias);
  }, [dataTable, meses.length]);

  const chartData = [
    {
      name: "11/19",
      atendimentos: arraytotaisAtendimentos[0],
      pendencias: arraytotaisPendencias[0],
    },
    {
      name: "12/19",
      atendimentos: arraytotaisAtendimentos[1],
      pendencias: arraytotaisPendencias[1],
    },
    {
      name: "01/20",
      atendimentos: arraytotaisAtendimentos[2],
      pendencias: arraytotaisPendencias[2],
    },
    {
      name: "02/20",
      atendimentos: arraytotaisAtendimentos[3],
      pendencias: arraytotaisPendencias[3],
    },
    {
      name: "03/20",
      atendimentos: arraytotaisAtendimentos[4],
      pendencias: arraytotaisPendencias[4],
    },
    {
      name: "04/20",
      atendimentos: arraytotaisAtendimentos[5],
      pendencias: arraytotaisPendencias[5],
    },
    {
      name: "05/20",
      atendimentos: arraytotaisAtendimentos[6],
      pendencias: arraytotaisPendencias[6],
    },
    {
      name: "06/20",
      atendimentos: arraytotaisAtendimentos[7],
      pendencias: arraytotaisPendencias[7],
    },
    {
      name: "07/20",
      atendimentos: arraytotaisAtendimentos[8],
      pendencias: arraytotaisPendencias[8],
    },
    {
      name: "08/20",
      atendimentos: arraytotaisAtendimentos[9],
      pendencias: arraytotaisPendencias[9],
    },
  ];

  return (
    <Container>
      <div id="tooltip">
        <ul>
          {meses.map((mes, index) => (
            <li key={index}>
              <p>{mes}</p>
              <p style={{ background: colors.verdeagua, color: colors.white }}>
                Atendimentos
              </p>
              <p style={{ fontWeight: "bold" }}>
                {arraytotaisAtendimentos[index]}
              </p>
              <p style={{ background: colors.pink, color: colors.white }}>
                Pendências
              </p>
              <p style={{ fontWeight: "bold" }}>
                {arraytotaisPendencias[index]}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <ChartContainer>
        <BarChart responsive={true} width={1200} height={400} data={chartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="atendimentos" fill={colors.verdeagua} />
          <Bar type="monotone" dataKey="pendencias" fill={colors.pink} />
          <Legend />
        </BarChart>
      </ChartContainer>
    </Container>
  );
}

export default Home;
