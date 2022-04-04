import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;

    width: 100%;
    height: 3rem;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;

    background-color: ${props => props.theme.color.surface};
    border: 1px solid #bfbfbf;

    cursor: pointer;
`

const Input = styled.input`
    width: 50%;

    border: 1px solid #bfbfbf;
    border-radius: 0;

    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`

export const Stepper = (props) => {
	const {
		value,
		min,
		max,
		onChange,
	} = props

	const KEY_ENTER = 13
	const KEY_ESC = 27
	const [text, setText] = React.useState(value)

	const applyNumBound = (x) => {
		return Math.min(Math.max(x, min), max)
	}

	const handleDecrement = () => {
		const _value = applyNumBound((text || 0) - 1)
		setText(_value)
		onChange(_value)
	}

	const handleIncrement = () => {
		const _value = applyNumBound((text || 0) + 1)
		setText(_value)
		onChange(_value)
	}

	const handleChange = (e) => {
		const _text = e.target.value

		// regex - zero or more digits
		if (!/^[0-9]*$/.test(_text)) {
			return
		}

		// convert to int (null/blank to 0)
		const int_val = _text ? parseInt(_text) : 0

		// restrict num to be between min and max
		const adj_val = applyNumBound(int_val)

		// set input text
		adj_val === 0 ? setText('') : setText(adj_val)
	}

	const handleBlur = () => {
		// commit input value
		onChange(text || 0)
	}

	const handleKeyDown = (e) => {
		if (
			e.keyCode === KEY_ENTER ||
			e.keyCode === KEY_ESC
		) {
			onChange(text || 0)
			e.target.blur()
		}
	}

	return (
		<Container>
			<Button onClick={handleDecrement}>
				<img
					src='/img/minus.svg'
					alt='decrement'
				/>
			</Button>
			<Input
				value={text}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				onBlur={handleBlur}
			/>
			<Button onClick={handleIncrement}>
				<img
					src='/img/plus.svg'
					alt='increment'
				/>
			</Button>
		</Container>
	)
}