import {
    SETTINGS_CREATE,
    SETTINGS_FETCH_SUCCESS,
    SETTINGS_SAVE_SUCCESS,
    SETTINGS_UPDATE,
    LOAD
} from '../actions/types';

const INITIAL_STATE = {
    companyName: 'My Company',
    holDays: '20',
    myName: 'Vera',
    bankDays: '8',
    bankInc: 'true',
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    holStart: '01/04/2018',
    holEnd: '31/03/2019'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD:
            return { INITIAL_STATE };
        case SETTINGS_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case SETTINGS_CREATE:
            return action.payload;
        case SETTINGS_SAVE_SUCCESS:
            return action.payload;
        case SETTINGS_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
