import { Course } from "../../Pages/layout";
import styles from "./Courses.module.scss";

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = (props) => {
  const { courses } = props;

  return (
    <section className={styles.courses}>
      {courses.map((course) => (
        <figure
          key={course.id}
          className={styles.course}
          style={{ backgroundColor: `${course.bgColor}` }}
        >
          <img src={course.image} alt="Just image" className={styles.image} />
          <figcaption className={styles.name}>{course.name}</figcaption>
        </figure>
      ))}
    </section>
  );
};

export default Courses;
