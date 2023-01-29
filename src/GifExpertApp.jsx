import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories((cat) => [newCategory, ...cat]);
    };



    return (
       <>
 
            <h1>GifExpertApp</h1>

   
            <AddCategory 
                // setCategories = { setCategories }
                onNewCategory={value => onAddCategory(value)}
            /> 
            { 
                categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
            }

       </>
    );
};
