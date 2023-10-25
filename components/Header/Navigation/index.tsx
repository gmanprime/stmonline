import styles from './style.module.scss'
import Link from "next/link"

function index() {

    type navObj = {
        title: string;
        linkTo: string;
    }

    const navLinks: Array<navObj> = [
        {
            title: "Home",
            linkTo: "/"
        },
        {
            title: "About",
            linkTo: "/About"
        }
    ]

    let navLinkGen = (itm: Array<Object>) =>{
        return <>
            {
                itm.map((val,i) => {
                    return <li key={i}>
                        <Link href={val.linkTo}>
                            {val.title}
                        </Link>
                    </li>
                })
            }
        </>
    }

  return (
    <ul className={styles.main}>
        {
            navLinkGen(navLinks)
        }
    </ul>
  )
}

export default index