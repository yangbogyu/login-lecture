const {createLogger, transports, format} = require("winston");
require('winston-daily-rotate-file');
const {combine, timestamp, colorize, simple, printf, label} = format;

// 로그 포멧 지정
const printFormat = printf(({timestamp, label, level, message}) =>{
    return `${timestamp} [${label}] ${level} : ${message}`;
})

const printLogFormat = {
    file :combine(
    label({
        label:"백엔드 공부",
    }),
    //colorize(),
    timestamp({
        format : "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat,
    ),
    console : combine(
        colorize(),
        simple()
        ),
}

// 옵션 지정
const opts = {
    file : new transports.File({
        filename : "access.log",
        dirname : "./logs",
        level : "info",
        format : printLogFormat.file, 
    }),
    console : new transports.Console({
        level : "info",
        format : printLogFormat.console, 
    }),
}
const logger = createLogger({
    transports:[opts.file],
});
if (process.env.NODE_ENV !== 'production'){
    logger.add(opts.console);
}
module.exports = logger;