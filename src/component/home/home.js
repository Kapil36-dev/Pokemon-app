import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../card/card';
import './home.css'
import Navbar from '../Navbar/Navbar'

function Home() {
  const [data, setdata] = useState([]);
  const [Url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setnextUrl] = useState("");
  const [prevUrl, setprevUrl] = useState("");


  const handledata = async () => {
    const res = await axios.get(Url);
    setdata([])
    res.data.results.map(async (item)=>{
      const response = await axios.get(item.url)
      setdata(state => {
        state = [...state, response.data];
        return state;
      })
    })

    setnextUrl(res.data.next);
    setprevUrl(res.data.previous);
    console.log(data);
  }

  useEffect(() => {
    handledata();
  },[Url]);


  return (
    <>
      <Navbar/>
      <div className="container">
      {
        data!==[]?
        data.map((item)=>{
          return(
            <Card data={item}></Card>
          )
        })
        :null
      }
      </div>
      <div className="btn-group">
        {prevUrl && <button className='btn' onClick={() => {
          setUrl(prevUrl)
        }}>Previous</button>}
        {nextUrl && <button className='btn' onClick={() => {
          console.log("2");
          setUrl(nextUrl)
        }}>Next</button>}
      </div>
    </>
  )
}



export default Home