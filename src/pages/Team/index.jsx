import React from 'react'
import  team1  from "../../assets/Images/team-1.jpeg";
import  team2  from "../../assets/Images/team-2.jpeg";
import  team3  from "../../assets/Images/team-3.jpeg";
import  team4  from "../../assets/Images/team-4.jpeg";
import  team5  from "../../assets/Images/team-5.jpeg";
import  team6  from "../../assets/Images/team-6.jpeg";
import './styles.css';

export default function Team() {
    return (
        <div className="hometeam">
          <div className="page-title-area">
        <h1>Our Team</h1>
      </div>
          <div className="container">
            <div className="row pt-5 mt-5">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Acheive Your Business Goal</h4>
                  <p>
                  At visualimagery, our team is the heart of everything we do. We are a diverse group of digital marketing experts, creative thinkers, and problem solvers, all united by a passion for helping businesses grow. From strategists and designers to content creators and data analysts, each team member brings their unique skills and insights to the table, ensuring that your brand gets the attention it deserves. Together, we work collaboratively to deliver innovative solutions and outstanding results for every client we serve.
                  </p>
               
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div class="our-team">
                    <div class="pic">
                      <img src={team1} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">MARTIN SMITH</h3>
                      <span class="post">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team2} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Olivia</h3>
                      <span class="post">Marketing Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team3} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">FRANKLIN HARBET</h3>
                      <span class="post">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team4} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">Miranda joy</h3>
                      <span class="post">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team5} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">LINDA ANDERSON</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div class="our-team">
                    <div class="pic">
                      <img src={team6} />
                    </div>
                    <div class="team-content">
                      <h3 class="title">KRISTIANA</h3>
                      <span class="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


