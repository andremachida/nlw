import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
      <header>
        <img src={logo} alt="E-Collect"/>
        <main>
          <h1>Your waste collection marketplace.</h1>
          <p>We help people find collection points efficiently.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Register a collection point</strong>
          </Link>
        </main>
      </header>
      </div>
    </div>
  );
}

export default Home;
