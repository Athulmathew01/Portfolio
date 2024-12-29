import styles from './Experience.module.css';

function Experince({events}) {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div key={index} className={styles.timeline_item}>
          <div className={styles.timeline_content}>
            <h3>{event.role} <span>{event.dates}</span></h3>
            <h4>{event.company}</h4>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experince;
