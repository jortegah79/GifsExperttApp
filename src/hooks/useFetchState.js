import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGIfs";

export const useFetchState = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs)
        setIsLoading(false);
    }

    useEffect(() => {
        getImagenes();
    }, []);
    return [gifs, isLoading];
}