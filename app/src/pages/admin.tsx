import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRef, useEffect, useState, RefObject } from 'react'

import styles from '@/styles/admin.module.css'

import Navigator from './components/Navigator'
import { members } from '../lib/classMembers'
import adminMembers from '../data/admin.json'

export default function admin() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)

  const name = useRef<HTMLSelectElement | null>(null)
  const money = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    verify()
  }, [])

  async function verify() {
    const token = localStorage.getItem('token')
    if (token === '') return false
    const data = await (await fetch(`/api/verify?token=${token}`)).json()
    if (data.StatusCode == 200 && adminMembers.indexOf(data.name) != -1) setIsAdmin(true)
    else {
      alert('관리자만 접근 가능합니다.')
      router.push('/')
      setIsAdmin(false)
    }
  }

  async function send() {
    if (!isAdmin) return false
    const data = await (await fetch(`/api/point/send?from=${localStorage.getItem('token')}&to=${name.current?.value}&money=${money.current?.value}`)).json()
    if (data.StatusCode == 200) {
      alert('성공적으로 포인트를 전송했습니다.\n' + data.message)
    } else {
      alert('오류가 발생했습니다.\n' + data.error)
    }
  }

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
      </Head>
      <Navigator></Navigator>
      <div className={styles.center}>
        <main className={styles.main}>
          <h1>관리자 페이지</h1>
          {isAdmin && (
            <div>
              <section className={styles.section}>
                <h2>포인트 전송</h2>
                <input ref={money} type='number' placeholder='1000'></input>
                <select ref={name} className={styles.select}>
                  {members.map((member) => (
                    <option value={member}>{member}</option>
                  ))}
                </select>
                <button onClick={send}>전송</button>
              </section>
            </div>
          )}
        </main>
      </div>
    </>
  )
}