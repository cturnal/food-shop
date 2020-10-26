import { Divider, Flex } from '@chakra-ui/core'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'

function Content() {
  return (
    <>
      <Flex flexDirection='column'>
        <Home />
        <Divider
          id='about'
          borderColor='gray.900'
          w='70%'
          m='auto'
          boxShadow='1px 1px 5px 0px black'
        />
        <About />
        <Divider
          id='products'
          borderColor='gray.900'
          w='70%'
          m='auto'
          boxShadow='1px 1px 5px 0px black'
        />
        <Products />
        <Divider
          borderColor='gray.900'
          w='70%'
          m='auto'
          boxShadow='1px 1px 5px 0px black'
        />
      </Flex>
    </>
  )
}

export default Content
