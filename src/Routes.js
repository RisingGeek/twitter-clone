import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import MenuBar from './components/menubar/index';
import Home from './components/home/index';
import Explore from './components/explore/index';
import Notifications from './components/notifications/index';
import Messages from './components/messages/index';
import BookMarks from './components/bookmarks/index';
import Lists from './components/lists/index';
import Profile from './components/profile/index';  

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
                <Route exact path="/" component={withMenuBar(Home)} />
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
