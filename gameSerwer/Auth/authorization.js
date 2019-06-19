const JWT = require('jsonwebtoken');
const UserModel = require('../schema/user');


module.exports = {
    authParams: async function (req, res, next) {
        try {
            const {
                token
            } = req.params;
            const checkToken = await JWT.verify(token, global.password);
            if (checkToken) {
                next()
            }
        } catch (err) {
            res.status(404).json({
                info: 'Walidacja nie powiodła sie'
            })
        }


    }
}