import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Switch, Tag, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { RiTeamLine } from 'react-icons/ri';

import { HiOutlineCursorClick } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { BsSliders } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { navState, sidebarState } from '../../utils/GlobalState';

const Header = () => {
  const [navSize, ] = useRecoilState(navState);
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);

  const [isSmallThan768] = useMediaQuery('(max-width: 768px)')

  const getNavSize = () => {
    if(navSize === "large" && !isSmallThan768) {
      return "256px"
    }
    else if(navSize === "small" && !isSmallThan768) {
      return "5rem"
    }
    else if(isSmallThan768) {
      return "1%"
    }
  }

  return (
    <Flex 
      position="sticky"
      top="0"
      height="10vh" 
      background="white" 
      px="1%" 
      alignItems="center" 
      justifyContent="space-between"
      z-index="2"
      pl={getNavSize}
    >
      {
        isSmallThan768 &&
        <IconButton
          icon={<HamburgerIcon />}
          background="none"
          mr="4px"
          onClick={() => setShowSidebar(!showSidebar)}
        />
      }
      <Text fontSize={isSmallThan768 ? 'xs' : 'md'}>Welcome back, <b>Emmanuel</b> 👋</Text>

      <Flex gap="2rem" alignItems="center">
        {!isSmallThan768 && (
          <Button 
            leftIcon={<HiOutlineCursorClick />} 
            background='primary' 
            _hover={{ bg: "primaryShade" }}
            color='white'>
            Take tour
          </Button>
        )}

        <Flex gap=".5rem" alignItems="center">
          <Text fontSize={isSmallThan768 ? 'xs' : 'md'}>Live mode</Text>
          <Switch backgrond='primary' size={isSmallThan768 ? 'sm' : 'lg'} color='white' />
        </Flex>

        <Menu>
          <MenuButton as={Button} px={isSmallThan768 ? "1px" : "4px"} py="4px" rightIcon={<ChevronDownIcon />}>
            <IconButton
              background='primary'
              color='white'
              aria-label='Search database'
              icon={<BiUser />}
              style={{ boxSizing: 'border-box' }}
              height="2rem"
              width="2rem"
              my="4px"
              mr="4px"
            />
            {!isSmallThan768 && "Emmanuel Y..."}
          </MenuButton>
          <MenuList width="300px">
            <Flex 
              flexDirection="column" 
              alignItems="center" 
              justifyContent="center"
              pt="1rem"
              pb="1rem"
            >
              <Flex>
                <Text fontSize='xl' fontWeight={700}>Emmanuel Yusuf</Text>
                <Tag 
                  size='sm' variant='subtle' 
                  background='#E6F1FF' 
                  color="primary"
                  _hover={{ background: 'gray.200' }}
                  cursor="pointer"
                  ml=".75rem"
                >
                  SWITCH
                </Tag>
              </Flex>
              <Text fontSize='xs' fontWeight={300}>Emaz4me@gmail.com</Text>

              <Button 
                color='black' 
                background="gray.200" 
                _hover="gray.300" 
                size='md'
                width="200px"
                fontWeight={700}
                mt="1.5rem"
              >
                NGN 0.00
              </Button>
            </Flex>
            <MenuItem
              border="1px"
              borderColor='gray.200'
            >
              <Flex alignItems="center">
                <IconButton 
                  background='primaryLight'
                  icon={<RiTeamLine />}
                  borderRadius=".25rem"
                  mr=".75rem"
                />
                <Text fontSize='sm' fontWeight={700}>Teammates</Text>
              </Flex>
            </MenuItem>
            <MenuItem
              border="1px"
              borderColor='gray.200'
            >
              <Flex alignItems="center">
                <IconButton 
                  background='primaryLight'
                  icon={<BsSliders />}
                  borderRadius=".25rem"
                  mr=".75rem"
                />
                <Text fontSize='sm' fontWeight={700}>Account Settings</Text>
              </Flex>
            </MenuItem>
            <MenuItem fontSize="sm" fontWeight={700}>Developer Community</MenuItem>
            <MenuItem fontSize="sm" fontWeight={700}>Documentation</MenuItem>
            <MenuItem fontSize="sm" fontWeight={700}>Suggest a Feature</MenuItem>
            <MenuItem fontSize="sm" fontWeight={700} color="red">Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Header