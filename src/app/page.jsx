import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Cube from "./SlidingText";
import Link from "next/link";
import Experince from "./ExperinceSection/Experience";
import Project from "./ProjectSection/Projects";
import ContactForm from "./ContactMe/ContactMe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./Scrolltotop";




const experince = [
  {
    role: "SEO Intern",
    company: "IncrementumX",
    dates: "Aug 2022 - Jan 2023",
    description:
      "Helped the client achieve better Google rankings by understanding their business model and implementing changes to their web pages, resulting in increased traffic.",
  },
  {
    role: "Junior Data Engineer / Drupal Backend Developer",
    company: "DBiz.ai",
    dates: "July 2023 - Present",
    description:
      "Worked with Django and FastAPI to build optimized applications, leveraging LangChain and asynchronous Python to enhance performance in LLM-powered tender summarization. Additionally, developed a custom Drupal module for automated file categorization and tagging, created RESTful APIs for external integrations, and contributed to the Dbiz.ai website by designing frontend components using Next.js and CSS."
  },
];

const projectData = [
  {
    title: "Talenthive",
    technologies: "Next.js, PostgreSQL, Go",
    description:
      "Engineered a web application for the placement cell, streamlining information delivery to students and enabling swift responses. Reduced average response time to placements by 50%, significantly enhancing student engagement and satisfaction.",
    githubLink:"https://github.com/Athulmathew01/placement_portal"
  },
  {
    title: "Contest Calendar",
    technologies: "React",
    description:
      "Developed a frontend web application displaying upcoming competitive coding contests sourced from a public API. The platform helps users plan and participate in contests efficiently by providing real-time contest schedules.",
    githubLink:"https://github.com/Athulmathew01/ContestCalendar"
  },
  {
    title: "Algorithm Visualizer",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Built a web application to visualize algorithm executions step-by-step. Enhanced student learning experiences with a 40% increase in user retention, making complex concepts more accessible and engaging.",
    githubLink:"https://github.com/Athulmathew01/Algorithm-visualizer"
    },
];

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className={styles.page}>
      <div className={styles.WrapperContainer} id="about">
          <div className={styles.imagecontainer}>
            <Image src="/profile_image.webp"   width={400} height={400} alt="profile pic"/>
          </div>
        <div className={styles.introContainer}>
          <h1>Hi! 👋 I’m Athul.</h1>
          <Cube />
          <h4>Currently Working as Drupal Backend Developer <Link href="https://dbiz.ai/" target="_blank">@DBiz.ai</Link></h4>
          <br></br>
          <h4>With a focus on building scalable and efficient backend solutions, I specialize in Drupal development and have a strong understanding of Python and data engineering. My work involves creating robust systems, optimizing performance, and integrating complex APIs to ensure seamless user experiences.</h4>
        </div>
      </div>
      <div className={styles.skillSection} id="skills">
        <h2>Skills</h2>
        <div className={styles.skillsContainer}>
          <div>
            <h3>Technical Skills</h3>
            <ul>
            <li><strong>Programming Languages :</strong>Python, C, JavaScript, PHP (Beginner).</li>
            <li><strong>Libraries & Frameworks :</strong>Django, FastAPI, PyTest, Langchain, Drupal, React.js, Next.js.</li>
            <li><strong>Platforms & Tools :</strong>Docker, Git, Figma, Power BI, Linux.</li>
            <li><strong>Databases :</strong>MySQL, MongoDB, PostgreSQL, VectorDB.</li>
            <li><strong>Version Control :</strong>Git.</li>
            </ul>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <ul>
              <li><strong>Analytical Thinking :</strong>Breaking down complex challenges.</li>
              <li><strong>Team Collaboration :</strong>Effective cross-functional communication.</li>
              <li><strong>Adaptability :</strong>Quick to learn and implement new technologies.</li>
              <li><strong>Attention to Detail :</strong>Delivering high-quality work.</li>
              <li><strong>Time Management :</strong>Meeting deadlines efficiently.</li>
              <li><strong>Continuous Learning :</strong>Staying updated and exploring new domains.</li>
            </ul>
          </div>
        </div>
      </div>
      <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectlist}>
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </section>
      <section className={styles.Experiences} id="experience">
        <h2>Experience</h2>
      <Experince events={experince} />
      </section>
      <section className={styles.ContactMe} id="contact">
        <h2>Contact Me</h2>
        <ContactForm />
      </section>
      <ScrollToTopButton/>
      <ToastContainer />
    </div>
  );
}
