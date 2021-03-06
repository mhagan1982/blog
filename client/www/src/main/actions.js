import fetch from 'isomorphic-fetch';
import {getBaseUrl} from './util';

export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export const RECIEVE_ENTRIES = 'RECIEVE_ENTRIES';
export const REQUEST_ENTRIES = 'REQUEST_ENTRIES';

export const CHANGE_ENTRY = 'CHANGE_ENTRY';

export function fetchEntries() {
    return function(dispatch) {
        dispatch(requestEntries());
        return fetch(getBaseUrl() + 'v1/entries')
                .then(response => response.json())
                .then(json =>
                    dispatch(recieveEntries(json)
                )
        )
    }
}

export function requestEntries() {
    return {
        type: REQUEST_ENTRIES
    }
}

export function recieveEntries(entries) {
    return {
        type: RECIEVE_ENTRIES,
        loading: false,
        entries: entries
    }
}

export function changeEntry(entry) {
    return {
        type: CHANGE_ENTRY,
        currentEntry: entry
    }
}