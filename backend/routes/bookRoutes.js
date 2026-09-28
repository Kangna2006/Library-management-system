import express from "express";
import { applyFine, clearFine, getFineSettings, getIssues, getStudentIssues, issueManualBook, returnBook, updateFineSettings } from "../controllers/bookController.js";
import { authenticateToken, authorixeRoles } from "../middleware/authMiddleware.js";


const bookRouter=express.Router();
bookRouter.get('/fine-settings',authenticateToken,getFineSettings);
bookRouter.get('/issues/student',authenticateToken,authorixeRoles("user"),getStudentIssues);

//admin
bookRouter.get("/issues",authenticateToken,authorixeRoles("admin"),getIssues);
bookRouter.post("/issue-manual",authenticateToken,authorixeRoles("admin"),issueManualBook);

bookRouter.put("/issues/:id/return",authenticateToken,authorixeRoles("admin"),returnBook);
bookRouter.put("issues/:id/fine",authenticateToken,authorixeRoles("admin"),applyFine);
bookRouter.put("/issues/:id/clear-fine",authenticateToken,authorixeRoles("admin"),clearFine);
bookRouter.put("/fine-settings",authenticateToken,authorixeRoles("admin"),updateFineSettings);
export default bookRouter;