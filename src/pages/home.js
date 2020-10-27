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
            m='auto'
            fontSize={{
              xs: '6vw',
              sm: '5vw',
              md: '3.5vw',
              lg: '3vw',
              xl: '2.5vw',
            }}
            fontWeight='bold'
          >
            Are you a cheese lover <br />
            and a lasagna fan at the same time?
          </Heading>
          <Heading
            as='h6'
            size='sm'
            textAlign='center'
            fontFamily='Cherry Swash'
            letterSpacing='2px'
            my='20px'
            m='auto'
            fontSize={{
              xs: '4vw',
              sm: '3vw',
              md: '2.5vw',
              lg: '2vw',
              xl: '1.5vw',
            }}
            fontWeight='none'
          >
            Then this one’s for you! Try this classic sweet and savory beef{' '}
            <br />
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
          <Flex></Flex>
        </Flex>
        <Box mt='auto' id='about'></Box>
      </Box>
    </>
  )
}

export default Home
