import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const MenuDropdown = ({ subIndex, active, icon, navSize, name, subLink }) => {
    const [show, setShow] = useState(false)
  return (
    <Box
      _hover={{ textDecor: 'none' }}
      cursor="pointer"
      width="90%"
      display="block"
      key={subIndex}
      onClick={() => setShow(!show)}
    >
      <Flex
        background={active ? '#E6F1FF' : 'none'}
        borderRadius=".35rem"
        py=".6rem"
        alignItems="center"
      >
        {icon}
        {navSize === 'large' && (
          <Text fontSize="sm" pl="1rem" color="gray.600">
            {name}
          </Text>
        )}
        {navSize === 'large' && subLink && <ChevronDownIcon />}
      </Flex>
      <Box height={show ? "auto" : "0"} overflowY="hidden">
        {
            subLink.map((link, index) => {
                return (
                <Link display="block" py="0.5rem" fontSize=".875rem" color="gray.500" ml="1rem" key={index} _hover={{ textDor: 'none' }}>{ link }</Link>
                )
            })
        }
      </Box>
    </Box>
  );
};

export default MenuDropdown;
