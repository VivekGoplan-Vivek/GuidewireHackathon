import React from "react";
import styles from "./FeatureStatusResult.module.css";
import SubFeature from "./SubFeature";

export default function FeatureStatusResult({ results, hideTitle = false, hideStatus = false, isSubFeature = false }) {
  if (!results) return null;


  const riskItems = results.risks
    ? results.risks
        .split('\n')
        .filter(Boolean)
        .map((item) => {
          const match = item.match(/- \*\*(.+?)\*\*: (.+)/);
          if (match) {
            return {
              title: match[1],
              description: match[2],
              type: 'structured'
            };
          } else {
            // Handle plain text format
            return {
              title: null,
              description: item.trim(),
              type: 'plain'
            };
          }
        })
        .filter(Boolean)
    : [];

  const programDescriptionItems = results.program_description
    ? results.program_description
        .split('- ')
        .filter(item => item.trim())
        .map(item => item.trim())
    : [];

  return (
    <div className={
      isSubFeature
        ? `${styles.resultsContainer} ${styles.subFeatureResult}`
        : styles.resultsContainer
    }>
      <div className={styles.titleRow}>
        {!hideTitle && (
          <h3 className={styles.resultsTitle}>{results.name}</h3>
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
            <span className={styles.statusValue}>
              1 out of 2 features are completed. One is blocked.
            </span>
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
            <div className={styles.risksColumn}>
              <div className={styles.risksHeader}>
                <span className={styles.icon}>⚠️</span>
                <span>Risks:</span>
              </div>
              <div className={styles.risksContent}>
                {riskItems.map((risk, index) => (
                  <div key={index} className={styles.riskItem}>
                    {risk.type === 'structured' ? (
                      <>
                        <strong>🔸 {risk.title}</strong>
                        <p>{risk.description}</p>
                      </>
                    ) : (
                      <p>{risk.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>}
          {programDescriptionItems.length > 0 && <div className={styles.statusItem}>
            <div className={styles.summaryColumn}>
              <div className={styles.summaryHeader}>
                <span className={styles.icon}>🤖</span>
                <span>Program Description:</span>
              </div>
              <div className={styles.summaryContent}>
                {programDescriptionItems.map((item, index) => (
                  <p key={index} className={styles.summaryItem}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>}
        </div>
    
      </div>
      {/* SubFeature Section */}
      <SubFeature subfeatures={results.features} />
    </div>
  );
} 