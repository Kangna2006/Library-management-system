import express from "express"
import { authenticateToken, authorixeRoles } from "../middleware/authMiddleware.js"
import { searchStudentByRoll } from "../controllers/studentController.js"


const studentRouter = express.Router()
studentRouter.get("/search-by-roll",authenticateToken,authorixeRoles("admin"), searchStudentByRoll)
export default studentRouter;