import React, { useState, useEffect } from "react";
import firebase from "../../context/firebase";
import { useGlobalContext } from "../../context/index.js";
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import {
  Modal,
  ButtonSave,
  Container,
  NavBar,
  ButtonSaveFirebase,
  WrapButtons,
} from "./styled.js";
import { colors } from "../../constants/colors.js";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const { tableContext, setTableContext } = useGlobalContext();
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const history = useHistory();
  const [tableData, setTableData] = useState(tableContext);
  const [showModal, setShowModal] = useState(false);
  const [setor, setSetor] = useState("Setor");
  const [data, setData] = useState([
    {
      utineo: 17,
      utiped: 5,
      uti1: 5,
      uti2: 7,
      uti3: 13,
      uti4: 2,
      uti5: 0,
      uti6: 20,
      uti7: 0,
      uti8: 7,
      uti9: 0,
      uti10: 0,
      uti11: 0,
      uti12: 0,
    },
    {
      utineo: 8,
      utiped: 3,
      uti1: 7,
      uti2: 3,
      uti3: 3,
      uti4: 2,
      uti5: 0,
      uti6: 17,
      uti7: 0,
      uti8: 7,
      uti9: 0,
      uti10: 2,
      uti11: 3,
      uti12: 0,
    },
    {
      utineo: 7,
      utiped: 9,
      uti1: 1,
      uti2: 1,
      uti3: 2,
      uti4: 5,
      uti5: 1,
      uti6: 9,
      uti7: 1,
      uti8: 2,
      uti9: 0,
      uti10: 2,
      uti11: 2,
      uti12: 0,
    },
    {
      utineo: 17,
      utiped: 1,
      uti1: 5,
      uti2: 0,
      uti3: 6,
      uti4: 1,
      uti5: 0,
      uti6: 18,
      uti7: 3,
      uti8: 6,
      uti9: 0,
      uti10: 11,
      uti11: 5, //posto2
      uti12: 0,
    },
  ]);
  const [totalSemana, setTotalSemana] = useState([0, 0, 0, 0]);
  const [totalSetor, setTotalSetor] = useState({
    utineo: 0,
    utiped: 0,
    uti1: 0,
    uti2: 0,
    uti3: 0,
    uti4: 0,
    uti5: 0,
    uti6: 0,
    uti7: 0,
    uti8: 0,
    uti9: 0,
    uti10: 0,
    uti11: 0,
    uti12: 0,
  });
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
  const [ano, setAno] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("tabela")
      .once("value")
      .then((snapshot) => setTableData(snapshot.val()));
  }, []);

  useEffect(() => {
    setData(tableData[count].data);
    setPendenciasSetor(tableData[count].pendenciasSetor);
  }, [count, tableData]);

  useEffect(() => {
    const sem1 =
      pendenciasSetor.utineo[0] +
      pendenciasSetor.utiped[0] +
      pendenciasSetor.uti1[0] +
      pendenciasSetor.uti2[0] +
      pendenciasSetor.uti3[0] +
      pendenciasSetor.uti4[0] +
      pendenciasSetor.uti5[0] +
      pendenciasSetor.uti6[0] +
      pendenciasSetor.uti7[0] +
      pendenciasSetor.uti8[0] +
      pendenciasSetor.uti9[0] +
      pendenciasSetor.uti10[0] +
      pendenciasSetor.uti11[0] +
      pendenciasSetor.uti12[0];
    const sem2 =
      pendenciasSetor.utineo[1] +
      pendenciasSetor.utiped[1] +
      pendenciasSetor.uti1[1] +
      pendenciasSetor.uti2[1] +
      pendenciasSetor.uti3[1] +
      pendenciasSetor.uti4[1] +
      pendenciasSetor.uti5[1] +
      pendenciasSetor.uti6[1] +
      pendenciasSetor.uti7[1] +
      pendenciasSetor.uti8[1] +
      pendenciasSetor.uti9[1] +
      pendenciasSetor.uti10[1] +
      pendenciasSetor.uti11[1] +
      pendenciasSetor.uti12[1];
    const sem3 =
      pendenciasSetor.utineo[2] +
      pendenciasSetor.utiped[2] +
      pendenciasSetor.uti1[2] +
      pendenciasSetor.uti2[2] +
      pendenciasSetor.uti3[2] +
      pendenciasSetor.uti4[2] +
      pendenciasSetor.uti5[2] +
      pendenciasSetor.uti6[2] +
      pendenciasSetor.uti7[2] +
      pendenciasSetor.uti8[2] +
      pendenciasSetor.uti9[2] +
      pendenciasSetor.uti10[2] +
      pendenciasSetor.uti11[2] +
      pendenciasSetor.uti12[2];
    const sem4 =
      pendenciasSetor.utineo[3] +
      pendenciasSetor.utiped[3] +
      pendenciasSetor.uti1[3] +
      pendenciasSetor.uti2[3] +
      pendenciasSetor.uti3[3] +
      pendenciasSetor.uti4[3] +
      pendenciasSetor.uti5[3] +
      pendenciasSetor.uti6[3] +
      pendenciasSetor.uti7[3] +
      pendenciasSetor.uti8[3] +
      pendenciasSetor.uti9[3] +
      pendenciasSetor.uti10[3] +
      pendenciasSetor.uti11[3] +
      pendenciasSetor.uti12[3];
    if (sem1 + sem2 + sem3 + sem4 === 0) {
      setPendenciasSemana(tableContext[count].pendenciasSemana);
    } else {
      setPendenciasSemana([sem1, sem2, sem3, sem4]);
    }
  }, [count, pendenciasSetor, tableContext]);

  useEffect(() => {
    setTotalSetor({
      utineo:
        Number(data[0].utineo) +
        Number(data[1].utineo) +
        Number(data[2].utineo) +
        Number(data[3].utineo),
      utiped:
        Number(data[0].utiped) +
        Number(data[1].utiped) +
        Number(data[2].utiped) +
        Number(data[3].utiped),
      uti1:
        Number(data[0].uti1) +
        Number(data[1].uti1) +
        Number(data[2].uti1) +
        Number(data[3].uti1),
      uti2:
        Number(data[0].uti2) +
        Number(data[1].uti2) +
        Number(data[2].uti2) +
        Number(data[3].uti2),
      uti3:
        Number(data[0].uti3) +
        Number(data[1].uti3) +
        Number(data[2].uti3) +
        Number(data[3].uti3),
      uti4:
        Number(data[0].uti3) +
        Number(data[1].uti3) +
        Number(data[2].uti3) +
        Number(data[3].uti3),
      uti5:
        Number(data[0].uti5) +
        Number(data[1].uti5) +
        Number(data[2].uti5) +
        Number(data[3].uti5),
      uti6:
        Number(data[0].uti6) +
        Number(data[1].uti6) +
        Number(data[2].uti6) +
        Number(data[3].uti6),
      uti7:
        Number(data[0].uti7) +
        Number(data[1].uti7) +
        Number(data[2].uti7) +
        Number(data[3].uti7),
      uti8:
        Number(data[0].uti8) +
        Number(data[1].uti8) +
        Number(data[2].uti8) +
        Number(data[3].uti8),
      uti9:
        Number(data[0].uti9) +
        Number(data[1].uti9) +
        Number(data[2].uti9) +
        Number(data[3].uti9),
      uti10:
        Number(data[0].uti10) +
        Number(data[1].uti10) +
        Number(data[2].uti10) +
        Number(data[3].uti10),
      uti11:
        Number(data[0].uti11) +
        Number(data[1].uti11) +
        Number(data[2].uti11) +
        Number(data[3].uti11),
      uti12:
        Number(data[0].uti12) +
        Number(data[1].uti12) +
        Number(data[2].uti12) +
        Number(data[3].uti12),
    });
  }, [data]);

  useEffect(() => {
    setTotalSemana([
      data[0].utineo +
        data[0].utiped +
        data[0].uti1 +
        data[0].uti2 +
        data[0].uti3 +
        data[0].uti4 +
        data[0].uti5 +
        data[0].uti6 +
        data[0].uti7 +
        data[0].uti8 +
        data[0].uti9 +
        data[0].uti10 +
        data[0].uti11 +
        data[0].uti12,
      data[1].utineo +
        data[1].utiped +
        data[1].uti1 +
        data[1].uti2 +
        data[1].uti3 +
        data[1].uti4 +
        data[1].uti5 +
        data[1].uti6 +
        data[1].uti7 +
        data[1].uti8 +
        data[1].uti9 +
        data[1].uti10 +
        data[1].uti11 +
        data[1].uti12,
      data[2].utineo +
        data[2].utiped +
        data[2].uti1 +
        data[2].uti2 +
        data[2].uti3 +
        data[2].uti4 +
        data[2].uti5 +
        data[2].uti6 +
        data[2].uti7 +
        data[2].uti8 +
        data[2].uti9 +
        data[2].uti10 +
        data[2].uti11 +
        data[2].uti12,
      data[3].utineo +
        data[3].utiped +
        data[3].uti1 +
        data[3].uti2 +
        data[3].uti3 +
        data[3].uti4 +
        data[3].uti5 +
        data[3].uti6 +
        data[3].uti7 +
        data[3].uti8 +
        data[3].uti9 +
        data[3].uti10 +
        data[3].uti11 +
        data[3].uti12,
    ]);
  }, [data]);

  const handleSaveModal = () => {
    setTotalSetor({
      utineo:
        Number(data[0].utineo) +
        Number(data[1].utineo) +
        Number(data[2].utineo) +
        Number(data[3].utineo),
      utiped:
        Number(data[0].utiped) +
        Number(data[1].utiped) +
        Number(data[2].utiped) +
        Number(data[3].utiped),
      uti1:
        Number(data[0].uti1) +
        Number(data[1].uti1) +
        Number(data[2].uti1) +
        Number(data[3].uti1),
      uti2:
        Number(data[0].uti2) +
        Number(data[1].uti2) +
        Number(data[2].uti2) +
        Number(data[3].uti2),
      uti3:
        Number(data[0].uti3) +
        Number(data[1].uti3) +
        Number(data[2].uti3) +
        Number(data[3].uti3),
      uti4:
        Number(data[0].uti3) +
        Number(data[1].uti3) +
        Number(data[2].uti3) +
        Number(data[3].uti3),
      uti5:
        Number(data[0].uti5) +
        Number(data[1].uti5) +
        Number(data[2].uti5) +
        Number(data[3].uti5),
      uti6:
        Number(data[0].uti6) +
        Number(data[1].uti6) +
        Number(data[2].uti6) +
        Number(data[3].uti6),
      uti7:
        Number(data[0].uti7) +
        Number(data[1].uti7) +
        Number(data[2].uti7) +
        Number(data[3].uti7),
      uti8:
        Number(data[0].uti8) +
        Number(data[1].uti8) +
        Number(data[2].uti8) +
        Number(data[3].uti8),
      uti9:
        Number(data[0].uti9) +
        Number(data[1].uti9) +
        Number(data[2].uti9) +
        Number(data[3].uti9),
      uti10:
        Number(data[0].uti10) +
        Number(data[1].uti10) +
        Number(data[2].uti10) +
        Number(data[3].uti10),
      uti11:
        Number(data[0].uti11) +
        Number(data[1].uti11) +
        Number(data[2].uti11) +
        Number(data[3].uti11),
      uti12:
        Number(data[0].uti12) +
        Number(data[1].uti12) +
        Number(data[2].uti12) +
        Number(data[3].uti12),
    });
    setTotalSemana([
      Number(data[0].utineo) +
        Number(data[0].utiped) +
        Number(data[0].uti1) +
        Number(data[0].uti2) +
        Number(data[0].uti3) +
        Number(data[0].uti4) +
        Number(data[0].uti5) +
        Number(data[0].uti6) +
        Number(data[0].uti7) +
        Number(data[0].uti8) +
        Number(data[0].uti10),
      Number(data[1].utineo) +
        Number(data[1].utiped) +
        Number(data[1].uti1) +
        Number(data[1].uti2) +
        Number(data[1].uti3) +
        Number(data[1].uti4) +
        Number(data[1].uti5) +
        Number(data[1].uti6) +
        Number(data[1].uti7) +
        Number(data[1].uti8) +
        Number(data[1].uti10),
      Number(data[2].utineo) +
        Number(data[2].utiped) +
        Number(data[2].uti1) +
        Number(data[2].uti2) +
        Number(data[2].uti3) +
        Number(data[2].uti4) +
        Number(data[2].uti5) +
        Number(data[2].uti6) +
        Number(data[2].uti7) +
        Number(data[2].uti8) +
        Number(data[2].uti10),
      Number(data[3].utineo) +
        Number(data[3].utiped) +
        Number(data[3].uti1) +
        Number(data[3].uti2) +
        Number(data[3].uti3) +
        Number(data[3].uti4) +
        Number(data[3].uti5) +
        Number(data[3].uti6) +
        Number(data[3].uti7) +
        Number(data[3].uti8) +
        Number(data[3].uti10),
    ]);
    setShowModal(false);
  };

  const handleSubmit = () => {
    const table = {
      data: data,
      totalSetor: totalSetor,
      totalSemana: totalSemana,
      pendenciasSetor: pendenciasSetor,
      pendenciasSemana: pendenciasSemana,
    };
    if (count === 11) {
      const old = tableData;
      const newArray = Object.values({ ...old, [count]: table });
      setTableData(newArray);
      setAno(tableData);
      setTableContext(ano);
      handleSubmitFirebase();
      history.push("/");
    } else {
      const old = tableData;
      const newArray = Object.values({ ...old, [count]: table });
      setTableData(newArray);
      setCount(count + 1);
      setAno(tableData);
    }
  };

  const handleSubmitFirebase = () => {
    firebase.database().ref("tabela").set(ano);
  };
  return (
    <Container>
      {showModal && (
        <Modal>
          <div className="container">
            <h2>{`${setor.charAt(0).toUpperCase()}${setor.slice(1)}`}</h2>
            <div className="form">
              <div className="formwrap">
                <h3>Semana 1</h3>
                <label>Atendimentos</label>
                <input
                  onChange={(e) =>
                    setData([
                      { ...data[0], [e.target.name]: Number(e.target.value) },
                      data[1],
                      data[2],
                      data[3],
                    ])
                  }
                  type="number"
                  name={setor}
                  value={data[0][setor]}
                />
                <label>Pendências</label>
                <input
                  onChange={(e) =>
                    setPendenciasSetor({
                      ...pendenciasSetor,
                      [e.target.name]: [
                        Number(e.target.value),
                        pendenciasSetor[setor][1],
                        pendenciasSetor[setor][2],
                        pendenciasSetor[setor][3],
                      ],
                    })
                  }
                  type="number"
                  name={setor}
                  value={pendenciasSetor[setor][0]}
                />
              </div>
              <div className="formwrap">
                <h3>Semana 2</h3>
                <label>Atendimentos</label>
                <input
                  onChange={(e) =>
                    setData([
                      data[0],
                      { ...data[1], [e.target.name]: Number(e.target.value) },
                      data[2],
                      data[3],
                    ])
                  }
                  type="number"
                  name={setor}
                  value={data[1][setor]}
                />
                <label>Pendências</label>
                <input
                  onChange={(e) =>
                    setPendenciasSetor({
                      ...pendenciasSetor,
                      [e.target.name]: [
                        pendenciasSetor[setor][0],
                        Number(e.target.value),
                        pendenciasSetor[setor][2],
                        pendenciasSetor[setor][3],
                      ],
                    })
                  }
                  type="number"
                  name={setor}
                  value={pendenciasSetor[setor][1]}
                />
              </div>
              <div className="formwrap">
                <h3>Semana 3</h3>
                <label>Atendimentos</label>
                <input
                  onChange={(e) =>
                    setData([
                      data[0],
                      data[1],
                      { ...data[2], [e.target.name]: Number(e.target.value) },
                      data[3],
                    ])
                  }
                  type="number"
                  name={setor}
                  value={data[2][setor]}
                />
                <label>Pendências</label>
                <input
                  onChange={(e) =>
                    setPendenciasSetor({
                      ...pendenciasSetor,
                      [e.target.name]: [
                        pendenciasSetor[setor][0],
                        pendenciasSetor[setor][1],
                        Number(e.target.value),
                        pendenciasSetor[setor][3],
                      ],
                    })
                  }
                  type="number"
                  name={setor}
                  value={pendenciasSetor[setor][2]}
                />
              </div>
              <div className="formwrap">
                <h3>Semana 4</h3>
                <label>Atendimentos</label>
                <input
                  onChange={(e) =>
                    setData([
                      data[0],
                      data[1],
                      data[2],
                      { ...data[3], [e.target.name]: Number(e.target.value) },
                    ])
                  }
                  type="number"
                  name={setor}
                  value={data[3][setor]}
                />
                <label>Pendências</label>
                <input
                  onChange={(e) =>
                    setPendenciasSetor({
                      ...pendenciasSetor,
                      [e.target.name]: [
                        pendenciasSetor[setor][0],
                        pendenciasSetor[setor][1],
                        pendenciasSetor[setor][2],
                        Number(e.target.value),
                      ],
                    })
                  }
                  type="number"
                  name={setor}
                  value={pendenciasSetor[setor][3]}
                />
              </div>
            </div>
            <div className="buttonwrap">
              <button onClick={() => setShowModal(false)}>Cancelar</button>
              <button onClick={handleSaveModal}>Salvar</button>
            </div>
          </div>
        </Modal>
      )}
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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SETOR</StyledTableCell>
              <StyledTableCell>SEMANA 1</StyledTableCell>
              <StyledTableCell>SEMANA 2</StyledTableCell>
              <StyledTableCell>SEMANA 3</StyledTableCell>
              <StyledTableCell>SEMANA 4</StyledTableCell>
              <StyledTableCell>TOTAL SETOR</StyledTableCell>
              <StyledTableCell>PENDÊNCIAS NO SETOR</StyledTableCell>
              <StyledTableCell>Editar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell>UTI - NEONATAL</StyledTableCell>
              <StyledTableCell>{data[0].utineo}</StyledTableCell>
              <StyledTableCell>{data[1].utineo}</StyledTableCell>
              <StyledTableCell>{data[2].utineo}</StyledTableCell>
              <StyledTableCell>{data[3].utineo}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.utineo}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor &&
                  pendenciasSetor.utineo.reduce(
                    (tot, pendencia) => tot + pendencia
                  )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("utineo");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>UTI - PEDIÁTRICA</StyledTableCell>
              <StyledTableCell>{data[0].utiped}</StyledTableCell>
              <StyledTableCell>{data[1].utiped}</StyledTableCell>
              <StyledTableCell>{data[2].utiped}</StyledTableCell>
              <StyledTableCell>{data[3].utiped}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.utiped}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.utiped.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("utiped");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>UTI - 1</StyledTableCell>
              <StyledTableCell>{data[0].uti1}</StyledTableCell>
              <StyledTableCell>{data[1].uti1}</StyledTableCell>
              <StyledTableCell>{data[2].uti1}</StyledTableCell>
              <StyledTableCell>{data[3].uti1}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti1}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti1.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti1");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>UTI - 2</StyledTableCell>
              <StyledTableCell>{data[0].uti2}</StyledTableCell>
              <StyledTableCell>{data[1].uti2}</StyledTableCell>
              <StyledTableCell>{data[2].uti2}</StyledTableCell>
              <StyledTableCell>{data[3].uti2}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti2}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti2.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti2");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>UTI - 3</StyledTableCell>
              <StyledTableCell>{data[0].uti3}</StyledTableCell>
              <StyledTableCell>{data[1].uti3}</StyledTableCell>
              <StyledTableCell>{data[2].uti3}</StyledTableCell>
              <StyledTableCell>{data[3].uti3}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti3}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti3.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti3");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>POSTO 2</StyledTableCell>
              <StyledTableCell>{data[0].uti11}</StyledTableCell>
              <StyledTableCell>{data[1].uti11}</StyledTableCell>
              <StyledTableCell>{data[2].uti11}</StyledTableCell>
              <StyledTableCell>{data[3].uti11}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti11}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti11.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti11");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>4º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti4}</StyledTableCell>
              <StyledTableCell>{data[1].uti4}</StyledTableCell>
              <StyledTableCell>{data[2].uti4}</StyledTableCell>
              <StyledTableCell>{data[3].uti4}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti4}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti4.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti4");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>5º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti5}</StyledTableCell>
              <StyledTableCell>{data[1].uti5}</StyledTableCell>
              <StyledTableCell>{data[2].uti5}</StyledTableCell>
              <StyledTableCell>{data[3].uti5}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti5}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti5.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti5");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>6º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti6}</StyledTableCell>
              <StyledTableCell>{data[1].uti6}</StyledTableCell>
              <StyledTableCell>{data[2].uti6}</StyledTableCell>
              <StyledTableCell>{data[3].uti6}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti6}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti6.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti6");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>7º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti7}</StyledTableCell>
              <StyledTableCell>{data[1].uti7}</StyledTableCell>
              <StyledTableCell>{data[2].uti7}</StyledTableCell>
              <StyledTableCell>{data[3].uti7}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti7}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti7.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti7");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>8º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti8}</StyledTableCell>
              <StyledTableCell>{data[1].uti8}</StyledTableCell>
              <StyledTableCell>{data[2].uti8}</StyledTableCell>
              <StyledTableCell>{data[3].uti8}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti8}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti8.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti8");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>9º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti9}</StyledTableCell>
              <StyledTableCell>{data[1].uti9}</StyledTableCell>
              <StyledTableCell>{data[2].uti9}</StyledTableCell>
              <StyledTableCell>{data[3].uti9}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti9}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti9.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti9");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>10º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti10}</StyledTableCell>
              <StyledTableCell>{data[1].uti10}</StyledTableCell>
              <StyledTableCell>{data[2].uti10}</StyledTableCell>
              <StyledTableCell>{data[3].uti10}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti10}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti10.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti10");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell>12º ANDAR</StyledTableCell>
              <StyledTableCell>{data[0].uti12}</StyledTableCell>
              <StyledTableCell>{data[1].uti12}</StyledTableCell>
              <StyledTableCell>{data[2].uti12}</StyledTableCell>
              <StyledTableCell>{data[3].uti12}</StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.mediumGreen}`,
                  fontWeight: 600,
                }}
              >
                {totalSetor.uti12}
              </StyledTableCell>
              <StyledTableCell
                style={{
                  color: `${colors.pink}`,
                  fontWeight: 600,
                }}
              >
                {pendenciasSetor.uti12.reduce(
                  (tot, pendencia) => tot + pendencia
                )}
              </StyledTableCell>
              <StyledTableCell
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowModal(true);
                  setSetor("uti12");
                }}
              >
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>TOTAL NA SEMANA</StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.mediumGreen}`, fontWeight: 600 }}
              >
                {totalSemana[0]}
              </StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.mediumGreen}`, fontWeight: 600 }}
              >
                {totalSemana[1]}
              </StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.mediumGreen}`, fontWeight: 600 }}
              >
                {totalSemana[2]}
              </StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.mediumGreen}`, fontWeight: 600 }}
              >
                {totalSemana[3]}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>PENDÊNCIAS NA SEMANA</StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.pink}`, fontWeight: 600 }}
              >
                {pendenciasSemana[0]}
              </StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.pink}`, fontWeight: 600 }}
              >
                {pendenciasSemana[1]}
              </StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.pink}`, fontWeight: 600 }}
              >
                {pendenciasSemana[2]}
              </StyledTableCell>
              <StyledTableCell
                style={{ color: `${colors.pink}`, fontWeight: 600 }}
              >
                {pendenciasSemana[3]}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <WrapButtons>
        <ButtonSave onClick={handleSubmit}>Próximo</ButtonSave>
      </WrapButtons>
    </Container>
  );
}
