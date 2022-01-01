import React from 'react'
import { getContrastYIQ } from '../helpers'

function Copied({ color }) {
    return (
        <div className='copied' style={{
            backgroundColor: `#${color}`,
            color: getContrastYIQ(color)
        }}>
            Copied {`#${color}`} to clipboard
        </div>
    )
}

export default Copied
