require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const path = require('path');

// express app //
const app = express();


// connect to mongodb //
// const dbURI = 'mongodb+srv://wldnhriri:Mongoliach1n4@cluster0.8nu42.mongodb.net/node-ninja?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(process.env.MONG_URI)
    .then(() => app.listen(process.env.PORT, () => {
        console.log('connected to db and listening port', process.env.PORT);
    })) // Server aktif setelah koneksi sukses
    .catch((err) => console.log(err));


    // Atur lokasi folder views
app.set('views', path.join(__dirname, 'views'));

// register view engine //
app.set('view engine', 'ejs');


// middleware & static file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})


// blog routes //
app.use('/blogs', blogRoutes);


// 404 page //
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})

// vercel connect
module.exports = app;