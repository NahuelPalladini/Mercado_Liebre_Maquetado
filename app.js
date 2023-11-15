const express = require('express');
const path = require('path');
const PORT = 3030;
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))

app.listen(PORT, console.log(`Server running in http://localhost:${PORT}`));

