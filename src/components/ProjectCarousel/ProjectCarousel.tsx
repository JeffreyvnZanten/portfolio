import { useState } from "react";
import styles from "./ProjectCarousel.module.css";
import { Project } from "../Projects/Projects";
import CarouselButton from "./CarouselButton";

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;

  return (
    <div className={styles.container}>
      {hasPrev && (
        <CarouselButton
          handlePress={() => setCurrentIndex(currentIndex - 1)}
          symbol="◀"
        />
      )}

      <div className={styles["project-card"]}>
        <h1 className={styles.h1}>{currentProject.name}</h1>
        <p className={styles.description}>{currentProject.description}</p>
      </div>

      {hasNext && (
        <CarouselButton
          handlePress={() => setCurrentIndex(currentIndex + 1)}
          symbol="▶"
        />
      )}
    </div>
  );
}
