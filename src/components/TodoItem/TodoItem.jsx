import React from 'react';
import { Card, Button } from 'antd';
import PropTypes from 'prop-types';

const TodoItem = ({ todo: { id, title, description }, onDelete }) => {
    return (
        <Card style={{ width: '500px', marginBottom: '50px' }} >
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <Button type="primary" danger onClick={() => onDelete(id)}>
                Delete
            </Button>
        </Card>

    )
}

export default TodoItem;

TodoItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
}
