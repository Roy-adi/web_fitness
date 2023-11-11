import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { exerciseOptions, fetchData } from '../api/Api';
import { Link } from 'react-router-dom';
const CategoryCarosel = () => {

    const [ category , setCategory] = useState([])

    useEffect(() => {
        getdata()
    }, [])
  
    const getdata =  async()=>{
        const exercisedata = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , exerciseOptions )
        console.log(exercisedata);
        setCategory(exercisedata)
    }


  
    console.log(category,'item');

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <>
      <div className="container category-sec">
      <div className='seraching-tittle'>Searching Results</div>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          renderButtonGroupOutside={true}
        >

        {
            category.map((item) => (
              <div className="service-card" key={item} >
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faDumbbell} bounce style={{ color: "#e6262b" }} />
                </div>
                <h3>{item}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                  consequatur necessitatibus eaque.
                </p>
              </div>
            ))
          }
        </Carousel>
      </div>
    </>
  );
};

export default CategoryCarosel;
