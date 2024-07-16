import style from "./style.module.scss";

// eslint-disable-next-line react/prop-types
export function FinanceCard({ title, type, value, deleteValue, item }) {
  return (
    <li className={style.cardStyle}>
      <div className={`${style.tag} ${style[type]}`} />
      <div className={`${style.content} flex-col`}>
        <h2 className="title3 black">
          { title }
        </h2>
        <div className="flex-row between">

          <div>
            <span className="body gray">
              { type }
            </span>
          </div>

          <div className={`${style.btnBox} flex-col`}>
            <span className="body black">
              { value }
            </span>
            <button className="deleteBtn" onClick={() => deleteValue(item)} >
              Excluir
            </button>
          </div>

        </div>
      </div>
    </li>
  );
}