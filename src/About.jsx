import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "backgroundChange 10s infinite alternate", 
      }}
    >
      <style>
        {`
          @keyframes backgroundChange {
            0% {
              background: linear-gradient(135deg, #B0BEC5, #E0E0E0); /* Gray to White */
            }
            50% {
              background: linear-gradient(135deg, #E0E0E0, #FAFAFA); /* White to Dirty White */
            }
            100% {
              background: linear-gradient(135deg, #FAFAFA, #B0BEC5); /* Dirty White to Gray */
            }
          }
        `}
      </style>

      <div
        style={{
          background: "#1c1c1c", 
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.6)", 
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            color: "#FFD700", 
            marginBottom: "20px",
            fontWeight: "bold",
            textTransform: "uppercase",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.1)", 
          }}
        >
          About Me
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#e0e0e0", 
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          My name is <strong>MJ Magistrado</strong>, and I am a 2nd-year college
          student pursuing a <strong>Computer Science</strong> degree. Born on{" "}
          <strong>March 8, 2004</strong>, and currently residing on{" "}
          <strong>Caplihan Street, Calauag, Naga City</strong>, I am passionate
          about technology and eager to expand my knowledge and skills in the
          field of computer science.
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#c0c0c0", 
            lineHeight: "1.8",
          }}
        >
          As a dedicated student, I am committed to my academic journey and
          constantly strive to learn new technologies and solve complex
          problems. I'm excited to apply what I've learned to real-world
          projects and advance my career in technology.
        </p>
      </div>
    </div>
  );
};

export default About;
