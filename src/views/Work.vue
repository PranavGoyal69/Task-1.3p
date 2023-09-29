<template>
  <div class="page-container">
    <header class="header">
      <h1 class="title">Work Experience</h1>
    </header>

    <section class="content">
      <div class="job">
        <h2 class="job-title">Store Assistant at IGA Store</h2>
        <p class="job-date">June 2023 - Current</p>
        <p class="job-description">
          As a Store Assistant at IGA, I gained valuable experience in customer service, inventory management, and maintaining a clean and organized store environment. I assisted customers with their purchases, restocked shelves, and ensured the store's overall efficiency.
        </p>
      </div>
      
      <div class="job">
        <h2 class="job-title">Teacher Assistant at D.A.V</h2>
        <p class="job-date">July 2021 - April 2022</p>
        <p class="job-description">
          During my time as a Teacher Assistant, I provided support to teachers in various classroom activities. I helped create lesson plans, graded assignments, and provided one-on-one assistance to students who needed extra help. This experience enhanced my communication and teamwork skills.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <h2 class="section-title">Contact Me</h2>
        <form @submit="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>

          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>

          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.formData);
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

.content {
  margin-bottom: 30px;
}

.job {
  margin-bottom: 20px;
}

.job-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 5px;
}

.job-date {
  color: #666;
  margin-bottom: 10px;
}

.job-description {
  line-height: 1.6;
}

/* Contact Form Styles */
.contact-form {
  margin-top: 30px;
}

.section-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
