<template>
    <div class="page-container">
      <header class="header">
        <h1 class="title">Introduction</h1>
      </header>
  
      <section class="content">
        <div class="intro-text">
          <p>Hello, I'm Pranav Goyal, a passionate and dedicated individual originally from India. I currently reside in Australia as an international student pursuing a Bachelor's degree in Information Technology.</p>
          <p>With a strong educational background and a commitment to excellence, I am actively seeking opportunities in the IT field to apply and enhance my skills.</p>
        </div>
        
        <div class="education">
          <h2 class="section-title">Education</h2>
          <ul class="education-list">
            <li>
              <strong>Class 10:</strong> 85% (2020)
            </li>
            <li>
              <strong>Class 12:</strong> 80% (2022)
            </li>
            <li>
              <strong>Bachelor's Degree:</strong> Pursuing Bachelor of Information Technology (Expected Graduation: 2025)
            </li>
          </ul>
        </div>
        
        <div class="satisfaction">
          <h2 class="section-title">Get to Know More About Me</h2>
          <p>Do you want to know more about me?</p>
          <button @click="selectYes" class="satisfaction-button">Yes</button>
          <button @click="selectNo" class="satisfaction-button">No</button>
          <p v-if="selectedOption === 'Yes'">Great! Please explore other sections of my profile as well.</p>
          <p v-else-if="selectedOption === 'No'">No worries! Feel free to browse other sections of my profile.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: '',
      }
    },
    methods: {
      selectYes() {
        this.selectedOption = 'Yes';
      },
      selectNo() {
        this.selectedOption = 'No';
      }
    }
  };
  </script>
  
  <style scoped>
  .page-container {
    background-color: #f0f0f0;
    color: #333;
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .title {
    font-size: 2rem;
    color: #333;
  }
  
  .section-title {
    font-size: 1.5rem;
    color: #333;
    margin-top: 20px;
  }
  
  .content {
    margin-bottom: 30px;
  }
  
  .intro-text {
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  .education-list,
  .link-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .education-list li,
  .link-list li {
    margin-bottom: 10px;
  }
  
  .satisfaction {
    margin-top: 20px;
  }
  
  .satisfaction-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .satisfaction-button:hover {
    background-color: #0056b3;
  }
  </style>
  