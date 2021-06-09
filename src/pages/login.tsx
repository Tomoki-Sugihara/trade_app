import { Suspense, useEffect, useState } from "react"
import { Layout } from "src/components/layout"

// export const getServerSideProps = async () => {
//   const res = await axios.get('api/test')
//   // const res = await fetch('api/test')
//   // const data = await res.json()

//   return {
//     props: {
//       serverText: res.data.text,
//     },
//   }
// }

const Login = (props: { serverText: string }) => {
  const [text, setText] = useState("")
  console.log((process as any).client)
  useEffect(() => {
    fetch("/api/test").then(async (res: any) => {
      const data = await res.json()
      console.log(data)
      setText(data.text)
    })
  }, [])
  return (
    <Layout>
      {text}
      <button>ログイン</button>
    </Layout>
  )
}

export default Login
