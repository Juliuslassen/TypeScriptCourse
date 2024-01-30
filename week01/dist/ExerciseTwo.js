"use strict";
{ /* */ }
const xNum = 5;
const jackName = "Jack";
const isTrue = true;
const typeArray = [];
const anything = "anything";
var myEnum;
(function (myEnum) {
    myEnum[myEnum["MONDAY"] = 0] = "MONDAY";
    myEnum[myEnum["TUESDAY"] = 1] = "TUESDAY";
    myEnum[myEnum["WEDNESDAY"] = 2] = "WEDNESDAY";
    myEnum[myEnum["THURSDAY"] = 3] = "THURSDAY";
    myEnum[myEnum["FRIDAY"] = 4] = "FRIDAY";
    myEnum[myEnum["SATURDAY"] = 5] = "SATURDAY";
    myEnum[myEnum["SUNDAY"] = 6] = "SUNDAY";
})(myEnum || (myEnum = {}));
