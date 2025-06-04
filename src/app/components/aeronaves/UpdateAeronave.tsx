import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateAero() {
  const { IDAviao } = useParams();
  const [values, setValues] = useState({
    IDAviao: IDAviao,
    Matricula: "",
    Pais: "",
    Modelo: "",
    Tipo: "",
    HorasVoo: 0,
    Modificacoes: 0,
    PrecoHora: 0,
    Disponibilidade: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/data/${IDAviao}`)
      .then((res) => {
        setValues({
          ...values,
          IDAviao: res.data.IDAviao,
          Matricula: res.data.Matricula,
          Pais: res.data.Pais,
          Modelo: res.data.Modelo,
          Tipo: res.data.Tipo,
          HorasVoo: res.data.HorasVoo,
          Modificacoes: res.data.Modificacoes,
          PrecoHora: res.data.PrecoHora,
          Disponibilidade: res.data.Disponibilidade,
        });
      })
      .catch((err) => console.log(err));
  }, [IDAviao]);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/data/${IDAviao}`, values)
      .then((res) => {
        navigate("/");
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <table
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "10px",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <label>IDAviao</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="IDAviao"
                    placeholder="Insira o id da aeronave"
                    value={values.IDAviao}
                    onChange={(e) =>
                      setValues({ ...values, IDAviao: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Matricula</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Matricula"
                    placeholder="Insira a Matricula"
                    value={values.Matricula}
                    onChange={(e) =>
                      setValues({ ...values, Matricula: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>País</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Pais"
                    placeholder="Insira o país de registro"
                    value={values.Pais}
                    onChange={(e) =>
                      setValues({ ...values, Pais: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Modelo</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Modelo"
                    placeholder="Insira o modelo"
                    value={values.Modelo}
                    onChange={(e) =>
                      setValues({ ...values, Modelo: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Tipo</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Tipo"
                    placeholder="Insira o tipo de aeronave"
                    value={values.Tipo}
                    onChange={(e) =>
                      setValues({ ...values, Tipo: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Modificações</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="Modificacoes"
                    placeholder="Insira o numero de modificações/reparos"
                    value={values.Modificacoes}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        Modificacoes: parseInt(e.target.value),
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Horas de voo</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="HorasVoo"
                    placeholder="Insira o número de horas de voo da aeronave"
                    value={values.HorasVoo}
                    onChange={(e) =>
                      setValues({ ...values, HorasVoo: parseInt(e.target.value) })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Disponibilidade</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="Disponibilidade"
                    checked={values.Disponibilidade}
                    onChange={(e) =>
                      setValues({ ...values, Disponibilidade: e.target.checked })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Preço por hora</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="PrecoHora"
                    placeholder="Insira o Preço por hora"
                    value={values.PrecoHora}
                    onChange={(e) =>
                      setValues({ ...values, PrecoHora: parseFloat(e.target.value) })
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateAero;
