import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
      <h1>Lorem ipsum</h1>
      <div className="info">
        <p>posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={'/write?edit=2'}>
        <img src={Edit} alt='edit post'/>
        </Link>
        <img src={Delete} alt='delete post'/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum, nulla id rhoncus eleifend, justo massa feugiat ipsum, id viverra ipsum ex quis nunc. Aliquam a urna diam. Quisque massa nulla, congue at mauris ac, pharetra euismod tellus. Vestibulum congue venenatis sapien, tempor ultrices ex finibus at.</p>
      </div>
      <div className="menu">m</div>
      </div>
  )
}

export default Single