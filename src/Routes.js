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

const Routes = () => {

    const withMenuBar = WrappedComponent => () => (
        <Row>
            <Col span={6}>
                <MenuBar />
            </Col>
            <Col span={11}>
                <WrappedComponent />
            </Col>
            <Col span={7}>
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
                <Route path="/profile" component={withMenuBar(Profile)} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
