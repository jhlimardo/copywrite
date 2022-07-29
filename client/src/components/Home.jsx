import { useState } from "react";
import axios from "axios";
const array1 = [];
export default function Home() {
  let miArray = [];
  const [text, setText] = useState({ text: "" });
  const [newText, setNewText] = useState("");

  //Funcion para conectarme al back y pasar los parametros y recibir la respuesta
  const getText = async (e) => {
    try {
      const res = await axios.get(`/iecho?text=${e}`);
      setText(res.data);
      setNewText("");
    } catch (err) {
      //console.log(err);
      alert(`${err.message}\n "error": "no text"`);
    }
  };

  const handleChange = (e) => {
    console.log("handlechange", e.target.value);
    setNewText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getText(newText);
  };

  //Verifico que el estado de text no esté vacio
  //Genero un id unico
  //Guardo el nuevo objeto en miArray para renderizar

  if (text.text.length > 0) {
    text.id = Date();
    array1.push(text);
    console.log(array1);
    miArray = [...new Set(array1)];
  }

  return (
    <div>
      <div className="container-lg bg-danger">
        <form
          action="#"
          onSubmit={(e) => {
            handleClick(e);
          }}
        >
          <div>
            <div className="d-flex p-2 justify-content-center">
              <input
                type="text"
                className="form-control"
                id="newText"
                name="newText"
                placeholder="Ingresar Texto"
                value={newText}
                style={{ width: "500px" }}
                onChange={(e) => {
                  handleChange(e);
                }}
              />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex p-2 justify-content-center bg-light">
        <div
          className="d-flex p-2 justify-content-center bg-white"
          style={{ width: "900px" }}
        >
          <span className="d-block p-2">
            <h5>Results:</h5>
          </span>
          <div></div>
          <div className="d-block p-4 justify-content-center bg-white">
            {miArray.map((element) => (
              <div
                className="d-flex p-1 justify-content-center"
                key={element.id}
              >
                <div className="vstack gap-2">
                  <div
                    className="bg-white border"
                    style={{
                      width: "500px",
                      height: "30px",
                      paddingLeft: "20px",
                    }}
                  >
                    <p>{element.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
