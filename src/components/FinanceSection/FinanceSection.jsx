import { FinanceList } from "./FinanceList/FinanceList";
import style from "./style.module.scss";

export function FinanceSection() {

  return (
    <div className={style.financeContent}>
      <FinanceList />
    </div>
  );
}