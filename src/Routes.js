import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
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

const Routes = () => {
  const withMenuBar = (WrappedComponent) => (props) => (
    <Row>
      <Col md={7} xs={5}>
        <MenuBar />
      </Col>
      <Col md={9} xs={19}>
        <WrappedComponent />
      </Col>
      <Col md={8} xs={0}>
        side bar
      </Col>
    </Row>
  );

  const withLikeModal = (WrappedComponent) => (props) => (
    <React.Fragment>
      <Likes />
      <WrappedComponent />
    </React.Fragment>
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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
