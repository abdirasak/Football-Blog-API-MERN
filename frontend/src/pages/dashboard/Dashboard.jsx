import React from 'react'
import './Dashboard.css'
import { FaPlus } from 'react-icons/fa'

function Dashboard() {

  return (
    <>
      <div className='dashContainer'>
        <div className="dashSidebar">

        </div>
        <div className="dashMainContent">
          <h1>Latest Articles</h1>
          <button><FaPlus style={{ width: '30px', height: '30px', color: 'white', marginTop: '3px' }} /></button>

        </div>
      </div>
    </>

  )
}

export default Dashboard