import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {
       
       //console.log(newCategory);
       
       if (categories.includes(newCategory) ) return;
       
       //3 formas de hacerlo
       // setcategories( categories.concat('Test'));
       setCategories([newCategory,...categories]);

       // setcategories( cat => [ ...cat, 'Valorant']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = { (event) => onAddCategory(event) }
        />

            { 
                categories.map( (category) => (
                      <GifGrid 
                            key = {category} 
                            category={ category }  />
                    ))  
                
            }
            
    </>
  )
}
