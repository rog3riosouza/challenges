import { useEffect, useState } from "react";

function App() {
  const [api, setApi] = useState("");
  const [db, setDb] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.text())
      .then(setApi);

    fetch("http://localhost:3001/db")
      .then(res => res.json())
      .then(data => setDb(data.hora));
  }, []);

  return (
    <div>
      <h1>Frontend funcionando!</h1>
      <p>Resposta da API: {api}</p>
      <p>Hora do Banco: {db}</p>
    </div>
  );
}

export default App;
