<template>
  <div id="projects" class="custom-container">
    <div class="custom-card align-items-center">
      <div class="video-holder">
        <video class="custom-video" src="https://www.dropbox.com/s/50z55a8d9elqsgx/rabbitholereality.webm?dl=1" autoplay loop></video>
      </div>
    <div class="text-holder text-center">
        <h3 class="main-text">Project Name</h3>
        <p class="sub-text">Some sort of text describing the projects here</p>
      </div>
    </div>
    <div class="custom-card align-items-center">
      <div class="text-holder text-center">
        <h3 class="main-text">Project Name</h3>
        <p class="sub-text">Some sort of text describing the projects here</p>
      </div>
    <div class="video-holder">
        <video class="custom-video" src="https://www.dropbox.com/s/jxtmjfxf2a2ifqb/convrrt-app.mp4?dl=1" autoplay loop></video>
      </div>
    </div>
    <div class="custom-card align-items-center">
      <div class="video-holder">
        <video class="custom-video" src="https://www.dropbox.com/s/omkockd73cfyufe/landingpagesrocks.webm?dl=1" autoplay loop></video>
      </div>
    <div class="text-holder text-center">
        <h3 class="main-text">Project Name</h3>
        <p class="sub-text">Some sort of text describing the projects here</p>
      </div>
    </div>
</div>
</template>
<style>
  #projects{
    background-color: #000a12;
  }
  .card{
    max-width: 50%;
  }
  .custom-container {
    display: flex;
    flex-direction: column;
  }
  .custom-card {
    display: flex;
    justify-content: space-between;
  }
  .custom-video{
    max-width: 100%;
  }
  .text-holder{
    width: 50%;
  }
  .video-holder{
    max-width: 50%;
  }
  /* .video-holder {
    max-width: 50%;
  } */
  </style>
