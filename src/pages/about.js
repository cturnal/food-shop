import { Box, Image } from '@chakra-ui/core'
import Container from '../components/Container'
import Headings from '../components/Headings'

function About() {
  return (
    <>
      <Container>
        <Box flexShrink='0' m='auto' px='20px' w={{ lg: '50%' }} mx='10px'>
          <Image shadow='2xl' rounded='20px' src='/lasagna.jpg' />
        </Box>
        <Box m='auto' w={{ xl: '50%' }} mt='50px'>
          <Headings
            fontSize='5vw'
            fontWeight='900'
            letterSpacing='5px'
            textAlign={{ xs: 'center', sm: 'center', lg: 'left', xl: 'left' }}
            label='About Us'
          />
          <Headings
            fontSize='1rem'
            fontWeight='none'
            letterSpacing='2px'
            textAlign={['center', 'center', 'center', 'left', 'left']}
            lineHeight='30px'
            mt='20px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sagittis pretium massa, ac pellentesque augue bibendum sit amet.
            Duis placerat ornare suscipit. Nunc nec velit dictum, auctor lectus
            vel, imperdiet dui. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Pellentesque'
          </Headings>
        </Box>
      </Container>
      <Box mt='auto' id='products'></Box>
    </>
  )
}

export default About
