import React from "react";
import styles from "./FeatureStatusResult.module.css";
import SubFeature from "./SubFeature";

export default function FeatureStatusResult({ results, hideTitle = false, hideStatus = false, isSubFeature = false }) {
  if (!results) return null;


  const riskItems = results.risks
    .split('\n')
    .filter(Boolean)
    .map((item) => {
      const match = item.match(/- \*\*(.+?)\*\*: (.+)/);
      if (match) {
        return {
          title: match[1],
          description: match[2],
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className={
      isSubFeature
        ? `${styles.resultsContainer} ${styles.subFeatureResult}`
        : styles.resultsContainer
    }>
      <div className={styles.titleRow}>
        {!hideTitle && (
          <h3 className={styles.resultsTitle}>{results.description || "Feature Details"}</h3>
        )}
        {!hideStatus && (
          <span className={`${styles.statusValue} ${styles.statusBadge} ${styles[results.status.toLowerCase().replace(' ', '')]}`}>
            {results.status}
          </span>
        )}
      </div>
      <div className={styles.resultsContent}>
        <div className={styles.statusGrid}>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>
              <span className={styles.icon}>📊</span>
              Progress:
            </span>
            <div className={styles.progressWrapper}>
              {/* <div className={styles.progressContainer}> */}
                {/* <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${results.progress}%` }}
                  ></div>
                </div> */}
                {/* <span className={styles.progressText}>{results.progress}%</span> */}
              {/* </div> */}
              <div className={styles.progressDetails}>
                1 out of 2 features are completed. One is blocked.
              </div>
            </div>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>
              <span className={styles.icon}>📅</span>
              Est. Completion:
            </span>
            <span className={styles.statusValue}>
              {new Date(results.timeline).toLocaleDateString()}
            </span>
          </div>
         {results && results.risks && <div className={styles.statusItem}>
            <span className={styles.statusLabel}>
              <span className={styles.icon}>⚠️</span>
              Risks:
            </span>
            <span className={styles.statusValue}>
              {/* {results.risks} */}
              {riskItems.map((risk, index) => (
                <div key={index} style={{ marginBottom: '16px' }}>
                  <strong>🔸 {risk.title}</strong>
                  <p>{risk.description}</p>
                </div>
              ))}
            </span>
           
          </div>}
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>
              <span className={styles.icon}>🤖</span>
              Overall Summary:
            </span>
            <span className={styles.statusValue}>This initiative focuses on improving authentication flow, SSO integration, and user data privacy policies.</span>
          </div>
        </div>
    
      </div>
      {/* SubFeature Section */}
      <SubFeature subfeatures={results.subfeatures} />
    </div>
  );
} 