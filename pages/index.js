import Head from 'next/head'
// import  Header   from './header/Header'
// import EssayList from './essayList/EssayList'
import styles from '@/styles/Home.module.css'
// import ReactFullpage from '@fullpage/react-fullpage';
import Fullpage from "./tolist/list"


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bibooo"></meta>
        <meta name="description" content="身份只是本质的一种形式，而我的本质是一个戴面具的人。&amp 在你眼帘中的，是一位低贱的杂耍老手，他在命运的沉浮中随波逐流，扮演着受害与加害者的双重主角，这面孔，不徒是虚华的外表，它还是业已不再的人民呼声的残响，但是，不惮于重提昔日烦恼的他，依然活力怏然，决心铲除那些腐败堕落的毒虫，他们是作恶的先锋，他们代表了对自由意志肆无忌惮的恶意破坏对他们裁决只有复仇，这象征期望的血海深仇不会是徒然的，因为它的价值和正确性，终有一天会证明，那些高尚者和警醒者是对的。&amp"></meta>
        <meta name="keyword" content="习惯孤独;bibooo;cs;kz;持续学习;持续写博客; 此生理想;近期计划;今日功课;"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="https://shoka.lostyu.me/images/apple-touch-icon.png"></link>
        <link rel="shortcut icon" type="images/x-icon" href="https://bibooo.top/upload/2023/03/favicon-removebg-preview.png"></link>
        <link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/c/font_4012067_64drlh3sy1i.css"></link>
        <title>🍀 = 習慣孤獨 = Bibooo</title>
      </Head>
      <main className={styles.main}>
         {/* <Header/> */}
         <Fullpage/>
         {/* <EssayList/> */}
        
      </main>
    </>
    
  )
}
