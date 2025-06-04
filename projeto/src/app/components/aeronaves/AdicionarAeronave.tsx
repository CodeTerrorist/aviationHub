
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Botao } from "../botoes";
import { NavBar } from "../navbar";
import axios from "axios";

function CriarAeronave() {
  const [aeronave, setAeronave] = useState({
    IDaviao: "",
    Matricula: "",
    Pais: "",
    Modelo: "",
    Tipo: "",
    HorasVoo: "",
    Disponibilidade: false,
    Modificacoes: "",
    PrecoHora: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setAeronave({ ...aeronave, [name]: inputValue });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send the data to your backend server for processing
    // You can use Axios for making the POST request

    axios
      .post("http://localhost:5000/api/data", aeronave)
      .then((response) => {
        console.log("Aeronave created successfully", response.data);
        // Reset the form or redirect to another page
      })
      .catch((error) => {
        console.error("Error creating aeronave", error);
        // Handle the error
      });
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
                  <Link to="/Aeronaves">
                    <Botao text="Voltar" />
                  </Link>
                </div>
              </div>
              <div className="corpo">
               <form onSubmit={handleSubmit}>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <label>Matricula</label>
                          <input
                            type="text"
                            name="Matricula"
                            onChange={handleInput}
                            value={aeronave.Matricula}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>País</label>
                          <input
                            type="text"
                            name="Pais"
                            onChange={handleInput}
                            value={aeronave.Pais}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>Modelo</label>
                          <input
                            type="text"
                            name="Modelo"
                            onChange={handleInput}
                            value={aeronave.Modelo}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>Tipo</label>
                          <input
                            type="text"
                            name="Tipo"
                            onChange={handleInput}
                            value={aeronave.Tipo}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>Horas de Voo</label>
                          <input
                            type="number"
                            name="HorasVoo"
                            onChange={handleInput}
                            value={aeronave.HorasVoo}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>Modificações</label>
                          <input
                            type="number"
                            name="Modificacoes"
                            onChange={handleInput}
                            value={aeronave.Modificacoes}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>Disponibilidade</label>
                          <input
                            type="checkbox"
                            name="Disponibilidade"
                            onChange={handleInput}
                            checked={aeronave.Disponibilidade}
                            className="form-control"
                          />
                        </td>
                        <td>
                          <label>Preço por hora</label>
                          <input
                            type="number"
                            name="PrecoHora"
                            onChange={handleInput}
                            value={aeronave.PrecoHora}
                            className="form-control"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={9}>
                          <div className="mb-3">
                            <button type="submit" className="btn btn-primary">
                              Guardar
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
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

export default CriarAeronave;
