##DevNetwork

A Stack Overflow inspired app built with the MERN stack, where developers Learn, Share & Build Career. You can do everything form creating your own profile, to adding forms of experience, education, social media, and the option to show your latest repositories if you have a github account. Aditionally, you are able to add question, like, and reply to comments, and look up other’s profiles.

Quick Start
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
You will need to create a keys_dev.js in the server config folder with

module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};

Version
2.0.0

License
This project is licensed under the MIT License
