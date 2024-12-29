import Link from "next/link";
import styles from "./Projects.module.css";
import Image from "next/image";

function Project({ title, technologies, description, githubLink }) {
  return (
    <div className={styles.project}>
      <h3>{title}</h3>
      <p>
        <strong>Technologies:</strong> {technologies}
      </p>
      <p>{description}</p>
      {githubLink && (
        <Link href={githubLink} target="_blank">
          <div className={styles.githubIcon}>
            <Image
              src="/github-white-icon.webp"
              alt="GitHub"
              width={50}
              height={50}
            />
          </div>
        </Link>
      )}
    </div>
  );
}

export default Project;
