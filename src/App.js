import './App.css';
import Content from './components/Content';
import SideBar from './components/SideBar';
import BrandsData from "./brands.json"
import MainContext from './context/MainContext';
import { useEffect, useState } from 'react';
import Copied from './components/Copied';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Collection from './components/Collection';


function App() {
  const brandsArray = Object.keys(BrandsData).map(key => ({
    ...BrandsData[key],
    id: key
  }));

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copiedBrand, setCopiedBrand] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopiedBrand(false)
    }, 500)

    return () => { clearTimeout(timeout) }
  }, [copiedBrand])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())))

  }, [search])


  const values = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    copiedBrand,
    setCopiedBrand,
    search,
    setSearch
  }

  return (
    < >
      <MainContext.Provider value={values}>
        <SideBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/collection/:slugs" element={<Collection />} />
          </Routes>
        </BrowserRouter>
        {copiedBrand && <Copied color={copiedBrand} />}
      </MainContext.Provider>
    </>
  );
}

export default App;
