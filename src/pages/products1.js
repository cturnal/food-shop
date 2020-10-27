import {
  Box,
  Badge,
  Stack,
  Image,
  Text,
  Heading,
  Divider,
  Button,
  Flex,
} from '@chakra-ui/core'

function Products1() {
  return (
    <>
      <Flex minH='80vh' h='100%' pt='90px' className='add-to-cart' mt='100px'>
        <Box
          maxW='400px'
          rounded='20px'
          overflow='hidden'
          boxShadow='2xl'
          bg='#fffaf0'
          m='auto'
        >
          <Image src='./lasagna.jpg' />
          <Box p={5}>
            <Text as='h2' fontWeight='semibold' fontSize='xl'>
              Lasagna Regular Size{' '}
            </Text>
            <Text as='h2' fontWeight='semibold' fontSize='xl' mb={1}>
              Good for 2 to 3 person...
            </Text>
            <Stack isInline align='baseline'>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                Regular
              </Badge>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                Size
              </Badge>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                {' '}
                6.54 x 5.32 x 2.1{' '}
              </Badge>
            </Stack>

            <Divider
              borderColor='gray.900'
              mx='auto'
              my={5}
              boxShadow='1px 1px 5px 0px black'
            />

            <Stack isInline justify='space-between' py={5}>
              <Heading as='h1' fontWeight='semibold' fontsize='xl'>
                ₱200.00
              </Heading>

              <Button
                variant='solid'
                bg='gray.900'
                color=' #fffaf0'
                rounded='full'
                w='200px'
                my={1}
              >
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW='400px'
          rounded='20px'
          overflow='hidden'
          boxShadow='2xl'
          bg='#fffaf0'
          m='auto'
        >
          <Image src='./lasagna.jpg' />
          <Box p={5}>
            <Text as='h2' fontWeight='semibold' fontSize='xl'>
              Lasagna Regular Size{' '}
            </Text>
            <Text as='h2' fontWeight='semibold' fontSize='xl' mb={1}>
              Good for 2 to 3 person...
            </Text>
            <Stack isInline align='baseline'>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                Regular
              </Badge>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                Size
              </Badge>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                {' '}
                6.54 x 5.32 x 2.1{' '}
              </Badge>
            </Stack>

            <Divider
              borderColor='gray.900'
              mx='auto'
              my={5}
              boxShadow='1px 1px 5px 0px black'
            />

            <Stack isInline justify='space-between' py={5}>
              <Heading as='h1' fontWeight='semibold' fontsize='xl'>
                ₱200.00
              </Heading>

              <Button
                variant='solid'
                bg='gray.900'
                color=' #fffaf0'
                rounded='full'
                w='200px'
                my={1}
              >
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW='400px'
          rounded='20px'
          overflow='hidden'
          boxShadow='2xl'
          bg='#fffaf0'
          m='auto'
        >
          <Image src='./lasagna.jpg' />
          <Box p={5}>
            <Text as='h2' fontWeight='semibold' fontSize='xl'>
              Lasagna Regular Size{' '}
            </Text>
            <Text as='h2' fontWeight='semibold' fontSize='xl' mb={1}>
              Good for 2 to 3 person...
            </Text>
            <Stack isInline align='baseline'>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                Regular
              </Badge>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                Size
              </Badge>
              <Badge
                variant='solid'
                bg='gray.900'
                rounded='full'
                color=' #fffaf0'
                px={2}
              >
                {' '}
                6.54 x 5.32 x 2.1{' '}
              </Badge>
            </Stack>

            <Divider
              borderColor='gray.900'
              mx='auto'
              my={5}
              boxShadow='1px 1px 5px 0px black'
            />

            <Stack isInline justify='space-between' py={5}>
              <Heading as='h1' fontWeight='semibold' fontsize='xl'>
                ₱200.00
              </Heading>

              <Button
                variant='solid'
                bg='gray.900'
                color=' #fffaf0'
                rounded='full'
                w='200px'
                my={1}
              >
                Add to cart
              </Button>
            </Stack>
          </Box>
        </Box>
      </Flex>
      <Box mt='auto' id='reviews'></Box>
    </>
  )
}

export default Products1
