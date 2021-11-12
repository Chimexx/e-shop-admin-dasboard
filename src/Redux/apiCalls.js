import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {
	getProductsStart,
	getProductsSuccess,
	getProductsFailure,
	deleteProductsStart,
	deleteProductsSuccess,
	deleteProductsFailure,
	updateProductsStart,
	updateProductsSuccess,
	updateProductsFailure,
	createProductsStart,
	createProductsSuccess,
	createProductsFailure,
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
export const updateProducts = async (id, product, dispatch) => {
	dispatch(updateProductsStart());
	try {
		dispatch(updateProductsSuccess({ id, product }));
	} catch (error) {
		dispatch(updateProductsFailure());
	}
};
export const createProducts = async (product, dispatch) => {
	dispatch(createProductsStart());
	try {
		const res = await userRequest.post("products/new", product);
		console.log(res.data);
		dispatch(createProductsSuccess(res.data));
	} catch (error) {
		dispatch(createProductsFailure());
	}
};
