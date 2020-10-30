import { Box, Heading, Image, Flex } from '@chakra-ui/core'

const Review = ({ image1, image2 }) => (
  <Flex
    mt='50px'
    flexDirection={['column', 'column', 'column', 'column', 'row']}
    display='inherit'
  >
    <Image src={image1} px={5} />
    <Image src={image2} px={5} />
  </Flex>
)

function Reviews() {
  return (
    <>
      <Box minH='80vh' h='100%' m='auto' w='80%' pt='20px'>
        <Box pt='50px' width='100%' my='auto' mr='0'>
          <Heading
            textAlign='center'
            fontFamily='Cherry Swash'
            fontSize='5vw'
            fontWeight='900'
            letterSpacing='5px'
            color='black'
          >
            Client Reviews
          </Heading>
          <Flex flexDirection='column' align='center'>
            <Review image1='/reviews1.png' image2='/reviews1.png' />
            <Review image1='/reviews1.png' image2='/reviews1.png' />
            <Review image1='/reviews1.png' image2='/reviews1.png' />
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Reviews
