import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    const addCategoryHandle = (category) => {
        if(categorias.includes(category))return;
        setCategorias(categorias => [category,...categorias]);
        
    }
        
   
    return (
        <>
            <div className="flex border-b-4 border-slate-700 justify-evenly">
                <h1 className="inline-block font-extrabold text-2xl text-gray-600  text-ellipsis p-6  ">GifExpertApp</h1>
                <AddCategory  addCategory={addCategoryHandle} />
            </div>
            <div className="p-10">
               {categorias.map((cat) => (<GifGrid category={cat} key={cat}/>))}              

            </div>
        </>
    );
}