import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from "react-icons/bs"

const Skills = () => {
  return (
    <section id="skills" className='skills-section'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

          <div className="skills_lang">
            <h3>Technical Skills</h3>
            <div className='skills_content'>
            <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Advanced</small> */}
                </div>
              </article>
              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>

              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
              </article>

              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>ReactJS</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
                
              </article>

              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>Java</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
               
              </article>

              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>C++</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
                
              </article>

              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>MySQL</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
                
              </article>

              <article className="skills_details">
                <BsFillPatchCheckFill className="skills_details-icon"/>
                <div>
                <h4>GitHub</h4>
                {/* <small className="text-light">Intermediate</small> */}
                </div>
                
              </article>
            </div>
              
          </div>
    </section>
  )
}

export default Skills