import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss";

export function Header() {

  return (
    <header className={style.headerBox}>
      <div className="container flex-row">
        <img src={Logo} alt="Nu Kenzie" />
      </div>
    </header>
  );
}