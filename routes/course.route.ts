import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { editCourse, getAllCourses, getSingleCourse, uploadCourse } from "../controllers/course.controllers";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRole("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRole("admin"),
  editCourse
);
courseRouter.get(
  "/get-course/:id",
  getSingleCourse
);
courseRouter.get(
  "/get-courses",
  getAllCourses
);

export default courseRouter