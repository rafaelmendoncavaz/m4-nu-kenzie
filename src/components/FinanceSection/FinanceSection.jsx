import { FinanceList } from "./FinanceList/FinanceList";
import style from "./style.module.scss";

export function FinanceSection({ resumeList, deleteValue }) {

  return (
    <div className={style.listContent}>
      <h2 className="title3 black">
        Resumo financeiro
      </h2>

      <div className={style.financeContent}>
        {
          resumeList.length > 0 
          ? <FinanceList
          resumeList={ resumeList }
          deleteValue={ deleteValue }
          />
          : <h2 className="title2 black">
            Você ainda não possui nenhum lançamento
          </h2>
          }
      </div>
    </div>
  );
}