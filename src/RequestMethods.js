import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODE1NDg4MTU0NjhlZjA0ZGI5YTFiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjYyNzU1NywiZXhwIjoxNjM2ODg2NzU3fQ.SVIvcgGWw8UoEDhwzzYWJyQ1_T6ioKc08N_P7PPCiNU";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { TOKEN: `Bearer ${TOKEN}` },
});
