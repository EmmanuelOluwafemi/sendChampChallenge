import { Box, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'
import { navState } from '../utils/GlobalState'
import { useRecoilState } from 'recoil'

const Dashboard = ({ children }) => {
  const [navSize] = useRecoilState(navState);

  const [isSmallThan768] = useMediaQuery('(max-width: 768px)')

  const getNavSize = () => {
    if(navSize === "large" && !isSmallThan768) {
      return "256px"
    }
    else if(navSize === "small" && !isSmallThan768) {
      return "5rem"
    }
    else if(isSmallThan768) {
      return "0"
    }
  }

  return (
    <Box width="100%" height="98vh" overflowY="hidden">
        <Header />
        <Box width='full' height="90vh" overflowY="scroll" background="grey">
            <Sidebar />
            <Box pl={getNavSize} width={isSmallThan768 && "full"}>
              {children}
            </Box>
        </Box>
    </Box>
  )
}

export default Dashboard