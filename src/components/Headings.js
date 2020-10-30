import { Heading } from '@chakra-ui/core'

const Headings = ({ cName, label, children, ...rest }) => {
  return (
    <>
      <Heading
        className={cName}
        textTransform='none'
        fontFamily='Cherry Swash'
        transition='0.3s'
        color='black'
        {...rest}
      >
        {label}
        {children}
      </Heading>
    </>
  )
}

export default Headings
