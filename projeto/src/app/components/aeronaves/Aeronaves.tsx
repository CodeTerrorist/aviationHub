import { Link } from "react-router-dom";
import { NavBar } from "../navbar";
import React, { useEffect, useState } from "react";
import { Botao } from "../botoes";
import axios from "axios";

export interface Aeronave {
  IDAviao: number;
  Matricula: string;
  Pais: string;
  Modelo: string;
  Tipo: string;
  HorasVoo: number;
  Modificacoes: number;
  PrecoHora: string;
  Disponibilidade: number;
}

function Aeronaves() {
  const [aeronaves, setAeronaves] = useState<Aeronave[]>([]);
  const [selectedAeronave, setSelectedAeronave] = useState<Aeronave | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/data")
      .then((res) => {
        setAeronaves(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteAeronave = (id: number) => {
    axios
      .delete(`http://localhost:5000/api/data/${id}`)
      .then((res) => {
        console.log(res);
        // Update the state to reflect the changes
        setAeronaves((prevAeronaves) =>
          prevAeronaves.filter((aeronave) => aeronave.IDAviao !== id)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderAeronaves = () => {
    if (aeronaves.length === 0) {
      return (
        <tr>
          <td colSpan={11}>No data available</td>
        </tr>
      );
    }

    return aeronaves.map((item: Aeronave) => (
      <tr key={item.IDAviao}>
        <td>{item.IDAviao}</td>
        <td>{item.Matricula}</td>
        <td>{item.Pais}</td>
        <td>{item.Modelo}</td>
        <td>{item.Tipo}</td>
        <td>{item.HorasVoo}</td>
        <td>{item.Modificacoes}</td>
        <td>{item.PrecoHora}</td>
        <td>{item.Disponibilidade}</td>
        <td>
          <button onClick={() => deleteAeronave(item.IDAviao)}>
            <Botao text="Apagar Dados" />
          </button>
        </td>
        <td>
          <Link to={`/updateAero/${item.IDAviao}`}>
            <button>
              <Botao text="Editar Dados" />
            </button>
          </Link>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container-wrapper">
      <NavBar />
      <div className="container">
        <div className="linha">
          <div className="col-md-12">
            <div className="aeronaves">
              <div className="header">
                <h4>Lista de Aeronaves</h4>
                <div className="header-right">
                  <Link to="/AdicionarAeronaves">
                    <Botao text="Adicionar Aeronaves" />
                  </Link>
                  <Link to="/Modificacao">
                    <Botao text="Modificações/Reparos" />
                  </Link>
                </div>
              </div>
              <table className="corpo">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Matricula</th>
                    <th>País</th>
                    <th>Modelo</th>
                    <th>Tipo</th>
                    <th>Horas de Voo</th>
                    <th>Modificações</th>
                    <th>Preço por hora</th>
                    <th>Disponibilidade</th>
                    <th>Apagar</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>{renderAeronaves()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .corpo {
          width: 100%;
          border-collapse: collapse;
          color: black;
        }
  
        .corpo th {
          background-color: #333;
          color: white;
          padding: 10px;
          text-align: center;
          border: 1px solid black;
        }
  
        .corpo td {
          padding: 10px;
          text-align: center;
          border: 1px solid black;
        }
  
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
  
        .header-right {
          margin-left: auto;
        }
      `}
      </style>
    </div>
  );
}

export default Aeronaves;
