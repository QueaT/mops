import tokenState from './tokenState.js';

const button = document.querySelector('button');
const form = document.querySelector('form');
const passwordInput = document.querySelector('.password');
const emailInput = document.querySelector('.email');


const inputsValues = {
    email: '',
    password: ''
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
        const user = await axios.post('https://dog-project-node.herokuapp.com/login', {
            email: inputsValues.email,
            password: inputsValues.password,
        })
        tokenState.tokenID = user.data.token
        window.location.href = `https://dog-project-node.herokuapp.com/game/${tokenState.token}`;
    } catch (err) {
        console.log(err);
    }
}