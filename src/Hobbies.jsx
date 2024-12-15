import React from "react";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Reading",
      description: "Explore new worlds and ideas through books, articles, and more.",
      icon: "📚",
    },
    {
      title: "Gaming",
      description: "Relax and challenge yourself with video games, either solo or with friends.",
      icon: "🎮",
    },
    {
      title: "Cooking",
      description: "Try out new recipes and experiment in the kitchen.",
      icon: "🍳",
    },
    {
      title: "Sports",
      description: "Stay active and motivated while challenging yourself physically.",
      icon: "🏐",
    },
    {
      title: "Photography",
      description: "Capture the beauty around you through the lens of a camera.",
      icon: "📷",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(135deg, #3b3b3b, #2c2c2c, #1a1a1a)",
        minHeight: "100vh",
        color: "#F0F0F0",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          color: "#FFD700",
          marginBottom: "40px",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
        }}
      >
        My Hobbies
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            style={{
              background: "#333",
              borderRadius: "12px",
              width: "240px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.3)";
            }}
          >
            <div
              style={{
                fontSize: "50px",
                marginBottom: "20px",
                color: "#FFD700",
              }}
            >
              {hobby.icon}
            </div>
            <h2
              style={{
                fontSize: "24px",
                color: "#FFD700",
                margin: "10px 0",
                fontWeight: "bold",
              }}
            >
              {hobby.title}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#D1D1D1",
                lineHeight: "1.5",
                marginBottom: "15px",
              }}
            >
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
