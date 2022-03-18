import React from 'react';
import Blog from './compononet/blog/Blog';
import Mobile from './compononet/mobile/Mobile';

const App = () => {
  return (
    <div style={comp}>
      <article>

        <h2 style={{ color: '#fff', textAlign: 'center', marginTop: '20px', background: 'blue' }} >This is article</h2>
        <p style={mystyle}> This is a pragraph create with jsx</p>
        Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolores!</article>
      <Mobile></Mobile>

      <div style={container}>
        <Blog heading='This is heading' author='This author'></Blog>
        <Blog heading='This is heading' author='This author'></Blog>
        <Blog heading='This is heading' author='This author'></Blog>
      </div>
    </div>
  );
};
const mystyle = {
  color: '#fff',
  padding: '10px',
  margin: '10px',
  backgroundColor: 'dogErblUe'
}
const comp = {
  padding: '10%',

}
const container = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}
export default App;
