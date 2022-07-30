const express = require('express')
const router = express.Router()
const {getJournal, createJournal, updateJournal, deleteJournal} = require("../controllers/journalController")

const {protect} = require('../middleware/authmiddleware')
router.get('/', protect ,getJournal)


router.post('/', protect, createJournal)

router.put('/:id', protect, updateJournal)

router.delete('/:id', protect, deleteJournal)


module.exports = router