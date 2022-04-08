"use strict";
//모듈
const express = require("express");
const router = express.Router();

//라우팅
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: 회원 정보 관리
 */
router.post("/login", ctrl.process.login);


router.post("/register", ctrl.process.register);

module.exports = router;