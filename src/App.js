import './App.css';
import Content from './components/Content';
import SideBar from './components/SideBar';
import BrandsData from "./brands.json"
import MainContext from './context/MainContext';
import { useEffect, useState } from 'react';
import Copied from './components/Copied';


function App() {
  const brandsArray = Object.keys(BrandsData).map(key => ({
    ...BrandsData[key],
    id: key
  }));

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copiedBrand, setCopiedBrand] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopiedBrand(false)
    }, 500)

    return () => { clearTimeout(timeout) }
  }, [copiedBrand])


  const values = {
    brands,
    setBrands,
    selectedBrands,
    setSelectedBrands,
    copiedBrand,
    setCopiedBrand
  }

  return (
    < >
      <MainContext.Provider value={values}>
        <SideBar />
        <Content />
        {copiedBrand && <Copied color={copiedBrand} />}
      </MainContext.Provider>
    </>
  );
}

export default App;
