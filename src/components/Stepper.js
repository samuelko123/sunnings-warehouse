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

	const [num, setNum] = React.useState(value)

	const handleDecrement = () => {
		const _value = Math.max(min, num - 1)
		setNum(_value)
		onChange(_value)
	}

	const handleIncrement = () => {
		const _value = Math.min(max, num + 1)
		setNum(_value)
		onChange(_value)
	}

	const handleChange = (e) => {
		const text = e.target.value

		// regex - one or more digits
		if (!/^[0-9]*$/.test(text)) {
			return
		}

		// convert to int (null/blank to 0)
		const int_val = text ? parseInt(text) : 0

		// restrict num to be between min and max
		const adj_val = Math.min(Math.max(int_val, min), max)

		// set input field to 0 if blank
		setNum(adj_val)

		// commit non-zero value to redux
		if (adj_val > 0) {
			onChange(adj_val)
		}
	}

	const handleBlur = () => {
		// commit zero value to redux
		if (num === 0) {
			onChange(0)
		}
	}

	return (
		<Container onBlur={handleBlur}>
			<Button onClick={handleDecrement}>
				<img
					src='/img/minus.svg'
					alt='decrement'
				/>
			</Button>
			<Input
				value={num}
				onChange={handleChange}
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