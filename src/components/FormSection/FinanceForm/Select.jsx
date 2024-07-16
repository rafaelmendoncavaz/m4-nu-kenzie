import style from "./style.module.scss";

/* eslint-disable react/prop-types */
export function Select({ label, name, id, typeValue, setTypeValue }) {

  return (
    <div className={`${style.selectContent} flex-col`}>
        <label htmlFor="description" className="body black">
          { label }
        </label>
        <select 
        name={ name } 
        id={ id } 
        className={`${style.valueType}`}
        value={ typeValue }
        onChange={ (e) => setTypeValue(e.target.value) } 
        required
        >
          <option value="">Selecione...</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
  );
}