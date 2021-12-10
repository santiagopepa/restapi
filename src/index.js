const express = require('express');

const app = express();
const morgan = require('morgan');


app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes/index'));
app.use(require('./routes/movies'));

app.listen(3000, () => {
    console.log('Server on port 3000');
});