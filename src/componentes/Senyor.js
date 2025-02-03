import propTypes from "prop-types";

export const Senyor = (props) => {
  const { setSenyores, senyores, senyor } = props;
  const { id, nombre, profesion, foto, estado, twitter, marcado } = senyor;
  const getInicial = (nombre) => {
    const nombreDescompuesto = nombre.split(" ");
    return nombreDescompuesto.length > 1 && nombreDescompuesto[0].length <= 2
      ? nombreDescompuesto[1].charAt(0).toUpperCase()
      : nombreDescompuesto[0].charAt(0).toUpperCase();
  };
  const marcarDesmarcarSenyor = (idSenyor) =>
    setSenyores(
      senyores.map((senyor) => {
        if (senyor.id === idSenyor) {
          return { ...senyor, marcado: !senyor.marcado };
        }
        return senyor;
      })
    );
  return (
    <article
      className={`senyor ${marcado ? "marcado" : ""}`}
      onClick={() => marcarDesmarcarSenyor(id)}
    >
      <div className="avatar">
        <img src={`img/${foto}`} alt={`${nombre} señalándote con el dedo`} />
        <span className="inicial">{getInicial(nombre)}</span>
      </div>
      <div className="info">
        <h2>{nombre}</h2>
        <ul>
          <li>
            <span className="etiqueta">Profesión:</span> {profesion}
          </li>
          <li>
            <span className="etiqueta">Estado:</span> {estado}
          </li>
          <li>
            <span className="etiqueta">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};
Senyor.propTypes = {
  senyores: propTypes.array.isRequired,
  setSenyores: propTypes.func.isRequired,
  senyor: propTypes.object.isRequired,
};
