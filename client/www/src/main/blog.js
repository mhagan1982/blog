import {FETCH_ENTRIES, RECIEVE_ENTRIES} from './actions';

function blog(state = {
    loading: true,
    entries: [],
    currentEntry: {}
}, action) {
    switch(action.type) {
        case RECIEVE_ENTRIES:
            let entries = action.entries;
            return Object.assign({}, {
                loading: action.loading,
                entries: entries,
                currentEntry: entries[entries.length-1]
            });
        default:
            return state;
    }
}

export default blog;
