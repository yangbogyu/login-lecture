"use strict";
//모듈
const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});
