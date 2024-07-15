import style from "./style.module.scss";

/* eslint-disable react/prop-types */
export function Select({ label, name, id }) {

  return (
    <div className={`${style.selectContent} flex-col`}>
        <label htmlFor="description" className="body black">
          { label }
        </label>
        <select name={ name } id={ id } className={`${style.valueType}`}>
          <option value="">Selecione...</option>
          <option value="entrada">Entrada</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
  );
}