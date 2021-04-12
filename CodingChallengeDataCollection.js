/**
 * Type: Micro Service
 * Description: A short-lived service which is expected to complete within a fixed period of time.
 * @param {CbServer.BasicReq} req
 * @param {string} req.systemKey
 * @param {string} req.systemSecret
 * @param {string} req.userEmail
 * @param {string} req.userid
 * @param {string} req.userToken
 * @param {boolean} req.isLogging
 * @param {[id: string]} req.params
 * @param {CbServer.Resp} resp
 */

function CodingChallengeDataCollection(req,resp){
    // These are parameters passed into the code service
    var params = req.params
    ClearBlade.init({request:req});
    var callback = function (err, data) {
        if (err) {
        	resp.error("creation error : " + JSON.stringify(data));
        } else {
        	resp.success(data);
        }
    };
    log(params);
    message = {
        cpu_usage: parseFloat(params.body)
    };
    var collection = ClearBlade.Collection({collectionName: "CodingChallengeData" });
    collection.create(message, callback);
}
