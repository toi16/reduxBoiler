import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    // other reducers here
    form: formReducer
});
