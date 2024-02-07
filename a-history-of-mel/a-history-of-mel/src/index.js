import React from 'react';
import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import  MessageCard from '../src/MessageCard';

import './styles.css';
import './Box.css';

import melPicOne from './images/IMG_0484.JPG';

const cardInfo = [
  {
    image: [
        melPicOne
    ],
    title: "To the light of my life",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "I wanted to make you something",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "that you can always look back on",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "to remind you of all the good times",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "that we've shared together.",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "I will love you no matter what",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "until the end of time.",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "I may not be the smartest",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "or the strongest",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "or the prettiest",
    description: ["(that's you)"]
  },
  {
    image: [
        melPicOne
    ],
    title: "but I definitely have the most love for you",
    description: []
  },
  {
    image: [
        melPicOne
    ],
    title: "I love you so much",
    description: []
  },
]

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Happy Birthday Melinda!</h1>

      {cardInfo.map(card => (
        <FadeInSection >
          <div style={{ margin: 100, backgroundColor: 'white' }}>
              <MessageCard cardInfo={card} />
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
