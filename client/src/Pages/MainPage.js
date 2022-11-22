import React, { useState, useEffect } from 'react'
import { Navbar } from '../Components/Navbar/navbar';

export const MainPage = (props) => {


    return (
        <div className='mainPage'>
          <Navbar/>
          <div className='container'>
            <div className='playContents'>
              <div className='inputWindow'>
                <div className='inputWindowTitle'>상황을 입력해주세요.</div>
              </div>
              <div className='outputWindow'>
                <div className='situation'>
                </div>
                <div className='dialoge'>
                </div>
              </div>
            </div>
            {/* <Historybar logData={logData} clickedId={clickedId} setCurrent={setCurrent} setClickedId={setClickedId}/>         */}
          </div>
        </div>
      );

}