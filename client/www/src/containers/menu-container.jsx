import { connect } from 'react-redux'
import Menu from '../components/menu.jsx';
import {fetchEntries, changeEntry} from '../main/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onInitialLoad: () => {
            dispatch(fetchEntries());
        },
        onChange: (entry) => {
            dispatch(changeEntry(entry))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        entries: state.blog.entries,
        loading: state.blog.loading,
        current: state.blog.currentEntry
    }
};

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer
