import photo from '../assets/photo.png'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="landing-content">
          <div className="profile-section">
            <div className="profile-image">
              <img src={photo} alt="Mifrah Raiz" />
            </div>
          </div>
          
          <div className="intro-section">
            <h1>Mifrah Raiz</h1>
            <h2>Software Engineering Student</h2>
            
            <div className="intro-text">
              <p>
                I am a 2nd-year Software Engineering student at UTS, passionate about technology 
                innovation and creating real-world solutions that make a difference. My interest 
                in software engineering stems from a desire to build impactful tools that merge 
                creativity with problem-solving, especially in areas like web development and 
                artificial intelligence.
              </p>
              
              <p>
                During my internship with Optik Consultancy, I worked on a project that combined 
                database design, machine learning, and web development, an experience that 
                strengthened my technical skills and showed me the power of software to solve 
                meaningful problems. Outside of this, I enjoy editing and graphic design, and I 
                volunteer with UTSMS to create Instagram graphics that promote events and engage 
                the student community.
              </p>
              
              <p>
                I value curiosity, lifelong learning, and building solutions that help people, 
                and I'm excited to continue growing as an engineer who can bring ideas to life.
              </p>
            </div>
            
            <div className="contact-links">
              <a href="mailto:mifrah.raiz.work@gmail.com" className="contact-btn">
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/mifrah-raiz" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage