//config/dbconfigfile requred for db connection
const pool = require("../../config/dbconfig");
module.exports = {
  createDevType: (data, callback) => {
    var cur = new Date();
    var createdate = Date.parse(cur) / 1000;
    pool.query(
      "insert into devicetype(devtypehex,devtype,image,createat,status) values(?,?,?,?,?)",
      [
        data.devtypehex,
        data.devtype,
        data.image,
        createdate,
        data.status
      ],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },

  getDevType: (callback) => {
    pool.query(
      "select devtypeid as id,devtypehex,devtype,image,createat,status from devicetype order by devtypeid",
      [],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },

  getDeveTypeById: (devtypeid, callback) => {
    pool.query(
      "select  devtypeid as id,devtypehex,devtype,image,createat,status from devicetype where devtypeid=?",
      [
      devtypeid
      ],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  updateDevType: (body, callback) => {
    pool.query(
      "update devicetype set 	devtypehex=?,devtype=?,	image=?,status=? where devtypeid=?",
      [body.devtypehex, body.devtype, body.image, body.status , body.devtypeid],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  deleteDevType: (devtypeid, callback) => {
    pool.query(
      "delete from devicetype where devtypeid=?",
      [devtypeid],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
};
