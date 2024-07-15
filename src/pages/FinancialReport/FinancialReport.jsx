import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate";
import { FormSection } from "../../components/FormSection/FormSection";
import { FinanceSection } from "../../components/FinanceSection/FinanceSection";
import style from "./style.module.scss";


export function FinancialReport() {
  
  return (
    <DefaultTemplate>
      <div className={`${style.mainContainer} container`}>
        <FormSection />
        <FinanceSection />
      </div>
    </DefaultTemplate>
  );
}