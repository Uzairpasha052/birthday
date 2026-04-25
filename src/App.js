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
        className='custom-scroll'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
         <motion.p
          style={styles.text}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
              delay: 0.8,
              duration: 0.8, 
          }}
        >

          10… 9… 8… (still thinking how on earth I tolerate you) 😤😂 {"\n"}
          7… 6… 5… (okay fine, I literally can’t live without you) 🥹  {"\n"}
          4… 3… 2… 1… 🎉
        </motion.p>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          Happy Birthday SABA 🎉
        </motion.h1>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
              delay: 5.2,
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1] 
          }}
        >
          Happy 21th birthday to the most annoying, dramatic, lovable, confusing, hilarious, and honestly my favorite person ever, SABA 🎉🥹❤️ From fighting like we’re in a daily WWE match 🤼‍♂️ to
          talking for hours like we have no other job in life 📞😂, you’ve somehow become the most important part of my routine. You’re the elder one now officially 21 😎 but still the
          same person who argues with me over the smallest things and then acts like nothing happened 💀. I still don’t know how I became the most dirtiest person you’ve ever met 😭
          but honestly I’ll proudly take that title if it means I get to be your favorite too 😌✨

          {"\n\n"}
          My darling, my bro, my everything 🤍 I tease you a lot (and yes we both KNOW why 😭 "STORY BOHT ACHI HY YRR"), but behind all that chaos, I genuinely love you
          more than I ever say. I love every moment we spend together—whether it’s at your house, in the club, at club events, picnics, random friend outings, or even weddings where
          we just entered and create memories. And how can I forget those two iconic memories: that random trip to Ocean Mall (don’t ask me why 💀) and that ice-cream
          parlour moment where we shared ONE cup like broke besties while discussing *that Hafsa topic* 💀😂... yeah, unforgettable, slightly illegal, but iconic. 

          {"\n\n"}
          The best thing about us? People actually think we’re in a relationship 😭✨ that’s the biggest compliment ever. Like bro, that’s what connection looks like. And those pictures we take? Absolute masterpieces. 
          people look at them and go "why are you both so close"... like excuse me, mind your business, this is premium friendship energy.. What we have is rare. And yes, let’s talk about your VIOLENCE 💅😭 those random 
          spanks you give me like you’re on a mission… especially that time on the stairs when we were literally covering ourselves just to survive from attacks 💀 I swear it hurts, but somehow… it’s
          still one of my favorite memories.

          {"\n\n"}
          Also, can we address something serious? WHERE DO YOU DISAPPEAR for 3–4 days on Instagram or in the middle of conversations?? 😤 like hello?? where the hell do you go??
          totally unacceptable behavior 😭 come back immediately next time. The way you talk so easily to everyone annoys me sometimes 😤 but I also know that’s just you being your 
          amazing, friendly self.

          {"\n\n"}
          And listen… you in a black saree?? Damn. You’d look unreal🌟. I genuinely wish to see that someday… I don’t know when or if it’ll even happen, but just know that image lives
          rent-free in my head 😌✨ 

          {"\n\n"}
          You have such a small circle, and somehow I got lucky enough to be your number one… even though I act like I’m last 😅 Every moment we spend together, talking
          nonstop for hours, means more to me than I show. And I still think about that moment at Zain bhai’s wedding, when we were standing on the stage... you called it one of the
          most unforgettable moments of your life. I still wonder why. Maybe I know, maybe I don’t—but I’d honestly love to hear it, from you, someday. That moment stays with me.
          
          {"\n\n"}
          I know you’re dreaming big-your university, your psychology field 📚—and I just want you to know genuinely pray you achieve all of it. 
          You deserve every success, every fucking car a billionaire have, every happiness, and every crazy dream coming true 🌟🙏

          {"\n\n"}
          No matter how much we fight, annoy each other, joke, or act like we don’t care… the truth is simple: I never want to lose you. Not in any condition. Ever. And I want the
          same from your side. Till my last breath, As my best friend. Always. ❤️

          {"\n\n"}
          Stay the same chaotic, funny, slightly violent, but completely irreplaceable person you are 😂💖 Happy Birthday once again 🎂✨

          
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
    //position: "relative"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "90%",
    maxWidth: "500px",
    zIndex: 2,

    maxHeight: "80vh",
    overflowY : "auto", 
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
