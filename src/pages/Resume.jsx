const Resume = () => {
  return (
    <div className="resume-page">
      <div className="document-container">
        <header className="resume-header">
          <h1>Mifrah Raiz</h1>
          <div className="contact-info">
            <span>Greater Sydney Area</span>
            <span>04123456789</span>
            <span>mifrah.raiz.work@gmail.com</span>
            <span>http://www.linkedin.com/in/mifrah-raiz</span>
          </div>
        </header>
        
        <div className="resume-content">
          <section className="resume-section">
            <h2>CAREER OBJECTIVE</h2>
            <p>
              I am a motivated 2nd-year Software Engineering student with a passion for technology 
              innovation, problem-solving, and creating real-world solutions. I bring experience 
              in database design, web development, and machine learning, gained through academic 
              projects and my internship with Optik Consultancy. I aim to apply my skills in 
              software design, collaboration, and client-focused problem-solving to contribute 
              to impactful projects, while continuously expanding my expertise in web development, 
              AI, and data-driven applications.
            </p>
          </section>

          <section className="resume-section">
            <h2>EDUCATION</h2>
            <div className="resume-item">
              <div className="item-header">
                <h3>Bachelor of Engineering (Honours)</h3>
                <span className="date">Feb 2024 – Dec 2027</span>
              </div>
              <div className="item-subheader">
                <span>University of Technology Sydney</span>
                <span>(expected)</span>
              </div>
              <div className="item-details">
                <span>Major in Software</span>
              </div>
              <ul>
                <li>Currently achieving a 6.4 / 7 GPA (Distinction Average)</li>
                <li>High Distinction in Mathematics 2, Database Fundamentals, and Data Structures and Algorithms</li>
                <li>Distinction in Programming 2</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>EMPLOYMENT</h2>
            
            <div className="resume-item">
              <div className="item-header">
                <h3>Graphic Designer</h3>
                <span className="date">August 2025 – Present</span>
              </div>
              <div className="item-subheader">
                <span>Skeuo Visuals</span>
              </div>
              <ul>
                <li>Designed digital graphics, marketing materials, and social media content for client projects.</li>
                <li>Managed tasks and deadlines independently using Microsoft Planner, ensuring 100% on-time delivery.</li>
                <li>Collaborated with 8 team members to refine concepts and deliver polished visuals that improved client engagement and satisfaction.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="item-header">
                <h3>Software Engineer Intern</h3>
                <span className="date">May 2025 – Aug 2025</span>
              </div>
              <div className="item-subheader">
                <span>Optik Consultancy</span>
              </div>
              <ul>
                <li>Designed and implemented MongoDB database structures to support data analysis and web applications.</li>
                <li>Developed and enhanced a React and JavaScript web app, integrating backend data for an interactive, user-friendly experience.</li>
                <li>Collaborated with a cross-functional team of 6 and clients to gather requirements, debug code, and deliver milestones, ensuring on-time delivery.</li>
                <li>Achieved a 50% improvement in data processing efficiency by optimising backend queries and workflows.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="item-header">
                <h3>Private Tutor</h3>
                <span className="date">Feb 2025 – Present</span>
              </div>
              <div className="item-subheader">
                <span>Alchemy Tuition</span>
              </div>
              <ul>
                <li>Delivered 4 personalised tutoring lessons per week, helping student improve grades and confidence with 80% achieving higher results within a semester.</li>
                <li>Simplify complex mathematical concepts, strengthening skills in breaking down technical information for clarity.</li>
                <li>Manage multiple students and schedules, improving time management and organisation.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>VOLUNTEER WORK</h2>
            <div className="resume-item">
              <div className="item-header">
                <h3>Graphic Designer & Copywriter</h3>
                <span className="date">Mar 2025 – Present</span>
              </div>
              <div className="item-subheader">
                <span>UTSMS</span>
              </div>
              <ul>
                <li>Designed digital content and visuals, improving social media engagement by 35%.</li>
                <li>Collaborated with a team of 8 creatives to deliver campaigns on time, strengthening teamwork and leadership skills.</li>
                <li>Adapted messaging to connect with diverse audiences, demonstrating inclusivity and user-centred thinking.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>PERSONAL PROJECTS</h2>
            <div className="resume-item">
              <div className="item-header">
                <h3>Early Birds Warning App Prototype</h3>
                <span className="date">Apr 2024</span>
              </div>
              <div className="item-subheader">
                <span>Engineers Without Borders Challenge</span>
              </div>
              <ul>
                <li>Researched user needs and designed a prototype prioritising clear communication and usability.</li>
                <li>Collaborated in a team of 6 to present and refine ideas, receiving positive feedback for design clarity.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2>TECHNICAL SKILLS</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <strong>Programming Languages:</strong> Java, Python, C++, SQL
              </div>
              <div className="skill-category">
                <strong>Web Development:</strong> React, JavaScript (basic), REST APIs
              </div>
              <div className="skill-category">
                <strong>Data & AI:</strong> Machine Learning, Data Analysis (pandas, openpyxl)
              </div>
              <div className="skill-category">
                <strong>Development Tools:</strong> VS Code, Git, GitHub
              </div>
              <div className="skill-category">
                <strong>Operating Systems:</strong> macOS, Windows
              </div>
              <div className="skill-category">
                <strong>MS Office:</strong> Word, Excel, PowerPoint, Outlook
              </div>
            </div>
          </section>

          <section className="resume-section">
            <h2>AWARDS AND QUALIFICATIONS</h2>
            <ul className="awards-list">
              <li>Nokia ThriveTech Team Award, Nokia <span className="date">Aug 2025</span></li>
              <li>HSC High Achiever Award, Human Appeal <span className="date">Mar 2024</span></li>
              <li>HSC Distinguished Achievers <span className="date">Dec 2023</span></li>
              <li>Australian Innovators Challenge, 3rd place <span className="date">Jul 2020</span></li>
            </ul>
          </section>

          <section className="resume-section">
            <h2>REFEREES</h2>
            <p>Available upon request</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume