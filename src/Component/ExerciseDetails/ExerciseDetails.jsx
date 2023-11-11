import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../api/Api';
import image1 from '../../assets/arm1.png'
import image2 from '../../assets/a2.png'
import image3 from '../../assets/a3.png'
import './Edetails.css'; // Assuming you have a file named ExerciseDetails.css

const ExerciseDetails = () => {
  const { id } = useParams();
  const [Detail, setDetail] = useState([]);

  useEffect(() => {
    getdata();
  }, [id]);

  const getdata = async () => {
    const exercisedata = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      exerciseOptions
    );
    console.log(exercisedata, 'db');
    setDetail(exercisedata);
  };

  return (
    <div className='container detail-sec'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='img-wrap'>
            <img src={Detail.gifUrl} alt='Exercise' className='img-fluid rounded' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='left-wrap'>
            <div className='detail-content'>
              <p className='exercise-name'>{Detail.name}</p>
              <p className='instruction-title'>Instruction Detail :</p>
              <ul className='instruction-list'>
                {Detail.instructions &&
                  Detail.instructions.map((item, index) => (
                    <li className='ins-li' key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div className='others d-flex'>
              <div className='exercise-box'>
                <div className='box-content'>
                  <img src={image1} alt='Exercise' className='box-image' />
                  <p className='box-title'> Body Part  </p>
                  <p className='box-text'>{Detail.bodyPart}</p>
                </div>
              </div>

              <div className='exercise-box'>
                <div className='box-content'>
                  <img src={image2} alt='Exercise' className='box-image' />
                  <p className='box-title'> Target </p>
                  <p className='box-text'>{Detail.target}</p>
                </div>
              </div>

              <div className='exercise-box'>
                <div className='box-content'>
                  <img src={image3} alt='Exercise' className='box-image' />
                  <p className='box-title'> Equipment  </p>
                  <p className='box-text'>{Detail.equipment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
