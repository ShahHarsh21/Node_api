const pool = require("../../config/dbconfig");
const DATE_FORMATER = require( 'dateformat' );

module.exports = {
    createApt:(data,callBack)=>{
        var cur= new Date();
        var createdate= Date.parse(cur)/1000;
        pool.query(
            `insert into apartment(aptname,apttypeid,description,createdat,status) values(?,?,?,?,?)`,
            [
             data.aptname,
             data.apttypeid,
             data.description,
             createdate,
             data.status
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getApt:callBack=>{
        pool.query(
            `select aptid as id,aptname,apttypeid,description,createdat,status from apartment ORDER BY aptid`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    getAptId:(id,callBack)=>{
        pool.query(
            `select aptid as id,aptname,apttypeid,description,createdat,status from apartment where aptid=?`,
            [
             id   
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    updateApt:(data,callBack)=>{
        pool.query(
            `update apartment set aptname=?,apttypeid=?,description=?,status=? where aptid=?`,
            [
                data.aptname,
                data.apttypeid,
                data.description,
                data.createdat,
                data.status,
                data.aptid  
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },

    deleteApt:(id,callBack)=>{
        pool.query(
            `delete from apartment where aptid=?`,
            [
                id 
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },


}