import { Button, Text } from '@chakra-ui/core'

const Buttons = ({ label, ...rest }) => (
  <Button
    variant='solid'
    bg='black'
    color='white'
    w='180px'
    boxShadow='0 10px 10px -8px black'
    _hover={{
      bg: 'orange.50',
      color: 'black',
      border: '2px solid black',
    }}
    {...rest}
  >
    <Text>{label}</Text>
  </Button>
)

export default Buttons
