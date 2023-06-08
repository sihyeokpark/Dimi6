'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Post } from '@prisma/client'

import styles from '@/styles/notice.module.css'

export default function shop() {
  const router = useRouter()

  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
    getPost()
  }, [])

  async function getPost() {
    const res = await fetch('/api/post/get')
    const data = await res.json()
    
    if (res.status === 200) {
      setPostList(data)
    }
  }

  
  return (
    <>
      <div className={styles.center}>
        <main className={styles.main}>
          <h1>게시판</h1>
          
          <table className={styles.noticeTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {
                postList.map((post, index) => {
                  return (
                    <tr key={index} onClick={() => {
                      router.push(`/notice/${post.id}`)
                    }}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.writer}</td>
                      <td>{post.date.toString().split('T')[0].replaceAll('-', '.')}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}