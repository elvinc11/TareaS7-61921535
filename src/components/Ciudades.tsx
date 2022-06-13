import React, { useEffect, useState } from 'react';
import { conexionAPI } from '../api/conexionAPI';
import { CiudadResponse } from '../tipos/Tipos';
import { Ciudad } from './Ciudad';



export const Ciudades = () => {

    const [temp, setTemp] = useState<CiudadResponse[]>([]);

    const getCiudades = async () => {
      try {
        const res = await  conexionAPI.get<CiudadResponse>("/weather?id=3601783&appid=d15c12843da97aafa27705e828ceb4b6");
        setTemp(temp => [...temp,res.data]);
        const res1 = await conexionAPI.get<CiudadResponse>("/weather?id=2643743&appid=d15c12843da97aafa27705e828ceb4b6");
        setTemp(temp => [...temp,res1.data]);
        const res2 = await conexionAPI.get<CiudadResponse>("/weather?id=2968815&appid=d15c12843da97aafa27705e828ceb4b6");
        setTemp(temp => [...temp,res2.data]);
        const res3 = await conexionAPI.get<CiudadResponse>("/weather?id=5128638&appid=d15c12843da97aafa27705e828ceb4b6");
        setTemp(temp => [...temp,res3.data]);
        const res4 = await conexionAPI.get<CiudadResponse>("/weather?id=1850147&appid=d15c12843da97aafa27705e828ceb4b6");
        setTemp(temp => [...temp,res4.data]);
        const res5 = await conexionAPI.get<CiudadResponse>("/weather?id=2147714&appid=d15c12843da97aafa27705e828ceb4b6");
        setTemp(temp => [...temp,res5.data]);
      } catch (error) {
        console.log(error);
      }
    }  
    useEffect(()=>{
      getCiudades();
    },[]) 

  return (
    <div className='flexContainer'>
       {temp.map((ciudad) => (
        <Ciudad ciudad={ciudad} key={ciudad.id} />
      ))}
    </div>
  );
};

