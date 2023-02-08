import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Button, Card, Heading, Image, Select, Text } from '@chakra-ui/react'

const cities = ["Jeddah", "Riyadh", "Liverpool", "Cambridge", "Amsterdam"];

function WeatherApi() {
    const API_KEY = 'ea253e44456f450ea05205130230702'

  const [info, setInfo] = useState<any>({});
  const [city, setCity] = useState(cities[0]);

  

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(res => setInfo(res.data))
  }, [city]);

  const { location = {}, current = {}, condition = {} } = info;

  return (
    <><Box height={'100vh'} bgColor={'#20262E'} opacity={0.7} ><Box maxW='800px' mx='auto'>
          <Select pt={20} boxShadow='lg'
  borderRadius='lg'
  bg={`linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),
      url(https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/620bd6d655f2044afa28bff4_glassmorphism.jpeg)`}
  backgroundSize='cover' value={city} onChange={e => setCity(e.target.value)}>
              {cities.map(c => (
                  <option key={c} value={c}>{c}</option>
              ))}
          </Select>
          {/* <Button ml='10px' onClick={() => setCity(city)}>Search</Button> */}

          <Card mt='40px'
  p='20px'
  boxShadow='lg'
  borderRadius='lg'
  bgImage="url('https://amerisleep.com/blog/wp-content/uploads/2014/01/Ask_Science_Is_Cold_Weather_Good_For_Sleep-01-scaled.jpg')"
  backgroundSize='cover'
  display='flex'
  alignItems='center'>
              <Box width='40%'>
                  <Image src={condition.icon} />
              </Box>
              <Box ml='20px' color={'white'}>
                  <Heading>{city}</Heading>
                  <Text>{location.region}</Text>
                  <Image src={condition.icon} />
                  <Text>{current.temp_c + " C"}</Text>
                  <Text>{"Humidity: " + current.humidity + "%"}</Text>
                  <Text>{"Wind Speed: " + current.wind_kph + " km/h"}</Text>
              </Box>
          </Card>
      </Box>
      </Box></>
  )
}

export default WeatherApi;
