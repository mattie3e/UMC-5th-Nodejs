import express from "express"
import asyncHandler from "express-async-handler"
import { storeRegister } from "../controllers/storeController.js"

export const storeRoute = express.Router()

storeRoute.post("/", asyncHandler(storeRegister))
