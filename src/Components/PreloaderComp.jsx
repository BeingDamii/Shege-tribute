import Card1 from "../resources/card1.png";
import Card2 from "../resources/card2.png";
import Card3 from "../resources/card3.png";
import Card4 from "../resources/card4.png";
import Card5 from "../resources/card5.png";
import frogHead from "../resources/frog-head.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import {LoaderLeave,TextAnimation,TweetMotion1,TweetMotion2,TweetMotion3,TweetMotion4,TweetMotion5} from "../Animations/PreloaderAnime"

// component items..
function Preloader() {
  return (
    <PreloaderWrapper
      variants={LoaderLeave}
      initial={"hidden"}
      animate={"show"}
    >
      <motion.div className="tweet-cards">
        <motion.div
          className="card-wrapper"
          variants={TweetMotion5}
          initial={"hidden"}
          animate={"show"}
        >
          <img src={Card1} alt="img1" />
        </motion.div>
        <motion.div
          className="card-wrapper"
          variants={TweetMotion4}
          initial={"hidden"}
          animate={"show"}
        >
          <img src={Card2} alt="img2" />
        </motion.div>
        <motion.div
          className="card-wrapper"
          variants={TweetMotion3}
          initial={"hidden"}
          animate={"show"}
        >
          <img src={Card3} alt="img3" />
        </motion.div>
        <motion.div
          className="card-wrapper"
          variants={TweetMotion2}
          initial={"hidden"}
          animate={"show"}
        >
          <img src={Card4} alt="img4" />
        </motion.div>
        <motion.div
          className="card-wrapper"
          variants={TweetMotion1}
          initial={"hidden"}
          animate={"show"}
        >
          <img src={Card5} alt="img5" />
        </motion.div>
      </motion.div>
      <motion.div
        className="loading-info"
        variants={TextAnimation}
        initial={"hidden"}
        animate={"show"}
      >
        <img src={frogHead} alt="comrade head" />
        <h2>Shege loading please wait....</h2>
      </motion.div>
    </PreloaderWrapper>
  );
}

// styles

const PreloaderWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  height: fit-content;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background-color: #ffffff;
  flex-direction: column;
  .tweet-cards {
    width: 40%;
    align-self: center;
    justify-self: center;
    @media only screen and (max-width: 600px) {
      margin-right: 150px;
    }
    .card-wrapper {
      width: 510px;
      height: 210px;
      border: 2px solid black;
      position: fixed;
      margin-top: 200px;
      overflow: hidden;
      :nth-child(5) {
        margin-left: 20px;
        top: 20px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* mobile styles tweet card */
      @media only screen and (max-width: 600px) {
        width: 300px;
        height: 120px;
      }
    }
  }
  .loading-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 450px;
    @media only screen and (max-width: 600px) {
      margin-top: 400px;
    }

    img {
      width: 46px;
      @media only screen and (max-width: 600px) {
        width: 30px;
      }
    }
    h2 {
      font-size: 16px;
      font-weight: normal;
      margin-left: 10px;
      @media only screen and (max-width: 600px) {
        font-size: 12px;
      }
    }
  }
`;

export default Preloader;
