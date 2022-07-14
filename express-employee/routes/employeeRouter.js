const express = require('express')
const router = express.Router()

const emp = [
    {
        id : 1,
        name : 'kim',
        addr : {
            city : 'seoul',
            detail : '종로구',
        },
        position : '과장',
    },
    {
        id : 2,
        name : 'lee',
        addr : 'seoul',
        position : '부장',
    },
    {
        id : 3,
        name : 'park',
        addr : 'seoul',
        position : '차장',
    },
]


router.get('/', (req, res) => {
    res.json(emp)
})

router.get('/:empId', (req, res) => {
    const empId = req.params.empId

    for (let i=0; i<emp.length; i++) {
        if (emp[i].id === parseInt(empId)) {
            res.json(emp[i])
        }
    }

    res.json({
        empId : empId,
    })
})

router.post('/', (req, res) => {
    const employ = req.body
    res.json(employ)
})

router.put('/', (req, res) => {
    res.json('직원 수정')
    
})

router.delete('/', (req, res) => {
    res.json('직원 삭제')

})

module.exports = router