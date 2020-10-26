import { Box, Flex } from '@chakra-ui/core'
import Container from './Container'

function Footer() {
  return (
    <>
      <Box>
        <Flex
          float='bottom'
          h='80px'
          bg='gray.900'
          align='center'
          justifyContent='center'
          my={5}
          color='white'
        >
          Copyright &copy; Noemi's Lasagna
        </Flex>
      </Box>
    </>
  )
}

export default Footer
