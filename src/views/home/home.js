export default {
  name: 'Home',

  mounted() {
    const video = document.querySelector('.video-container video');
    const playControls =  {
      play: document.querySelector('.video-container .player-controls .play'),
      pause: document.querySelector('.video-container .player-controls .pause'),
      mute: document.querySelector('.video-container .player-controls .mute')
    };

    playControls.play
      .addEventListener('click', function() {
        this
          .classList.replace('show', 'hide');
        playControls
          .pause.classList.replace('hide', 'show');
        video
          .play();
    });

    playControls.pause
      .addEventListener('click', function() {
        this
          .classList.replace('show', 'hide');
        playControls
          .play.classList.replace('hide', 'show');
        video
          .pause();
      });
    
    playControls.mute
      .addEventListener('click', () => {
        video.muted = !video.muted;
    });
  },
};