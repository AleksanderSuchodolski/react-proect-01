import styles from './Section.module.css';
export function Section({ title, children }) {
  return (
    <section className={title ? styles.superSection : styles.baseSection}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
