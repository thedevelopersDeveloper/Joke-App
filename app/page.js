"use client"
import React,{useState} from 'react'
import axios from 'axios'

const page = () => {
    const [jokes,setJokes] = useState(["Click on the button."])
    const getJokes = async() => {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single&amount=10")
        response.data.jokes.map((e)=>setJokes([e.joke]))
        console.log(jokes)
    }

  return (
    <div className='w-full h-[100vh] bg-zinc-900 '>
      <div className='w-full h-[15vh] bg-zinc-800 text-white flex items-center justify-center'>
        <h1 className='text-6xl font-semibold'>Joke App</h1>
      </div>
      <div className='w-full h-[85vh] flex flex-col items-center justify-center gap-[5vh] max-[500px]:gap-[7vw] max-[500px]:justify-start max-[500px]:py-20'> 
        <div className='w-[60vw] h-[40vh] bg-zinc-700 rounded-lg px-5 py-3 border-2 overflow-auto max-[500px]:h-64 max-[500px]:w-[75vw]'>
            <p className='text-white text-2xl'>{jokes}</p>
        </div>
        <buttton 
        className='bg-green-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-green-700'
        onClick={()=>{
            getJokes()
        }}
        >Get Jokes</buttton>
      </div>
    </div>
  )
}

export default page
