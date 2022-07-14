const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.json('안녕 세상');
});

app.get('/employees', (req, res) => {
    res.json('직원 전체 정보가 나간다')
})

app.post('/employees', (req, res) => {
    res.json('직원 등록할 정보가 가겠지')
})

app.get('/employees/:empId', (req, res) => {
    const empId = req.params.empId
    res.send('직원아이디 : ' + empId)
})

app.delete('/employees', (req, res) => {
    const empId = req.query.empId
    res.json(`삭제할 아이디 : ${empId}`)
})

app.put('/employees', (req, res) => {
    const empId = req.query.empId
    res.json(`수정할 아이디 무엇이게 : ${empId}`)
})

app.listen(port, () => {
    console.log(`server ready on port ${port}`);
});