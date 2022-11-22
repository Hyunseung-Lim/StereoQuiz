import React, { useState, useEffect } from 'react'
import BarChart from '../Components/DataVisualization/barchart';
import { Navbar } from '../Components/Navbar/navbar';
import { Link } from 'react-router-dom'


import barBtnData from '../Data/barBtn.json'

export const TargetPage = (props) => {
  return (
      <div className='targetPage'>
        <Navbar/>
        <div className='container'>
          <BarChart/>
          <div className='typeQuiz'>        
            {barBtnData.map((barBtn, index) => {
              return (
                <Link to="/quiz" key={index} state={{name: barBtn["name"], type: barBtn["type"], set: require("../Data/" + barBtn["name"] + ".json")}} className={'typeBtn '+ barBtn["type"] + 'Btn'}>
                    <span>{barBtn["name"]} Quiz</span>
                </Link>                  
              )
            })}
          </div>
        </div>
      </div>
    );

}