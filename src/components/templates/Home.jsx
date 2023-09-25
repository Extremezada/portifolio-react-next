import Link from 'next/link'
import style from '../../styles/Home.module.css'

export default function Home(props) {

    const index0 = { '--index': '0' }
    const index1 = { '--index': '1' }
    const index2 = { '--index': '2' }
    const stack = { '--stacks': '3' }
    return (
        <div>
            <div className={style.links}>
                <Link href="/contato">Contato</Link>
                <Link href="/projetos">Projetos</Link>
            </div>
            <div className={style.container}>
                <div className={style.stack} style={stack}>
                    <span style={index0}>Dalmagro</span>
                    <span style={index1}>Dalmagro</span>
                    <span style={index2}>Dalmagro</span>
                </div>
            </div>
        </div>
    )
}