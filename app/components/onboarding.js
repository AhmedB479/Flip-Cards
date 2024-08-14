"use client";
import React, { useState } from "react";
import Navbar from "./navbar";
import dynamic from "next/dynamic";
import { Box, Button } from "@mui/material";
const Background = dynamic(() => import("./background"), { ssr: false });

export default function Onboarding() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div style={{ position: "fixed", zIndex: "2", width: "100%" }}>
        <Navbar />
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "2",
        }}
      >
        <h2 style={{ color: "white" }}>Welcome</h2>
        <br />
        <Button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            color: hover ? "white" : "white",
            background: hover ? "purple" : "transparent",
            border: "2px solid purple",
            padding: "10px 20px",
            transition: "background-color 0.3s ease, color 0.3s ease",
            textDecoration: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          href="/sign-up"
        >
          Get Started
        </Button>
      </Box>
    </div>
  );
}
