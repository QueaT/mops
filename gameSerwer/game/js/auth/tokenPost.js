import tokenState from './tokenState.js';

const button = document.querySelector('button');


button.addEventListener('click', async () => {
    try {
        const user = await axios.post('http://localhost:3000/login', {
            email: "ziomek@wp.pl",
            nick: "Qu",
            password: "Eminem007d"
        })
        tokenState.tokenID = user.data.token
        window.location.href = `http://localhost:3000/game/${tokenState.token}`;
    } catch (err) {
        console.log(err);
    }

})