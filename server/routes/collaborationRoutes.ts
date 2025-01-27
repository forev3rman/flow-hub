import { Router } from "express";
import { getCollaborations, addMember, removeMember } from "../controllers/collaborationController";

const router = Router();

router.get("/", getCollaborations);
router.post("/:workspaceId/add-member", addMember);
router.delete("/:workspaceId/remove-member", removeMember);

export default router;