const express = require('express')
const { set } = require('mongoose')
const router = express.Router()
const {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
} = require('../controllers/goalControler')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)



// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })

// router.get('/', getGoals)

// router.post('/', (req, res) => {
//     res.status(200).json({message: 'Set goal'})
// })

// router.post('/', setGoal)

// router.put('/:id', (req, res) => {
//     res.status(200).json({message: `Update goal ${req.params.id}` })
// })

// router.put('/:id', updateGoal)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`})
// })

// router.delete('/:id', deleteGoal)

module.exports = router