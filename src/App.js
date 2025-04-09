import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const questions = [
  {
    text: "What motivates you the most in life?",
    options: [
      { text: "To be a good person and do what’s right", type: 1 },
      { text: "To be loved and feel appreciated", type: 2 },
      { text: "To succeed and be admired", type: 3 },
      { text: "To express myself and be authentic", type: 4 },
      { text: "To understand the world deeply", type: 5 },
      { text: "To feel safe and supported", type: 6 },
      { text: "To enjoy life and be free", type: 7 },
      { text: "To stay strong and in control", type: 8 },
      { text: "To be at peace and avoid conflict", type: 9 },
    ],
  },
  {
    text: "What do you fear the most?",
    options: [
      { text: "Making mistakes or being corrupt", type: 1 },
      { text: "Being unloved or rejected", type: 2 },
      { text: "Failing or being seen as worthless", type: 3 },
      { text: "Being ordinary or misunderstood", type: 4 },
      { text: "Being overwhelmed or invaded", type: 5 },
      { text: "Being without support or guidance", type: 6 },
      { text: "Being trapped in pain or boredom", type: 7 },
      { text: "Being weak or controlled by others", type: 8 },
      { text: "Conflict or being disconnected from others", type: 9 },
    ],
  },
  {
    text: "In a group project, you usually…",
    options: [
      { text: "Set rules and keep everything organized", type: 1 },
      { text: "Help everyone and check how they feel", type: 2 },
      { text: "Take the lead and aim for success", type: 3 },
      { text: "Bring creativity and unique ideas", type: 4 },
      { text: "Think deeply and offer logical solutions", type: 5 },
      { text: "Make sure everyone feels safe and prepared", type: 6 },
      { text: "Keep the vibe fun and high-energy", type: 7 },
      { text: "Push forward confidently and protect the team", type: 8 },
      { text: "Go with the flow and keep peace", type: 9 },
    ],
  },
  {
    text: "What compliments mean the most to you?",
    options: [
      { text: "You always do the right thing.", type: 1 },
      { text: "You’re so thoughtful and kind.", type: 2 },
      { text: "You’re amazing at what you do!", type: 3 },
      { text: "You’re so real and deep.", type: 4 },
      { text: "You’re incredibly smart and insightful.", type: 5 },
      { text: "You’re always prepared and dependable.", type: 6 },
      { text: "You’re so fun to be around!", type: 7 },
      { text: "You’re powerful and fearless.", type: 8 },
      { text: "You make everything feel calm.", type: 9 },
    ],
  },
];



const typeDescriptions = {
  1: "Type 1: The Perfectionist – Loves integrity, fears being wrong, needs to be right.",
  2: "Type 2: The Helper – Loves connection, fears rejection, needs to feel loved.",
  3: "Type 3: The Achiever – Loves success, fears failure, needs to be admired.",
  4: "Type 4: The Individualist – Loves authenticity, fears being ordinary, needs to be unique.",
  5: "Type 5: The Investigator – Loves knowledge, fears intrusion, needs to understand.",
  6: "Type 6: The Loyalist – Loves safety, fears insecurity, needs support.",
  7: "Type 7: The Enthusiast – Loves freedom, fears pain, needs variety.",
  8: "Type 8: The Challenger – Loves control, fears weakness, needs to be strong.",
  9: "Type 9: The Peacemaker – Loves harmony, fears conflict, needs peace.",
};

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (type) => {
    const updated = { ...scores };
    updated[type] = (updated[type] || 0) + 1;
    setScores(updated);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const topType = Object.entries(updated).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
      setResult(typeDescriptions[topType]);
    }
  };

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <Routes>
      <Route path="/" element={
        <div style={{
          
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '50px 20px',
          background: '#f9f9ff',
        }}>
          <h1>Welcome to the Enneagram Quiz</h1>
          <button
            onClick={startQuiz}
            style={{
              padding: '15px 30px',
              backgroundColor: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Start Quiz
          </button>
          <img src="/logo.png" alt="Quiz Logo"style={{
        width: '180px',
        marginTop: '50px',
        opacity: 0.9,
        filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1))'}} />

        </div>
      } />
      <Route path="/quiz" element={
        <div style={{
          minHeight: '100vh',
          background: '#eef2ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20
        }}>
          <div style={{
            width: '100%',
            maxWidth: 600,
            background: '#fff',
            padding: 30,
            borderRadius: 20,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            {!result ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
                  {questions[current].text}
                </h2>
                <div style={{ display: 'grid', gap: 10 }}>
                  {questions[current].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(opt.type)}
                      style={{
                        padding: 12,
                        border: '1px solid #ccc',
                        borderRadius: 12,
                        background: '#f9f9f9',
                        cursor: 'pointer'
                      }}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 style={{
                  fontSize: 26,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}>
                  Your Enneagram Type:
                </h2>
                <p style={{ marginTop: 24, textAlign: 'center', fontSize: 18 }}>
                  {result}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                  <button
                    onClick={() => {
                      setResult(null);
                      setScores({});
                      setCurrent(0);
                    }}
                    style={{
                      padding: 10,
                      background: '#4f46e5',
                      color: 'white',
                      borderRadius: 10,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Restart Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <QuizApp />
    </Router>
  );
}

export default App;
