
module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "USA/ NEW YORK"});
    return aestTime;
}