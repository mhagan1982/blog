import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.loading === true) {
            this.props.onInitialLoad();
        }
    }

    render() {
        var entries = this.props.entries;
        var current = this.props.current;
        var options = _.map(entries, (entry) => {
            return <option value={entry.date}>{entry.title}</option>
        });
        return (
            <select name="select" value={current.date}>
                {options}
            </select>
        );
    }

}

export default Menu;
