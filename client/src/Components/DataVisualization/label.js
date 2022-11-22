import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './dataVisualization.css'

export const Label = (props) => {

    const [stereoLabel, setStereoLabel] = useState("")
    const [antiStereoLabel, setAntiStereoLabel] = useState("")
    const [unrelatedLabel, setUnrelatedLabel] = useState("")


    function setData() {
        setStereoLabel("w" + props.data[0]);
        setAntiStereoLabel("w" + props.data[1]);
        setUnrelatedLabel("w" + props.data[2]);
    }

    useEffect(() => {
        setData()
    }, []);

    return(
        <div className='label'>
            <div className='labelContainer'>
                <div className={'stereoBox ' + stereoLabel}>
                    {
                        props.data[0] != 0 ?
                        <div> {props.data[0] * 20}% </div>
                        :
                        null
                    }
                </div>
                <div className={'antiStereoBox ' + antiStereoLabel}>
                    {
                        props.data[1] != 0 ?
                        <div> {props.data[1] * 20}% </div>
                        :
                        null
                    }
                </div>
                <div className={'unrelatedBox ' + unrelatedLabel}>
                    {
                        props.data[2] != 0 ?
                        <div> {props.data[2] * 20}% </div>
                        :
                        null
                    }
                </div>                    
            </div>
        </div>
    )
}