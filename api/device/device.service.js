const pool = require("../../config/dbconfig");
module.exports = {
  
    getdevice:callBack=>{
        pool.query(
            `select de.devid as id,de.devname,de.manfdevid,de.roomid,de.wificredid,de.description,de.onoffstatus,de.dimming,de.ipaddress,de.createdat,de.status,mn.ssid,mn.devtypeid,mn.manfwifissid,mn.manfwifipass,rm.roomname,rm.description,wc.ssid,wc.password from device de join manfdevice mn on de.manfdevid=mn.manfdevid join room rm on rm.roomid=de.roomid join wificred wc on wc.wificredid=de.wificredid`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                
                return callBack(null,results);
            }
        )
    },
    createdevice:(body,callback)=>{
        var cur= new Date();
        var createdate= Date.parse(cur)/1000;
        pool.query(
            'INSERT INTO device (devname,manfdevid,roomid,wificredid,description,onoffstatus,dimming,ipaddress,createdat,status) values(?,?,?,?,?,?,?,?,?,?)',
            [
                body.devname,
                body.manfdevid,
                body.roomid,
                body.wificredid,
                body.description,
                body.onoffstatus,
                body.dimming,
                body.ipaddress,
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
    updatedevice:(body,callback)=>{
        pool.query(
            'UPDATE device SET devname=?,manfdevid=?,roomid=?,wificredid=?,description=?,onoffstatus=?,ipaddress=?,dimming=?,status=? where devid=?',
            [
                body.devname,
                body.manfdevid,
                body.roomid,
                body.wificredid,
                body.description,
                body.onoffstatus,
                body.dimming,
                body.ipaddress,
                body.status,
                body.devid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    deletedevice:(devid,callback)=>{
        pool.query(
            'DELETE from device WHERE devid=?',
            [
                devid
            ],
            (error,results)=>{
                if(error){
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    },
    getdevicebyid:(devid,callback)=>{
        pool.query(
            'select de.devid as id,de.devname,de.manfdevid,de.roomid,de.wificredid,de.description,de.onoffstatus,de.dimming,de.ipaddress,de.createdat,de.status,mn.ssid,mn.devtypeid,mn.manfwifissid,mn.manfwifipass,rm.roomname,rm.description,wc.ssid,wc.password from device de join manfdevice mn on de.manfdevid=mn.manfdevid join room rm on rm.roomid=de.roomid join wificred wc on wc.wificredid=de.wificredid  WHERE devid=?',
            [
                devid
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