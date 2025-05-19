const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Connect to DB
mongoose.connect('mongodb://localhost:27017/accountsDB', {
})

//Account Schema
const UseraccountSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    favorites: [String], //Array to store favorite locations
});

const Account = mongoose.model('Account', UseraccountSchema);

//gets account info entered
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Register.html')); 
});
//gets sign in info entered
app.get('/signIn', (req, res) => {
    res.sendFile(path.join(__dirname, 'Signin.html')); 
});


app.post('/CreateUserAccount', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await Account.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists. Please choose a different username.');
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).send('Password must be at least 8 characters long and include at least one symbol.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword); 


    //creates new account data

        const newAccount = new Account({username, email, password: hashedPassword})

//account creation success
    await newAccount.save(); 
    res.send(`
      <script>
        alert('Account Successfully Created!');
        window.location.href = '/Home/${username}';
      </script>
    `);
  } catch (err) {
    res.status(500).send('There was an error creating an account: ' + err.message);
  }
});

//error messages for incorrect username and password
app.post('/signIn', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Account.findOne({ username: username.trim() }); // Ensure input is sanitized

    if (!user) {
      return res.send("<script>alert('Incorrect Username. Please check your username and try again.'); window.history.back();</script>");
    }

    console.log('Stored Password:', user.password);

    const passwordsame = await bcrypt.compare(password, user.password);
    console.log('Password Match:', passwordsame);

    if (passwordsame) {
      // Redirect to the homepage with the username in the URL
      return res.redirect(`/Home/${username}`);
    } else {
      res.send("<script>alert('Incorrect password. Please check your password and try again.'); window.history.back();</script>");
    }
  } catch (err) {
    res.send("<script>alert('There was an error signing you in: ' + err.message);window.history.back();</script>");
  }
});
app.get('/Home/:username', (req, res) => {
  const { username } = req.params; //Extract the username from the URL
  console.log('Logged in as:', username); //Log the username
  res.sendFile(path.join(__dirname, 'Home.html')); //direct to the homepage
});
app.post('/Home/:username/addFavorite', async (req, res) => {
  try {
    const { username } = req.params; // Extract the username from the URL
    const { location } = req.body; // Extract the full location string from the request body
    console.log('Username:', username, 'Location:', location);

    if (!username || !location) {
      return res.status(400).send('Username and location are required.');
    }

    const user = await Account.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Check if the location already exists in the favorites
    if (!user.favorites.includes(location)) {
      user.favorites.push(location); // Add the full location string to the favorites array
      await user.save();
      res.send('Location added to favorites.');
    } else {
      res.send('Location is already in favorites.');
    }
  } catch (err) {
    console.error('Error adding favorite:', err.message);
    res.status(500).send('Error adding favorite: ' + err.message);
  }
});
app.get('/Home/:username/getFavorites', async (req, res) => {
  try {
    const { username } = req.params; //Extract the username from the URL
    console.log('Fetching favorites for user:', username);

    const user = await Account.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found.');
    }

    res.json(user.favorites); //Send the favorites array as a JSON response
  } catch (err) {
    console.error('Error fetching favorites:', err.message);
    res.status(500).send('Error fetching favorites: ' + err.message);
  }
});
app.post('/Home/:username/updatePassword', async (req, res) => {
  try {
    const { username } = req.params; // Extract the username from the URL
    const { oldPassword, newPassword } = req.body; // Extract the old and new passwords from the request body

    console.log('Updating password for user:', username);

    if (!oldPassword || !newPassword) {
      return res.status(400).send('Both old and new passwords are required.');
    }

    // Validate new password strength
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).send('New password must be at least 8 characters long and include at least one symbol.');
    }

    const user = await Account.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found.');
    }

    // Verify the old password
    const isOldPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordCorrect) {
      return res.status(400).send('Old password is incorrect.');
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword; // Update the user's password
    await user.save();

    res.send('Password updated successfully.');
  } catch (err) {
    console.error('Error updating password:', err.message);
    res.status(500).send('Error updating password: ' + err.message);
  }
});
//website running confirmation after running node weather-server.js
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
