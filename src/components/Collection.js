import React, { useContext, useEffect } from 'react'
import { GrLinkPrevious } from 'react-icons/gr';
import LazyLoad from 'react-lazyload';
import { Link, useParams } from 'react-router-dom'
import MainContext from '../context/MainContext';
import Brand from './Brand';
import Download from './Download';

function Collection() {
    const { slugs } = useParams();

    const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext)

    useEffect(() => {
        setSelectedBrands(slugs.split(","))
    }, [])

    const filteredBrands = brands.filter(brand => selectedBrands.includes(brand.slug))

    const clearSelectedBrands = () => {
        setSelectedBrands([])
    }

    return (
        <main className='content'>
            <header className='header'>
                <Link to='/' onClick={clearSelectedBrands}>
                    <a className='back-btn'><GrLinkPrevious /> All Brands </a>
                </Link>
                {selectedBrands.length > 0 && <Download />}
            </header>
            <section className='brands'>
                {filteredBrands.map(brand => (
                    <LazyLoad once={true} key={brand.slug} overflow={true} placeholder="Yükleniyor...">
                        <Brand key={brand.id} brand={brand} />
                    </LazyLoad>
                ))}
            </section>
        </main >
    )
}

export default Collection
