
export const GifItem = ({ id, title, url }) => {

    return (
        <div className="flex-2 w-1/2 md:w-1/4 lg:w-1/6 p-2">
            <div className="">
                <img className="aspect-square" src={url} alt={title} />
                <p>{title}</p>

            </div>
        </div>
    );

}