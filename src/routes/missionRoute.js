import express from "express"
import asyncHandler from "express-async-handler"

import {
    missionCreate,
    missionStart,
} from "../controllers/missionController.js"

export const missionRoute = express.Router()

missionRoute.post("/", asyncHandler(missionCreate))
missionRoute.post("/:missionId", asyncHandler(missionStart))
