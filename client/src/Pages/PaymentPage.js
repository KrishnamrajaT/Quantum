import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Chip,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QRCode from "react-qr-code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PaymentModal = ({ open, onClose, amount = 5999 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState("payment");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    mobile: false,
  });

  // UPI Details
  const upiId = "royal82975669@barodampay";
  const whatsappNumber = "+918886184253";
  const paymentLink = `upi://pay?pa=${upiId}&am=${amount}&tn=PremiumGroupPayment`;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
    setErrors({
      ...errors,
      [name]: false,
    });
  };
  const isFormValid = () => {
    return formData.name.trim() !== "" && /^\d{10}$/.test(formData.mobile);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      mobile: !/^\d{10}$/.test(formData.mobile),
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.mobile;
  };

  const openWhatsApp = () => {
    if (!validateForm()) {
      return;
    }

    const message = `Premium Group Join Request\nName: ${formData.name}\nMobile: ${formData.mobile}\nPaid ₹${amount} to ${upiId}\nFind the Payment screen shot below `;
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    setStep("confirmation");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "85%", sm: 400 },
          maxWidth: "calc(100vw - 24px)",
          maxHeight: "calc(100vh - 24px)",
          overflow: "auto",
          bgcolor: "rgba(15, 23, 42, 0.9)",
          boxShadow:
            "0 0 0 1px rgba(148, 163, 184, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.4)",
          p: isMobile ? 1.5 : 3,
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          outline: "none",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: "4px",
          },
        }}
      >
        {/* Glow Effect */}
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

        <IconButton
          onClick={() => {
            onClose();
            setStep("payment");
            setFormData({ name: "", mobile: "" });
            setErrors({ name: false, mobile: false });
          }}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#E2E8F0",
            [theme.breakpoints.down("sm")]: { top: 6, right: 6 },
          }}
          size={isMobile ? "small" : "medium"}
        >
          <CloseIcon fontSize={isMobile ? "small" : "medium"} />
        </IconButton>

        {step === "payment" && (
          <>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              color="#FFFFFF"
              gutterBottom
              textAlign="center"
              sx={{
                pt: isMobile ? 0.5 : 0,
                fontSize: isMobile ? "1.1rem" : null,
              }}
            >
              Pay ₹{amount} to Join Premium
            </Typography>

            <Box sx={{ textAlign: "center", my: isMobile ? 1.5 : 3 }}>
              <Box
                sx={{
                  p: isMobile ? 1 : 2,
                  bgcolor: "white",
                  display: "inline-block",
                  borderRadius: "8px",
                }}
              >
                <QRCode
                  value={paymentLink}
                  size={isMobile ? 130 : 160}
                  fgColor="#1E40AF"
                />
              </Box>
              <Typography
                variant="body2"
                color="#94A3B8"
                mt={1}
                sx={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
              >
                Scan with any UPI app
              </Typography>
            </Box>

            <Divider
              sx={{
                borderColor: "rgba(255,255,255,0.1)",
                my: isMobile ? 1.5 : 2,
                mx: isMobile ? -1.5 : -3,
              }}
            />

            <Box sx={{ mb: isMobile ? 1.5 : 3 }}>
              <Typography
                variant="subtitle2"
                color="#E2E8F0"
                gutterBottom
                sx={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
              >
                Or send payment to:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "rgba(30, 41, 59, 0.5)",
                  p: isMobile ? 1 : 1.5,
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontFamily: "monospace",
                    color: "#E2E8F0",
                    fontSize: isMobile ? "0.75rem" : "1rem",
                    wordBreak: "break-all",
                  }}
                >
                  {upiId}
                </Typography>
                <IconButton
                  onClick={handleCopy}
                  size={isMobile ? "small" : "medium"}
                  sx={{ color: "#3B82F6", ml: 0.5 }}
                >
                  <ContentCopyIcon fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              </Box>
              {copied && (
                <Chip
                  label="Copied!"
                  size="small"
                  sx={{
                    mt: 0.5,
                    bgcolor: "#3B82F6",
                    color: "white",
                    fontSize: "0.7rem",
                    height: "24px",
                  }}
                />
              )}
            </Box>

            {/* New Form Section */}
            <Box sx={{ mb: isMobile ? 1.5 : 3 }}>
              <Typography
                variant="subtitle2"
                color="#E2E8F0"
                gutterBottom
                sx={{ fontSize: isMobile ? "0.8rem" : "1rem" }}
              >
                Please provide your details:
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": {
                    color: "#E2E8F0",
                    bgcolor: "rgba(30, 41, 59, 0.5)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#94A3B8",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                  },
                }}
                size={isMobile ? "small" : "medium"}
              />

              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
                helperText={
                  errors.mobile ? "Valid 10-digit number required" : ""
                }
                inputProps={{
                  maxLength: 10,
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#E2E8F0",
                    bgcolor: "rgba(30, 41, 59, 0.5)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#94A3B8",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                  },
                }}
                size={isMobile ? "small" : "medium"}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              startIcon={
                isFormValid() && (
                  <WhatsAppIcon sx={{ fontSize: isMobile ? "1rem" : null }} />
                )
              }
              onClick={isFormValid() && openWhatsApp}
              size={isMobile ? "medium" : "large"}
              sx={{
                background: "#25D366",
                color: "white",
                "&:hover": { background: "#128C7E" },
                fontSize: isMobile ? "0.8rem" : "1rem",
                py: isMobile ? 0.8 : 1.5,
                minHeight: isMobile ? "40px" : "48px",
              }}
            >
              {!isFormValid()
                ? "Enter Details Above"
                : isMobile
                ? "Share Payment Proof"
                : "Upload Screenshot via WhatsApp"}
            </Button>
          </>
        )}

        {step === "confirmation" && (
          <Box textAlign="center" sx={{ p: isMobile ? 1 : 2 }}>
            <WhatsAppIcon
              sx={{
                fontSize: isMobile ? 40 : 60,
                color: "#25D366",
                mb: isMobile ? 1 : 2,
              }}
            />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              color="#FFFFFF"
              gutterBottom
              sx={{ fontSize: isMobile ? "1.1rem" : null }}
            >
              Thanks for your Info!
            </Typography>
            <Typography
              color="#94A3B8"
              sx={{
                mb: isMobile ? 2 : 3,
                fontSize: isMobile ? "0.8rem" : "1rem",
                lineHeight: 1.5,
                px: isMobile ? 0.5 : 0,
              }}
            >
              You'll be added to the premium group shortly after verification.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                onClose();
                setStep("payment");
                setFormData({ name: "", mobile: "" });
                setErrors({ name: false, mobile: false });
              }}
              size={isMobile ? "medium" : "large"}
              sx={{
                background: "linear-gradient(45deg, #2563EB 0%, #1E40AF 100%)",
                color: "white",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #1E40AF 0%, #2563EB 100%)",
                },
                fontSize: isMobile ? "0.8rem" : "1rem",
                py: isMobile ? 0.8 : 1.5,
                minHeight: isMobile ? "40px" : "48px",
              }}
            >
              Close
            </Button>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default PaymentModal;
