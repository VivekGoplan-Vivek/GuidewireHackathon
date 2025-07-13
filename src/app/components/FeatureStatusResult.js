import React from "react";
import styles from "./FeatureStatusResult.module.css";

export default function FeatureStatusResult({ results }) {
  if (!results) return null;

  return (
    <div className={styles.resultsContainer}>
      <h3 className={styles.resultsTitle}>Feature Status Details</h3>
      <div className={styles.resultsContent}>
        <div className={styles.statusGrid}>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Feature ID:</span>
            <span className={styles.statusValue}>{results.featureId}</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Status:</span>
            <span className={`${styles.statusValue} ${styles.statusBadge} ${styles[results.status.toLowerCase().replace(' ', '')]}`}>
              {results.status}
            </span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Priority:</span>
            <span className={`${styles.statusValue} ${styles.priorityBadge} ${styles[results.priority.toLowerCase()]}`}>
              {results.priority}
            </span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Assignee:</span>
            <span className={styles.statusValue}>{results.assignee}</span>
          </div>
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
            <span className={styles.statusLabel}>Last Updated:</span>
            <span className={styles.statusValue}>
              {new Date(results.lastUpdated).toLocaleDateString()}
            </span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Est. Completion:</span>
            <span className={styles.statusValue}>
              {new Date(results.estimatedCompletion).toLocaleDateString()}
            </span>
          </div>
          {results.dependencies && results.dependencies.length > 0 && (
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Dependencies:</span>
              <div className={styles.dependenciesList}>
                {results.dependencies.map((dep, index) => (
                  <span key={index} className={styles.dependencyTag}>{dep}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {results.comments && results.comments.length > 0 && (
          <div className={styles.commentsSection}>
            <h4 className={styles.commentsTitle}>Recent Comments</h4>
            <div className={styles.commentsList}>
              {results.comments.map((comment, index) => (
                <div key={index} className={styles.commentItem}>
                  <div className={styles.commentHeader}>
                    <span className={styles.commentAuthor}>{comment.author}</span>
                    <span className={styles.commentTime}>
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className={styles.commentMessage}>{comment.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 