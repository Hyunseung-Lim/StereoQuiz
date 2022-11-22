import React, { useState, useEffect } from 'react'
import { Navbar } from '../Components/Navbar/navbar';
import BoxPlot from '../Components/DataVisualization/boxplot';
import { Link } from 'react-router-dom'

import genderData from '../Data/gender.json'
import professionData from '../Data/profession.json'
import raceData from '../Data/race.json'
import religionData from '../Data/religion.json'

export const TypePage = (props) => {

    return (
        <div className='typePage'>
          <Navbar/>
          <div className='container'>
            <BoxPlot/>
            <div className='typeQuiz'>
              <Link to="/quiz" state={{name: 'gender', type: 'gender', set: genderData}} className='typeBtn genderBtn'>
                  <span>Gender Quiz</span>
              </Link>
              <Link to="/quiz" state={{name: 'profession',  type: 'profession', set: professionData}} className='typeBtn professionBtn'>
                  <span>Profession Quiz</span>
              </Link>
              <Link to="/quiz" state={{name: 'race',  type: 'race', set: raceData}} className='typeBtn raceBtn'>
                  <span>Race Quiz</span>
              </Link>
              <Link to="/quiz" state={{name: 'religion',  type: 'religion', set: religionData}} className='typeBtn religionBtn'>
                  <span>Religion Quiz</span>
              </Link>
            </div>
          </div>
        </div>
      );

}