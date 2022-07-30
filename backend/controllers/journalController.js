const asyncHandler = require('express-async-handler')

const getJournal =  asyncHandler(async(req, res) => {
  res.status(200).json({message: 'get jouornal'})
})

const createJournal = asyncHandler(async(req, res) => {
  if(!req.body.text){
    throw new Error ('please write an entry')
  res.status(400).json({message: 'please write an entry'})
  res.status(200).json({message: 'create jouornal'})
  }
})

const updateJournal = asyncHandler(async(req, res) => {
  res.status(200).json({message: `update journal ${req.params.id}`})
})

const deleteJournal = asyncHanlder(async(req, res) => {
  res.status(200).json({message: `delete journal ${req.params.id}`})
})

module.exports = {
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
}