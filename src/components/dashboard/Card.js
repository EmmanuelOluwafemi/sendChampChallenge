import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, IconButton, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../utils/GlobalState';

const Card = ({ name, icon, title, endTitle, price, recieveSms }) => {
    const [,setStaus] = useRecoilState(modalState);
  return (
    <Flex
      minHeight="275px"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="1rem"
      border="1px"
      borderColor="primary"
      py={4}
      px={6}
      backgroundColor="white"
    >
      <Box>
        <Flex alignItems="center">
          <IconButton
            backgroundColor="primaryLight"
            _hover={{ backgroundColor: 'gray.200' }}
            aria-label="Search database"
            icon={icon}
            borderRadius=".75rem"
          />
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            {name}
          </Text>
        </Flex>

        <Grid templateColumns="repeat(2, 1fr)" gap={4} mt="1.5rem">
          <Text fontSize="l" fontWeight={700}>
            {title}
          </Text>

          <Box>
            <Text fontSize="sm">Starts at</Text>
            <Text fontSize="l" fontWeight={700}>
              {price}
            </Text>
          </Box>

          {endTitle && (
            <>
              <Text mt="1rem" fontSize="l">
                {endTitle}
              </Text>

              <Box>
                {recieveSms ? (
                  <>
                    <Text mt="1rem" fontSize="sm">
                      Starts at
                    </Text>
                    <Text fontSize="l" fontWeight={700}>
                      {recieveSms}
                    </Text>
                  </>
                ) : (
                  <Text mt="1rem" fontSize="l" color="gray.500">
                    Not Available
                  </Text>
                )}
              </Box>
            </>
          )}
        </Grid>
      </Box>

      <Link 
        as={Button} 
        background="none" 
        _hover={{ background: "none" }}
        onClick={() => setStaus(name)}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
    >
        <Text fontSize="sm" color="primary">
        See More Details
        </Text>
        <ArrowForwardIcon color="primary" ml={4} />
      </Link>
    </Flex>
  );
};

export default Card;
