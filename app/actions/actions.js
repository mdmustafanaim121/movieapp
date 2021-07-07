import axios from 'axios'
import React from 'react'
import { View, Text } from 'react-native'


export default function getMovies() {
    
const data = async() =>{
  const value = await axios.get('http://3.17.216.66:4000/latest')
  .then((response) => {
    return response.data
  })
  return value
    }

    return data()
}
