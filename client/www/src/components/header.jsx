import React from 'react';

require("./header.scss");

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                Header goes here
            </div>
        );
    }
}

export default Header;