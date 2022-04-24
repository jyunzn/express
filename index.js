const express = require(`express`);
const app = express()



app.listen(5566, () => console.log('http://localhost:5566'));

app.use(`/user`, require(`./routers/user`));
app.use(require(`./routers/error`));
