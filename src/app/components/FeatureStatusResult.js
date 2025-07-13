import React from "react";
import styles from "./FeatureStatusResult.module.css";

export default function FeatureStatusResult({ results }) {
  if (!results) return null;

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.titleRow}>
        <h3 className={styles.resultsTitle}>User Identity Management Revamp</h3>
        <span className={`${styles.statusValue} ${styles.statusBadge} ${styles[results.status.toLowerCase().replace(' ', '')]}`}>
          {results.status}
        </span>
      </div>
      <div className={styles.resultsContent}>
        <div className={styles.statusGrid}>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Progress:</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{ width: `${results.progress}%` }}
                ></div>
              </div>
              <span className={styles.progressText}>{results.progress}%</span>
            </div>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Description:</span>
            <span className={styles.statusValue}>{results.description}</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Est. Completion:</span>
            <span className={styles.statusValue}>
              {new Date(results.estimatedCompletion).toLocaleDateString()}
            </span>
          </div>
        </div>
    
      </div>
    </div>
  );
} 