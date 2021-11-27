import ContentWrapper from '../../../global/contentWrapper/ContentWrapper'
import Layout from '../../../global/layout/Layout'
import style from './score.module.scss'
import calendar from '../../../../json/calendar.json'

export default function Score () {
    const latestGame = calendar[0]

    const BoxScore = () => {

        const {team_a, team_b, date } = latestGame

        return (
            <div className={style.boxscore}>
                <p> {date} </p>
                <div className={style.score}>
                    <img src={team_a.logo}/>
                    <p> {team_a.score} </p>
                    <p>-</p>
                    <p>{team_b.score} </p>
                    <img src={team_b.logo}/>
                </div>

            </div>
        )
    }

    const Title = () => {

        return (
            <article className={style.title}>
                <h1>resultat du weekend</h1>
                <h2>Dernier match de <span>l'équipe premiere</span></h2>
            </article>
        )
    }

    return (
        <Layout height='60vh'>
            <ContentWrapper>
            <Title/>
            <BoxScore/>
            </ContentWrapper>
        </Layout>
    )
}