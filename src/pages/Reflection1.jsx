const Reflection1 = () => {
  return (
    <div className="reflection-page">
      <div className="document-container">
        <header className="document-header">
          <h1>4.1 Reflection 1 – Sustainability in Software Projects</h1>
        </header>
        
        <div className="reflection-content">
          <p>
            About halfway through my internship at Optik Consultancy, I realised that "sustainability" 
            in software engineering isn't just about writing energy-efficient code or saving resources 
            like paper and power. It is also about how we manage our time, effort, and processes to 
            avoid unnecessary rework. This became very clear during one of our key projects. Our client 
            provided data using Excel templates, but they kept changing these templates throughout the 
            project. Every time they made a change, we had to update our Python script, convert the 
            files again, and re-upload everything to MongoDB. Even in the last two weeks of the 
            internship, we were still stuck in this cycle of adjustments. It felt like running on a 
            treadmill, working hard but not moving forward.
          </p>

          <p>
            At first, I was mostly frustrated. We would finish an update only for the client to send 
            new requests, like adding more columns, slightly changing the order of fields, or calculating 
            extra values. I remember thinking, "We can't keep doing this, this is not sustainable." 
            That was when I realised the real issue wasn't just technical but about how we were managing 
            the client's expectations. We were saying yes to every single change, no matter how small, 
            without properly considering the time it would take or how it would affect the overall progress.
          </p>

          <p>
            Looking back, I can see that we should have handled this situation differently. We needed 
            to set clear boundaries and expectations from the start. Instead of reacting to every new 
            request, we could have agreed on a clear "scope" of what features and templates would be 
            supported, and made it clear that additional changes would need to be discussed, prioritised, 
            or planned for a later phase. This would have saved both our time and the client's, while 
            also reducing confusion and stress. Dowling et al. (2016) suggests that consulting stakeholders 
            early and conserving resources are key principles of sustainable engineering, and I now see 
            how much this applies not just to physical systems but to project workflows.
          </p>

          <p>
            If I were to do this again, I would start by spending more time clarifying requirements 
            upfront. I would document everything we agreed on and explain clearly how changes during 
            the project could create extra work and affect deadlines. Setting clear boundaries is not 
            about saying no, but about being realistic and ensuring we deliver something complete and 
            reliable rather than constantly rushing to make last-minute adjustments. I would also build 
            in smaller milestones and check-ins, so that feedback from the client is collected early, 
            rather than all at once towards the end.
          </p>

          <p>
            This experience taught me that sustainability is not only about the software itself but 
            also about how teams communicate and collaborate. By having open discussions early on and 
            agreeing on what is most important, we can avoid wasted effort and focus on delivering 
            what really matters. It also taught me the importance of pushing back respectfully when 
            a project starts to go beyond its original scope. This is not about refusing to help, 
            but about explaining the trade-offs and making sure everyone understands the impact of 
            extra requests.
          </p>

          <p>
            In future projects and my career, I will put greater emphasis on scope management and 
            expectation-setting, since clear planning and communication are critical for delivering 
            sustainable software solutions. As a professional engineer, I want to apply this learning 
            to build projects that use resources wisely, run smoothly, and deliver reliable outcomes 
            for both clients and teams. Ultimately, this experience has helped me see that sustainability 
            in software engineering is as much about people and processes as it is about code.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reflection1