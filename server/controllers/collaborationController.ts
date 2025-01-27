import { Request, Response } from "express";
import Collaboration from "../models/Collaboration";

export const getCollaborations = async (req: Request, res: Response): Promise<void> => {
  try {
    const collaborations = await Collaboration.find().populate("members");
    res.status(200).json(collaborations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching collaborations", error: err });
  }
};

export const addMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { workspaceId } = req.params;
    const { memberId } = req.body;
    const collaboration = await Collaboration.findById(workspaceId);

    if (!collaboration) {
      res.status(404).json({ message: "Collaboration not found" });
      return;
    }

    collaboration.members.push(memberId);
    await collaboration.save();
    res.status(200).json(collaboration);
  } catch (err) {
    res.status(500).json({ message: "Error adding member", error: err });
  }
};

export const removeMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const { workspaceId } = req.params;
    const { memberId } = req.body;
    const collaboration = await Collaboration.findById(workspaceId);

    if (!collaboration) {
       res.status(404).json({ message: "Collaboration not found" });
       return;
    }

    collaboration.members = collaboration.members.filter((id) => id !== memberId);
    await collaboration.save();
    res.status(200).json(collaboration);
  } catch (err) {
    res.status(500).json({ message: "Error removing member", error: err });
  }
};
