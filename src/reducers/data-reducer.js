import {Actions} from "../constants/Actions";

export default (state = {}, payload) => {
    switch (payload.type) {
        case Actions.Data.LOAD_SUCCESS: {
            return {};
        }
        default : {
            return state;
        }
    }
};