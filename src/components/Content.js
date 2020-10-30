import { Divider, Flex } from '@chakra-ui/core'
import Home from '../pages/home'
import About from '../pages/about'
import Products from '../pages/products'
import Products1 from '../pages/products1'
import Reviews from '../pages/reviews'

const ContentDivider = ({ margin }) => {
  return (
    <>
      <Divider
        borderColor='black'
        w='70%'
        m='auto'
        boxShadow='1px 1px 5px 0px black'
        mt={margin}
      />
    </>
  )
}

function Content() {
  return (
    <>
      <Flex flexDirection='column'>
        <Home />
        <ContentDivider />
        <About />
        <ContentDivider />
        <Products />
        <ContentDivider />
        <Products1 />
        <ContentDivider margin='50px !important' />
        <Reviews />
      </Flex>
    </>
  )
}

export default Content
