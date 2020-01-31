const bcrypt = require('bcryptjs');

module.exports = {
    login: async (res, req) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        if (!user[0]){
            return res.status(400).send('Username not found');
        }

        let authentication = bcrypt.compareSync(password, user[0].password);
        if(!authentication) {
            return res.status(401).send('Password is incorrect');
        }
        // NECESSARY FOR SECURITY
        delete user[0].password;
        req.session.user = user[0];
        console.log(req.session.cookie);
        res.status(202).send(req.session.user)
    },

    register: async (res, req) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        if (user[0]) {
            return res.status(400).send('Username already exists')
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(username, hash);

        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('Succesfully Logged Out')
    },

    getUser: (req, res) => {
        console.log(req.session.user)
        if (req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('No user on session');
        }
    }
}