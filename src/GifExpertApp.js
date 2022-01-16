import React,{useState} from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    //const initialState = ['One Punch','Samurai X','Dragon Ball'];
    const initialState = ['One Punch'];
    const [categories, setCategories] = useState(initialState);
    // const handleAdd=()=>{
    //     setCategories([...categories,'gato']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    // categories.map(category =>{
                    //     return <li key={category}>{category}</li>
                    // })

                    // categories.map(category =><li key={category}>{category}</li>)
                    
                    categories.map(category =>(
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
