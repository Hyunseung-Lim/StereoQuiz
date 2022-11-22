import React, { useState, useEffect } from 'react'
import { Navbar } from '../Components/Navbar/navbar';
import { Label } from '../Components/DataVisualization/label';
import { useLocation } from "react-router-dom";
import './pages.css'

export const QuizPage = (props) => {

  const location = useLocation();

  const [isSelected, setIsSelected] = useState(false)
  const [dataNum, setDataNum] = useState(Math.floor(Math.random() * 20))
  const [selectedLabel, setSelectedLabel] = useState("")
  const [isLoc, setIsLoc] = useState(false);
  const [nameFromLoc, setNameFromLoc] =useState("");
  const [typeFromLoc, setTypeFromLoc] =useState("");
  const [dataFromLoc, setDataFromLoc] = useState("");

  function selectStereo() {
    setIsSelected(true);
    setSelectedLabel("Stereotype");
  }
  function selectAntiStereo() {
    setIsSelected(true);
    setSelectedLabel("Anti-Stereotype");
  }

  function selectUnrelated() {
    setIsSelected(true);
    setSelectedLabel("Unrelated");
  }

  function next() {
    setIsSelected(false);
    getRandomData();
  }

  function getRandomData() {
    if(isLoc) {
      setDataNum(Math.floor(dataFromLoc.length * Math.random()));      
    }
    else {
      setDataNum(Math.floor(props.set.length * Math.random()));      
    }
  }

  function checkIsLoc() {
    if (location.state?.set) {
      setIsLoc(true);
      setNameFromLoc(location.state?.name);
      setTypeFromLoc(location.state?.type);
      setDataFromLoc(location.state?.set);      
    }
    else {
      setIsLoc(false);
      setNameFromLoc("");
      setTypeFromLoc("");
      setDataFromLoc("");
    }
  }

  useEffect(() => {
    checkIsLoc()
  }, []);

  return (
    <div className='quizPage'>
      <Navbar/>
      <div className='warning'> [Warning] This dataset contains offensive sentences! </div>
      <div className='container'>
        <div className='stereoSentenceContainer'>
          {isLoc ? <div className={'label' + typeFromLoc}>{nameFromLoc}</div> : null}
          <div className='stereoSentence'>
            {isLoc ? dataFromLoc[dataNum]["sentence"] : props.set[dataNum]["sentence"]}
          </div>
        </div>
        {
          isSelected == false ?
          <div className='buttonContainer'>
            <button className='stereoBtn stereoMode' onClick={selectStereo}>Stereotype</button>
            <button className='stereoBtn antiStereoMode' onClick={selectAntiStereo}>Anti-Stereotype</button>
            <button className='stereoBtn unrelatedMode' onClick={selectUnrelated}>Unrelated</button>
          </div>
          :
          <div className='buttonContainer'>
            <button className='stereoBtn nextMode' onClick={next}>Next</button>
          </div>
        }
        {
          isSelected == false ?
          <div className='dataPerSentence'></div>
          :
          <div className='dataPerSentence'>
            <div>Your Answer</div>
            <div className={'yourAnswer sl' + selectedLabel}>
              {selectedLabel}
            </div>
            <div>Others Answer</div>
            <Label data = {isLoc ? dataFromLoc[dataNum]["stereo"] : props.set[dataNum]["stereo"]}/>
          </div>
        }
      </div>
    </div>
    );

}