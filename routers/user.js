const express = require(`express`);
const router = express.Router();

const TEMPLATE = `
    <div>
        <a href="/user/" >GO TO A</a>
        <a href="/user/a">GO TO A</a>
        <a href="/user/b">GO TO B</a>
    </div>
    <div>寫點正經的</div>
`

router.get(`/`, (req, res)=>{
	res.send(TEMPLATE.replace('寫點正經的', 'omi 紅龜王子麵'));
})
router.get(`/a`, (req, res)=>{
	res.send(TEMPLATE.replace('寫點正經的', 'A 三小'));
})
router.get(`/b`, (req, res)=>{
	res.send(TEMPLATE.replace('寫點正經的', '<iframe width="560" height="315" src="https://www.youtube.com/embed/ljOjZ9vSMQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'));
})

module.exports = router
