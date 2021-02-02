import React from 'react'
import '../components/css/head.css'

const Head = () => {
    return (
        <div className="head-container">
            <div className="head-left">
                <div className="head-input-field"><input type="text" placeholder='Search by Project Name or Customer Phone Number'/></div>
            </div>
            <div className="head-right">
                <h2>All(40)</h2><a href="/"><i class="fas fa-chevron-down"></i></a>
            </div>
        </div>
    )
}

export default Head
