import { useEffect, useRef } from 'react';
import style from './card.module.scss'

export default function Card ({data}) {
    console.log(data.opacity);

    const card = useRef()

    const Icon = () => {

        return (
            <div className={style.icon}>
                <img src={data.icon}/>
            </div>
        )
    }

    // useEffect(() => {
    //     card.current.style.opacity = data.opacity
    // }, [])

    return (
        <article ref={card} className={style.wrapper}>
            <Icon/>
            <h1> {data.label} </h1>
            <p> {data.text} </p>
            <div style={{background: data.background, opacity: data.opacity}} className={style.background}/>
        </article>
    )
}