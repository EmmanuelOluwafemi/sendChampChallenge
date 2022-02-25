import { Flex, Text, Grid, useMediaQuery,  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useRecoilState } from 'recoil'
import Card from '../components/dashboard/Card'
import MainModal from '../components/MainModal'
import Dashboard from '../layout/Dashboard'
import { countries } from '../utils/countries'
import { currencies } from '../utils/currencies'
import { modalState } from '../utils/GlobalState'
import { email, sms, verification, voice, whatsapp } from '../utils/MoreDetails'
import { prices } from '../utils/Prices'

const Pricing = () => {

  const [status] = useRecoilState(modalState);

  const [, setCountry] = useState('')
  const [currency, setCurrency] = useState('')

  const [newCountries, setNewCountries] = useState([])
  const [newCurrencies, setNewCurrencies] = useState([])

  const [isSmallThan768] = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    countries.map(({ name, code }) => (
      setNewCountries(prev => [...prev, { value: name, label: name }])
    ))

    currencies.map(({ name, cc }) => (
      setNewCurrencies(prev => [...prev, { value: cc, label: cc }])
    ))
  }, [])

  return (
    <Dashboard>
      <MainModal data={sms} active={ status === "SMS" } />
      <MainModal data={voice} active={ status === "Voice" } />
      <MainModal data={email} active={ status === "Email" } />
      <MainModal data={whatsapp} active={ status === "Whatsapp" } />
      <MainModal data={verification} active={ status === "Verification" } />


        <Flex flexDirection="column" py="3rem" px="1rem">
          <Text fontSize='3xl' fontWeight={700} textAlign="center">Sendchamp Pricing</Text>
          <Text 
            fontSize='ml' textAlign="center" 
            maxW="400px" m="0 auto" mt="1rem"
            color="gray.500"
          >
            Start with our competitive pay-as-you-go pricing. <br />
            For deeper discounts on committed spend as you scale, 
            talk with our sales team.
          </Text>

          <Grid
            templateColumns={isSmallThan768 ? '100%' : 'repeat(2, 1fr)'}
            gap={isSmallThan768 ? 2 : 6}
            maxWidth={isSmallThan768 ? "250px" : "400px"}
            width="100%"
            margin="0 auto"
            marginTop="2rem"
            position="static"
          >
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              name="color"
              options={newCountries}
              placeholder="Select a country"
              onChange={(e) => setCountry(e.value)}
              
            />
            <Select
              className="basic-single"
              classNamePrefix="select"
              isSearchable={true}
              name="color"
              options={newCurrencies}
              placeholder="Select a currency"
              onChange={(e) => setCurrency(e.value)}
              
            />
          </Grid>

          {
            currency === '' ?
            <Text 
              fontSize='ml' textAlign="center" 
              maxW="400px" m="0 auto" mt="2rem"
              color="gray.500"
            >
              Select Country and Currency to get Pricing
            </Text>
            :
            <Grid
              templateColumns={isSmallThan768 ? '100%' : 'repeat(3, 1fr)'}
              gap={6}
              mt="2rem"
            >

              {
                prices.map((
                  { 
                    id, name, icon, 
                    price, title, endTitle, 
                    recieveSms  
                  }) => (
                  <Card 
                    key={id}
                    name={name}
                    icon={icon}
                    price={price}
                    title={title}
                    endTitle={endTitle}
                    recieveSms={recieveSms}
                  />
                ))
              }
            </Grid>
          }
        </Flex>
    </Dashboard>
  )
}

export default Pricing