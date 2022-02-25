import { Box, Button, Divider, Flex, Grid, IconButton, Modal, ModalContent, ModalOverlay, Text, useMediaQuery,  } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../utils/GlobalState';

import { VscVerified } from 'react-icons/vsc';

const MainModal = ({ active, data }) => {

  const [, setStaus] = useRecoilState(modalState);
  const [isSmallThan768] = useMediaQuery('(max-width: 768px)')
    
  return (
    <Modal blockScrollOnMount={true} isCentered isOpen={active} onClose={() => setStaus('')}>
        <ModalOverlay />
        <ModalContent py="2rem" px="2rem" maxWidth="650px" minHeight="300px">
            <Flex gap={isSmallThan768 ? "1.5rem" : "0"} flexDirection={isSmallThan768 ? "column" : "row"} alignItems={isSmallThan768 ? "flex-start" : "center"} justifyContent="space-between">
              <Flex alignItems="center">
                <IconButton 
                  backgroundColor="primaryLight"
                  _hover={{ backgroundColor: 'gray.200' }}
                  icon={data.icon}
                />
                <Text fontSize="lg" fontWeight="bold" ml={4}>{data.name}</Text>
              </Flex>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Text fontSize="md" fontWeight="bold">{data.title}</Text>
                <Box>
                  <Text fontSize="sm" fontWeight={400}>Starts at</Text>
                  <Text fontSize="md" fontWeight={700}>{data.price}</Text>
                </Box>
                <Text fontSize="md" fontWeight="bold">{data.endTitle}</Text>
                <Box>
                  {/* <Text fontSize="sm" fontWeight={400}>Starts at</Text>
                  <Text fontSize="md" fontWeight={700}>{data.price}</Text> */}
                  <Text fontSize="md" color="gray.500" fontWeight={700}>{data.recieveSms}</Text>
                </Box>
              </Grid>
            </Flex>

            <Divider my="2rem" orientation='horizontal' />
            
            {
              data.plans.map((plan, index) => (
                <Grid mb="1.5rem" alignItems="center" templateColumns={isSmallThan768 ? "100%" : "60% 40%"} gap={4}>
                  <Flex gap=".5rem">
                      <VscVerified style={{ color: "green" }} width="1.25rem" color="green.500" fontSize="1.25rem" />

                      <Box>
                        <Text fontSize="ml" fontWeight={700}>{plan.title}</Text>
                        {
                          plan.subTitle && 
                          <Text fontSize="sm" fontWeight={600} mt="0.5rem">{plan.subTitle}</Text>
                        }
                        {
                          plan.description === "coming soon" ?
                          <Button colorScheme='green' size='md'>
                              Coming Soon
                          </Button>:
                          <Text fontSize="sm" mt="0.2rem">{plan.description}</Text>
                        }

                        {
                          plan.subTitle2 &&
                          <Text fontSize="sm" fontWeight={600} mt="0.5rem">{plan.subTitle2}</Text>
                        }

                        {
                          plan.description2 &&
                          <Text fontSize="sm" mt="0.2rem">{plan.description2}</Text>
                        }

                        {
                          plan.subTitle3 &&
                          <Text fontSize="sm" fontWeight={600} mt="0.5rem">{plan.subTitle3}</Text>
                        }

                        {
                          plan.description3 &&
                          <Text fontSize="sm" mt="0.2rem">{plan.description3}</Text>
                        }
                      </Box>
                  </Flex>
                  <Flex flexDirection={isSmallThan768 ? "row" : "column"} justifyContent={isSmallThan768 ? "flex-end" : "flex-start"}>
                    {
                      plan.price &&
                      (
                        <>
                          <Text fontSize="2xl" fontWeight={900}>NGN </Text>
                          {
                            plan.price === "-" ?
                            <Text fontSize="2xl" fontWeight={900} textAlign="right" maxWidth="120px" mt=".05rem"> ---</Text>:
                            <Text fontSize="2xl" fontWeight={900} mt=".05rem"> {plan.price}</Text>
                          }
                        </>
                      )
                    }
                    {
                      plan.price2 && (
                        <>
                          <Text fontSize="2xl" mt=".5rem" fontWeight={900}>NGN </Text>
                          <Text fontSize="2xl" fontWeight={900} mt=".05rem"> {plan.price2}</Text>
                        </>
                      )
                    }
                    {
                      plan.price3 && (
                        <>
                          <Text fontSize="2xl" mt=".5rem" fontWeight={900}>NGN </Text>
                          <Text fontSize="2xl" fontWeight={900} mt=".05rem"> {plan.price3}</Text>
                        </>
                      )
                    }
                  </Flex>
                </Grid>
              ))
            }
        </ModalContent>
    </Modal>
  )
}

export default MainModal