// src/components/StartPage.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const StartPage = () => {
  const history = useHistory();

  const startQuiz = () => {
    // Redirect to the quiz page
    history.push('/quiz');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ width: '100%', maxWidth: 600, background: '#fff', padding: 30, borderRadius: 20, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          Welcome to the Enneagram Quiz
        </h1>
        <p style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}>
          Discover your personality type based on the Enneagram. This quiz consists of a series of questions that will help you understand your motivations, fears, and behaviors.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={startQuiz} style={{ padding: 12, background: '#4f46e5', color: 'white', borderRadius: 10, border: 'none', cursor: 'pointer' }}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
