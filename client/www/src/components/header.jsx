import React from 'react';

require("./header.scss");

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                Welcome to the JamesonNetworks Blog
            </div>
        );
    }
}

export default Header;