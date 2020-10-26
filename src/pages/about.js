import { Box, Flex, Heading, Image } from '@chakra-ui/core'

function Home() {
  return (
    <>
      <Box minH='80vh' h='100%' m='auto' w='80%' pt='90px'>
        <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
          <Flex flexDirection='column' pt='50px' m='auto'>
            <Flex
              m='auto'
              flexDirection={['column', 'column', 'row', 'row', 'row']}
            >
              <Image
                m={3}
                src='/img8.jpg'
                w='700px'
                h='500px'
                borderRadius='10px'
                border='5px solid white'
                boxShadow='0 0 10px -3px black'
              />
            </Flex>
          </Flex>
          <Box
            pb='50px'
            my='auto'
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
              textAlign={['center', 'center', 'center', 'center', 'left']}
              fontFamily='Cherry Swash'
              fontSize='5vh'
              fontWeight='900'
              letterSpacing='5px'
            >
              About Us
              <br />
            </Heading>
            <Heading
              mt='20px'
              lineHeight='30px'
              letterSpacing='2px'
              as='h6'
              size='sm'
              textAlign={['center', 'center', 'center', 'center', 'left']}
              fontFamily='Cherry Swash'
              fontSize='1rem'
              fontWeight='none'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
              Sed sagittis pretium massa, ac pellentesque augue bibendum sit
              <br /> amet. Duis placerat ornare suscipit. Nunc nec velit dictum,
              <br /> auctor lectus vel, imperdiet dui. Class aptent taciti
              sociosqu
              <br /> ad litora torquent per conubia nostra, per inceptos
              himenaeos.
              <br /> Pellentesque
            </Heading>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home
