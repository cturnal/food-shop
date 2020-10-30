import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box,
  PseudoBox,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
} from '@chakra-ui/core'
import Link from 'next/link'
import Headings from './Headings'

const Shop = () => (
  <Menu>
    <MenuButton
      as={Button}
      bg='transparent !important'
      border='transparent !important'
      _focus={{
        outline: 'transparent !important',
      }}
      pr='0px'
      color='black'
    >
      <i className='fas fa-shopping-cart fa-lg' pr={1}></i>
      <Text className='mobile-shop' ml={1}>
        My Cart
      </Text>
    </MenuButton>
    <MenuList>
      <MenuItem>Cart</MenuItem>
      <MenuItem>Order</MenuItem>
    </MenuList>
  </Menu>
)

const NavLink = ({ label, path, cName }) => {
  return (
    <Link href={path} passHref>
      <PseudoBox
        as='a'
        color='gray.600'
        py={3}
        fontSize='15px'
        fontWeight='500'
        letterSpacing='1px'
        mx='9px'
        _hover={{
          borderBottom: '2px solid black',
          color: 'black',
        }}
        className={cName}
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
        pl='70px'
        className={scroll ? 'hidden' : 'fb-like'}
        height='40px'
        bg='black'
        align='center'
        color='white'
      >
        <a href='https://www.facebook.com/noemislasagna' target='_blank'>
          <i className='fab fa-facebook-square fa-lg '></i>
          Like us on facebook!
        </a>
      </Flex>
      <Box
        maxW='1900px'
        w='100%'
        bg='#FFFAF0'
        position='fixed'
        pt='40px'
        zIndex='1'
        className={scroll ? 'scrolled' : 'scroll'}
      >
        <Flex
          className='nav-margin'
          h='120px'
          align='center'
          mx='50px'
          justifyContent='space-between'
        >
          <Flex className='menu' mr='-150px'>
            <PseudoBox className='menu-icon' onClick={handleClick} pt={1}>
              <i
                className={click ? 'fas fa-times fa-lg' : 'fas fa-bars fa-lg'}
              ></i>
            </PseudoBox>
            <Box className={click ? 'nav-menu active' : 'nav-menu'}>
              <NavLink
                label='Home'
                path='#home'
                cName={scroll <= 599 ? 'active-link' : 'inactive'}
              />
              <NavLink
                label='About'
                path='#about'
                cName={
                  scroll > 600 && scroll <= 1499 ? 'active-link' : 'inactive'
                }
              />
              <NavLink
                label='Products'
                path='#products'
                cName={
                  scroll > 1500 && scroll <= 2899 ? 'active-link' : 'inactive'
                }
              />
              <NavLink
                label='Reviews'
                path='#reviews'
                cName={scroll > 2900 ? 'active-link' : 'inactive'}
              />
            </Box>
          </Flex>
          <Headings cName='logo'>
            <Flex flexDirection='column' align='center' justifyContent='center'>
              <Headings size={scroll ? 'md' : 'lg'} label="Noemi's" />
              <Flex>
                <i className='fas fa-utensils'></i>
                Lasagna
              </Flex>
              <Headings
                size={scroll ? 'xs' : 'sm'}
                fontFamily='Segoe UI !important'
                label='EST. 2020'
              />
            </Flex>
          </Headings>
          <Shop />
        </Flex>
      </Box>
    </Box>
  )
}

export default Header
