import {
	createEntityAdapter,
	createSelector,
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

const {
	selectAll,
	selectById,
} = cartItemsAdapter.getSelectors(state => state.cart)

export const selectCartItemQty = createSelector(selectById, item => {
	return item ? item.qty : 0
})

export const selectCartItemQtyTotal = createSelector(selectAll, items => {
	return items.reduce((prev, curr) => prev + curr.qty, 0)
})

export const cartReducer = cartSlice.reducer