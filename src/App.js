import React from 'react';
import RoutesItems from './RoutesItems/RoutesItems';
import './App.css'
import Header from './component/Header/Header';
import Footer from './component/footer/Footer';
function App() {
    return (
        <div className="App">
             <Header/>
             <RoutesItems/>
             <Footer/>
        </div>
    );
}

export default App;

