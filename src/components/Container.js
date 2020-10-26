import { Box, Flex } from '@chakra-ui/core'

const Container = ({ children, ...rest }) => (
  <Box maxW='1900px' width='100%' mx='auto' {...rest}>
    {children}
  </Box>
)

export default Container
