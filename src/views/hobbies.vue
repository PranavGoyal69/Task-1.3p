<template>
    <div class="hobbies-page">
      <header class="hobbies-header">
        <h1 class="hobbies-title">My Hobbies</h1>
      </header>
      <section class="hobbies-list">
        <!-- Hobby 1: Playing Games -->
        <div class="hobby">
          <img src="/games.png" alt="Playing Games" class="hobby-image" />
          <h2 class="hobby-title">Playing Games</h2>
          <p class="hobby-description">
            I'm an avid gamer, and I enjoy exploring virtual worlds, solving puzzles, and competing with friends in various video games.
          </p>
        </div>
  
        <!-- Hobby 2: Going Out -->
        <div class="hobby">
          <img src="/going-out.jpg" alt="Going Out" class="hobby-image" />
          <h2 class="hobby-title">Going Out</h2>
          <p class="hobby-description">
            Exploring new places, trying different cuisines, and spending time outdoors is something I love to do during my free time.
          </p>
        </div>
  
        <!-- Hobby 3: Listening to Music -->
        <div class="hobby">
          <img src="/music.jpg" alt="Listening to Music" class="hobby-image" />
          <h2 class="hobby-title">Listening to Music</h2>
          <p class="hobby-description">
            Music is my therapy. I enjoy listening to a wide range of genres and artists, and it helps me relax and unwind.
          </p>
        </div>
  
        <!-- Hobby 4: Playing Guitar -->
        <div class="hobby">
          <img src="/guitar.jpg" alt="Playing Guitar" class="hobby-image" />
          <h2 class="hobby-title">Playing Guitar</h2>
          <p class="hobby-description">
            Playing the guitar is not just a hobby; it's a passion. I find joy in strumming chords and creating melodies.
          </p>
        </div>
      </section>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  
  <style scoped>
  .hobbies-page {
    background-color: #f0f0f0;
    color: #333;
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .hobbies-header {
    text-align: center;
    margin-bottom: 20px;
  }
  .hobby-image {
  max-width: 100%;
  height: 200px;
  object-fit: cover; 
  margin-bottom: 10px;
}
  
  .hobbies-title {
    font-size: 2rem;
    color: #333;
  }
  
  .hobbies-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .hobby {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  
  .hobby-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .hobby-title {
    font-size: 1.5rem;
    color: #333;
  }
  
  .hobby-description {
    line-height: 1.6;
  }
  </style>
  