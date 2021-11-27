import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import Separator from '../../../../global/separator/Separator'
import style from './about.module.scss'

export default function About () {

    const wrapper = useRef()
    const contentAnim = useRef()

    const Content = () => {

        return (
            <article ref={contentAnim} className={style.content}>
                <h1>Faire vibrer nos supporter</h1>
                <h2>A propos du <span>Club</span></h2>
                <Separator/>
                <p className={style.slogan}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu. Donec convallis metus eros, ut gravida augue semper eget. Duis at elit laoreet, viverra ligula lobortis, tincidunt augue.</p>
                <img src="/assets/img/sign.png"/>
                <h3>President du PAC Guise</h3>
                <p>Yves Chatelain</p>
            </article>
        )
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.from(wrapper.current, {
            x : "-100%",
            scrollTrigger: {
                trigger : wrapper.current,
                start : "top bottom",
                end : "bottom bottom",
                scrub: .2,
            }
        })
        gsap.from(contentAnim.current.children, {
            x : "-10%",
            opacity : 0,
            stagger: .25,
            scrollTrigger: {
                trigger : wrapper.current,
                start : "top+=50% bottom",
            }
        }).duration(1)
    }, [])

    return (
        <section ref={wrapper} className={style.wrapper}>
            <img className={style.illustration} src="/assets/img/about.jpg"/>
            <Content/>
        </section>
    )
}