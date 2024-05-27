import { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Sidebar from "../Components/Sidebar/Sidebar";
import Courses from "../Components/Courses/Courses";

export interface Course {
  bgColor: string;
  id: string;
  image: string;
  name: string;
  tags: string[];
}

const Layout: React.FC = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [filterCourses, setFilterCourses] = useState<Course[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    if (activeItem && activeItem !== "Все темы") {
      const filter = courses.filter((course) =>
        course.tags.includes(activeItem)
      );
      setFilterCourses(filter);
    }
    if (activeItem === "Все темы") setFilterCourses(courses);
  }, [activeItem, courses]);

  useEffect(() => {
    setActiveItem(topics[0]);
  }, [topics]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(" https://logiclike.com/docs/courses.json");
      const res: Course[] = await response.json();
      setCourses(res);
      const topic: Set<string> = new Set<string>();
      topic.add("Все темы");
      res.forEach((value) => {
        value.tags.forEach((tag) => topic.add(tag));
      });
      setTopics(Array.from(topic));
    };
    getData();
  }, []);

  return (
    <main className={styles.page}>
      <Sidebar
        topics={topics}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Courses courses={filterCourses} />
    </main>
  );
};

export default Layout;
