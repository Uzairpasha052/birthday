//import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={} className="App-logo" alt="logo" /> */}
    //     <h1>
    //       Working from the office
    //     </h1>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div style={styles.container}>
      
      {/* Floating hearts */}
      <div style={styles.hearts}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            style={styles.heart}
            animate={{ y: [-20, -600], opacity: [1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.3
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Main Card */}
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Happy Birthday SABA 🎉
        </motion.h1>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* From the moment you came into my life, everything felt brighter,
          warmer, and more meaningful. */}

          {"\n\n"}You are not just special — you are unforgettable.

          {"\n\n"}I hope your day is filled with happiness, laughter, and everything you love.

          {"\n\n"}— Someone who truly cares 💖
        </motion.p>
      </motion.div>

    </div>

  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI",
    overflow: "hidden",
    position: "relative"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "500px",
    zIndex: 2
  },

  text: {
    whiteSpace: "pre-line",
    marginTop: "20px",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333"
  },

  hearts: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },

  heart: {
    position: "absolute",
    bottom: 0,
    left: `${Math.random() * 100}%`,
    fontSize: "20px"
  }
};

export default App;
