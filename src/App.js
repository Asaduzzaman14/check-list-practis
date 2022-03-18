import React from 'react';

const App = () => {
  return (
    <div style={comp}>
      <article>

        <h2 style={{ color: '#fff', textAlign: 'center', marginTop: '20px', background: 'blue' }} >This is article</h2>
        <p style={mystyle}> This is a pragraph create with jsx</p>
        Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dolores!</article>
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

export default App;




