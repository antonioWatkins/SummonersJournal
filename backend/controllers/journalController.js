const asyncHandler = require('express-async-handler')
const Journal = require('../models/journalModel')



const getJournal =  asyncHandler(async(req, res) => {

  const journal = await Journal.find()
  res.status(200).json(journal)
})

const createJournal = asyncHandler(async(req, res) => {
  if(!req.body.text){
    throw new Error ('please write an entry')
  res.status(400).json({message: 'please write an entry'})
  res.status(200).json({message: 'create jouornal'})
  }
  const  journal = await Journal.create({
    text: req.body.text
  })
  res.status(200).json(journal)
})

const updateJournal = asyncHandler(async(req, res) => {
  const journal =await Journal.findById(req.params.id)
  
  if(!journal) {
    res.status(400)
    throw new Error('journal not found')
  }

  const updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
  })
  res.status(200).json(`update journal, ${updatedJournal} ${req.params.id}`)
})

const deleteJournal = asyncHandler(async(req, res) => {

  const journal =await Journal.findById(req.params.id)
  
  if(!journal) {
    res.status(400)
    throw new Error('journal not found')
  }
  await journal.remove()
  res.status(200).json({id: `delete journal ${req.params.id}`})
})

module.exports = {
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
}