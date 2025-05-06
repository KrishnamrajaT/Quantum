import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import "./ServiceCard.css"; // We'll create this CSS file

const ServicesCard = () => {
  return (
    <div className="services-features-container">
      <ul className="services-feature-list">
        {/* Item 1 */}
        <li className="services-feature-item">
          <div className="services-feature-icon-wrapper">
            <TrendingUpIcon className="services-feature-icon" />
          </div>
          <div className="services-feature-content">
            <h3 className="services-feature-title">Daily Market Education</h3>
            <p className="services-feature-description">
              Master how to analyze Bank Nifty/Nifty trends every morning with real-time 
              chart reviews and CE/PE planning (no signals—only strategies)
            </p>
          </div>
        </li>

        {/* Item 2 */}
        <li className="services-feature-item">
          <div className="services-feature-icon-wrapper">
            <LiveTvIcon className="services-feature-icon" />
          </div>
          <div className="services-feature-content">
            <h3 className="services-feature-title">Live Sessions Every Week</h3>
            <p className="services-feature-description">
              Get trained in advanced price action, entry-exit logic, and psychology 
              through high-energy weekly live classes (with replays)
            </p>
          </div>
        </li>

        {/* Item 3 */}
        <li className="services-feature-item">
          <div className="services-feature-icon-wrapper">
            <LibraryBooksIcon className="services-feature-icon" />
          </div>
          <div className="services-feature-content">
            <h3 className="services-feature-title">Real-Trade Case Study Vault</h3>
            <p className="services-feature-description">
              Access a private library of recent trade breakdowns—learn what works 
              and what doesn't from real market examples
            </p>
          </div>
        </li>

        {/* Item 4 */}
        <li className="services-feature-item">
          <div className="services-feature-icon-wrapper">
            <GroupsIcon className="services-feature-icon" />
          </div>
          <div className="services-feature-content">
            <h3 className="services-feature-title">Premium Learning Community</h3>
            <p className="services-feature-description">
              Join a private Telegram group where learners share charts, ask questions, 
              and grow together. Includes daily summaries and discussion
            </p>
          </div>
        </li>

        {/* Item 5 */}
        <li className="services-feature-item">
          <div className="services-feature-icon-wrapper">
            <BuildIcon className="services-feature-icon" />
          </div>
          <div className="services-feature-content">
            <h3 className="services-feature-title">Personal Strategy Building</h3>
            <p className="services-feature-description">
              Learn how to build your own trading setup. Includes one-on-one review 
              of your trades and personalized corrections
            </p>
          </div>
        </li>

        {/* Item 6 */}
        <li className="services-feature-item">
          <div className="services-feature-icon-wrapper">
            <DescriptionIcon className="services-feature-icon" />
          </div>
          <div className="services-feature-content">
            <h3 className="services-feature-title">Bonus Templates & Tools</h3>
            <p className="services-feature-description">
              Free trading journals, risk calculators, and daily prep sheets—everything 
              you need to boost discipline and reduce losses
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServicesCard;