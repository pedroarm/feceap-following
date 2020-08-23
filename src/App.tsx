import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FiBookOpen } from "react-icons/fi";
import { BiBrain } from 'react-icons/bi';
import { RiUserSearchLine } from 'react-icons/ri'

import './global/styles.css'
import './App.css';

const Wave1 = require("./assets/wave1.svg") as string;
const Wave2 = require("./assets/wave2.svg") as string;
const Banner = require("./assets/banner_img.svg") as string;

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <div className="header-text">
            <div className="header-title">
              <p>Por que estamos fazendo isso?</p>
            </div>
            <div className="header-description">
              <p>Este projeto tem como objetivo trabalhar em cima das dificuldades diárias das pessoas. Para que seja possível contribuir de forma mensurável no desenvolvimento da sociedade como um todo, e assim buscar uma solução viável para qualquer problema.</p>
            </div>
          </div>
          
          <img src={Banner} alt=""/>
          </div>
      </div>

          <div className="moving-mouse-holder">
            <div className="mouse">
              <div className="mouse-button">&nbsp;</div>
            </div>
          </div>
      <div className="timeline">
        <img src={Wave1} alt=""/>
        <div className="timeline-content">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#44475a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #44475a' }}
            iconStyle={{ background: '#ffb86c', color: '#f4f4f4' }}
            icon={<RiUserSearchLine />}
          >
            <h3 className="vertical-timeline-element-title">ESTÁGIO INICIAL</h3>
            <h4 className="vertical-timeline-element-subtitle">Passo 1</h4>
            <p>
              Nesta etapa nós damos o primeiro salto, onde estamos procurando um problema recorrente na sociedade, através de pesquisas, para que seja possível trabalhar em cima e assim desenvolver uma solução viável.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#44475a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #44475a' }}
            iconStyle={{ background: '#83c7d6', color: '#f4f4f4' }}
            icon={<FiBookOpen />}
          >
            <div className="shimming-effect">
              <div className="shimming-title">&nbsp;</div>
              <div className="shimming-subtitle">&nbsp;</div>
              <div className="shimming-description-line1">&nbsp;</div>
              <div className="shimming-description-line2">&nbsp;</div>
              <div className="shimming-description-line3">&nbsp;</div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#44475a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #44475a' }}
            iconStyle={{ background: '#bd93f9', color: '#f4f4f4' }}
            icon={<BiBrain />}
          >
            <div className="shimming-effect">
              <div className="shimming-title">&nbsp;</div>
              <div className="shimming-subtitle">&nbsp;</div>
              <div className="shimming-description-line1">&nbsp;</div>
              <div className="shimming-description-line2">&nbsp;</div>
              <div className="shimming-description-line3">&nbsp;</div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#44475a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #44475a' }}
            iconStyle={{ background: '#65c97e', color: '#f4f4f4' }}
            icon={<FiBookOpen />}
          >
            <div className="shimming-effect">
              <div className="shimming-title">&nbsp;</div>
              <div className="shimming-subtitle">&nbsp;</div>
              <div className="shimming-description-line1">&nbsp;</div>
              <div className="shimming-description-line2">&nbsp;</div>
              <div className="shimming-description-line3">&nbsp;</div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
        <img src={Wave2} alt=""/>
      </div>
    </div>
  );
}

export default App;
