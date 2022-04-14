const pool = require("../../config/dbconfig");
module.exports = {
  createWifiCred: (data, callBack) => {
    pool.query(
      "insert into wificred(ssid,password) values(?,?)",
      [data.ssid, data.password],
      (error, result, fields) => {
        console.log(error, result);
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },

  getWifiCred: (callBack) => {
    pool.query(
      "select wificredid as id,ssid,password from wificred order by wificredid asc",
      [],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  getWifiCredById: (wificredid, callBack) => {
    pool.query(
      "select wificredid as id,ssid,password  from wificred where wificredid=?",
      [wificredid],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  wificredUpdate: (body, callBack) => {
    pool.query(
      "update wificred set ssid=? , password=? where wificredid=?",
      [body.ssid, body.password, body.wificredid],
      (error, result, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  wificredDelete: (wificredid, callBack) => {
    pool.query(
      "delete from wificred where wificredid=?",
      [wificredid],
      (error, result, fileds) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
