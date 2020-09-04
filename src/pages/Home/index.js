import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/index";
import firebase from "../../context/firebase";
import { Container, ChartContainer, NavBar } from "./style.js";
import { colors } from "../../constants/colors.js";
import { LinearProgress } from "@material-ui/core";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
} from "recharts";

function Home() {
  const { tableContext, user } = useGlobalContext();
  const [state, setState] = useState({ activeIndex: 0 });
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [totalSetor, setTotalSetor] = useState();
  const [totalSemana, setTotalSemana] = useState([0, 0, 0, 0]);
  const [pendenciasSetor, setPendenciasSetor] = useState();
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

  console.log(user);
  useEffect(() => {
    setData(dataTable[count].data);
    setTotalSetor(dataTable[count].totalSetor);
    setTotalSemana(dataTable[count].totalSemana);
    setPendenciasSetor(dataTable[count].pendenciasSetor);
    setPendenciasSemana(dataTable[count].pendenciasSemana);
  }, [count, dataTable]);

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

  const dataPie = [
    {
      name: "Atendimentos",
      value: Number(
        totalSemana[0] + totalSemana[1] + totalSemana[2] + totalSemana[3]
      ),
      fill: colors.verdeagua,
    },
    {
      name: "Pendências",
      value: Number(
        pendenciasSemana[0] +
          pendenciasSemana[1] +
          pendenciasSemana[2] +
          pendenciasSemana[3]
      ),
      fill: colors.pink,
    },
  ];

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`Total ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const onPieEnter = (data, index) => {
    setState({
      activeIndex: index,
    });
  };
  return !dataTable ? (
    <LinearProgress />
  ) : (
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
        <BarChart width={600} height={400} data={chartData}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="atendimentos" fill={colors.verdeagua} />
          <Bar
            type="monotone"
            stackId="a"
            dataKey="pendencias"
            fill={colors.pink}
          />
          <Legend />
        </BarChart>
        <PieChart responsive={true} width={600} height={400}>
          <Pie
            activeIndex={state.activeIndex}
            activeShape={renderActiveShape}
            data={dataPie}
            cx={250}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ChartContainer>
    </Container>
  );
}

export default Home;
