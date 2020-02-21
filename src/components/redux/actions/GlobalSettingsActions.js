import * as types from './ActionTypes';
import beginAjaxCall from '../actions/AjaxStatusActions';
import api from '../../ajax/api';

export function signUpUser(firstName, lastName, username, password, email, countryOrigin) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		dispatch(clearLoginErrors());
		return api.signUp(firstName, lastName, username, password, email, countryOrigin)
			.then(authResponse => {
				if (authResponse.error) {
					dispatch(loginUserFailure(authResponse.error));
				} else {
					localStorage.setItem('jwttoken', authResponse.jwttoken);
					dispatch(loginUserSuccess(authResponse));
				}
			})
			.catch(error => {
				throw(error);
			});
	};
}

export function loginUser(username, password) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		dispatch(clearLoginErrors());
		return api.login(username, password)
			.then(authResponse => {
				if (authResponse.error) {
					dispatch(loginUserFailure(authResponse.error));
				} else {
					localStorage.setItem('jwttoken', authResponse.jwttoken);
					dispatch(loginUserSuccess(authResponse));
				}
			})
			.catch(error => {
				throw(error);
			});
	};
}

export function logout() {
	return (dispatch) => {
		localStorage.removeItem('jwttoken');
		dispatch({
			type: types.LOGOUT_USER
		});
	};
}

function changeSortOrder(newOrder) {
	return {
		type: types.CHANGE_SORT_ORDER,
		sortOrder: newOrder
	};
}

function signUpUserSuccess(authResponse) {
	return {
		type: types.SIGNUP_SUCCESS_AJAXEND,
		authResponse
	};
}

function loginUserSuccess(authResponse) {
	return {
		type: types.LOGIN_SUCCESS_AJAXEND,
		authResponse
	};
}

function loginUserFailure(errorMessage) {
	return {
		type: types.LOGIN_FAILRE_AJAXEND,
		errorMessage
	};
}

function clearLoginErrors() {
	return {
		type: types.CLEAR_LOGIN_ERRORS
	};

}
