"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import FeatureStatusResult from "./components/FeatureStatusResult";

export default function Home() {
  const [featureId, setFeatureId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const handleViewStatus = async () => {
    if (!featureId.trim()) {
      setError("Please enter a Main Feature ID");
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch(`/api/feature-status?featureId=${encodeURIComponent(featureId.trim())}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || "Failed to fetch feature status");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleViewStatus();
    }
  };

  return (
    <>
      <Header
        logoSrc="/Images/guidewire.svg"
        title="AI Workflow Tracker"
      />
      <div className={styles.homePageWrapper}>
        <div className={styles.centerBox}>
          <div className={styles.subtitle}>AI-powered status tracker – Enter your Main Feature ID</div>
          <label className={styles.label} htmlFor="masterId">Enter Main Feature Id</label>
          <div className={styles.inputRow}>
            <input
              id="masterId"
              className={styles.input}
              value={featureId}
              onChange={(e) => setFeatureId(e.target.value)}
              onKeyPress={handleKeyPress}
              type="text"
              placeholder="Enter Feature ID"
            />
            <button 
              className={styles.button}
              onClick={handleViewStatus}
              disabled={loading}
            >
              {loading ? "Loading..." : "View Status"}
            </button>
          </div>
          
          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}
          
          {results && (
            <FeatureStatusResult results={results} />
          )}
        </div>
      </div>
    </>
  );
}
