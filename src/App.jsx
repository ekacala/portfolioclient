import { useState } from 'react'
import nodeLogo from '/nodejs-svgrepo-com.svg'
import reactLogo from '/reactjs-fill-svgrepo-com.svg'
import mysqlLogo from '/mysql-svgrepo-com.svg'
import pythonLogo from '/python-svgrepo-com.svg'
import githubLogo from '../public/github-svgrepo-com.svg'
import backlogReviewsMin from '../public/backlog_reviews_min.png'
import puzzleTraversalMin from '../public/graph_traversal_puzzle_solver.png'
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
              <a class="skills_link" href="https://nodejs.org/en" target='_blank'><img src={nodeLogo} id="nodejs_img" class="skills_img"></img></a>
              <a class="skills_link" href="https://react.dev/" target='_blank'><img src={reactLogo} id="reactjs_img" class="skills_img"></img></a>
              <a class="skills_link" href="https://www.mysql.com/" target='_blank'><img src={mysqlLogo} id="mysql_img" class="skills_img"></img></a>
              <a class="skills_link" href="https://www.python.org/" target='_blank'><img src={pythonLogo} id="python_img" class="skills_img"></img></a>
          </div>
      </section>

      <section id="projects">
          <h2 id="projects_title">My Projects</h2>
          <div id="project_list">
              <div class="project_card">
                <a class="project_link" href="https://github.com/ekacala/backlog-reviews" target='_blank'><img src={backlogReviewsMin} id="backlog_img" class="project_img"></img></a>
                <p class="project_description">Frontend design for a gaming review website</p>
              </div>
              <div class="project_card">
                <a class="project_link" href="https://github.com/ekacala/GraphTraversalPuzzleSolver" target='_blank'><img src={puzzleTraversalMin} id="puzzle_img" class="project_img"></img></a>
                <p class="project_description">A graph traversal puzzle solver that uses a BFS approach</p>
              </div>
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
