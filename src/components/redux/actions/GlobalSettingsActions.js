import * as types from './ActionTypes';
import beginAjaxCall from '../actions/AjaxStatusActions';
import api from '../../ajax/api';

export function signUpUser(username, password, email, countryOrigin) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return api.signUp(username, password, email, countryOrigin)
			.then(authResponse => dispatch(signUpUserSuccess(authResponse)))
			.catch(error => {
				throw(error);
			});
	};
}

export function loginUser(username, password) {
	return (dispatch) => {
		dispatch(beginAjaxCall());
		return api.login(username, password)
			.then(token => dispatch(loginUserSuccess(token)))
			.catch(error => {
				throw(error);
			});
	};
}

export function logout() {
	return (dispatch) => {
		dispatch({
			type: types.LOGOUT_USER
		})
	}
}

function changeSortOrder(newOrder) {
	return {
		type: types.CHANGE_SORT_ORDER,
		sortOrder: newOrder
	};
}

function signUpUserSuccess(authResponse) {
	return {
		type: types.SIGNUP_USER_SUCCESS,
		authResponse
	};
}

function loginUserSuccess(authResponse) {
	return {
		type: types.LOGIN_USER_SUCCESS,
		authResponse
	};
}
