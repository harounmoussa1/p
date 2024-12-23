import React from 'react'; 
import ReactDOM from 'react-dom';
import './app.css'; 
import App from './app'; 
import Chatbot from './chatbot';
import Header from './header';

function Home (){

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Chatbot />
  </React.StrictMode>,
  document.getElementById('root') 
);
}
export default Home;