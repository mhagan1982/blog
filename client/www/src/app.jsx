import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

require('./app.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App;
