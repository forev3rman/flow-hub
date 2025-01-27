"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectcontroller_1 = require("../controllers/projectcontroller");
const router = (0, express_1.Router)();
router.get("/", projectcontroller_1.getProjects);
router.post("/", projectcontroller_1.createProject);
exports.default = router;
