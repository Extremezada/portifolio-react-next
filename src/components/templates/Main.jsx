import style from "../../styles/Main.module.css"
import Home from "./Home"

export default function Main(props) {
    return (
        <main className={style.flex}>
            <Home />
        </main>
    )
}