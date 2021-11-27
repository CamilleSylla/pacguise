import ContentWrapper from '../../../global/contentWrapper/ContentWrapper'
import Layout from '../../../global/layout/Layout'
import style from './article.module.scss'
import articles from '../../../../json/articles.json'

export default function Article () {

    const Title = () => {
        return (
            <div className={style.title}>
                <h1>Les derniers articles</h1>
                <h2>L'actualité du <span>PAC !</span></h2>
            </div>
        )
    }

    const Article = ({data, i}) => {
        return (
            <div className={style.article}>
                <img src={data.url}/>
                <h1> {data.title} </h1>
                <p> {data.text} </p>
            </div>
        )
    }

    const News = () => {

        return (
            <div className={style.news}>
                {articles.map((el, i) => {
                    return <Article data={el} i={i}/>
                })}
            </div>
        )
    }

    return (
        <Layout height="70vh">
            <ContentWrapper>
                <Title/>
                <News/>
            </ContentWrapper>
        </Layout>
    )
}