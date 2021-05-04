# tech-blog-mvc

This started out well, with all the code written except the views. But then I got bogged down trying to get mysql connected to JawsDB and ran out of time. 

I have some weird issues with MySQL Workbench which has worked very inconsistently for me. See the video below. 

I hope to finish this app when I find a good alternative to MySQL Workbench.

[Issues w/ MySQL Workbench!](https://vimeo.com/544852489)


## Deployed App

[Heroku App!](https://vast-reef-91474.herokuapp.com/)

## Technologies Used

🏗 JavaScript - JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.

♻️ Node.js - Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

📦 npm - npm is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.

🔑 mysql2 - mysql2 is a node.js driver for mysql. It is written in JavaScript and does not require compiling.

⚡️ Express - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs. 

🌈 Sequelize - Sequelize is a promise-based Node.js ORM for MySQL. It features solid transaction support, relations, eager and lazy loading, read replication and more.

☕️ dotenv - dotenv is a zero-dependency module that loads environment variables from a . env file into process. env . 

☑️ Git - Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.

😺 GitHub - GitHub, Inc. is a provider of Internet hosting for software development and version control using Git.

⛅️ Heroku - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.


## Code Snippet 

~~~
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
~~~

## Author

🤓 [darrindevs](https://github.com/darrindevs)



