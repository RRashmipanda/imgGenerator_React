"use client"

import React,{ useEffect, useState} from 'react'
import axios from 'axios';


const page = () => {
    const[image,setimage]=useState([])


  useEffect(()=>{
    getImages()
  },[])

      const getImages =async ()=>{
       try{
        const a = await axios.get("https://picsum.photos/v2/list")
        const images=a.data;
          console.log(images)
        setimage(images)
       }catch(error){
        console.error("Error Fetching image");
       }
      };


  return (
    <div>
     <button onClick={getImages} className='px-5 py-3 bg-green-400 text-white'>Get Images</button>

     <div className='p-10'>
        {image.map((img,i)=>{
          return <img 
          key={i}
          src={img.download_url}
           width={300}
           height={300}
            className='m-10 rounded inline-block'
          />

        }
        )}
     </div>
    </div>
  )
}

export default page

