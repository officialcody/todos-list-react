import React from 'react';
import { Row, Col } from 'antd';
import './Header.css';
import PropTypes from 'prop-types';


const Header = ({ title }) => {
    return (
        <Row justify="center" className="header">
            <Col>
                <h1 className="heading">{title}</h1>
            </Col>
        </Row>
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string
}