import { Router } from "express";
import {  createTask, getTasks, updateTaskStatus } from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask)
router.patch("/:taskId/status", updateTaskStatus    )
router.get("/user/:userId", getTasks);

export default router;