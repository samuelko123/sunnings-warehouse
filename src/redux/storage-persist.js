import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const createNoopStorage = () => {
	return {
		getItem() {
			return Promise.resolve(null)
		},
		setItem(_key, value) {
			return Promise.resolve(value)
		},
		removeItem() {
			return Promise.resolve()
		},
	}
}

export const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()