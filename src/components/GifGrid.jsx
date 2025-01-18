
import { useFetchState } from "../hooks/useFetchState";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const [gifs, isLoading] = useFetchState(category);
           
    return (
        <>
            <h3 className="text-2xl text-orange-600 capitalize">{category}</h3>
            { isLoading && (<h4 className="text-xl text-teal-500">Cargando...</h4>)}
            <div className="flex flex-row flex-wrap ">
                {gifs.map((gif) =><GifItem key={gif.id} {...gif} />)}
            </div>
        </>
    );

}