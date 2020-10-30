import { Box, Flex } from '@chakra-ui/core'
import Container from '../components/Container'
import Cards from '../components/Cards'

const prefix = '/food-shop/'

const addToCart = {
  imageSrc: '/lasagna.jpg',
}

function Products1() {
  return (
    <>
      <Container
        cName='add-to-cart'
        style={{
          backgroud:
            'linear-gradient(#fffaf0, #fffaf050 50%, #fffaf0)' +
            ' url(' +
            prefix +
            addToCart.imageSrc +
            ')' +
            'fixed',
          backgroudSize: 'cover',
          width: '100%',
          paddingBottom: '150px',
          position: 'relative',
          maxW: '100%',
        }}
      >
        <Box m='auto'>
          <Flex
            flexDirection={{
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'column',
              xl: 'row',
            }}
          >
            <Cards />
            <Cards />
          </Flex>
          <Flex
            m='auto'
            flexDirection={{
              xs: 'column',
              sm: 'column',
              md: 'column',
              lg: 'column',
              xl: 'row',
            }}
          >
            <Cards />
            <Cards />
          </Flex>
        </Box>
      </Container>
      <Box mt='auto' id='reviews'></Box>
    </>
  )
}

export default Products1
