import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import('./infopage.css')

function Infopage() {
    const navigate = useNavigate()
    const poke_data = JSON.parse(localStorage.getItem('info'))

    return (
        <>
            <Navbar />
            <div className="btn-group">
                <button className='btn btn-top'onClick={()=>navigate('/')}>Back</button>
            </div>
            {!poke_data?
            <h1 className='loading'>Sorry......data not available</h1>:
            <div className="product_container">
                <div className="product_image">
                    <img src={poke_data.sprites.other.dream_world.front_default} alt="" />
                </div>
                <div className="product_details">
                    <div className="product_details_info">
                        <h2>Name</h2>
                        <h2>:</h2>
                        <h2>{poke_data.name}</h2>
                    </div>
                    <div className="product_details_info">
                        <h2>Heigth</h2>
                        <h2>:</h2>
                        <h2>{poke_data.height}</h2>
                    </div>
                    <div className="product_details_info">
                        <h2>Weight</h2>
                        <h2>:</h2>
                        <h2>{poke_data.weight}</h2>
                    </div>
                    <div className="product_details_info">
                        <h2>Abilities</h2>
                        <h2>:</h2>
                        <div className='abilities'>
                            {poke_data.abilities.map((item) => {
                                return (
                                    <p>{item.ability.name}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="product_details_info">
                        <h2>{poke_data.stats[0].stat.name}</h2>
                        <h2>:</h2>
                        <h2>{poke_data.stats[0].base_stat}</h2>
                    </div>
                    <div className="product_details_info">
                        <h2>{poke_data.stats[1].stat.name}</h2>
                        <h2>:</h2>
                        <h2>{poke_data.stats[1].base_stat}</h2>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Infopage