import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DisclaimerForm from "./DisclaimerModal";
import PaymentModal from "../Pages/PaymentPage";

const goldenShimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const pulseZoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const ShimmerButton = styled(Button)({
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(45deg, #2563EB 0%, #1E40AF 100%)",
  backgroundSize: "400% 100%",
  animation: `${goldenShimmer} 2s infinite linear, ${pulseZoom} 3s infinite ease-in-out`,
  borderRadius: "15px",
  padding: "5px 20px",
  fontWeight: "bold",
  fontSize: "1.2rem",
  textTransform: "none",
  color: "white",
  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
  "&:hover": {
    animation: `${pulseZoom} 2s infinite`,
    backgroundSize: "400% 100%",
    background: "linear-gradient(45deg, #1E40AF 0%, #2563EB 100%)",
    // boxShadow: "0 10px 40px rgba(191, 160, 70, 0.8)",
  },
});

export default function JoinNowButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);

  return (
    <>
      <ShimmerButton
        onClick={() => setIsModalOpen(true)}
        startIcon={<RocketLaunchIcon />}
        variant="contained"
      >
        Join Now
      </ShimmerButton>
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
    </>
  );
}
