import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
const GifExpertApp = () => {
    //const categories=['One Punch','Dragon Ball','Samurai X']
    const [categories,setCategories]=useState(['One Punch','Dragon Ball','Samurai X']);
    
    /*const handleAdd=()=>{
        setCategories([...categories,'yugi']);
    }*/
    
    return (
      <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr/>
          
          <ol>
              {
                  categories.map((category)=>{
                      return <li key={category}>{category}</li>
                  })
              }
          </ol>
      </>
      );
  }
   
export default GifExpertApp;
  