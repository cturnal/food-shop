import { Flex, Box, Text, Image, Divider } from '@chakra-ui/core'
import Buttons from './Buttons'

const prefix = '/food-shop'

const product = {
  imageUrl: '/lasagna1.jpg',
  title: 'LASAGNA',
  price: '₱200.00',
  reviewCount: 34,
  rating: 4,
}

function Cards() {
  return (
    <Box
      width={{ xs: '240px', sm: '350px', md: '550px' }}
      margin='0 auto'
      position='relative'
      p={2}
    >
      <Flex
        flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
        bg='orange.50'
        color='white'
        padding='15px'
        borderRadius='7px'
        position='relative'
        boxShadow='0px 0px 5px -1px black'
      >
        <Box rounded='20px' alignItems='center' m='auto'>
          <Image rounded='lg' h='auto' src={prefix + product.imageUrl} />
        </Box>
        <Box padding='10px 20px'>
          <Text color='black' as='h3' fontSize='20px' fontWeight='900'>
            {product.title}{' '}
          </Text>
          <Divider borderColor='black'></Divider>
          <Text color='black'>Regular Size </Text>
          <Text color='black'>Good for 2 to 3 person </Text>
          <Text color='black' fontWeight='900' py={3}>
            {product.price}
          </Text>
          <Buttons label='Order' />
        </Box>
      </Flex>
    </Box>
  )
}

export default Cards
