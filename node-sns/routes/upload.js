const express = require('express')
const router = express.Router()
const fs = require('fs')
const Music = require('../models/Music')

router.get('/' , (req, res) => {
    fs.readFile('public/music/보고싶었어 - WSG워너비 (4FIRE).mp3', (err, music) => {
        if (err) {
            console.error(err)
            return res.json(err)
        }
        // res.send(music)
        res.render('upload', {
            title : '업로드 테스트',
            music : music,
        })
    })
})

router.get('/test', async (req, res) => {
    try {
        fs.readFile('public/music/보고싶었어 - WSG워너비 (4FIRE).mp3', (err, music) => {
            const result = Music.create({
                file : music,
            })
            res.json(result)
        })
    } catch (err) {
        res.json(err)
    }
})

router.get('/list', async (req, res) => {
    try {
        const result = await Music.find()
        res.json(result)
    } catch (err) {
        res.json(err)
    }
})

module.exports = router