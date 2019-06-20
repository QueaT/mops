import tokenState from './tokenState.js';

const button = document.querySelector('button');
const form = document.querySelector('form');
const passwordInput = document.querySelector('.password--window');
const emailInput = document.querySelector('.email--window');

const inputsValues = {
    email: '',
    password: '',
    nick:''
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    inputsValues.password = passwordInput.value;
    inputsValues.email = emailInput.value;
    postUser();
    console.log(inputsValues);

})

async function postUser() {
    try {
        const user = await axios.post('https://dog-project-node.herokuapp.com/register', {
            email: inputsValues.email,
            password: inputsValues.password,
            nick:inputsValues.nick
        })
        tokenState.tokenID = user.data.token
        window.location.href = `https://dog-project-node.herokuapp.com/game/${tokenState.token}`;
    } catch (err) {
        console.log(err);
    }
}