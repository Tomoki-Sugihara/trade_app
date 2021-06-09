// import { Suspense, useEffect, useState } from "react"
import { useQuery } from 'react-query'
import { Layout } from 'src/components/layout'

const Login = () => {
  const res = useQuery('text', () => fetch('/api/test').then(async (res: any) => res.json()))
  const { data, isLoading } = res

  // const [text, setText] = useState("")
  // useEffect(() => {
  //   fetch("/api/test").then(async (res: any) => {
  //     const data = await res.json()
  //     setText(data.text)
  //   })
  // }, [])
  return (
    <Layout>
      {isLoading || data.text}
      <button>ログイン</button>
    </Layout>
  )
}

export default Login
