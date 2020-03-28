export default {
	API_ENDPOINT:
		process.env.REACT_APP_API_ENDPOINT ||
		"https://influence-api.herokuapp.com/api",
	TOKEN_KEY: "influence-client-auth-token"
}
