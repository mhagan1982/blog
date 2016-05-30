import React from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import $ from 'jQuery';

require('../main/select.js');
require('./menu.scss');

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = (title) => {
            let entries = this.props.entries;
            let entry = _.filter(entries, (entry) => { return entry.title === title; });
            this.props.onChange(entry[0]);
        }
    }

    componentDidMount() {
        if(this.props.loading === true) {
            this.props.onInitialLoad();
        }
    }

    componentDidUpdate() {
        var self = this;
        $('select').mobileSelect({
            onClose: function(){
                self.changeHandler($(this).val());
            }
        });
    }

    render() {
        let entries = this.props.entries;
        let current = this.props.current;
        let options = _.map(entries.reverse(), (entry) => {
            return <option value={entry.title}>{entry.title}</option>
        });
        return (
            <div className="article-selector">
                <select name="select" className="form-control mobileSelect" value={current.title}>
                    {options}
                </select>
            </div>
        );
    }

}

export default Menu;
