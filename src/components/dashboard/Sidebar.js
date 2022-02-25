import { Box, Text, Link, Flex, Image, useMediaQuery, useOutsideClick } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { navState, sidebarState } from '../../utils/GlobalState';
import { navItems } from '../../utils/nav';

import logo from '../../assets/images/logo.png';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import MenuDropdown from './MenuDropdown';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {
  const ref = useRef()
  const [navSize, setNavSize] = useRecoilState(navState);
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);

  const [isSmallThan768] = useMediaQuery('(max-width: 768px)')

  useOutsideClick({
    ref: ref,
    handler: () => setShowSidebar(false),
  })

  return (
    <Box
      width={navSize === 'large' ? '240px' : '4rem'}
      background="white"
      position="fixed"
      height="100vh"
      top="0"
      left={isSmallThan768 && !showSidebar ? "-100%" : "0"}
      px="1.25rem"
      py="1rem"
      ref={ref}
    >
      <Flex mb="3rem" gap="2rem" alignItems="center">
        {navSize === 'large' && (
          <Link>
            <Image src={logo} alt="sendchamp logo" height="2rem" width="auto" />
          </Link>
        )}

        {navSize === 'large' ? (
          <ChevronLeftIcon
            w={7}
            h={7}
            style={{ cursor: 'pointer' }}
            onClick={() => setNavSize('small')}
          />
        ) : (
          <ChevronRightIcon
            w={7}
            h={7}
            style={{ cursor: 'pointer' }}
            onClick={() => setNavSize('large')}
          />
        )}
      </Flex>

      <Box
        height="80vh"
        overflowY="auto"
        pb="1.5rem"
      >
        {navItems.map(({title, items}, index) => {
          return (
            <Box key={index} style={{ marginBottom: '1rem' }}>
              {navSize === 'large' && (
                <Text fontSize="sm" fontWeight="bold" pb=".75rem" color="primary">
                  {title}
                </Text>
              )}
              {items.map(({icon, name, active, path, subLink}, subIndex) => {
                return (
                  <>
                    {
                      subLink ? 
                      <MenuDropdown
                          subIndex={subIndex} 
                          active={active} 
                          icon={icon} 
                          navSize={navSize} 
                          name={name} 
                          subLink={subLink}
                      /> :
                      <Link _hover={{ textDecor: "none" }} width="90%" display="block" key={subIndex} href={path}>
                        <Flex background={active ? "#E6F1FF" : "none"} borderRadius=".35rem" py=".6rem" alignItems="center">
                          {icon}
                          {navSize === 'large' && (
                            <Text fontSize="sm" pl="1rem" color="gray.600">
                              {name}
                            </Text>
                          )}
                        </Flex>
                      </Link>
                    }
                  </>
                );
              })}
            </Box>
          );
        })}
      </Box>

      <SidebarFooter />
    </Box>
  );
};

export default Sidebar;
