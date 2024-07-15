import style from "./style.module.scss";

export function FinanceCard() {
  return (
    <li className={style.cardStyle}>
      <div className={style.tag} />
      <div className={`${style.content} flex-col`}>
        <h2 className="title3 black">
          Salário - Mês Dezembro
        </h2>
        <div className="flex-row between">

          <div>
            <span className="body gray">
              Entrada
            </span>
          </div>

          <div className={`${style.btnBox} flex-col`}>
            <span className="body black">
              R$ 6.660,00
            </span>
            <button className="deleteBtn">
              Excluir
            </button>
          </div>

        </div>
      </div>
    </li>
  );
}