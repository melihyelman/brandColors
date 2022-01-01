import { useContext, useState, useEffect } from 'react'
import { GrClose, GrDownload, GrLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import MainContext from '../context/MainContext';


function Download() {
    const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [downloadMethod, setDownloadMethod] = useState('css');
    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = '';
            switch (downloadMethod) {
                case 'css':
                    output += ":root {\n";
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        brand.colors.map((color, index) => {
                            output += `--${slug}-${index}: #${color};\n`
                        })
                    })
                    output += "}\n";
                    break;
                case 'scss':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        brand.colors.map((color, index) => {
                            output += `\$${slug}-${index}: #${color};\n`
                        })
                    })
                    break;
                case 'less':
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug);
                        brand.colors.map((color, index) => {
                            output += `@${slug}-${index}: #${color};\n`
                        })
                    })
                    break;
                default:
                    break;
            }

            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)

            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl("")
            }
        }
    }, [selectedBrands, downloadMethod])




    return (
        <div className='downloads'>
            <div className='actions'>
                <select onChange={(e) => setDownloadMethod(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <a download={`brands.${downloadMethod}`} href={downloadUrl}><GrDownload /></a>
                <Link to={`/collection/${selectedBrands.join(',')}`} ><GrLink /></Link>
            </div>
            <div className='selected' onClick={() => setSelectedBrands([])}>
                <GrClose />
                {selectedBrands.length} collected
            </div>

        </div>
    )
}

export default Download
