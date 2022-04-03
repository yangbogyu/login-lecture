"use strict";
//모듈
const express = require("express");
const router = express.Router();

//라우팅
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;