"use strict";
//모듈
const app = require("../app");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("서버시작");
});
