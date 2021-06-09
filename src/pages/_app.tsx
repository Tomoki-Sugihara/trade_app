import "tailwindcss/tailwind.css"

import type { AppProps } from "next/app"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "react-query"

const App = (props: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <props.Component {...props.pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default App
