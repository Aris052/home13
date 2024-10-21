import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [
		{ id: 101, name: "Tiko", gender: "male", salary: 150000 },
		{ id: 102, name: "Armine", gender: "female", salary: 230000 },
		{ id: 103, name: "Aram", gender: "male", salary: 420000 },
		{ id: 104, name: "Gayane", gender: "female", salary: 120000 }
	]
}

export const UserSlice = createSlice({
	name: "Users",
	initialState,
	reducers: {
		salaryUp: function (state, action) {
			const person = state.items.find(user => user.id == action.payload)
			if (person) {
				person.salary += 50000
			}
		},
		salaryDown: function (state, action) {
			const person = state.items.find(user => user.id == action.payload)
			if (person.salary != 0) {
				if (person.salary < 50000) {
					person.salary = 50000
				}
				person.salary -= 50000
			}
		},
		deletePerson: function (state, action) {
			state.items = state.items.filter(user => user.id != action.payload)
		},
		swipeUp: function (state, action) {
			const index = state.items.findIndex(user => user.id === action.payload)

			if (index > 0) {
				const updatedItems = [...state.items]
				const temp = updatedItems[index - 1]
				updatedItems[index - 1] = updatedItems[index]
				updatedItems[index] = temp
				state.items = updatedItems
			}
		},
		swipeDown: function (state, action) {
			const index = state.items.findIndex(user => user.id === action.payload)
			if (index < state.items.length - 1) {
				const updatedItems = [...state.items]
				const temp = updatedItems[index + 1]
				updatedItems[index + 1] = updatedItems[index]
				updatedItems[index] = temp
				state.items = updatedItems
			}
		}
	}
})

export const reducer = UserSlice.reducer
export const { salaryUp } = UserSlice.actions
export const { salaryDown } = UserSlice.actions
export const { deletePerson } = UserSlice.actions
export const { swipeUp } = UserSlice.actions
export const { swipeDown } = UserSlice.actions
