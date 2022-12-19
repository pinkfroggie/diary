import {db} from '../db.js'
import bcrypt from 'bcrypt'

export const register = (req,res) => {

    // check existing user
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
    
}


// export const logout = (req,res) => {
    
// }