import {db} from '../db.js'
import bcrypt from 'bcrypt'
import pkg from 'jsonwebtoken';


const { Jwt } = pkg;

export const register = (req,res) => {

    // check existing user
    // postgres queries
    // https://node-postgres.com/features/queries
    const q = 'SELECT * FROM users WHERE name = ?'

    db.query(q, [req.body.name], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json('diary already made');

        // hash swan da password + create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const q = 'INSERT users(`name`, `password`) VALUES (?)'
        const values = [
            req.body.name,
            hash
        ]

        db.query(q, [values], (err,data)=>{
            if (err) return res.json(err);
            return res.status(200).json('diary has been created');
        })
    })
}

export const login = (req,res) => {
    // check user

    const q = 'SELECT * FROM users WHERE username =?'

    db.query(q,[req.body.name], (err, data)=>{
        if (err) return res.json(err);
        if(data.length === 0) return res.status(404).json('diary not found');

        // check pw
        // https://www.npmjs.com/package/bcrypt
        // literally just straight up documentation lol
        // making sure that the hashed pw is associated with the right user hence checking the first object in the table array
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json('wrong user')

        const token = jwt.sign({id:data[0].id}, 'jwtkey');
        // making sure hashed pw isnt sent when the user cookies are collected
        const {password, ...other} = data[0]


         res.cookie('access_token', token, {
            httpOnly:true
        }).status(200).json(other)
    });
};


// export const logout = (req,res) => {
    
// }