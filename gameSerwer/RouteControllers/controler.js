var path = require('path');
const UserSchema = require('../schema/user');
const JWT = require('jsonwebtoken');



module.exports = {
    redirect: async (req,res,next) =>{
     res.redirect('/login');
    },
    register: async (req, res, next) => {
        res.sendFile(path.join(global.base_dir + '/pages' + '/register.html'));
    },
    registerPost: async (req, res, next) => {
        const {
            email,
            nick,
            password
        } = req.value.body;

        const checkIfUserExsist = await UserSchema.find({
            email,
        })
        if (checkIfUserExsist.length) {
            return res.status(400).json({
                info: "Podany user juz istnieje"
            })
        }

        const newUser = await new UserSchema({
            email,
            nick,
            password
        })
        await newUser.save();

        const token = await tokenGenerator(newUser)

        res.status(200).json({
            info: "Pomyślnie utworzono uzytkownika",
            token
        })
    },
    game: async (req, res, next) => {
        res.sendFile(path.join(global.base_dir + '/pages' + '/index.html'));
    },
    login: async (req, res, next) => {
        res.sendFile(path.join(global.base_dir + '/pages' + '/login.html'));
    },

    loginPost: async (req, res, next) => {
        const {email,password} = req.value.body;
         
        const checkIfUserExsist = await UserSchema.findOne({
            email
        })
        if(password === checkIfUserExsist.password){
         const token = await tokenGenerator(checkIfUserExsist);
            res.status(200).json({
                info:'Pomyślnie zalogowano',
                token

            })
        }else{
            res.status(404).json({
                info:'Błąd walidacji'
            })
        }
    }
}

tokenGenerator = async (user) => {
    const token = await JWT.sign({
        name: user.email,
        id: user._id
    }, global.password, {
        expiresIn: "1h"
    })
    return token;
}