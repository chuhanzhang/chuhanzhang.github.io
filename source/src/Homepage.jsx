import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={24} md={16}>
            <h1>
              Hello, I'm Chuhan
            </h1>

            <p>
              I'm a senior at Yale studying <Link to="http://history.yale.edu/">Great Books</Link> and <Link to="http://music.yale.edu/">Great Music</Link>. 
              My hometown is <Link to="https://en.wikipedia.org/wiki/Ningbo">Ningbo, China</Link> and I swam all the way to the States four years ago (jk, I'm a terrible swimmer)
            </p>

            <h4>Where I've Worked:</h4>
            <ul>
              <li>Student Fellow at the Yale Law School Information Society Project
                <Link to="https://law.yale.edu/isp">
                  <div class="link"></div>
                </Link>
              </li>
              <li>Policy Research Intern at Github (Summer 2017)<Link to="https://internships.github.com/interns/2017/chuhan"><div class="link"></div></Link></li>
              <li>Legal and Business Affairs intern at Naxos (Summer 2016)</li>
            </ul>

            <h4>Music and Art:</h4>
            <ul>
              <li>Frolicked in Poland and played at the Chopin Competition<Link to="https://youtu.be/vxLzALmBpb0?t=1m53s"><div class="link"></div></Link></li>
              <li>Broke a Guiness world record for memorizing lots of songs
                <Link to="http://en.people.cn/english/200103/13/eng20010313_64934.html">
                  <div class="link"></div>
                </Link>
              </li>
              <li>Helped Create a Tree of Life
                <Link to="https://news.yale.edu/2015/04/16/tree-life-show-students-explore-artistic-and-environmental-themes">
                  <div class="link"></div>
                </Link>
              </li>
            </ul> 

          </Col>
          <Col xs={24} md={8}>
            <div class="photo-container">
              <div id="photo1" class="photo"></div>
              <div id="photo2" class="photo"></div>
              <div id="photo3" class="photo"></div>
              <div id="photo4" class="photo"></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


