import propTypes from "prop-types";
import React, { useCallback } from "react";
export const Cabecera = React.memo((props) => {
  const { senyores, setSenyores } = props;
  let nMarcados = senyores.filter(({ marcado }) => marcado).length;
  const marcarTodos = useCallback((e) => {
    e.preventDefault();
    setSenyores(senyores.map((senyor) => ({ ...senyor, marcado: true })));
  }, []);
  return (
    <header className="cabecera">
      <h1>Señores que te apuntan con el dedo</h1>
      <p className="totales">
        <span className="nmarcados">{nMarcados}</span> señores que te apuntan
        con el dedo marcados
      </p>
      <a className="accion-marcar" href="marcar-todos" onClick={marcarTodos}>
        Marcar todos
      </a>
    </header>
  );
});
Cabecera.propTypes = {
  senyores: propTypes.array.isRequired,
  setSenyores: propTypes.func.isRequired,
};
