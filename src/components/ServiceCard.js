import styles from './ServiceCard.module.css';

export default function ServiceCard({
  title,
  label,
  price,
  description,
  buttonText,
  linkText,
  isTall = false,
  operations,
}) {
  return (
    <div className={`${styles.serviceCard} ${isTall ? styles.tallCard : ''}`}>
      <div className={styles.serviceHeader}>
        <h3>{title}</h3>
        <span className={styles.serviceLabel}>{label}</span>
      </div>

      {price && <div className={styles.servicePrice}>{price}</div>}

      {operations && (
        <div className={styles.topOperations}>
          {operations.map((operation, index) => (
            <div key={index} className={styles.operationItem}>
              <span>{operation.name}</span>
              <span className={styles.operationPrice}>{operation.price}</span>
            </div>
          ))}
        </div>
      )}

      {description && (
        <p className={styles.serviceDescription}>{description}</p>
      )}

      {linkText ? (
        <a href="#" className={styles.serviceLink}>
          {linkText}
        </a>
      ) : (
        <button className={styles.serviceBtn}>{buttonText}</button>
      )}
    </div>
  );
}
