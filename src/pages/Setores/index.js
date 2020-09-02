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
import { colors } from "../../constants/colors.js";

function Home() {
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
  const [dataTable, setDataTable] = useState(
    sessionStorage.getItem("table")
      ? JSON.parse(sessionStorage.getItem("table"))
      : [
          {
            data: [
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
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [2, 6, 5, 3],
          },
          {
            data: [
              {
                utineo: 15,
                utiped: 1,
                uti1: 8,
                uti2: 0,
                uti3: 3,
                uti4: 2,
                uti5: 0,
                uti6: 17,
                uti7: 0,
                uti8: 12,
                uti9: 0,
                uti10: 8,
                uti11: 2,
                uti12: 0,
              },
              {
                utineo: 19,
                utiped: 0,
                uti1: 7,
                uti2: 1,
                uti3: 6,
                uti4: 3,
                uti5: 0,
                uti6: 19,
                uti7: 0,
                uti8: 11,
                uti9: 0,
                uti10: 4,
                uti11: 2,
                uti12: 0,
              },
              {
                utineo: 19,
                utiped: 4,
                uti1: 3,
                uti2: 0,
                uti3: 6,
                uti4: 2,
                uti5: 1,
                uti6: 19,
                uti7: 0,
                uti8: 4,
                uti9: 0,
                uti10: 1,
                uti11: 2,
                uti12: 0,
              },
              {
                utineo: 8,
                utiped: 2,
                uti1: 4,
                uti2: 3,
                uti3: 9,
                uti4: 13,
                uti5: 1,
                uti6: 28,
                uti7: 12,
                uti8: 3,
                uti9: 0,
                uti10: 8,
                uti11: 4,
                uti12: 0,
              },
            ],
            totalSetor: {
              utineo: 61,
              utiped: 7,
              uti1: 22,
              uti2: 4,
              uti3: 24,
              uti4: 24,
              uti5: 2,
              uti6: 83,
              uti7: 12,
              uti8: 30,
              uti9: 0,
              uti10: 21,
              uti11: 10,
              uti12: 0,
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [11, 1, 11, 2],
          },
          {
            data: [
              {
                utineo: 7,
                utiped: 1,
                uti1: 5,
                uti2: 0,
                uti3: 8,
                uti4: 10,
                uti5: 2,
                uti6: 2,
                uti7: 0,
                uti8: 3,
                uti9: 0,
                uti10: 4,
                uti11: 4,
                uti12: 0,
              },
              {
                utineo: 15,
                utiped: 4,
                uti1: 6,
                uti2: 0,
                uti3: 6,
                uti4: 20,
                uti5: 7,
                uti6: 3,
                uti7: 0,
                uti8: 5,
                uti9: 0,
                uti10: 11,
                uti11: 6,
                uti12: 0,
              },
              {
                utineo: 26,
                utiped: 3,
                uti1: 2,
                uti2: 2,
                uti3: 8,
                uti4: 16,
                uti5: 2,
                uti6: 7,
                uti7: 0,
                uti8: 3,
                uti9: 0,
                uti10: 6,
                uti11: 4,
                uti12: 0,
              },
              {
                utineo: 14,
                utiped: 8,
                uti1: 4,
                uti2: 5,
                uti3: 10,
                uti4: 5,
                uti5: 6,
                uti6: 10,
                uti7: 3,
                uti8: 7,
                uti9: 0,
                uti10: 9,
                uti11: 8,
                uti12: 5,
              },
            ],
            totalSetor: {
              utineo: 62,
              utiped: 16,
              uti1: 17,
              uti2: 7,
              uti3: 32,
              uti4: 32,
              uti5: 17,
              uti6: 22,
              uti7: 3,
              uti8: 18,
              uti9: 0,
              uti10: 30,
              uti11: 22,
              uti12: 0,
            },
            totalSemana: [46, 83, 79, 94],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [4, 3, 6, 7],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
          {
            data: [
              {
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
              },
              {
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
              },
              {
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
              },
              {
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
              },
            ],
            totalSetor: {
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
            },
            totalSemana: [0, 0, 0, 0],
            pendenciasSetor: {
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
            },
            pendenciasSemana: [0, 0, 0, 0],
          },
        ]
  );
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
    setData(dataTable[count].data);
    setTotalSetor(dataTable[count].totalSetor);
    setTotalSemana(dataTable[count].totalSemana);
    setPendenciasSetor(dataTable[count].pendenciasSetor);
    setPendenciasSemana(dataTable[count].pendenciasSemana);
  }, [count]);

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
