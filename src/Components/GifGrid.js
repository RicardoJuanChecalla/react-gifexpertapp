import React,{useState, useEffect} from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);
    const { data:images, loading} = useFetchGifs(category);

    // useEffect(()=>{
    //     // getGifs();
    //     getGifs(category).then(imgs =>setImages( imgs ) );
    // },[category])

    // const getGifs= async()=>{
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=0WLejWC87JzhG08Wzxeo6o6ykbzWY0Kt&limit=10`;
    //     const resp = await fetch(url);
    //     // const data = await resp.json();
    //     const {data} = await resp.json();
    //     const gifs = data.map( img =>{
    //         return{
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url 
    //         }
    //     })
    //     console.log(gifs);
    //     setImages(gifs);
    // }

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {/* <h3>{count}</h3>
                <button onClick={()=> setCount(count + 1)}></button> */}
                {/* <ol>
                    {
                        images.map(img =><li key={img.id}>{img.title}</li>)
                    }
                </ol> */}
                {
                    images.map(img =>(
                        <GifGridItem 
                            key = { img.id } 
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
