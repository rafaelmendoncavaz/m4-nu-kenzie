import style from "./style.module.scss"

export function Footer() {

  return(
    <footer className={style.footerBox}>
      <div className="container flex-row center">
        <h3 className="title3 black">
          &copy; 2024 NuKenzie. All rights reserved.
        </h3>
      </div>
    </footer>
  )
}