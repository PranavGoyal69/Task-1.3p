<template>
    <div class="projects-page">
      <header class="projects-header">
        <h1 class="projects-title">My Projects</h1>
      </header>
      <section class="projects-list">
        <!-- Project 1 -->
        <div class="project">
          <h2 class="project-title">Exploring Space Game</h2>
          <p class="project-description">
            Embark on an interstellar adventure with my Exploring Space Game. Explore distant galaxies, gather resources, and build your space colony.
          </p>
        </div>
  
        <!-- Project 2 -->
        <div class="project">
          <h2 class="project-title">To-Do App</h2>
          <p class="project-description">
            Stay organized with my To-Do App. Create tasks, set deadlines, and track your progress. Never miss a beat with this productivity tool.
          </p>
        </div>
      </section>
  
      <section class="favorite-project">
        <h2 class="favorite-project-title">Choose Your Favorite Project:</h2>
        <select v-model="selectedProject" class="project-selector">
          <option value="">Select a Project</option>
          <option value="exploring-space">Exploring Space Game</option>
          <option value="to-do-app">To-Do App</option>
        </select>
        <button @click="submitFavoriteProject" class="submit-button">Submit</button>
        <p v-if="favoriteProjectMessage" class="favorite-project-message">{{ favoriteProjectMessage }}</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedProject: '',
        favoriteProjectMessage: '',
      };
    },
    methods: {
      submitFavoriteProject() {
        if (this.selectedProject) {
          // Handle the submission of the user's favorite project here
          this.favoriteProjectMessage = `Thank you for choosing the ${this.selectedProject === 'exploring-space' ? 'Exploring Space Game' : 'To-Do App'} as your favorite project!`;
        } else {
          this.favoriteProjectMessage = ''; 
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .projects-page {
    background-color: #f0f0f0;
    color: #333;
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .projects-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .projects-title {
    font-size: 2rem;
    color: #333;
  }
  
  .projects-list {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .project {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: calc(50% - 10px);
    box-sizing: border-box;
    transition: transform 0.3s ease;
  }
  
  .project:hover {
    transform: scale(1.03);
  }
  
  .project-title {
    font-size: 1.5rem;
    color: #333;
  }
  
  .project-description {
    margin-top: 10px;
    line-height: 1.6;
  }
  
  .favorite-project {
    margin-top: 20px;
    text-align: center;
  }
  
  .favorite-project-title {
    font-size: 1.2rem;
    color: #333;
  }
  
  .project-selector {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 10px;
    outline: none;
  }
  
  .submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    outline: none;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .favorite-project-message {
    font-size: 1rem;
    color: #007bff;
    margin-top: 10px;
  }
  </style>
  