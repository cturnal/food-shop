import { Box, Image, Flex } from '@chakra-ui/core'
import Container from '../components/Container'
import Headings from '../components/Headings'
const prefix = '/food-shop'

const Images = ({ image1, image2 }) => (
  <Flex
    m='auto'
    flexDirection={{
      xs: 'column',
      sm: 'column',
      md: 'row',
      lg: 'row',
      xl: 'row',
    }}
  >
    <Box m='auto' px={2} w={{ lg: '50%' }}>
      <Image
        src={prefix + image1}
        rounded='20px'
        boxShadow='2xl'
        display='inherit'
        my={2}
      />{' '}
    </Box>
    <Box m='auto' px={2} w={{ lg: '50%' }}>
      <Image
        src={prefix + image2}
        rounded='20px'
        boxShadow='2xl'
        display='inherit'
        my={2}
      />
    </Box>
  </Flex>
)

function Products() {
  return (
    <>
      <Container>
        <Box flexShrink='0' m='auto' w={{ lg: '50%' }} px={2}>
          <Headings
            fontSize='5vw'
            fontWeight='900'
            letterSpacing='5px'
            textAlign={{ xs: 'center', sm: 'center', lg: 'Right', xl: 'Right' }}
            label='Our Products'
          />
          <Headings
            fontSize='1rem'
            fontWeight='none'
            letterSpacing='2px'
            textAlign={['center', 'center', 'center', 'Right', 'Right']}
            lineHeight='30px'
            mt='20px'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sagittis pretium massa, ac pellentesque augue bibendum sit amet.
            Duis placerat ornare suscipit. Nunc nec velit dictum, auctor lectus
            vel, imperdiet dui. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Pellentesque
          </Headings>
        </Box>
        <Box m='10px'>
          <Images image1='/lasagna1.jpg' image2='/lasagna1.jpg' />
          <Images image1='/lasagna1.jpg' image2='/lasagna1.jpg' />
          <Images image1='/lasagna1.jpg' image2='/lasagna1.jpg' />
        </Box>
      </Container>
      <Box mb='105px' id='order'></Box>
    </>
  )
}

export default Products
