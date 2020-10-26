import Head from 'next/head'
import React from 'react'
import { Flex } from '@chakra-ui/core'
import Header from '../components/Header'
import Content from '../components/Content'

import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Head>
        <title>Noemi's Cheesy Beef Lasagna</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
          integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
          crossorigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cherry+Swash:wght@400;700&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Flex flexDirection='column'>
        <Header />
        <Content />
        <Footer />
      </Flex>
    </>
  )
}

export default Home
