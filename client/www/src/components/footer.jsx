import React from 'react';

require("./footer.scss");

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                Copyright 2016 : JamesonNetworks. All Rights Reserved.
            </div>
        );
    }
}

export default Footer;