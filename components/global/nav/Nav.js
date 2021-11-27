import ContentWrapper from '../contentWrapper/ContentWrapper'
import Link from 'next/link'
import style from './nav.module.scss'

export default function Nav () {
    
    const Infos = () => {
        return (
            <div className={style.infos}>
                <ContentWrapper>
                    
            </ContentWrapper>
            </div>
        )
    }

    const linkUrls = [
        {
            label : "Accueil",
            url : "/",
            children : ["Some","Else"]
        },
        {
            label : "Le club",
            url : "/",
            children : ["Some","Else"]
        },
        {
            label : "Resultats",
            url : "/",
            children : ["Some","Else"]
        },
        {
            label : "Articles",
            url : "/",
            children : ["Some","Else"]
        },
        {
            label : "Contact",
            url : "/",
            children : ["Some","Else"]
        },
    ]

    const Links = () => {

        return (
            <div className={style.links}>
                <ContentWrapper>
                <ul>
                    {linkUrls.map((el, i) => {
                        return (
                            <Link href={el.url}>
                                <li>
                                    {el.label}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </ContentWrapper>
            </div>
        )
    }

    return ( 
        <nav className={style.wrapper}>
            <img src="/assets/logo/logo.svg"/>
            <Infos/>
            <Links/>
        </nav>
    )
}