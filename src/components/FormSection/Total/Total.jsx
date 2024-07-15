import style from "./style.module.scss";

export function Total() {

  return (
    <div className={`${style.totalContent} `}>
      <div className={`${style.totalBalance}`}>
        <h2 className="title3 black">
          Valor Total:
        </h2>
        <span className="title3 primary">
          R$ 8.184,00
        </span>
      </div>
      <span className="body black">
        O Valor se refere ao saldo
      </span>
    </div>
  );
}