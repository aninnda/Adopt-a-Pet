const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Website'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
//new comment
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
    if (req.session && req.session.username) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/privacy', (req, res) => {
    res.render('privacy');
});

app.get('/pets', (req, res) => {
    res.render('pets');
});

app.get('/giveaway', isLoggedIn, (req, res) => {
    res.render('giveaway');
});

app.get('/find', (req, res) => {
    res.render('find');
});

app.get('/dog-care', (req, res) => {
    res.render('dog-care');
});

app.get('/cat-care', (req, res) => {
    res.render('cat-care');
});
//tried to make it work but couldnt make it on time:(
app.post('/giveaway', isLoggedIn, (req, res) => {
    const { 
        'pet-type': petType,
        breed,
        age,
        gender,
        'dogs-friendly': dogsFriendly,
        'cats-friendly': catsFriendly,
        'children-friendly': childrenFriendly,
        comments,
        'owner-name': ownerName,
        'owner-email': ownerEmail
    } = req.body;

    console.log(req.body); // Log the received form data

    // Format the data to be saved
    const petData = `
Pet Type: ${petType}
Breed: ${breed}
Age: ${age}
Gender: ${gender}
Gets along with other dogs: ${dogsFriendly}
Gets along with other cats: ${catsFriendly}
Suitable for a family with small children: ${childrenFriendly}
Comments: ${comments}
Owner's Name: ${ownerName}
Owner's Email: ${ownerEmail}

    `;

    // Save to pet.txt
    fs.appendFileSync(petFilePath, petData);
    res.send("Pet information submitted successfully!");
});

// Add new route for account creation page
app.get('/createaccount', (req, res) => {
    res.render('createaccount');
});

app.post('/createaccount', (req, res) => {
    const { username, password } = req.body;

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;

    if (!usernameRegex.test(username)) {
        return res.send("Invalid username format. It should only contain letters and digits.");
    }

    if (!passwordRegex.test(password)) {
        return res.send("Invalid password format. It should be at least 4 characters long, with at least one letter and one digit.");
    }

    const loginFilePath = path.join(__dirname, 'login.txt');
    if (fs.existsSync(loginFilePath)) {
        const data = fs.readFileSync(loginFilePath, 'utf-8');
        const users = data.split('\n').filter(Boolean).map(line => line.split(':')[0]);

        if (users.includes(username)) {
            return res.send("Username already exists. Please choose another one.");
        }
    }

    const newUser = `${username}:${password}\n`;
    fs.appendFileSync(loginFilePath, newUser);

    res.send("Account successfully created. You can now log in.");
});

// Route to show the login form
app.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const loginFilePath = path.join(__dirname, 'login.txt');
    if (fs.existsSync(loginFilePath)) {
        const data = fs.readFileSync(loginFilePath, 'utf-8');
        const users = data.split('\n').filter(Boolean);

        const userExists = users.some(user => {
            const [savedUsername, savedPassword] = user.split(':');
            return savedUsername === username && savedPassword === password;
        });

        if (userExists) {
            req.session.username = username;
            return res.redirect('/giveaway');
        } else {
            return res.send("Invalid username or password.");
        }
    } else {
        return res.send("No users found. Please create an account first.");
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send("Error logging out.");
        }
        res.render('logout', { message: "You have successfully logged out." });
    });
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
