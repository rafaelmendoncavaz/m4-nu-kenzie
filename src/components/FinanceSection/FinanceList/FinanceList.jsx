import { FinanceCard } from "./FinanceCard/FinanceCard";
import style from "./style.module.scss";

export function FinanceList() {

  return (
    <ul className={style.cardList}>
      <FinanceCard />
    </ul>
  );
}