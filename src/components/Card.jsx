import PropTypes from 'prop-types';
const Card = ({ name, imgURL }) => {

    return (
        <article className="h-80 w-52 grid grid-rows-6 rounded-xl overflow-hidden">
            <figure className=" bg-slate-400 row-span-5">
                <img src={imgURL} className=" object-cover w-full h-full object-top" alt={name} />
            </figure>
            
            <div className=" bg-slate-100 row-span-1 flex items-center justify-center ">
                <h2 className="text-xl text-stone-600 text-center font-custom2">
                    {name || "Star Wars"}
                </h2>
            </div>
        </article>

    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
};

export default Card;
