import Portal from "../portal";

export function generateStaticParams() {
  return ["courses", "learning-paths", "hackathon", "challenges", "winners", "certificates", "schools", "universities", "university-program"].map((section) => ({ section }));
}

export default function SectionPage() { return <Portal />; }
