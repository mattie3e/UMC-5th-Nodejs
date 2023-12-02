import express from "express"
import asyncHandler from "express-async-handler"

import { missionCreate } from "../controllers/missionController.js"

export const missionRoute = express.Router()

missionRoute.post("/", asyncHandler(missionCreate))
