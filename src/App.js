import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Notification from './components/Notification'
import Sidebar from './components/Sidebar'
import Check from './components/Check'
import ClubSidebar from './components/ClubSidebar'
import HomeCarousel from './components/HomeCarousel'
import CommentBox from './components/CommentBox'
function App() {
  return (
    <Router>
      <Container style={{ marginTop: '50px' }}>
        <Switch>
          <Row>
            <Col md={3}>
              <Sidebar style={{ position: 'fixed' }} />
            </Col>
            <Col
              md={6}
              style={{
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
              }}
            >
              <Route path="/" exact component={Notification} />
              <Route path="/checks" component={Check} />
              <Route path="/comments" component={CommentBox} />
            </Col>

            <Col md={3}>
              <ClubSidebar className="fa-stack-overflow" />
            </Col>
          </Row>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
