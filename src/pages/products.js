import { Box, Flex, Heading, Image } from '@chakra-ui/core'

function Products() {
  return (
    <>
      <Box minH='80vh' h='100%' m='auto' w='80%'>
        <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
          <Box
            pt='150px'
            width={[
              '100%', // base
              '100%', // 480px upwards
              '100%',
              '100%', // 768px upwards
              '50%', // 992px upwards
            ]}
            px='20px'
          >
            <Heading
              as='h1'
              size='2xl'
              textAlign={['center', 'center', 'center', 'center', 'right']}
              fontFamily='Cherry Swash'
              fontSize='5vh'
              fontWeight='900'
              letterSpacing='5px'
            >
              Our Products
              <br />
            </Heading>
            <Heading
              mt='20px'
              lineHeight='30px'
              letterSpacing='2px'
              as='h6'
              size='sm'
              textAlign={['center', 'center', 'center', 'center', 'right']}
              fontFamily='Cherry Swash'
              fontSize='1rem'
              fontWeight='none'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Sed sagittis pretium massa, ac pellentesque augue{' '}
              <br />
              bibendum sit amet. Duis placerat ornare suscipit. Nunc nec velit{' '}
              <br />
              dictum, auctor lectus vel, imperdiet dui. Class aptent taciti{' '}
              <br />
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
              <br /> Pellentesque
            </Heading>
          </Box>
          <Flex flexDirection='column' py='50px' m='auto'>
            <Flex flexDirection={['column', 'column', 'column', 'row', 'row']}>
              <Image
                m={3}
                src='/img2.jpg'
                w='300px'
                h='200px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
                borderRadius='10px'
              />
              <Image
                m={3}
                src='/img4.jpg'
                w='300px'
                h='200px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
                borderRadius='10px'
              />
            </Flex>
            <Flex flexDirection={['column', 'column', 'column', 'row', 'row']}>
              <Image
                m={3}
                src='/img5.jpg'
                w='300px'
                h='200px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
                borderRadius='10px'
              />
              <Image
                m={3}
                src='/img6.jpg'
                w='300px'
                h='200px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
                borderRadius='10px'
              />
            </Flex>
            <Flex flexDirection={['column', 'column', 'column', 'row', 'row']}>
              <Image
                m={3}
                src='/img7.jpg'
                w='300px'
                h='200px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
                borderRadius='10px'
              />
              <Image
                m={3}
                src='/img9.jpg'
                w='300px'
                h='200px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
                borderRadius='10px'
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Products
