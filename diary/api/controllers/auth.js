import {db} from '../db.js'

export const register = (req,res) => {

    // check existing user
    const q = 'SELECT * FROM users WHERE name = ?'

    db.query(q, [req.body.name], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json('user already exists');

        
    })
}

export const login = (req,res) => {
    
}


// export const logout = (req,res) => {
    
// }