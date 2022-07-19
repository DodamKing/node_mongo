const express = require('express')
const router = express.Router()
const Article = require('../models/Article')


router.get('/', async (req, res) => {
    try {
        const result = await Article.find()
        res.json(result)
    } catch (err) {
        console.log(err);        
    }
})

router.get('/:articleId', async (req, res) => {
    const articleId = req.params.articleId
    
    try {
        const result = await Article.findById(articleId)
        console.log(result.updatedAt); // 디비에는 Date 형식으로 저장
        console.log(result.updatedAt.toLocaleString()); // 클라이언트에 출력할때 변화해서 보내줌
        res.json(result ? result : '찾는거 없음')
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const article = req.body
    
    try {
        const result = await Article.create(article)
        res.json(result)
    } catch (err) {
        console.log(err);
    }
})

router.put('/', async (req, res) => {
    const article = req.body
    article.updatedAt = new Date

    try {
        const result = await Article.findByIdAndUpdate(article._id, article)
        res.json(result ? result : '너 뭔가 잘못 했는데')
    } catch (err) {
        console.log(err);
    }
})

router.patch('/', (req, res) => {

})

router.delete('/:articleId', async (req, res) => {
    const articleId = req.params.articleId

    try {
        // const result = await Article.findOneAndDelete({_id : articleId})
        const result = await Article.findByIdAndDelete(articleId)
        res.json(result ? result : '검색된 자료 없음')
    } catch (err) {
        console.log(err);
    }
})

module.exports = router

//수정수정수정 브런치 테스트