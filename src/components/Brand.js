import React, { useContext } from 'react'
import { getContrastYIQ } from "../helpers";
import MainContext from '../context/MainContext';
import ClipboardButton from 'react-clipboard.js';


function Brand({ brand }) {
    const { selectedBrands, setSelectedBrands, setCopiedBrand } = useContext(MainContext)

    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setCopiedColor = (color) => {
        setCopiedBrand(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? "selected" : ""}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className='brand-colors'>
                {brand.colors.map((color, key) => (
                    <ClipboardButton component={"span"} onSuccess={() => setCopiedColor(color)} data-clipboard-text={`#${color}`} className='brand-colors' key={key} style={{
                        backgroundColor: `#${color}`,
                        color: getContrastYIQ(color)
                    }}>{`#${color}`}</ClipboardButton>
                ))}
            </div>
        </div>
    )
}

export default Brand
