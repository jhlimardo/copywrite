// Función getText para el metodo GET, recibe parametros desde query y lo muestra en formato json.
// Verifica que realmente se pase un paramtro cuyo key sea 'text'

const getText = (req, res) => {
  try {
    if (
      Object.keys(req.query).toString() !== "text" ||
      Object.values(req.query).toString() === ""
    ) {
      console.log("Parametro invalido: no text");
      res.status(400).json({ error: "no text" });
    } else {
      res.status(200).json(req.query);
      console.log("Respuesta correcta del GET: ", JSON.stringify(req.query));
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: message });
  }
};

module.exports = {
  getText,
};
