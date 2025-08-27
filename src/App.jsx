import { useState } from 'react'
import nodeLogo from '/nodejs-svgrepo-com.svg'
import reactLogo from '/reactjs-fill-svgrepo-com.svg'
import mysqlLogo from '/mysql-svgrepo-com.svg'
import pythonLogo from '/python-svgrepo-com.svg'
import githubLogo from '../public/github-svgrepo-com.svg'
import treactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      </header>

      <section id="intro">
          <h1>Hello there!<br></br> I'm Elizabeth, a Software Engineer</h1>
      </section>
      <section id="skills">
          <h2 id="skills_title">My Skills</h2>
          <div id="skill_list">
              <a class="skills_link" href="https://nodejs.org/en"><img src={nodeLogo} id="nodejs_img" class="skills_img"></img></a>
              <a class="skills_link" href="https://react.dev/"><img src={reactLogo} id="reactjs_img" class="skills_img"></img></a>
              <a class="skills_link" href="https://www.mysql.com/"><img src={mysqlLogo} id="mysql_img" class="skills_img"></img></a>
              <a class="skills_link" href="https://www.python.org/"><img src={pythonLogo} id="python_img" class="skills_img"></img></a>
          </div>
      </section>

      <section id="projects">
          <h2 id="projects_title">My Projects</h2>
          <div id="project_list">
              <a class="project_link" href="https://github.com/ekacala"><img src={githubLogo} id="github_img" class="project_img"></img></a>
          </div>
      </section>
      <section id="contact">
          <h2 id="contact_title">Contact Me</h2>
          <form id="email_form">
              <label for="name" class="contact_label">Name: </label>
              <input type="text" placeholder="Jane Doe" maxlength="70" id="name" name="name"></input>

              <label for="email" class="contact_label">Email: </label>
              <input type="email" placeholder="janedoe@gmail.com" maxlength="256" id="email" name="email"></input>

              <label for="message" class="contact_label">Message: </label>
              <input type="textarea" placeholder="Type your message here" maxlength="255" id="message" name="message"></input>
          </form>
      </section>
    </>
  )
}

export default App
