import Head from 'next/head'
import Article from '../components/page/home/articles/Articles'
import Banner from '../components/page/home/banner/Banner'
import Score from '../components/page/home/score/Score'
import TeamAbout from '../components/page/home/team&about/TeamAbout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <Score/>
        <TeamAbout/>
        <Article/>
      </main>
    </div>
  )
}
