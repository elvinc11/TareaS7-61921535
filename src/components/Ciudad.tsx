import React from 'react'
import "../Styles.css";
import {  CiudadResponse } from '../tipos/Tipos';


function conversion(num1: number, num2?: number): number {
  if (typeof num2 !== "undefined") {
    return num2 - num1;
  }
  return num1;
}
 
interface CiudadProps{
  ciudad?:CiudadResponse;
  
}

export const Ciudad = ({ciudad}: CiudadProps) => {

  return (

    <div className='Container'>
      <span style={{fontSize:15,fontWeight:"bold", marginTop:10}}>
        {ciudad?.name}
      </span>
      <span style={{fontSize:16}}>
       Máx {conversion(273.15,ciudad?.main.temp_max).toFixed(1)} C 
      </span>
      <span style={{fontSize:16}}>
       Mín {conversion(273.15,ciudad?.main.temp_min).toFixed(1)} C
      </span>
      <span style={{fontSize:16}}>
        {conversion(273.15,ciudad?.main.temp).toFixed(0)} C
      </span>
      <span style={{fontSize:16}}>
        {ciudad?.main.humidity} %
      </span>
      <span style={{fontSize:16}}>
      </span>

    </div>

  )

}