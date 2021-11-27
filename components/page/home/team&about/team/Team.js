import style from "./team.module.scss";
import team from "../../../../../json/national3.json";
import ContentWrapper from "../../../../global/contentWrapper/ContentWrapper";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Team() {

    const title = useRef()
    const cards = useRef()

  const PlayerCard = ({ data, i }) => {
    return (
      <article key={i} className={style.playerCard}>
        <img src={data.picture} />
        <h1>{data.prenom + " " + data.nom}</h1>
      </article>
    );
  };
  const Slider = () => {
    return (
      <div ref={cards} className={style.slide}>
        {team.map((el, i) => {
          return <PlayerCard data={el} i={i} />;
        })}
      </div>
    );
  };
  const Title = () => {
      return (
          <div ref={title} className={style.title}>
              <h1>L'effectif de <span>l'équipe premiere</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et augue dapibus, volutpat risus nec, auctor arcu</p>
          </div>
      )
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(title.current.children, {
        x : "-10%",
        opacity : 0,
        stagger : .25,
        scrollTrigger : {
            trigger : title.current,
        }
    })
    
    gsap.from(cards.current.children, {
        y : "-10%",
        opacity : 0,
        stagger : .25,
        scrollTrigger : {
            trigger: cards.current,
        }
    }).duration(1)
  }, [])

  return (
    <section className={style.wrapper}>
      <div className={style.blur}>
          <ContentWrapper>
            <Title/>
          <Slider/>
          </ContentWrapper>
      </div>
    </section>
  );
}
