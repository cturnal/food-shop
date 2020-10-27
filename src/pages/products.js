import { Box, Flex, Heading, Image } from '@chakra-ui/core'

function Products() {
  return (
    <>
      <Box minH='80vh' h='100%' m='auto' w='90%' pt='90px'>
        <Flex
          flexDirection={['column', 'column', 'column', 'row', 'row']}
          mt='100px'
        >
          <Box width={['100%', '100%', '100%', '50%', '50%']} my='auto' mr='0'>
            <Heading
              textAlign={['center', 'center', 'center', 'right', 'right']}
              fontFamily='Cherry Swash'
              fontSize='5vw'
              fontWeight='900'
              letterSpacing='5px'
            >
              Our Products
            </Heading>
            <Heading
              mt='20px'
              lineHeight='30px'
              letterSpacing='2px'
              textAlign={['center', 'center', 'center', 'right', 'right']}
              fontFamily='Cherry Swash'
              fontSize='1rem'
              fontWeight='none'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis pretium massa, ac pellentesque augue bibendum sit amet.
              Duis placerat ornare suscipit. Nunc nec velit dictum, auctor
              lectus vel, imperdiet dui. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Pellentesque
            </Heading>
          </Box>
          <Flex flexDirection='column' pb='50px'>
            <Flex
              flexDirection={['column', 'column', 'row', 'row', 'row']}
              m='auto'
              maxW='90%'
            >
              <Box
                rounded='20px'
                h='auto'
                overflow='hidden'
                boxShadow='2xl'
                m='10px'
              >
                <Image src='/lasagna1.jpg' display='inherit' />
              </Box>

              <Box
                rounded='20px'
                h='auto'
                overflow='hidden'
                boxShadow='2xl'
                m='10px'
              >
                <Image src='/lasagna1.jpg' display='inherit' />
              </Box>
            </Flex>
            <Flex
              flexDirection={['column', 'column', 'row', 'row', 'row']}
              m='auto'
              maxW='90%'
            >
              <Box
                rounded='20px'
                h='auto'
                overflow='hidden'
                boxShadow='2xl'
                m='10px'
              >
                <Image src='/lasagna1.jpg' display='inherit' />
              </Box>

              <Box
                rounded='20px'
                h='auto'
                overflow='hidden'
                boxShadow='2xl'
                m='10px'
              >
                <Image src='/lasagna1.jpg' display='inherit' />
              </Box>
            </Flex>
            <Flex
              flexDirection={['column', 'column', 'row', 'row', 'row']}
              m='auto'
              maxW='90%'
            >
              <Box
                rounded='20px'
                h='auto'
                overflow='hidden'
                boxShadow='2xl'
                m='10px'
              >
                <Image src='/lasagna1.jpg' display='inherit' />
              </Box>

              <Box
                rounded='20px'
                h='auto'
                overflow='hidden'
                boxShadow='2xl'
                m='10px'
              >
                <Image src='/lasagna1.jpg' display='inherit' />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Products
