import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import ContentWrapper from '../../../global/contentWrapper/ContentWrapper'
import Layout from '../../../global/layout/Layout'
import Separator from '../../../global/separator/Separator'
import style from './banner.module.scss'
import Card from './Card/Card'

export default function Banner () {

    const cardsData = [
        {
            label: "Équipe première",
            icon: "/assets/icon/team.svg",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu.",
            background : "var(--secondary)",
            opacity : 1
        },
        {
            label: "Équipe première",
            icon: "/assets/icon/team.svg",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu.",
            background : "var(--secondary)",
            opacity : .90
        },
        {
            label: "Équipe première",
            icon: "/assets/icon/team.svg",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu.",
            background : "var(--secondary)",
            opacity : .80
        },
        {
            label: "Équipe première",
            icon: "/assets/icon/team.svg",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu.",
            background : "var(--secondary)",
            opacity : .7
        },
    ]

    const textAnim = useRef()
    const cardsAnim = useRef()
    const backgroundAnim = useRef()

    const Background = () => {
        return (
            <div className={style.background}>
                <div/>
                 <img ref={backgroundAnim} src="/assets/img/banner.jpg"/>
            </div>
        )
    }

    const Cards = () => {
        return (
            <div ref={cardsAnim} className={style.card}>
                {cardsData.map((el, i) => {
                    return <Card data={el}/>
                })}
            </div>
        )
    }

    const Title = () => {

        return (
            <div className={style.title}>
                <div ref={textAnim}>
                <h1>PALS ATHLETIQUE CLUB GUISE</h1>
                <Separator/>
                <h2>Site officiel des<br/><span>Ducs de Guise</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu.</p>
                </div>
                <Cards/>
            </div>
        )
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)

        gsap.from(textAnim.current.children, {
            opacity: 0,
            x : "-10%",
            stagger: .2,
        }).duration(1)
        gsap.from(cardsAnim.current.children, {
            opacity: 0,
            y : "10%",
            stagger: .2,
        }).duration(1)
    }, [])
    
    return (
        <div style={{marginTop: "12vh"}}>
        <Layout>
            <Background/>
            <ContentWrapper>
                <Title/>
            </ContentWrapper>
        </Layout>
        </div>
    )
}