import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import Search from '../Search/Search'
import CategoryCarosel from '../Categories/CategoryCarosel'
import { exerciseOptions, fetchData } from '../api/Api'
import Card from '../Card/Card'

const Home = () => {

    const [ category , setCategory] = useState([])

    useEffect(() => {
        getdata()
    }, [])
  
    const getdata =  async()=>{
        const exercisedata = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , exerciseOptions )
        console.log(exercisedata);
        setCategory(exercisedata)
    }


  return (
    <div >
      
      <Hero/>
      <Search/>
      <CategoryCarosel category={category} />
      <Card/>
    </div>
  )
}

export default Home
