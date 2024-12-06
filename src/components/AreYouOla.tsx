import React, { useState } from 'react';

const AreYouOla: React.FC = () => {
  const [answer, setAnswer] = useState<string | null>(null);

  if (answer === 'Tak') {
    return (
      <div style={styles.fullScreenRed}>
        <p style={styles.fullScreenText}>🩷🩷 Kocham Cię 🩷🩷</p>
      </div>
    );
  }

  if (answer === 'Nie') {
    return (
      <div style={styles.fullScreenRed}>
        <p style={styles.fullScreenText}>Idź stąd 😡😡😡</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <p style={styles.question}>Czy jesteś Ola P.?</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setAnswer('Tak')}>
          Tak
        </button>
        <button style={styles.button} onClick={() => setAnswer('Nie')}>
          Nie
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    padding: '1rem',
  },
  question: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  fullScreenRed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black', // Tło w kolorze czerwonym
    color: '#fff',
    margin: 0, // Usunięcie marginesów domyślnych
  },
  fullScreenText: {
    fontSize: '2rem',
    textAlign: 'center',
  },
};

export default AreYouOla;
