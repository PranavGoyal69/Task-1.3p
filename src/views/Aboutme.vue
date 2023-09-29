<template>
    <div class="about-me">
      <div class="navbar">
        <h1>About Me</h1>
        <div class="navbar-buttons">
          <button class="star" @click="rate(1)">1 star</button>
          <button class="star" @click="rate(2)">2 star</button>
          <button class="star" @click="rate(3)">3 star</button>
          <button class="star" @click="rate(4)">4 star</button>
          <button class="star" @click="rate(5)">5 star</button>
        </div>
      </div>
      <div class="header">
        <h1>Welcome to My Portfolio</h1>
      </div>
      <div class="content">
        <img src="/me.jpg" alt="Pranav Goyal" class="profile-picture" />
        <div class="bio">
          <h2>Pranav Goyal</h2>
          <p>
            I'm a dedicated IT enthusiast currently pursuing a Bachelor's degree in Information Technology
            at Deakin University in Melbourne. My passion for technology drives me to explore the ever-evolving
            world of IT, and I'm committed to continuous learning and innovation.
          </p>
          <p>
            I believe that technology has the power to transform lives, and I am excited to be a part of this
            transformative journey. Whether it's developing innovative software solutions, creating user-friendly
            interfaces, or solving complex problems, I am always up for the challenge.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      rate(rating) {
        alert(`Thanks for your rating! I will always do my best to improve. You rated this introduction as ${rating} stars.`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add CSS styles for the About Me page */
  .about-me {
    text-align: center;
    padding: 50px;
  }
  
  .navbar {
    background-color: #232323;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  
  .navbar h1 {
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }
  
  .navbar-buttons {
    display: flex;
  }
  
  .navbar-buttons button {
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #f4d03f;
    margin-right: 10px;
    transition: transform 0.2s ease-in-out;
  }
  
  .navbar-buttons button:hover {
    transform: scale(1.2);
  }
  
  .header {
    margin-bottom: 30px;
  }
  
  .header h1 {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .profile-picture {
    max-width: 200px;
    border-radius: 50%;
    margin-right: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .bio {
    text-align: left;
  }
  
  .bio h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #555;
  }
  
  .bio p {
    font-size: 18px;
    line-height: 1.5;
    color: #777;
  }
  </style>
  