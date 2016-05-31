import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Menu from './containers/menu-container.jsx';
import Entry from './containers/entry-container.jsx';
import CommentBox from './components/commentbox.jsx';
import $ from 'jquery';

require('./app.scss');

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Entry/>
                <CommentBox/>
                <Footer/>
            </div>
        );
    }
}

export default App;
