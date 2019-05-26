import {Actions} from '../constants/Actions';

export default (state = {}, payload) => {
    switch (payload.type) {
        case Actions.Search.SET_TERM: {
            return {...state, term: payload.term};
        }
        case Actions.Search.CLEAR : {
            return {...state, term: ''};
        }
        default : {
            return state;
        }
    }
};