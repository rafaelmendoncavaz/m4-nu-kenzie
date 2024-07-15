import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate";
import { FormSection } from "../../components/FormSection/FormSection";
import { FinanceSection } from "../../components/FinanceSection/FinanceSection";


export function FinancialReport() {
  
  return (
    <DefaultTemplate>
      <FormSection />
      <FinanceSection />
    </DefaultTemplate>
  );
}