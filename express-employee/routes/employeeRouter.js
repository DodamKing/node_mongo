const express = require('express')
const Employee = require('../models/Employees')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (err) {
        console.log(err);
    }
})

router.get('/:empId', async (req, res) => {
    const empId = req.params.empId

    try {
        const employee = await Employee.findOne({id : empId})
        res.json(employee ? employee : '찾는 데이터가 없습니다')
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const employ = req.body
    try {
        const result = await Employee.create(employ) 
        res.json(result)
    } catch (err) {
        console.log(err);
    }
})

router.put('/', (req, res) => {
    res.json('직원 수정')
    
})

router.delete('/:empId', async (req, res) => {
    const empId = req.params.empId
    try {
        const result = await Employee.remove({id : empId})
        res.json(result)
    } catch (err) {
        console.log(err);
    }
})

module.exports = router