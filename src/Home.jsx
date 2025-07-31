import React from "react";
import { User, UserPlus, Users, Search, Award } from "lucide-react";
import "./Home.css";

function Home() {
    return (
    <>
      <div className="hero-section-home">
        {/* <h4 className="home-subtitle">Welcome to the</h4> */}
        <h1 className="home-title">Soil Science Professionals Directory!</h1>
        <p className="home-subtitle">A project by the Soil Science Society of Pakistan</p>
        <div className="home-description">
          <p>Connect with leading soil science professionals across Pakistan. Discover expertise, collaborate on research, and advance the field of soil science together.</p>
          <div className="button-container">
            <button className="btn btn-primary">
              <User size={16} />
              Explore Professionals
            </button>
            <button className="btn btn-secondary">
              <UserPlus size={16} />
              Join Directory
            </button>
          </div>
        </div>
      </div>
      
      <div className="why-join-us">
        <h2 className="section-title">Why Join Our Directory?</h2>
        <div className="cards-container">
          <div className="card">
            <div className="card-icon">
              <Users size={24} />
            </div>
            <h3 className="card-title">Professional Network</h3>
            <p className="card-description">Connect with fellow soil scientists, researchers, and practitioners across Pakistan</p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <Search size={24} />
            </div>
            <h3 className="card-title">Easy Discovery</h3>
            <p className="card-description">Find experts by specialization, location, and research interests</p>
          </div>
          
          <div className="card">
            <div className="card-icon">
              <Award size={24} />
            </div>
            <h3 className="card-title">Showcase Expertise</h3>
            <p className="card-description">Highlight your research, publications, and professional achievements</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;