import {
    LOAD
} from './types';

export const settingsLoad = (data) => {
    return {
        type: LOAD,
        payload: data
    };
};
