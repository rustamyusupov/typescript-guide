"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
(0, axios_1["default"])(url).then(function (response) {
    console.log(response.data);
});
