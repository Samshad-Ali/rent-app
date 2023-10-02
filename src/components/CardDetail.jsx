import React from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import { useSelector } from 'react-redux';
const CardDetail = () => {
  const data1 = useSelector(state=>state?.dataReducer.datas1);
  const data2 = useSelector(state=>state?.dataReducer.datas2);
  const data3 = useSelector(state=>state?.dataReducer.newData);
  let newArray = [...data1,...data2,...data3]
  console.log(newArray)
    const params = useParams();
    const id = params.id;
    const isMatch = newArray.find(item=>item.id==id)
  return (
    <div className='h-screen w-full flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-blue-950 text-3xl py-1 border-b border-blue-950'>Welcome</h2>
  <Card data={isMatch} />
    </div>
  )
}

export default CardDetail