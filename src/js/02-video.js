// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const LS_CURRENT_TIME_KEY = 'videoplayer-current-time';

// const onPlay = function ({ seconds }) {
//   if (seconds !== undefined) {
//     localStorage.setItem(LS_CURRENT_TIME_KEY, seconds);
//   }
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// const currentTime = localStorage.getItem(LS_CURRENT_TIME_KEY);
// if (currentTime !== null) {
//   player.setCurrentTime(+currentTime);
// }

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
if (!iframe) {
  console.error('Iframe element not found.');
} else {
  const player = new Player(iframe);
  const LS_CURRENT_TIME_KEY = 'videoplayer-current-time';

  const onPlay = function ({ seconds }) {
    if (seconds !== undefined) {
      console.log('Storing seconds:', seconds);
      localStorage.setItem(LS_CURRENT_TIME_KEY, seconds);
    } else {
      console.error('Seconds value is undefined.');
    }
  };

  player.on('timeupdate', throttle(onPlay, 1000));

  const currentTime = localStorage.getItem(LS_CURRENT_TIME_KEY);
  if (currentTime !== null) {
    console.log('Setting current time to:', currentTime);
    player.setCurrentTime(+currentTime).catch(function (error) {
      console.error('Error setting current time:', error);
    });
  } else {
    console.log('No current time found in local storage.');
  }

  // Enhanced error handling for player messages
  player.on('error', function (error) {
    console.error('Player error:', error);
  });

  // Debugging: Log player state
  player.getVideoTitle().then(function(title) {
    console.log('Video title:', title);
  }).catch(function(error) {
    console.error('Error getting video title:', error);
  });
}

// Additional debugging for player events
window.addEventListener('message', function(event) {
  console.log('Message event:', event);
});