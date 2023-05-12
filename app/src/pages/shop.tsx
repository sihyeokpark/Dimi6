import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef } from 'react'

import styles from '@/styles/shop.module.css'

import Navigator from './components/Navigator'

export default function shop() {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
      </Head>
      <Navigator></Navigator>
      <div className={styles.center}>
        <main className={styles.main}>
          <h1>교환소</h1>
          <section className={styles.items}>
            <div className={styles.item}>
              <img src='img/logo.png' className={styles.itemImage}/>
              <h2>금요귀가권</h2>
              <p>금요귀가권</p>
              <div className={styles.flex}>
                <img src='img/coin-small.svg' height={20}></img>
                <p><b>9999p</b></p>
              </div>
              <button>구매하기</button>
            </div>
            <div className={styles.item}>
              <img src='img/logo.png' className={styles.itemImage}/>
              <h2>아이템1</h2>
              <p>이 아이템을 사용하시면 안녕하세ffffffffffffffffffffffffffffffffffff요 입니다! 또한 그러세요를 입력하여 주무실 수 있습니다!</p>
              <div className={styles.flex}>
                <img src='img/coin-small.svg' height={20}></img>
                <p><b>1000p</b></p>
              </div>
              <button>구매하기</button>
            </div>
            <div className={styles.item}>
              <img src='img/logo.png' className={styles.itemImage}/>
              <h2>아이템1</h2>
              <p>이 아이템을 사용하시면 안녕하세요 입니다! 또한 그러세요를 입력하여 주무실 수 있습니다!</p>
              <div className={styles.flex}>
                <img src='img/coin-small.svg' height={20}></img>
                <p><b>1000p</b></p>
              </div>
              <button>구매하기</button>
            </div>
            <div className={styles.item}>
              <img src='img/logo.png' className={styles.itemImage}/>
              <h2>아이템1</h2>
              <p>이 아이템을 사용하시면 안녕하세요 입니다! 또한 그러세요를 입력하여 주무실 수 있습니다!</p>
              <div className={styles.flex}>
                <img src='img/coin-small.svg' height={20}></img>
                <p><b>1000p</b></p>
              </div>
              <button>구매하기</button>
            </div>
            <div className={styles.item}>
              <img src='img/logo.png' className={styles.itemImage}/>
              <h2>아이템1</h2>
              <p>이 아이템을 사용하시면 안녕하세요 입니다! 또한 그러세요를 입력하여 주무실 수 있습니다!</p>
              <div className={styles.flex}>
                <img src='img/coin-small.svg' height={20}></img>
                <p><b>1000p</b></p>
              </div>
              <button>구매하기</button>
            </div>
            <div className={styles.item}>
              <img src='img/logo.png' className={styles.itemImage}/>
              <h2>아이템1</h2>
              <p>이 아이템을 사용하시면 안녕하세요 입니다! 또한 그러세요를 입력하여 주무실 수 있습니다!</p>
              <div className={styles.flex}>
                <img src='img/coin-small.svg' height={20}></img>
                <p><b>1000p</b></p>
              </div>
              <button>구매하기</button>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}