import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import HomeMoreButton from './HomeMorebutton'

const Sidebar = () => {
  return (
    <div>
      <div>
        <div className="circleNavbar">
          <img
            className="rounded-circle img-thumbnail"
            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
          />
        </div>

        <p style={{ display: 'inline', marginLeft: '3px', color: '#6B8398' }}>
          <strong> John Fel </strong>
        </p>
      </div>
      <div>
        <ul className="link">
          <Link to="/checks">
            {' '}
            <li>Home</li>{' '}
          </Link>

          <Link to="/">
            {' '}
            <li> Notification</li>{' '}
          </Link>
          <li>bookmarks</li>
          <li>Subscription</li>
          <li>profile</li>
          <li className="more-btn" type="button">
            <HomeMoreButton />
          </li>
        </ul>
      </div>
      <div>
        <div className="btns">+ New Post</div>
        <div style={{ marginTop: '75px' }} className="btnmessage">
          <span className="smallcircles">L</span> Messaging ...{' '}
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
