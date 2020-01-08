import * as types from '../actions/ActionTypes';

/*
	Expected payload of authResponse:
	authResponse: {
		jwttoken: String,
		userDTO: {
			username,
			password,
			email,
			countryOrigin,
			...
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
		case types.SIGNUP_SUCCESS_AJAXEND:
			if (action.authResponse.error) {
				return handleErrorSignup(state, action.authResponse);
			}
			return handleSignupLoginSuccess(state, action.authResponse);
		case types.LOGIN_SUCCESS_AJAXEND:
			return handleSignupLoginSuccess(state, action.authResponse);
		case types.LOGIN_FAILRE_AJAXEND:
			return handleErrorLogin(state, action.errorMessage);
		case types.CLEAR_LOGIN_ERRORS:
			return cleanupGlobalAuthSettings(state);
		case types.LOGOUT_USER:
			return cleanupGlobalAuthSettings(state);
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
			signupError: authResponse.error,
			authorized: false
		}
	);
}

function handleErrorLogin(state, errorMessage) {
	return Object.assign(
		{},
		state,
		{
			currentUser: {},
			loginError: errorMessage,
			signupError: "",
			authorized: false
		}
	);
}

function handleSignupLoginSuccess(state, authResponse) {
	return Object.assign(
		{},
		state,
		{
			currentUser: authResponse.userDTO,
			loginError: "",
			signupError: "",
			authorized: true
		}
	);
}

function cleanupGlobalAuthSettings(state) {
	return Object.assign(
		{},
		state,
		{
			currentUser: {},
			loginError: "",
			signupError: "",
			authorized: false
		});
}
