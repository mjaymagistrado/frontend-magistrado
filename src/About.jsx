import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a1a1a, #2c2c2c)", // Darker gradient for a sleek feel
        color: "#E0E0E0", // Consistent light text color for readability
      }}
    >
      <div
        style={{
          background: "#2c2c2c",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          color: "#E0E0E0",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#FFD700", // Gold color for consistency and emphasis
            marginBottom: "20px",
            fontWeight: "bold",
            textTransform: "uppercase",
            textShadow: "2px 2px 6px rgba(255, 215, 0, 0.6)", // Glowing gold effect
          }}
        >
          About Me
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#e0e0e0", // Light gray text color
            lineHeight: "1.8",
            marginBottom: "30px",
            textAlign: "left", // Aligned text for better readability
            letterSpacing: "0.5px", // Slight letter spacing for cleaner look
          }}
        >
          Hello! I'm <strong>MJ Magistrado</strong>, a passionate <strong>Computer Science</strong>
          student currently in my second year at university. I was born on{" "}
          <strong>March 8, 2004</strong> and reside in <strong>Caplihan Street, Calauag, Naga City</strong>.
          Technology is my greatest passion, and I am driven to expand my knowledge and skill set
          within the field of computer science.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#c0c0c0", // Slightly lighter text for contrast
            lineHeight: "1.8",
            textAlign: "left", // Left-align for a more professional feel
            letterSpacing: "0.5px",
          }}
        >
          As a dedicated and driven student, I am committed to both my academic and personal
          growth. I constantly seek to learn new technologies, solve complex problems, and apply my
          knowledge to real-world challenges. I am excited to embark on a career in technology and
          contribute to innovative projects that make an impact.
        </p>
      </div>
    </div>
  );
};

export default About;
