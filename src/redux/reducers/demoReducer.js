import * as types from '../../consts/actionTypes';

const demoReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_DEMO_REQUEST:
			return [...state];
		case types.GET_DEMO_SUCCESS:
			if (action.demoData) {
				return [...action, action.demoData];
			}
			return [...state, action];
		default:
			return state;
	}
}

export default demoReducer;
