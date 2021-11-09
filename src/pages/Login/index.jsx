import React from "react";
import { useState } from "react";
import { login } from "../../Redux/apiCalls";
import { useDispatch } from "react-redux";
//styles
import { Container, Input, Button } from "./Login.styles";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	};

	return (
		<Container>
			<Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
			<Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
			<Button onClick={handleLogin}>Login</Button>
		</Container>
	);
};

export default Login;
