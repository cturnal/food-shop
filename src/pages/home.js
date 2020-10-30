import { Box, Image } from '@chakra-ui/core'
import Headings from '../components/Headings'
import Buttons from '../components/Buttons'
import Container from '../components/Container'

const prefix = '/food-shop/'

function Home() {
  return (
    <>
      <Container textAlign='center' display='wrap'>
        <Headings fontSize='1.5rem' fontWeight='900'>
          Are you a cheese lover
          <br /> and a lasagna fan at the same time?
        </Headings>
        <Headings fontSize='1rem' letterSpacing='2px' fontWeight='none' my={5}>
          Then this one’s for you! Try this classic sweet and savory
          <br /> beef lasagna topped with overloaded cheese!
        </Headings>
        <Buttons as='a' href='#order' label='ORDER NOW' />
        <Image src={prefix + '/slice.png'} w='150px' m='auto' />
      </Container>
      <Box mb='100px' id='about'></Box>
    </>
  )
}

export default Home
