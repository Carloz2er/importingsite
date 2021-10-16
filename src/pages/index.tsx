import Head from 'next/head'
import Image from 'next/image'
import TopHeadBar from '../components/HeadBar'
import Main from '../components/Main'
import Why from '../components/Why'
import EndFootBar from '../components/FootBar'
import Sobre from '../components/Sobre'
import { useRef } from 'react'

export default function Home() {

  const sobre = useRef()

  return (
    <div className="cinza text-white"> 
        <TopHeadBar/>
        <Main link={sobre}/>
        <Why/>
        <Sobre link={sobre}/>
        <EndFootBar/>
    </div>
  )
}
