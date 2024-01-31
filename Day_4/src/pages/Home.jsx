
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import Navbar from '../components/Navbar';
import cover1 from '../assets/images/cover1.jpg'
import cover2 from '../assets/images/cover2.jpg'
import cover3 from '../assets/images/cover3.jpg'
import cover4 from '../assets/images/cover4.jpg'
import '../assets/css/Home.css'
import Footer from '../components/Footer';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 3000ms or 3s)
  };

  return (
    <>
      <Navbar />
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          {/* Your carousel slides go here */}
          <div>
            <img src={cover1} alt="Slide 1" />
          </div>
          <div>
            <img src={cover2} alt="Slide 2" />
          </div>
          <div>
            <img src={cover3} alt="Slide 3" />
          </div>
          <div>
            <img src={cover4} alt="Slide 4" />
          </div>
        </Slider>
      </div>
      <div className="content">
      <p>
      
      CHESS GURUKUL founded in the year 2008, to provide systematic and effective chess training to the players of all levels  from complete beginners to World championship contenders. We believe that learning should be fun and instructive at the same time.</p>

     <p> Chess is a board game for two players, called White and Black, each controlling an army of chess pieces, with the objective to checkmate the opponent's king. It is sometimes called international chess or Western chess to distinguish it from related games such as xiangqi (Chinese chess) and shogi (Japanese chess). The recorded history of chess goes back at least to the emergence of a similar game, chaturanga, in seventh century India. The rules of chess as they are known today emerged in Europe at the end of the 15th century, with standardization and universal acceptance by the end of the 19th century. Today, chess is one of the world's most popular games, and is played by millions of people worldwide.</p>

<p>2 Bronze Medal in Chess Olympiad
40 Medals in World Youth Championships
45 Medals in Asian Youth Championships
5 Titles in Indian National Senior Championships
7 Medals in Asian Senior Championships
The team of Chess Gurukul consists of the following: GM Ramesh, WGM Aarthie Ramaswamy, GM Ankit, (IM) Kunal, WFM Harshini, WFM Ruthumbara and others learned tutors.
      </p>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
