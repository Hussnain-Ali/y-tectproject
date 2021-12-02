import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ItemsCarousel from 'react-items-carousel'

import HomeProfile from './HomeProfile'

const Notification = () => {
  const girlsdata = [
    {
      _id: '1',
      name: 'Girl 1',
    },
    {
      _id: '2',
      name: 'Girl 2',
    },
    {
      _id: '6',
      name: 'Girl 6',
    },
    {
      _id: '3',
      name: 'Girl 3',
    },
    {
      _id: '4',
      name: 'Girl 4',
    },
    {
      _id: '4',
      name: 'Girl 4',
    },
  ]

  const [active, setaAtive] = useState(0)
  return (
    <div>
      <h3>HOME</h3>
      <div
        style={{ borderTop: '1px solid black', width: '100%', padding: '0px' }}
      ></div>
      <div>
        <Col md={12}>
          <Row className="mt-3">
            <Col md={2}>
              <span class="custombutton">APP</span>
            </Col>
            <Col sm={4} md={3}>
              <span class="custombutton">PURCHASED</span>
            </Col>

            <Col md={2}>
              <span class="custombutton">
                <i class="fas fa-plus"></i>
              </span>
            </Col>
          </Row>
        </Col>
        <Container className="mt-3">
          <Row>
            <ItemsCarousel
              className="carousel-home-slider"
              infiniteLoop={false}
              gutter={12}
              activePosition={'center'}
              chevronWidth={60}
              disableSwipe={false}
              alwaysShowChevrons={false}
              numberOfCards={4.5}
              slidesToScroll={4}
              outsideChevron={true}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={active}
              requestToChangeActive={(value) => setaAtive(value)}
              rightChevron={'>'}
              leftChevron={'<'}
            >
              {girlsdata.map((m) => (
                <img
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  alt="..."
                  className="img-thumbnail"
                />
              ))}
            </ItemsCarousel>
          </Row>
          <Col md={12} className="btns mt-3">
            Load new Content{' '}
          </Col>
        </Container>
        <div style={{ borderTop: '1px solid black', marginTop: '10px' }}></div>
        <Row>
          <Col md={12} className="mt-3">
            <div className="circleNavbar">
              <img
                className="rounded-circle img-thumbnail"
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              />
            </div>
            <p
              style={{ display: 'inline', marginLeft: '3px', color: '#6B8398' }}
            >
              <strong> John Fel </strong>
            </p>
          </Col>
          <Col md={12}>
            <HomeProfile />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Notification
