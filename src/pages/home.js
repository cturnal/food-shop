import { Box, Flex, Heading, Button, Text, Image } from '@chakra-ui/core'

function Home() {
  return (
    <>
      <Box h='100%' minH='70vh' m='auto' className='home-bg'>
        <Flex direction='column' py='120px' px={4} w='85%' m='auto'>
          <Heading
            as='h1'
            size='2xl'
            textAlign='center'
            fontFamily='Cherry Swash'
            letterSpacing='2px'
            w='60%'
            m='auto'
            fontSize={{
              sm: '4.5vw',
              md: '3.5vw',
              lg: '3vw',
              xl: '2.5vw',
            }}
            fontWeight='lighter'
          >
            Are you a cheese lover <br />
            and a lasagna fan at the same time?
          </Heading>
          <Heading
            as='h6'
            size='sm'
            textAlign='center'
            fontFamily='Cherry Swash'
            lineHeight='30px'
            letterSpacing='2px'
            my='20px'
            w='40%'
            m='auto'
            fontSize={{
              sm: '3vw',
              md: '2.5vw',
              lg: '2vw',
              xl: '1vw',
            }}
            fontWeight='none'
          >
            Then this one’s for you! Try this classic sweet and savory beef
            lasagna topped with overloaded cheese!
          </Heading>
          <Button
            color='orange.50'
            bg='gray.900'
            size='lg'
            my='20px'
            h='45px'
            mx='auto'
            textTransform='uppercase'
            _hover={{
              bg: 'orange.50',
              color: 'gray.900',
              border: '2px solid black',
            }}
          >
            <Text px={5} fontSize='0.9rem'>
              Order now
            </Text>
          </Button>
          {/* <Box h='150px' w='auto'>
            <Image src='/banner.png' m='auto' />
          </Box> */}
        </Flex>
      </Box>
    </>
  )
}

export default Home
