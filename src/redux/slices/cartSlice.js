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
		updateCartItem: (state, item) => {
			if (item.payload.qty) {
				cartItemsAdapter.upsertOne(state, item)
			} else {
				cartItemsAdapter.removeOne(state, item.payload.id)
			}
		},
	},
})

export const {
	updateCartItem,
} = cartSlice.actions

export const cartSelectors = cartItemsAdapter.getSelectors((state) => state.cart)

export const cartReducer = cartSlice.reducer