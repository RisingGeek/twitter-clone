import React from 'react';
import { Row, Col } from 'antd';
import MenuBar from './menubar/index';

const Home = () => {
    return (
        <Row>
            <Col span={6}>
                <MenuBar />
            </Col>
            <Col span={11}>
                feed
            </Col>
            <Col span={7}>
                side bar
            </Col>
        </Row >
    );
}

export default Home;
