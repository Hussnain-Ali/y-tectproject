import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Link } from 'react-router-dom'
const HomeProfile = () => {
  return (
    <div>
      <div className="post mt-2">
        <p className="p-2">
          <Gallery>
            <Item
              original="https://placekitten.com/1024/768?image=1"
              thumbnail="https://placekitten.com/80/60?image=1"
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img
                  className="profile-videos"
                  ref={ref}
                  onClick={open}
                  src="https://placekitten.com/80/60?image=1"
                />
              )}
            </Item>
          </Gallery>
        </p>
      </div>
      <div class="job-status-bar">
        <ul class="like-com">
          <li>
            <a href="#">
              <i class="fas fa-heart"></i>
              Like
            </a>
            <img src="images/liked-img.png" alt="" />
            <span>25</span>
          </li>
          <Link to="/comments">
            {' '}
            <li> Comments</li>{' '}
          </Link>
        </ul>
        <a href="#">
          <i class="fas fa-eye"></i>
          Views 50
        </a>
      </div>
    </div>
  )
}

export default HomeProfile
