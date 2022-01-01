import { useContext } from 'react'
import Search from './Search'
import Brand from './Brand'
import MainContext from '../context/MainContext'

function Content() {
    const { brands, setBrands } = useContext(MainContext)

    return (
        <main className='content'>
            <header className='header'>
                <Search />
            </header>
            <section className='brands'>
                {brands.map(brand => (
                    <Brand key={brand.id} brand={brand} />
                ))}
            </section>
        </main>
    )
}

export default Content
