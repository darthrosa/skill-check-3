require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    const port = SERVER_PORT;
    app.listen(port, () => console.log(`Server listening on port: ${port}`));
})

// ENDPOINTS
