import React from 'react'
import team1 from './Images/team-1.png'
import team2 from './Images/team-2.png'
import team3 from './Images/team-3png.png'
import team4 from './Images/team-4.png'
import team5 from './Images/team-5.png'
import team6 from './Images/team-6.png'
import Subscribe_Now from './Subscribe_Now'
import Footer from './Footer'
export default function Team() {
  return (
    <>
      <div className="section-6-wrapper">
        <div className="team">

          {/* Team Heading Starts */}
          <div className="team-heading">
            <h2>Meet Our Team</h2>
            <p className='team-para'>We write various things related to furniture, from tips and what things
              <br /> I need to pay attention to when choosing furniture</p>

          </div>
          {/* Team Heading Ends */}

          {/* Team Images Start */}

          {/* Team Part-1 */}
          <div class="card-group">
            <div class="card">
              <img src={team1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Make Jhane</h2>
                <p class="card-text">Finance Manager</p>
              </div>
            </div>
            <div class="card">
              <img src={team2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Jinny Owen</h2>
                <p class="card-text">Marketing Manager</p>
              </div>
            </div>
            <div class="card">
              <img src={team3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Mia Lobey</h2>
                <p class="card-text">Accountant</p>
              </div>
            </div>
          </div>

          {/* Team Part-2 */}
          <div class="card-group">
            <div class="card">
              <img src={team4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Make Jhane</h2>
                <p class="card-text">Finance Manager</p>
              </div>
            </div>
            <div class="card">
              <img src={team5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Jinny Owen</h2>
                <p class="card-text">Marketing Manager</p>
              </div>
            </div>
            <div class="card">
              <img src={team6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h2 class="card-title">Mia Lobey</h2>
                <p class="card-text">Accountant</p>
              </div>
            </div>
          </div>
          {/* Team Images End */}
        </div>
        <Subscribe_Now />
      </div>
      <Footer />
    </>
  )
}
