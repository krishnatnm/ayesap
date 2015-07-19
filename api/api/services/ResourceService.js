/**
 * Created by abhijeetgupta on 14/07/15.
 */

var rp = require('request-promise');
var partner = sails.config.globals.partnerDetails;
var APIurl = sails.config.globals.APIurl;
module.exports = {
    getRidersInZone: function (zone, riderActiveStatus,  callback) {
        zone = 7;
        riderActiveStatus = 0;
        var options = {
            uri : APIurl,
            method : 'POST',
            form: {
                method: "getallresources",
                email: partner.email,
                key: partner.key,
                zoneid: zone,
                status: riderActiveStatus
            }
        };
        rp(options)
            .then(function (response) {
                console.log("got resources", response);
                    console.log("service res--->>>", response);
                    return callback(null, response);

            })
            .catch(function(error){
                console.log("error in getting resource")
                return callback(error, {"status": "Failed"});
            });
    }
}
