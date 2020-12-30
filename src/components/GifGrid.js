import React from 'react';
import { useFetchGifts } from '../hook/useFecthGifts';
import { GifGridItem } from '../components/GifGridItem';


export const GifGrid = ({category}) => {
    const {data:images,loading}=useFetchGifts(category);

    
    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            <div className="card-grid animate__animated animate__flash">
                {
                    loading &&<p>Loading</p>
                }
                {
                    images.map((img)=>{
                        return <GifGridItem 
                                key={img.id}
                                {...img}
                        />
                    })
                }

            </div>
        </>
    )
}
