import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
const MenuBar = React.lazy(() => import('./components/menubar/index'));
const SignIn = React.lazy(() => import('./components/signin/index'));
const Home = React.lazy(() => import('./components/home/index'));
const Explore = React.lazy(() => import('./components/explore/index'));
const Notifications = React.lazy(() => import('./components/notifications/index'));
const Messages = React.lazy(() => import('./components/messages/index'));
const BookMarks = React.lazy(() => import('./components/bookmarks/index'));
const Lists = React.lazy(() => import('./components/lists/index'));
const Profile = React.lazy(() => import('./components/profile/index'));
const Following = React.lazy(() => import('./components/following/index'));
const Followers = React.lazy(() => import('./components/followers/index'));

const Routes = () => {

    const withMenuBar = WrappedComponent => (props) => (
        <Row>
            <Col md={6} xs={5}>
                <MenuBar />
            </Col>
            <Col md={11} xs={19}>
                <WrappedComponent />
            </Col>
            <Col md={7} xs={0}>
                side bar
            </Col>
        </Row >
    );

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn} />
                <Route path="/home" component={withMenuBar(Home)} />
                <Route path="/explore" component={withMenuBar(Explore)} />
                <Route path="/notifications" component={withMenuBar(Notifications)} />
                <Route path="/messages" component={withMenuBar(Messages)} />
                <Route path="/bookmarks" component={withMenuBar(BookMarks)} />
                <Route path="/lists" component={withMenuBar(Lists)} />
                <Route exact path="/profile/:username" component={withMenuBar(Profile)} />
                <Route path="/profile/:username/following" component={withMenuBar(Following)} />
                <Route path="/profile/:username/followers" component={withMenuBar(Followers)} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
