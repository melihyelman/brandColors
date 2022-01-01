import { useContext } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext'
import LazyLoad from 'react-lazyload';
import Download from './Download';


function Content() {
    const { brands, selectedBrands } = useContext(MainContext)

    return (
        <main className='content'>
            <header className='header'>
                <Search />
                {selectedBrands.length > 0 && <Download />}
            </header>
            <section className='brands'>
                {brands.map(brand => (
                    <LazyLoad once={true} key={brand.slug} overflow={true} placeholder="Yükleniyor...">
                        <Brand key={brand.id} brand={brand} />
                    </LazyLoad>
                ))}
            </section>
        </main >
    )
}

export default Content
