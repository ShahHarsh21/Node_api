const pool = require("../../config/dbconfig");
module.exports = {
  createManuf: (data, callback) => {
    pool.query(
      "insert into manfdevice(ssid,devtypeid,manfwifissid,manfwifipass) values(?,?,?,?)",
      [data.ssid, data.devtypeid, data.manfwifissid, data.manfwifipass],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getManuf: (callback) => {
    pool.query(
      "select mf.manfdevid as id,mf.ssid,mf.manfwifissid,dt.image,dt.createat,dt.status,dt.devtype from manfdevice mf join devicetype dt ON mf.devtypeid=dt.devtypeid",
      [],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getMenufById: (manfdevid, callback) => {
    pool.query(
      "select mf.manfdevid as id,mf.ssid,mf.manfwifissid,dt.image,dt.createat,dt.status,dt.devtype from manfdevice mf join devicetype dt ON mf.devtypeid=dt.devtypeid where manfdevid=?",
      [manfdevid],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  updateMenuf: (body, callback) => {
    pool.query(
      "update manfdevice set ssid=?,devtypeid=?,manfwifissid=?,	manfwifipass=? where manfdevid=?",
      [
        body.ssid,
        body.devtypeid,
        body.manfwifissid,
        body.manfwifipass,
        body.manfdevid,
      ],
      (error, result, fileds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  deleteMenuf: (manfdevid, callback) => {
    pool.query(
      "delete from manfdevice where manfdevid=?",
      [manfdevid],
      (error, result, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
};
