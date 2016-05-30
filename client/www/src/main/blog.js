import {FETCH_ENTRIES, RECIEVE_ENTRIES, CHANGE_ENTRY} from './actions';

function blog(state = {
    loading: true,
    entries: [],
    currentEntry: {}
}, action) {
    switch(action.type) {
        case CHANGE_ENTRY:
            return Object.assign({}, state, {
                currentEntry: action.currentEntry
            });
        case RECIEVE_ENTRIES:
            let entries = action.entries;
            return Object.assign({}, state, {
                loading: action.loading,
                entries: entries,
                currentEntry: entries[entries.length-1]
            });
        default:
            return state;
    }
}

export default blog;
