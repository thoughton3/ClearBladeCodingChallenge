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

function CodingChallengeAnalysis(req,resp){
    // These are parameters passed into the code service
    var params = req.params
    ClearBlade.init({request:req});
    var fetch_callback = function (err, data) {
        if (err) {
        	resp.error("Error fetching collection data : " + err);
        } else {
            var total = 0;
            for (var i = 0; i < data.TOTAL; i++) {
                total += parseFloat(data.DATA[i].cpu_usage)
            }
            var average = total / data.TOTAL;
            var high = data.DATA[data.TOTAL - 1].cpu_usage;
            var low = data.DATA[0].cpu_usage;
            
            var mqtt_service = ClearBlade.Messaging();
            mqtt_service.publish("analytics", "Current High: " + high + " Current Low: " + low + " Current Average: " + average);

        	resp.success("Data successfully fetched");
        }
    };
    var query = ClearBlade.Query({collectionName: "CodingChallengeData" });
    query.setPage(0, 0);
    query.ascending("cpu_usage");
    query.fetch(fetch_callback);
}
