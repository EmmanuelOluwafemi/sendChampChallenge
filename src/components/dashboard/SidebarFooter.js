import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { useRecoilState } from 'recoil';
import { navState, sidebarState } from '../../utils/GlobalState';

const SidebarFooter = () => {

    const [navSize] = useRecoilState(navState);

    const [showSidebar] = useRecoilState(sidebarState);

    const [isSmallThan768] = useMediaQuery('(max-width: 768px)')

    return (
        <Flex
            position="fixed"
            bottom="0"
            left={isSmallThan768 && !showSidebar ? "-100%" : "0"}
            width={navSize === 'large' ? "240px" : "4rem"} 
            background="white"
            height="11vh" 
            py="1.5rem"
            px="1.25rem"
            display="flex"
            alignItems="center"
            cursor="pointer"
        >
            <RiLogoutBoxLine size="1.25rem" />
            {navSize === 'large' && <Text fontSize="sm" ml="1rem">Logout</Text>}
        </Flex>
    )
}

export default SidebarFooter