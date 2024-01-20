import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js"

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter)

// this is a dynamic router for getting a Doctor by id
router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor);
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor);

router.get('/profile/me', authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;
// we use these routes in our main index.js file