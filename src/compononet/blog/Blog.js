import React from 'react';

const Blog = (props) => {
    return (
        <div style={card}>
            <h2>this is blog</h2>
            <h1>Heading: {props.heading}</h1>
            <p>author: {props.author}</p>
        </div>
    );
};

const card = {
    width: '200px',
    color: '#fff',
    background: 'skyblue',
    padding: '20px',
    margin: '20px'
}
export default Blog;