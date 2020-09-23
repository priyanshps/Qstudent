import React from 'react'
import { API } from '../../backend'

export default function ImageLoader({record}) {

    
    const imgUrl = record ? `${API}/record/photo/${record._id}` : ''
    console.log(imgUrl)

    return (
        <>
       
            
                <img
                    src={imgUrl}
                    alt="photo"
                   
                    className="mb-3 rounded"
                />
       
        </>
    )
}
