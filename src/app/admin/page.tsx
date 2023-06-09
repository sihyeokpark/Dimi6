'use client'

import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'

import styles from '@/styles/admin.module.css'

import { members } from '@/lib/classMembers'
import adminMembers from '@/data/admin.json'
import rules from '@/data/rule.json'

export default function admin() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)

  const name = useRef<HTMLSelectElement>(null)
  const money = useRef<HTMLInputElement>(null)
  const ruleSelect = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    verify()
  }, [])

  async function verify() {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('관리자만 접근 가능합니다.')
      setIsAdmin(false)
      router.push('/')
    }
    const res = await fetch('/api/user/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token
      })
    })
    const data = await res.json()
    if (isAdmin || (res.status === 200 && adminMembers.indexOf(data.name) !== -1)) setIsAdmin(true)
    else {
      alert('관리자만 접근 가능합니다.')
      router.push('/')
      setIsAdmin(false)
    }
  }

  async function send() {
    if (!isAdmin) return false
    const res = await fetch('/api/point/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: localStorage.getItem('token'),
        to: name.current?.value,
        money: money.current?.value
      })
    })
    const data = await res.json()
    if (res.status === 200) {
      alert('성공적으로 포인트를 전송했습니다.\n' + data.message)
    } else {
      alert('오류가 발생했습니다.\n' + data.error)
    }
  }

  function changePoint(e: React.ChangeEvent<HTMLSelectElement>) {
    money.current!.value = '-'+e.target.value.split('-')[1]
  }

  return (
    <>
      <div className={styles.center}>
        <main className={styles.main}>
          <h1>관리자 페이지</h1>
          {isAdmin && (
            <>
              <div>
                <section className={styles.section}>
                  <h2>포인트 전송</h2>
                  <input ref={money} type='number' placeholder='1000'></input>
                  <select ref={ruleSelect} onChange={changePoint} className={styles.select}>
                    {rules.map((rule, index) => (
                      <option key={index+1} value={rule.name + ' ' + rule.point.toString()}>{`${rule.name} [${rule.point.toString()}]`}</option>
                    ))}
                  </select>
                  <select ref={name} className={styles.select}>
                    {members.map((member, index) => {
                      if (member === '') return
                      return (
                        <option key={index+1} value={member}>{`${index+1} ${member}`}</option>
                      )
                    })}
                  </select>
                  <button onClick={send}>전송</button>
                </section>
              </div>
              <table className={styles.schedule}>
                <thead>
                  <tr>
                    <th className={styles.schedule}>번호</th>
                    <th className={styles.schedule}>이름</th>
                    <th className={styles.schedule}>포인트</th>
                  </tr>
                </thead>
                <tbody>
                    <tr key={1} className={styles.schedule}>
                      <td className={styles.schedule}>test</td>
                      <td className={styles.schedule}>test</td>
                      <td className={styles.schedule}>test</td>
                    </tr>
                </tbody>
              </table>
            </>
          )}
        </main>
      </div>
    </>
  )
}