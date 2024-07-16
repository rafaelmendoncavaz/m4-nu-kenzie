import { FinanceCard } from "./FinanceCard/FinanceCard";
import style from "./style.module.scss";

export function FinanceList({ resumeList, deleteValue }) {

  return (
      <ul className={style.cardList}>
        {
          resumeList.map(item => {
            return (
              <FinanceCard
                key={item.id}
                title={item.title}
                type={item.type}
                value={item.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                  })}
                deleteValue={deleteValue}
                item={item}
              />
            );
          })
        }
      </ul>
  );
}