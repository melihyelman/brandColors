import { useContext } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext'
import LazyLoad from 'react-lazyload';
import Download from './Download';
import Loader from './Loader';


function Content() {
    const { search, brands, selectedBrands } = useContext(MainContext)

    return (
        <main className='content'>
            <header className='header'>
                <Search />
                {selectedBrands.length > 0 && <Download />}
            </header>
            <section className='brands'>
                {brands.length > 0 ? brands.map(brand => (
                    <LazyLoad once={true} key={brand.slug} overflow={true} placeholder={<Loader />}>
                        <Brand key={brand.id} brand={brand} />
                    </LazyLoad>
                )) : <p className='error'>"{search}" brands name not found</p>}
            </section>
        </main >
    )
}

export default Content
