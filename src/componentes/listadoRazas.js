import React from "react";

const ListadoRazas = ({ razas, showDog }) => {
  const listaDeRazas = razas.map((raza, i) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={i}
      >
        <h5 className="">{raza}</h5>
        <button
          onClick={() => showDog(raza)}
          type="button"
          className="btn btn-primary"
        >
          Ver!
        </button>
      </li>
    );
  });

  return <ul className="list-group">{listaDeRazas}</ul>;
};

export default ListadoRazas;
