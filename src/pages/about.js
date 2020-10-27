import { Box, Flex, Heading, Image } from '@chakra-ui/core'

function Home() {
  return (
    <>
      <Box minH='80vh' h='100%' m='auto' w='90%' pt='90px'>
        <Flex flexDirection={['column', 'column', 'column', 'row', 'row']}>
          <Flex flexDirection='column' pt='50px' m='auto'>
            <Flex
              m='auto'
              pb='70px'
              flexDirection={['column', 'column', 'row', 'row', 'row']}
            >
              <Box
                maxW='90%'
                h='auto'
                rounded='20px'
                overflow='hidden'
                boxShadow='2xl'
                m='auto'
              >
                <Image src='/lasagna.jpg' display='inherit' />
              </Box>
            </Flex>
          </Flex>
          <Box
            pb='50px'
            my='auto'
            width={[
              '100%', // base
              '100%', // 480px upwards
              '100%',
              '50%', // 768px upwards
              '50%', // 992px upwards
            ]}
          >
            <Heading
              textAlign={['center', 'center', 'center', 'left', 'left']}
              fontFamily='Cherry Swash'
              fontSize='5vw'
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
              textAlign={['center', 'center', 'center', 'left', 'left']}
              fontFamily='Cherry Swash'
              fontSize='1rem'
              fontWeight='none'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis pretium massa, ac pellentesque augue bibendum sit amet.
              Duis placerat ornare suscipit. Nunc nec velit dictum, auctor
              lectus vel, imperdiet dui. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Pellentesque
            </Heading>
          </Box>
          <Box mt='auto' id='products'></Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home
