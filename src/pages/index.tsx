import Head from 'next/head'
import Iamge from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <>
        <Head>
        </Head>
        <main><h1 className='text-3xl font-bold underline'>Hello World</h1></main>
      </>
    )
}