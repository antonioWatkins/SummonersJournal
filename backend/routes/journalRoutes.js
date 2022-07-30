const express = require('express')
const router = express.Router()
const {getJournal, createJournal, updateJournal, deleteJournal} = require("../controllers/journalController")


router.get('/', (getJournal))


router.post('/', (createJournal))

router.put('/:id', (updateJournal))

router.delete('/:id', (deleteJournal))


module.exports = router