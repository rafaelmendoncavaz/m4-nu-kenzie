/* eslint-disable react/prop-types */
export function Input({ label, type, name, id, placeholder, example }) {

  return (
    <div>
        <label htmlFor="description">
          { label }
        </label>
        <input type={ type } name={ name } id={ id } placeholder={ placeholder } />
        <span>
          { example }
        </span>
      </div>
  );
}