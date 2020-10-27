import { Box, Heading } from '@chakra-ui/core'

function Reviews() {
  return (
    <>
      <Box minH='80vh' h='100%' m='auto' w='80%' pt='90px'>
        <Box pt='50px' width='100%' my='auto' mr='0'>
          <Heading
            textAlign='center'
            fontFamily='Cherry Swash'
            fontSize='5vw'
            fontWeight='900'
            letterSpacing='5px'
          >
            Reviews
          </Heading>
        </Box>
      </Box>
    </>
  )
}

export default Reviews
