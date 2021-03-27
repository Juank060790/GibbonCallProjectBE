const express = require("express");
const router = express.Router();
const {
  getAudioList,
  getSingleAudio,
  createSingleAudio,
  deleteSingleAudio,
  getFilteredAudioList,
  addCommentRawAudio,
} = require("../Controllers/Audio");
const FBAuth = require("../Utils/fbauth");

/**
 * @route Get
 * @description Get all data
 * @access  private
 */
router.get("/audiolist", FBAuth, getAudioList);

/**
 * @route Get
 * @description Get single audio
 * @access  private
 */
router.get("/audiolist/:audioId", FBAuth, getSingleAudio);

/**
 * @route POST
 * @description Create Single Audio
 * @access  private
 */
router.post("/createaudio", FBAuth, createSingleAudio);

/**
 * @route DELETE
 * @description Delete single audio file
 * @access  private
 */
router.delete("/deletesingleaudio/:audioId", FBAuth, deleteSingleAudio);

/**
 * @route get
 * @description Get filtered Audio List
 * @access  private
 */
router.get(
  "/audiolist/filter/page:page/limit:limit/sortBy:sortBy/order:order",
  FBAuth,
  getFilteredAudioList
);

/**
 * @route POST
 * @description Add comment to RawAudio
 * @access  private
 */
router.put("/audiolist/addcomment/:audioId", FBAuth, addCommentRawAudio);

module.exports = router;
