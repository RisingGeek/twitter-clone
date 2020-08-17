import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Row, Col } from "./components/styles/common";
const MenuBar = React.lazy(() => import("./components/menubar/index"));
const SignIn = React.lazy(() => import("./components/signin/index"));
const Home = React.lazy(() => import("./components/home/index"));
const Explore = React.lazy(() => import("./components/explore/index"));
const Notifications = React.lazy(() =>
  import("./components/notifications/index")
);
const Messages = React.lazy(() => import("./components/messages/index"));
const BookMarks = React.lazy(() => import("./components/bookmarks/index"));
const Lists = React.lazy(() => import("./components/lists/index"));
const Profile = React.lazy(() => import("./components/profile/index"));
const Tweet = React.lazy(() => import("./components/tweet/index"));
const Likes = React.lazy(() => import("./components/tweet/likes"));
const Retweet = React.lazy(() => import("./components/tweet/retweets"));
const SideBar = React.lazy(() => import("./components/sidebar/index"));
const PageNotFound = React.lazy(() => import("./components/pageNotFound"));
import PrivateRoute from './privateRoute';

const Routes = () => {
  const withMenuBar = (WrappedComponent) => (props) => (
    <React.Fragment>
      <Row>
        <Col md={7} xs={5}>
          <MenuBar />
        </Col>
        <Col md={9} xs={19}>
          <WrappedComponent />
        </Col>
        <Col md={8} xs={0}>
          <SideBar />
        </Col>
      </Row>
    </React.Fragment>
  );

  const withLikeModal = (WrappedComponent) => (props) => (
    <React.Fragment>
      <Likes />
      <WrappedComponent />
    </React.Fragment>
  );

  const withRetweetModal = (WrappedComponent) => (props) => (
    <React.Fragment>
      <Retweet />
      <WrappedComponent />
    </React.Fragment>
  );

  const withOnlyMenuBar = (WrappedComponent) => (props) => (
    <Row>
      <Col md={7} xs={5}>
        <MenuBar />
      </Col>
      <Col md={17} xs={19}>
        <WrappedComponent />
      </Col>
    </Row>
  );

  return (
    <HashRouter>
      <Switch>
        <PrivateRoute exact path="/" component={SignIn} homeAuthenticated />
        <PrivateRoute exact path="/home" component={withMenuBar(Home)} />
        <Route path="/explore" component={withMenuBar(Explore)} />
        <PrivateRoute path="/notifications" component={withMenuBar(Notifications)} />
        <PrivateRoute path="/messages" component={withMenuBar(Messages)} />
        <PrivateRoute path="/bookmarks" component={withMenuBar(BookMarks)} />
        <PrivateRoute path="/lists" component={withMenuBar(Lists)} />
        <Route
          exact
          path="/profile/:username"
          component={withMenuBar(Profile)}
        />
        <Route
          path="/profile/:username/:activity"
          component={withMenuBar(Profile)}
        />
        <Route
          exact
          path="/:username/status/:tweetId"
          component={withMenuBar(Tweet)}
        />
        <Route
          path="/:username/status/:tweetId/likes"
          component={withMenuBar(withLikeModal(Tweet))}
        />
        <Route
          path="/:username/status/:tweetId/retweets"
          component={withMenuBar(withRetweetModal(Tweet))}
        />
        <Route component={withOnlyMenuBar(PageNotFound)} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
