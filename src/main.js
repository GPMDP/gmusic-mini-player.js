import GMusicMiniPlayerController from './gmusic-mini-player';

const wrap = (GMusic) => {
  GMusic.addNamespace('mini', GMusicMiniPlayerController);
};

if (typeof window !== 'undefined' && window.GMusic) {
  wrap(window.GMusic);
}

module.exports = wrap;
