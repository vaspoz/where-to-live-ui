import * as types from '../actions/ActionTypes';

/*
	Expected payload of authResponse:
	authResponse: {
		jwttoken: String,
		userDTO: {
			username,
			password,
			email,
			countryOrigin
		}
		error,
		errorCode
  }
 */

export default function globalSettingsReducer(state = {}, action) {
	switch (action.type) {
		case types.CHANGE_SORT_ORDER:
			return Object.assign(
				{},
				state,
				{sortOrder: action.sortOrder}
			);
		case types.SIGNUP_USER_SUCCESS:
			if (action.authResponse.error) {
				return handleErrorSignup(state, action.authResponse);
			}
			return handleSignupLoginSuccess(state, action.authResponse);
		case types.LOGIN_USER_SUCCESS:
			if (action.authResponse.error) {
				return handleErrorLogin(state, action.authResponse);
			}
			return handleSignupLoginSuccess(state, action.authResponse);
		case types.LOGOUT_USER:
			return Object.assign(
				{},
				state,
				{
					currentUser: {},
					loginError: "",
					signupError: ""
				});
		default:
			return state;
	}
}

function handleErrorSignup(state, authResponse) {

	return Object.assign(
		{},
		state,
		{
			currentUser: {},
			loginError: "",
			signupError: authResponse.error
		}
	)
}

function handleErrorLogin(state, authResponse) {
	return Object.assign(
		{},
		state,
		{
			currentUser: {},
			loginError: authResponse.error,
			signupError: ""
		}
	)
}

function handleSignupLoginSuccess(state, authResponse) {
	localStorage.setItem('jwttoken', authResponse.jwttoken);
	return Object.assign(
		{},
		state,
		{
			currentUser: authResponse.userDTO,
			loginError: "",
			signupError: ""
		}
	);
}

function cleanupGlobalAuthSettings() {

}
