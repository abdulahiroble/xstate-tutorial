import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import StateMachine from '../components/StateMachine'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <StateMachine />
    </div>
  )
}

export default Home
