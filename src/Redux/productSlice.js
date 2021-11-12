import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Get All
		getProductsStart: (state) => {
			state.isFetching = true;
		},
		getProductsSuccess: (state, action) => {
			state.isFetching = false;
			state.products = action.payload;
		},
		getProductsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Delete
		deleteProductsStart: (state) => {
			state.isFetching = true;
		},
		deleteProductsSuccess: (state, action) => {
			state.isFetching = false;
			state.products.splice(
				state.products.findIndex((item) => item._id === action.payload.id),
				1
			);
		},
		deleteProductsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Update
		updateProductsStart: (state) => {
			state.isFetching = true;
		},
		updateProductsSuccess: (state, action) => {
			state.isFetching = false;
			state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product;
		},
		updateProductsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},

		//Create Item
		createProductsStart: (state) => {
			state.isFetching = true;
		},
		createProductsSuccess: (state, action) => {
			state.isFetching = false;
			state.products.push(action.payload);
		},
		createProductsFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
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
} = productSlice.actions;
export default productSlice.reducer;
