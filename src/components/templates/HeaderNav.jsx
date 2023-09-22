import style from "../../styles/HeaderNav.module.css"
import Nav from "./Nav"

export default function Header(props) {
    return (
        <header className={style.flex}>
            <h1>
                <Nav />
            </h1>
        </header>
    )
}