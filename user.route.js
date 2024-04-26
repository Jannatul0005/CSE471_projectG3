import express from 'express'
import ReviewsCtrl from ".controller.js"
const router = express.Router()


router.route("/").get((req, res) => res.send("TravelBD is finalllyyyyyyyyyy running debug"))

router.route('/username/:id').get(ReviewsCtrl.apiGetReviews)
router.route("/email").post(ReviewsCtrl.apiPostReview)
router.router("/:password")
         .get(ReviewsCtrl.apiGetReview)
         .put(ReviewCtrl.apiUpdateReview)
         .delete(ReviewCtrl.apiDeleteReview)

export default router