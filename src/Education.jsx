import React from "react";

const Education = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #B0BEC5, #E0E0E0, #FAFAFA)", // Gradient background
        animation: "backgroundChange 10s infinite alternate", // Animation for color change
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#fff", // White background for the content section
          borderRadius: "10px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            color: "#333",
            marginBottom: "30px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Education
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            paddingBottom: "30px",
          }}
        >
          {/* First Education Section: Calauag Elementary School */}
          <div
            style={{
              backgroundColor: "#f9f9f9", // Soft gray background for cards
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Deeper shadow for cards
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src="/src/assets/Image/calauag.jpg"
              alt="Calauag Elementary Logo"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #FFD700", // Gold border
              }}
            />
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Calauag Elementary School
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#777",
                  margin: "5px 0",
                }}
              >
                Batch: <strong>2017</strong>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                I completed my elementary education at Calauag Elementary
                School, where I developed a strong foundation in both academics
                and extracurricular activities.
              </p>
            </div>
          </div>

          {/* Second Education Section: Camarines Sur National High School */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src="/src/assets/Image/CSHCS.jpg"
              alt="Camarines Sur National High School Logo"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #FFD700",
              }}
            />
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Camarines Sur National High School
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#777",
                  margin: "5px 0",
                }}
              >
                Batch: <strong>2022</strong>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                During my high school years, I developed a deeper interest in
                technology and participated in coding clubs, which helped me
                pursue a degree in Computer Science.
              </p>
            </div>
          </div>

          {/* Third Education Section: Naga College Foundation */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src="/src/assets/Image/ncf.jpg"
              alt="Naga College Foundation Logo"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #FFD700",
              }}
            />
            <div>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                Naga College Foundation Inc.
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#777",
                  margin: "5px 0",
                }}
              >
                Current Program: <strong>Computer Science</strong>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                I am currently pursuing a Bachelor's degree in Computer
                Science at Naga College Foundation Inc., with a focus on
                programming, data structures, and web development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes backgroundChange {
            0% {
              background-color: #B0BEC5; /* Gray */
            }
            50% {
              background-color: #FAFAFA; /* Dirty White */
            }
            100% {
              background-color: #E0E0E0; /* White */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Education;
