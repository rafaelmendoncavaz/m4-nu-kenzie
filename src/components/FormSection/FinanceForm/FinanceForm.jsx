import { Input } from "../../Global/Input";
import { Select } from "./Select";

import style from "./style.module.scss";

export function FinanceForm({ titleValue, ammountValue, typeValue, setTitleValue, setAmmountValue, setTypeValue, insertValue }) {

  return (
    <form className={`${style.formContent} flex-col`} onSubmit={ insertValue } >
      <Input 
        label="Descrição" 
        type="text" 
        name="description" 
        id="description" 
        placeholder="Digite aqui sua descrição" 
        example="Ex: Compra de roupas"
        value={ titleValue } 
        setValue={ setTitleValue }
      />
      <Input 
        label="Valor (R$)" 
        type="text" 
        name="value" 
        id="value" 
        placeholder="Digite apenas números" 
        example="Ex: 2000.00" 
        value={ ammountValue }
        setValue={ setAmmountValue }
      />
      <Select 
        label="Tipo de valor" 
        name="valuetype" 
        id="valuetype" 
        typeValue={ typeValue }
        setTypeValue={ setTypeValue }
      />
      <button type="submit" className="addBtn" >
        Inserir valor
      </button>
    </form>
  );
}