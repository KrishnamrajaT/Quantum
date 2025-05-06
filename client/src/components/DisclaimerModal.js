import React, { useState } from "react";
import {
  Modal,
  Fade,
  Box,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Responsive Styled Components
const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #2563EB 0%, #1E40AF 100%)",
  color: "white",
  fontWeight: "bold",
  padding: theme.spacing(1.5, 3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    fontSize: "0.875rem",
  },
  "&:hover": {
    background: "linear-gradient(45deg, #1E40AF 0%, #2563EB 100%)",
  },
  "&:disabled": {
    background: "#E5E7EB",
    color: "#9CA3AF",
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgba(15, 23, 42, 0.9)",
  padding: theme.spacing(3),
  borderRadius: "16px",
  maxWidth: "500px",
  width: "90%",
  margin: "20px auto",
  maxHeight: "90vh",
  overflowY: "auto",
  outline: "none",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(16px)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    maxWidth: "95%",
    maxHeight: "85vh",
  },
  "@keyframes rotate": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

const CheckboxItem = styled(FormControlLabel)(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
  alignItems: "center",
  "& .MuiCheckbox-root": {
    color: "#3B82F6",
    paddingTop: 0,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.25), // Reduced from 0.5 for better mobile alignment
      marginTop: -15,
      marginRight: 5, // Small adjustment for pixel-perfect alignment
    },
  },
  "& .MuiTypography-root": {
    color: "#E2E8F0",
    fontSize: "0.95rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
      lineHeight: "1.3",
    },
  },
}));

const DisclaimerForm = ({ open, onClose, onPaymentInitiated }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [checkedItems, setCheckedItems] = useState({
    educational: false,
    noGuarantees: false,
    paperTrading: false,
    acceptRisk: false,
    agreeTerms: false,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        style: {
          backgroundColor: "rgba(2, 6, 23, 0.7)",
          backdropFilter: "blur(4px)",
        },
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: isMobile ? 1 : 2,
      }}
    >
      <Fade in={open}>
        <ModalContent>
          {/* Glow effect */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              width: "100%",
              background:
                "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 50%)",
              zIndex: -1,
            }}
          />

          {/* Close Button */}
          <Box
            textAlign="end"
            position="absolute"
            top={15}
            right={15}
            sx={{ cursor: "pointer" }}
          >
            <CloseRoundedIcon
              onClick={onClose}
              sx={{
                width: isMobile ? "20px" : "30px",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            fontWeight="bold"
            color="#FFFFFF"
            sx={{
              textAlign: "center",
              pt: isMobile ? 1 : 0,
              px: isMobile ? 1 : 0,
            }}
          >
            Program Terms & Conditions
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            color="#94A3B8"
            mb={2}
            sx={{
              textAlign: "center",
              fontSize: isMobile ? "0.875rem" : "1rem",
              px: isMobile ? 1 : 0,
            }}
          >
            Please acknowledge the following before proceeding:
          </Typography>

          {/* Checkbox Form */}
          <Box
            component="form"
            sx={{
              mt: 1,
              p: isMobile ? 1 : 2,
            }}
          >
            {[
              {
                name: "educational",
                label:
                  "I clearly understand this program is strictly for educational purposes only",
              },
              {
                name: "noGuarantees",
                label:
                  "I will not expect guaranteed profits or signals or account handling.",
              },
              {
                name: "paperTrading",
                label:
                  "I will conduct simulated paper trading exercises for the first month",
              },
              {
                name: "acceptRisk",
                label:
                  "I accept that trading involves risk and I take full responsibility.",
              },
              {
                name: "agreeTerms",
                label:
                  "I fully agree to all the terms and disclaimers mentioned above.",
              },
            ].map((item) => (
              <CheckboxItem
                sx={{ padding: "7px 0px" }}
                key={item.name}
                control={
                  <Checkbox
                    checked={checkedItems[item.name]}
                    onChange={handleChange}
                    name={item.name}
                    size={isMobile ? "small" : "medium"}
                  />
                }
                label={item.label}
              />
            ))}
          </Box>

          {/* Submit Button */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              pb: isMobile ? 1 : 0,
            }}
          >
            <GradientButton
              variant="contained"
              disabled={!allChecked}
              onClick={onPaymentInitiated}
              size={isMobile ? "small" : "large"}
              fullWidth={isMobile}
              sx={{
                maxWidth: isMobile ? "100%" : "300px",
              }}
            >
              Proceed to Payment
            </GradientButton>
          </Box>
        </ModalContent>
      </Fade>
    </Modal>
  );
};

export default DisclaimerForm;
