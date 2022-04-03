import {
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'

const cartItemsAdapter = createEntityAdapter()

const initialState = cartItemsAdapter.getInitialState()

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		updateCartItem: cartItemsAdapter.upsertOne,
		removeCartItem: cartItemsAdapter.removeOne,
	},
})

export const {
	updateCartItem,
	removeCartItem,
} = cartSlice.actions

export const cartSelectors = cartItemsAdapter.getSelectors((state) => state.cart)

export const cartReducer = cartSlice.reducer