<template>
  <div class="page-container">
    <!-- Navigation Menu -->
    <nav class="nav-stack">
      <div class="logo">
        <img src="/pranav.jpg" alt="Logo" class="logo-image" />
      </div>
      <div class="nav-links">
        <RouterLink to="/AboutMe">About Me</RouterLink>
        <RouterLink to="/Intro">Intro</RouterLink>
        <RouterLink to="/Work">Work Experience</RouterLink>
        <RouterLink to="/MyProjects">MyProjects</RouterLink>
        <RouterLink to="/Hobbies">Hobbies</RouterLink>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header>
        <h1 class="header-title">Welcome to My Website</h1>
        <p class="header-description">Discover more about me and my work.</p>
      </header>

      <!-- Router View for Dynamic Content -->
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* Styling for the page container */
.page-container {
  display: flex;
  min-height: 100vh; /* Use the full viewport height */
}

/* Styling for the navigation menu */
nav.nav-stack {
  width: 250px; /* Set a fixed width for the navigation menu */
  background-color: #2c3e50; /* Update to your preferred color */
  color: #ecf0f1; /* Update to your preferred text color */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav.nav-stack .logo {
  text-align: center;
  margin-bottom: 2rem;
}

nav.nav-stack img.logo-image {
  max-width: 100%;
  max-height: auto;
  border-radius: 50%; /* Make the logo round */
}

.nav-links {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
}

nav.nav-stack a {
  text-decoration: none;
  color: #ecf0f1;
  padding: 1rem 0;
  transition: background-color 0.3s, color 0.3s;
}

nav.nav-stack a:hover {
  background-color: #34495e; /* Darker background on hover */
  color: #e74c3c; /* Highlighted text color */
}

/* Styling for the main content */
.main-content {
  flex: 1; /* Expand to fill available space */
  padding: 2rem;
  overflow-y: auto; /* Add scrollbars when content overflows */
}

header {
  text-align: center;
}

.header-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333; /* Update to your preferred title color */
}

.header-description {
  font-size: 1.2rem;
  color: #777; /* Update to your preferred description color */
}
</style>
