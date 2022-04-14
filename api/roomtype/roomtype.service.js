const pool = require("../../config/dbconfig");
module.exports = {
  
    getroomtype:callBack=>{
        pool.query(
            `select roomtypeid as id,roomtype,createdat,status from roomtype`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },
    createroomtype:(body,callback)=>{
        var cur= new Date();
        var createdate= Date.parse(cur)/1000;
        pool.query(
            'INSERT INTO roomtype (roomtype,createdat,status) values(?,?,?)',
            [
                body.roomtype,
                createdate,
                body.status
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    updateroomtype:(body,callback)=>{
        pool.query(
            'UPDATE roomtype SET roomtype=?,status=? where roomtypeid=?',
            [
                body.roomtype,
                body.status,
                body.roomtypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deleteroomtype:(roomtypeid,callback)=>{
        pool.query(
            'DELETE from roomtype WHERE roomtypeid=?',
            [
                roomtypeid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getroomtypebyid:(roomtypeid,callback)=>{
        pool.query(
            'SELECT  roomtypeid as id,roomtype,createdat,status FROM roomtype WHERE roomtypeid=?',
            [
                roomtypeid
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