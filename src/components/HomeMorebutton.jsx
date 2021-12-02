import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class HomeMoreButton extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.hideShowHandler = this.hideShowHandler.bind(this)
  }

  hideShowHandler = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }

  render() {
    return (
      <div>
        {this.state.show === false ? (
          <div className="div-accordion-button">
            <div className="sub-div-accordion-button">
              <div
                id="button"
                className="accordion-button-custom"
                onClick={this.hideShowHandler}
              >
                More
              </div>
            </div>
          </div>
        ) : null}
        {this.state.show && <Box />}
      </div>
    )
  }
}
class Box extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.hideShowHandler = this.hideShowHandler.bind(this)
  }

  hideShowHandler = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }
  render() {
    return (
      <div>
        {this.state.show === false ? (
          <div>
            <div>
              <ul className="">
                <li>
                  <strong>Card</strong>
                </li>

                <li> Bank</li>

                <li>help & support</li>
                <li>English</li>
              </ul>
            </div>
            <div
              className="accordion-button-custom"
              onClick={this.hideShowHandler}
            >
              Less
            </div>
          </div>
        ) : null}
        {this.state.show && <HomeMoreButton />}
      </div>
    )
  }
}

export default HomeMoreButton
