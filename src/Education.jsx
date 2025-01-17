import React from "react";

const Education = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #3a3a3a, #121212)",
        color: "#F5F5F5",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#222222",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            color: "#FFD700", // Gold accent color
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
            marginTop: "40px",
          }}
        >
          {/* Calauag Elementary School */}
          <div
            style={{
              backgroundColor: "#2a2a2a",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.15)";
            }}
          >
            <img
              src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/467869311_1650737609131856_769701457792824986_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGWlA706Txb_zjmAZwwFMEgaTsb3LRhy9FpOxvctGHL0XTj2a-QKWY9kW9cC7EwQbFAhS6COQ8PGc8zysNVlynE&_nc_ohc=ZuHtMFZyK6oQ7kNvgG0ymC1&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&_nc_gid=AQp93iP4Nz-D4d2x2UXvdxX&oh=00_AYCyC9qS_84b8F2oEw08fRLNKY1sriQl7ItnU3lyYPfiig&oe=6766EE00"
              alt="Calauag Elementary Logo"
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
                  color: "#FFD700",
                  marginBottom: "10px",
                }}
              >
                Calauag Elementary School
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#ccc",
                  margin: "5px 0",
                }}
              >
                Batch: <strong>2017</strong>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#bbb",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                I completed my elementary education at Calauag Elementary School, where I developed a strong foundation in both academics and extracurricular activities.
              </p>
            </div>
          </div>

          {/* Camarines Sur National High School */}
          <div
            style={{
              backgroundColor: "#2a2a2a",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.15)";
            }}
          >
            <img
              src="https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/468096699_1650737602465190_2981289244235767500_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF8MHdhfc2X5tpYqlWMBOQpXwaGOJaHQVxfBoY4lodBXG165_UBy94X_t1zfv289jtLp9rZJdv_Z9pjgqXCayBQ&_nc_ohc=reCvNy_LcSAQ7kNvgHfirx0&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=AybioqyKAJWr5wA-T9QnX4b&oh=00_AYB1bWLhDMZ_28bTrPqO_Z_ZMdHvDUTB-HPjlxnhwe7HfA&oe=6766CAD0"
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
                  color: "#FFD700",
                  marginBottom: "10px",
                }}
              >
                Camarines Sur National High School
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#ccc",
                  margin: "5px 0",
                }}
              >
                Batch: <strong>2022</strong>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#bbb",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                During my high school years, I developed a deeper interest in technology and participated in coding clubs, which helped me pursue a degree in Computer Science.
              </p>
            </div>
          </div>

          {/* Naga College Foundation */}
          <div
            style={{
              backgroundColor: "#2a2a2a",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 12px rgba(0, 0, 0, 0.15)";
            }}
          >
            <img
              src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/467871059_1650737599131857_3799183366586760531_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEezmPZWRf2kY9STvMA21yPS8UdL3fBKuVLxR0vd8Eq5bXTXUrCvz4gmfB5zxy3KL5CL2Q7nfaQFCBCjslXc2cq&_nc_ohc=tuHnGyQc8sMQ7kNvgF9T2DM&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=An9kaPhFp2OFXkcKbQUgNEm&oh=00_AYCi3g0G8mJ-faHTD8eorMSaqmgH4x2zRSUX-T3O-qGxgw&oe=6766EE6D"
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
                  color: "#FFD700",
                  marginBottom: "10px",
                }}
              >
                Naga College Foundation Inc.
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#ccc",
                  margin: "5px 0",
                }}
              >
                Current Program: <strong>Computer Science</strong>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#bbb",
                  lineHeight: "1.6",
                  marginBottom: "10px",
                }}
              >
                I am currently pursuing a Bachelor's degree in Computer Science at Naga College Foundation Inc., with a focus on programming, data structures, and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
