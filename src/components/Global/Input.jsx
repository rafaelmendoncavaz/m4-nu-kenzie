import style from "./style.module.scss";

/* eslint-disable react/prop-types */
export function Input({ label, type, name, id, placeholder, example, value, setValue }) {
  
  return (
    <div className={`${style.inputContent} flex-col`}>
        <label htmlFor="description" className="body black">
          { label }
        </label>
        <input 
        type={ type } 
        name={ name } 
        id={ id } 
        placeholder={ placeholder } 
        className="formInput" 
        onChange={(e) => 
        setValue(e.target.value)} 
        value={ value }
        required
        />
        <span className="body gray">
          { example }
        </span>
      </div>
  );
}