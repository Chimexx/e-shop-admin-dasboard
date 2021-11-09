import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
`;
export const Input = styled.input`
	margin-top: 20px;
	height: 25px;
	padding: 10px 5px;
	width: 30vw;
	outline: none;
	border: none;
	border-radius: 5px;
	font-size: 18px;
`;
export const Button = styled.button`
	margin-top: 20px;
	height: 40px;
	padding: none;
	font-size: 20px;
	font-weight: 600;
	background-color: orangered;
	color: white;
	border-radius: 5px;
	width: 30vw;
	transition: all ease-in-out 0.3s;
	border: none;

	&:hover {
		background-color: #ffebe4;
		color: orangered;
	}
`;
