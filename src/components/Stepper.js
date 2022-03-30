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
	const { num } = props

	return (
		<Container>
			<Button>
				<img
					src='/img/minus.svg'
					alt='decrement'
				/>
			</Button>
			<Input defaultValue={num} />
			<Button>
				<img
					src='/img/plus.svg'
					alt='increment'
				/>
			</Button>
		</Container>
	)
}