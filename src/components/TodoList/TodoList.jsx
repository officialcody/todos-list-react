import React, { useState } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import TodoItem from '../TodoItem/TodoItem';
import PropTypes from 'prop-types';
import './TodoList.css';

const TodoList = ({ todos, addTodo, onDelete }) => {

    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setTitle("");
        setDescription("");
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or description cannot be blank");
        } else {
            addTodo(title, description);
            handleOk();
        }
    }

    return (
        <Row justify="center" className="todo__list">
            <Col span={4}>
                <Button type="primary" onClick={showModal}>Add Todo</Button>
                <Modal
                    title="Add New Todo"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={false}
                >
                    <form onSubmit={submitForm}>
                        <label className="label" htmlFor="title">Title</label>
                        <input className="input" value={title} type="text" name="title" onChange={(e) => setTitle(e.target.value)} /><br />
                        <label className="label" htmlFor="description">Description</label>
                        <input className="input" value={description} type="text" name="description" onChange={(e) => setDescription(e.target.value)} /><br />
                        <button className="button" type='submit'>Add</button>
                    </form>
                </Modal>
            </Col>
            <Col span={8}>
                {todos.length === 0 ? "No Todos to display" : todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                })}
            </Col>
        </Row>
    )
}

export default TodoList;

TodoList.propTypes = {
    todos: PropTypes.array,
}