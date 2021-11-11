import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {
	getProductsStart,
	getProductsSuccess,
	getProductsFailure,
	deleteProductsStart,
	deleteProductsSuccess,
	deleteProductsFailure,
} from "./productSlice";
import { publicRequest, userRequest } from "../RequestMethods";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const getProducts = async (dispatch) => {
	dispatch(getProductsStart());
	try {
		const res = await publicRequest.get("products/");
		dispatch(getProductsSuccess(res.data));
	} catch (error) {
		dispatch(getProductsFailure());
	}
};
export const deleteProducts = async (id, dispatch) => {
	dispatch(deleteProductsStart());
	try {
		const res = await userRequest.delete(`products/${id}`);
		console.log(res.data);
		dispatch(deleteProductsSuccess(res.data));
	} catch (error) {
		dispatch(deleteProductsFailure());
	}
};
