import React, { useEffect, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs';
import Card from '../components/Card'
import {TbLoaderQuarter} from 'react-icons/tb'
import { filteredData, getData } from '../redux/slice/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    const [isMore,setIsMore]=useState(false);
    const [isbtn,setBtn] = useState(false)
    const dispatch = useDispatch();
    let data = useSelector(state=>state?.dataReducer.datas1);
    const data2 = useSelector(state=>state?.dataReducer.datas2)
    let newData = useSelector(state=>state?.dataReducer.newData)
    const btns = ["New York","Mumbai","Paris","London"];
    const handleBtn=(currBtn)=>{
        dispatch(filteredData(currBtn))
        setBtn(true)
        
    }
    const handleShowMoreBtn=()=>{
        setIsMore(!isMore)
    }
   
    useEffect(()=>{
        dispatch(getData())
    },[btns])

  return (
    <div className='w-4/5 mt-4 flex flex-col gap-2'>
           <div className=' flex flex-col justify-center items-center gap-2'>
        <h1 className='text-3xl text-blue-950 font-bold'>Featured Listed Property</h1>
        <p className='w-3/5 text-base text-center text-blue-950 font-semibold'>
         Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...
        </p>
    </div>
    <div className='flex justify-between items-center'>
    <div className='flex gap-4 items-center'>
      {
        btns.map((btn,id)=>{
         return   <button key={id} onClick={()=>handleBtn(btn)} className='bg-blue-200 font-semibold text-gray-500 hover:bg-blue-700 hover:text-white rounded-3xl px-4 py-2'>
            {btn}
                </button>
        })
      }
    </div>
    <button className='flex gap-2 items-center border border-blue-900 p-2 px-3 rounded-3xl text-blue-900 font-semibold'>
        View All
        <span>
            <BsArrowRight/>
        </span>
    </button>
    </div>
    <div className='w-full flex flex-wrap gap-8 mt-4 justify-center items-center'>
      {
        isbtn? 
        newData?.map((data)=>{
            return <Card key={data.id} data = {data} />
          }) :
          data?.map((data)=>{
              return <Card key={data.id} data = {data} />
            })
        }
        </div>
        <button onClick={handleShowMoreBtn} className=' my-2 flex gap-1 items-center bg-blue-700 text-white rounded-3xl px-4 p-2  w-fit self-center font-semibold'> <span>
            <TbLoaderQuarter/>
            </span> Show More</button>
        <div>
        <div className='w-full flex flex-wrap gap-8 mt-4 justify-between items-center'>


{
    isMore? data2?.map((item)=>{
        return <Card key={item.id} data = {item} />
      }) : ""

  }
  </div>
        </div>
    </div>
  )
}

export default Home;
