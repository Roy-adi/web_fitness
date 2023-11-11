import React, { useEffect, useState } from 'react'
import './Card.css'
import { exerciseOptions, fetchData } from '../api/Api'
import { Navigate, useNavigate ,Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'; 
const Card = () => {
  const navigate = useNavigate();
  const [Card, setCard] = useState([]);

  const searchQuery = useSelector((state) => state.search);

  useEffect(() => {
    getdata();
  }, [searchQuery]);

  const getdata = async () => {
    if (searchQuery) {
      const exercisedata = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisedata.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery) ||
          item.target.toLowerCase().includes(searchQuery) ||
          item.equipment.toLowerCase().includes(searchQuery) ||
          item.bodyPart.toLowerCase().includes(searchQuery)
      );

      setCard(searchedExercises);
    } else {
      const exercisedata = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions 
      );
      setCard(exercisedata.slice(0, 9));
    }
  };

  return (
    <>
      <div className='card-sec container'>
        <div className='row'>
        <p className='seraching-tittle'>Searching Results</p>
          {Array.isArray(Card) && // Check if Card is an array
            Card.map((item) => (
              <div className='col-md-4' key={item.id}>
                <div className='card'>
                  <Link to={`/${item.id}`} className='card-img'>
                    <img src={item.gifUrl} alt={item.name} />
                  </Link>
                  <div className='card-body'>
                    <h2 className='card-title'> {item.name} </h2>
                    <p className='card-text d-flex'>
                     <div className='box1 col-md-6'> {item.target} </div>
                     <div className='box1 col-md-6'> {item.equipment} </div>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Card
