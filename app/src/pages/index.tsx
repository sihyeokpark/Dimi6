import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Navigator from './components/Navigator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dimi6</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
      </Head>
      <Navigator></Navigator>
      <div className={styles.center}>
        <main className={styles.main}>
          <div className={styles.title}>
            <p>한국디지털미디어고등학교</p>
            <h1>1학년 6반 포인트 시스템</h1>
          </div>
          <section className={styles.content}>
            <div className={styles.card}>
              <div className={styles.row}>
                <h1 className={styles.point}>포인트</h1>
                <h1 className={styles.moneyTitle}><span className={styles.money}>3400</span>p</h1>
              </div>
            </div>
            <div className={styles.card}>
              <h1>이벤트</h1>
              <p>10월 22일 박시혁의 생일</p>
            </div>
            <div className={styles.card}>
              <h1>오늘의 제제쌤</h1>
              <p>좋은 제자에게는 좋은 코치가 있다. </p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}