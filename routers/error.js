const express = require(`express`);
const router = express.Router()

const TEMPLATE = `
    <div>
        <a href="/user/" >GO TO /</a>
        <a href="/user/a">GO TO A</a>
        <a href="/user/b">GO TO B</a>
    </div>
    <div>寫點正經的</div>
`

router.use((req, res)=>{
    res
        .status(404)
        .send(TEMPLATE.replace('寫點正經的', '別亂輸入網址啦，上面那些啦'))
});

module.exports = router;
