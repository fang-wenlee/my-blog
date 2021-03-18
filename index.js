import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, '/build')))

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);