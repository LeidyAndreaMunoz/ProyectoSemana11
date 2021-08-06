import { types } from '../types/types';


export const ReducerUsers = (state = {}, action ) => {

    switch ( action.type ) {

        case types.users:
            return {
                ...action.payload,
            }
        default:
            return state;
    }

}