import style from "./style.module.scss";

export function Total({ resumeList }) {

  return (
    <div className={`${style.totalContent} `}>
      <div className={`${style.totalBalance}`}>
        <h2 className="title3 black">
          Valor Total:
        </h2>
        <span className="title3 primary">
          {
            resumeList.reduce((acc, curr) => acc + curr.value, 0).toLocaleString("pt-BR", { style: "currency", "currency": "BRL" })
          }
        </span>
      </div>
      <span className="body black">
        O Valor se refere ao saldo
      </span>
    </div>
  );
}