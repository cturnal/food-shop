import { Box } from '@chakra-ui/core'

const Container = ({ children, cName, ...rest }) => (
  <Box
    h='100%'
    minH='70vh'
    m='auto'
    maxW='80%'
    display={{ lg: 'flex' }}
    py='140px'
    className={cName}
    {...rest}
  >
    {children}
  </Box>
)

export default Container
