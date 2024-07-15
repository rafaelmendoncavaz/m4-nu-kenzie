/* eslint-disable react/prop-types */
export function Select({ label, name, id }) {

  return (
    <div>
        <label htmlFor="description">
          { label }
        </label>
        <select name={ name } id={ id }>
          <option value="entrada">Entrada</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
  );
}