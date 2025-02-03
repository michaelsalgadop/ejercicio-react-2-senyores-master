import { useState } from "react";
import { senyores as senyoresApi } from "./datos/apuntan";
import { Cabecera } from "./componentes/Cabecera";
import { Senyor } from "./componentes/Senyor";

function App() {
  const [senyores, setSenyores] = useState([...senyoresApi]);

  return (
    <div className="contenedor">
      <Cabecera senyores={senyores} setSenyores={setSenyores}></Cabecera>
      <main>
        {senyores.map((senyor) => (
          <Senyor
            key={senyor.id}
            setSenyores={setSenyores}
            senyores={senyores}
            senyor={senyor}
          ></Senyor>
        ))}
      </main>
    </div>
  );
}

export default App;
