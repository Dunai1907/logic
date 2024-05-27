import classNames from "classnames";
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  topics: string[];
  activeItem: string | null;
  setActiveItem: React.Dispatch<React.SetStateAction<string | null>>;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { topics, activeItem, setActiveItem } = props;

  const handleClick = (topic: string) => {
    setActiveItem(topic);
  };

  return (
    <aside className={styles.sidebar}>
      {topics.map((topic) => (
        <div
          key={topic}
          onClick={() => handleClick(topic)}
          className={classNames(styles.topic, {
            [styles.active]: topic === activeItem,
          })}
        >
          <div>{topic}</div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
