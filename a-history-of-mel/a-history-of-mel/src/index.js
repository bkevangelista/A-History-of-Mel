import React from 'react';
import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import colors from './css-colors';

import './styles.css';

import melPicOne from './images/IMG_0484.JPG';

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
      <h1>All the CSS colors!</h1>

      {colors.map(color => (
        <FadeInSection key={color}>
          <div className="box" style={{ backgroundColor: color, padding: 100, margin: 100 }}>
            <span>
              <img src={melPicOne} alt="" style={{width: 500, height: 683}}/>
            </span>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
