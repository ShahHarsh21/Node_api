const pool = require("../../config/dbconfig");
module.exports = {
 
    getuser:callBack=>{
        pool.query(
            `select user_id as id,fname,lname from user`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },
    createuser:(body,callback)=>{
        pool.query(
            'INSERT INTO user (fname,lname) values(?,?)',
            [
                body.fname,
                body.lname
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    updateuser:(body,callback)=>{
        pool.query(
            'UPDATE user SET fname=?,lname=? where user_id=?',
            [
                body.fname,
                body.lname,
                body.user_id
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deleteuser:(user_id,callback)=>{
        pool.query(
            'DELETE from user WHERE user_id=?',
            [
                user_id
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getuserbyid:(user_id,callback)=>{
        pool.query(
            'SELECT  user_id as id,fname,lname FROM user WHERE user_id=?',
            [
                user_id
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },

}