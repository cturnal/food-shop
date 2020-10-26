import React, { useState, useEffect } from 'react'

import {
  Flex,
  Heading,
  Box,
  PseudoBox,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
} from '@chakra-ui/core'
import Container from './Container'
import Link from 'next/link'

const routes = [
  {
    path: '#home',
    label: 'Home',
  },
  {
    path: '#about',
    label: 'About',
  },
  {
    path: '#products',
    label: 'Products',
  },
  ,
  {
    path: '#reviews',
    label: 'Reviews',
  },
]

const Shop = () => (
  <Menu>
    <MenuButton
      pl={2}
      as={Button}
      bg='none !important'
      _hover={{
        bg: 'none !important',
      }}
      _active={{
        border: 'none !important',
      }}
      _focus={{
        outline: 'none !important',
      }}
    >
      <i className='fas fa-shopping-cart fa-lg' pr={1}></i>
      <Text className='mobile-shop' ml={1} fontFamily='Cherry Swash'>
        My Cart
      </Text>
    </MenuButton>
    <MenuList>
      <MenuItem>Cart</MenuItem>
      <MenuItem>Order</MenuItem>
    </MenuList>
  </Menu>
)

const NavLink = ({ label, path, focus }) => {
  return (
    <Link href={path} passHref>
      <PseudoBox
        className='nav-links'
        as='a'
        color='gray.600'
        borderRadius='sm'
        fontWeight='bold'
        margin='0 auto'
        py={3}
        fontSize='15px'
        fontWeight='500'
        letterSpacing='1px'
        mx='9px'
        _hover={{
          borderBottom: '2px solid black',
          color: 'gray.900',
          margin: '0 auto',
          mx: '9px',
        }}
        _focusWithin={{
          borderBottom: '3px solid black',
          margin: '0 auto',
          color: 'black',
          mx: '9px',
        }}
      >
        {label}
      </PseudoBox>
    </Link>
  )
}

function Header() {
  const [scroll, setScroll] = useState(false)
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY)
    })
  })

  return (
    <Box mb='180px' id='home'>
      <Flex
        className={scroll ? 'hidden' : 'fb-like'}
        w='100%'
        height='40px'
        bg='gray.900'
        align='center'
        color='white'
      >
        <Flex mr='auto' ml='70px'>
          <a href='https://www.facebook.com/noemislasagna' target='_blank'>
            <i className='fab fa-facebook-square fa-lg '></i>
            Like us on facebook!
          </a>
        </Flex>
      </Flex>
      <Container
        bg='#FFFAF090'
        w='100%'
        position='fixed'
        pt='50px'
        zIndex='1'
        className={scroll ? 'scrolled' : 'scroll'}
      >
        <Flex
          className='nav-margin'
          h='120px'
          align='center'
          mx='50px'
          flexWrap='nowrap'
          justifyContent='space-between'
          flexDirection='row'
        >
          <Flex className='menu' mr='-150px'>
            <PseudoBox className='menu-icon' onClick={handleClick} pt={1}>
              <i
                className={click ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}
              ></i>
            </PseudoBox>
            <Box className={click ? 'nav-menu active' : 'nav-menu'}>
              {routes.map((route) => (
                <NavLink {...route} key={route.path} />
              ))}
            </Box>
          </Flex>

          <Box>
            <Heading
              className='logo'
              as='h1'
              size='xl'
              textTransform='none'
              pr='20px'
              fontFamily='Cherry Swash'
            >
              <Flex
                flexDirection='column'
                align='center'
                justifyContent='center'
              >
                <Heading
                  as='h5'
                  size={scroll ? 'sm' : 'lg'}
                  textTransform='none'
                  fontFamily='Cherry Swash'
                >
                  Noemi's
                </Heading>

                <Flex>
                  <i className='fas fa-utensils'></i>
                  Lasagna
                </Flex>
                <Heading
                  as='h5'
                  size={scroll ? 'xs' : 'sm'}
                  textTransform='uppercase'
                >
                  est. 2020
                </Heading>
              </Flex>
            </Heading>
          </Box>

          <Box>
            <Shop />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
