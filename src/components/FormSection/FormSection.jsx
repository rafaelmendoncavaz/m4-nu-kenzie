import { FinanceForm } from "./FinanceForm/FinanceForm";
import { Total } from "./Total/Total";
import style from "./style.module.scss";

export function FormSection() {

  return (
    <div className={`${style.formSectionContent} flex-col`}>
      <FinanceForm />
      <Total />
    </div>
  );
}