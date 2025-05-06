import React, { useState } from "react";
import DisclaimerForm from "../components/DisclaimerModal";
import PaymentModal from "../Pages/PaymentPage";
import "./MentorShipCard.css";

function MentorshipCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  return (
    <div className="mentorship-card">
      <div className="card-glow"></div>

      <div className="card-header">
        <div className="badge">LIMITED SEATS</div>
        <h1 className="headline">
          <span className="highlight">3-Month</span> Trading Mentorship
          <span className="break">
            <br />& Learning Program
          </span>
        </h1>
      </div>

      <div className="card-content">
        <p className="subheading">
          Practical stock market learning through real-time examples, trade
          plans, and strategy sessions. Learn how I approach the market daily
          and gain confidence in trading with discipline.
        </p>
        <div className="features">
          <div className="feature-item">
            <div className="feature-icon">📈</div>
            <span>
              Daily Live Market Analysis trade plans in a private Telegram group
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚖️</div>
            <span>
              Learn risk management, entry-exit logic, capital protection
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🧩</div>
            <span>
              Strategy-based learning (strategies will be shared those iam into)
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <span>
              Trade management support (how to trail, when to exit, etc.)
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📹</div>
            <span>
              Weekly or monthly sessions explaining trading setups, CE/PE
              levels, and risk management.
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📖</div>
            <span>
              Trade breakdowns showing learning-based examples (no signals),
              purely for education.
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✍️</div>
            <span>
              Write regular posts explaining trends (Nifty/BankNifty) and
              technical setups without giving trade entries
            </span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📓</div>
            <span>
              Give a downloadable sheet for students to track and analyze their
              own trades.
            </span>
          </div>
        </div>

        <div className="cta-section">
          <div className="price-tag">
            <span className="price">5,999/-</span>
            <span className="duration">for 3 Months</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="enroll-button"
          >
            Join Program Now
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <div className="card-footer">
        <div className="disclaimer">
          <span>⚠️</span> Not a get-rich-quick scheme. Requires consistent
          effort.
        </div>
        <DisclaimerForm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPaymentInitiated={() => {
          console.log("Payment initiated!");
          setIsModalOpen(false);
          setIsOpenPaymentModal(true);
        }}
      />
      <PaymentModal
        onClose={() => setIsOpenPaymentModal(false)}
        open={isOpenPaymentModal}
      />

      </div>
    </div>
  );
}

export default MentorshipCard;
