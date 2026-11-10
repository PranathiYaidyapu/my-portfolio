import "../styles/About.css";

function About() {
	return (
		<section className="about" id="about">

    <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me better</p>
    </div>

    <div className="about-container">

        <div className="about-card">

            <h3>👋 Who I Am</h3>

            <p>
                I'm a Computer Science graduate passionate about building
                responsive and user-friendly web applications using React,
                JavaScript, and modern frontend technologies.
            </p>

        </div>

        <div className="about-card">

            <h3>🎓 Education</h3>

            <p>
                MS in Computer Science
                <br />
                University of Central Oklahoma
            </p>
			<p>
                B.Tech in Information Technology
				<br />
				Jawaharlal Nehru Technological University, Hyderabad
                <br />
            </p>

        </div>

        <div className="about-card">

    <h3>💡 Beyond Coding</h3>

    <p>
        I'm curious by nature and enjoy learning new technologies, experimenting
        with creative UI designs, exploring AI, and turning ideas into practical,
        user-friendly applications.
    </p>

</div>

    </div>

</section>	
	);
}

export default About;