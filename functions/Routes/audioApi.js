const express = require("express");
const router = express.Router();
const {
  getAudioList,
  getSingleAudio,
  createSingleAudio,
  deleteSingleAudio,
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

module.exports = router;
