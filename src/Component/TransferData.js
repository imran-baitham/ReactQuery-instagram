import React from 'react'
import "./style.css"

const TransferData = ({ data }) => {
    return (
        <section className='container main grid'>

            <div className='section_div'>
                <div className='profile_div'>
                    <h2 className='profile_name'>{data.name}</h2>
                    <p>Location_{data.location.name}</p>
                </div>
                <div className='section_img'>
                    <img className='section_img' src={data.image} alt='images' />
                </div>
                <div className='section_last-div'>
                    <div className='section_likes'>
                    <p>Likes {data.id}</p>
                    <p><b> Post at </b>{data.created}</p>
                    </div>
                    <p>status {data.status}</p>
                    <p>Gander {data.gender}</p>
                </div>
            </div>
        </section>
    )
}

export default TransferData