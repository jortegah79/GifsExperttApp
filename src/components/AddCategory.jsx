import { useState } from "react";


export const AddCategory = ({ addCategory }) => {

    const [value, setValue] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length < 1) return;        
        addCategory(value.toLocaleLowerCase());        
        setValue("");
    }
    const handleChangeText = (e) => setValue(value => e.target.value);

    return (
        <>
            <form onSubmit={onSubmit} className="m-5">
                <input className="p-2 rounded-xl min-w-[600px] border-2 border-teal-500 focus:border-orange-600 focus:placeholder:text-transparent text-teal-600
                focus:outline-none placeholder:text-orange-600 " type="text" placeholder="Buscar" onChange={handleChangeText} value={value} />              
            </form>
        </>
    );

}