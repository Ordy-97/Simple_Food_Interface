/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
// import picture from '../../../public/images/DoubleCantal.svg';

const IMAGES = {
    "Double Cantal": "/images/DoubleCantal.svg",
    "Super Crémeux": "/images/SuperCremeux.svg",
    "Poulet Croquant": "/images/PouletCroquant.svg",
}

export default function ProductCard ({ unavailable, product, onSelect }){
        return (
            <div className="ProductCard" onClick={onSelect}>
                <img src={IMAGES[product.title]} alt={product.title} />
                {product.title}
                { unavailable && <div className="ProductUnavailable">Indisponible</div> }
                {/* <div className={`${unavailable ? "ProductUnavailable" : ""}`}>Indisponible</div> */}
            </div>
        )
} 

// Validation des types des props
ProductCard.propTypes = {
    title: PropTypes.string,
    onSelect: PropTypes.func,
};