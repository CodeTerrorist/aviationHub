import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Botao } from "../botoes";
import { NavBar } from "../navbar";
import axios from "axios";

function CriarMod() {
  const [aeronave, setAeronave] = useState({
    IDAviao: 0,
    Modificacoes: "",
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
      .post("http://localhost:5000/api/dataM", aeronave)
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
                <h4></h4>
                <div className="header-right">
                  <Link to="/Aeronaves">
                    <Botao text="Voltar" />
                  </Link>
                </div>
              </div>
              <div className="corpo center">
                <form onSubmit={handleSubmit}>
                  <table className="table-bordered table-centered">
                    <tbody>
                      <tr>
                        <td>
                          <label>IDaviao</label>
                          <input
                            type="number"
                            name="IDAviao"
                            onChange={handleInput}
                            value={aeronave.IDAviao}
                            className="form-control"
                          />
                          <label>Descrição</label>
                          <input
                            type="text"
                            name="Modificacoes"
                            onChange={handleInput}
                            value={aeronave.Modificacoes}
                            className="form-control"
                          />
                          <div className="button-wrapper">
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
          color: black;
        }

        .table-bordered {
          border: 1px solid black;
        }

        .table-centered {
          margin: 0 auto;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .button-wrapper {
          margin-top: 10px;
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

export default CriarMod;
