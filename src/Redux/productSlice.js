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
	},
});

export const {
	getProductsStart,
	getProductsSuccess,
	getProductsFailure,
	deleteProductsStart,
	deleteProductsSuccess,
	deleteProductsFailure,
} = productSlice.actions;
export default productSlice.reducer;
