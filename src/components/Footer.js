import { Box, Flex } from '@chakra-ui/core'

function Footer() {
  return (
    <>
      <Box>
        <Flex
          float='bottom'
          h='80px'
          bg='black'
          align='center'
          justifyContent='center'
          mt={5}
          mb='0px'
          pb='0px'
          color='white'
        >
          Copyright &copy; Noemi's Lasagna
        </Flex>
      </Box>
    </>
  )
}

export default Footer
