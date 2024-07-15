import { Input } from "../../Global/Input";
import { Select } from "./Select";

export function FinanceForm() {

  return (
    <form>
      <Input 
      label="Descrição" 
      type="text" 
      name="description" 
      id="description" 
      placeholder="Digite aqui sua descrição" 
      example="Ex: Compra de roupas" 
      />
       <Input 
      label="Valor (R$)" 
      type="text" 
      name="value" 
      id="value" 
      placeholder="1" 
      example="Ex: 2000.00" 
      />
      <Select 
      label="Tipo de valor" 
      name="valuetype" 
      id="valuetype" 
      />
      <button type="submit">
        Inserir valor
      </button>
    </form>
  );
}