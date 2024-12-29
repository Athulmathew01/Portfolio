import Image from "next/image";
import "./globals.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2024. All rights reserved.</p>
      <div className="socialLinks">
        <Link href="https://github.com/Athulmathew01" target="_blank"><Image src="/github-white-icon.webp" alt="Github" width={100} height={100}></Image></Link>
        <Link href="https://www.linkedin.com/in/athul-mathew-varughese/" target="_blank"><Image src="/linkedin-app-icon.svg" alt="Github" width={100} height={100}></Image></Link>
      </div>
    </footer>
  );
}
