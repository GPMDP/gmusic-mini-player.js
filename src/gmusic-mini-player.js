import GMusic, { GMusicNamespace } from 'gmusic.js';

const fs = require('fs');

// DEV: These constants will be transformed into string constants by browserify
const BASE_CSS = fs.readFileSync(__dirname + '/../build/rework.css', 'utf8'); // eslint-disable-line
const CONSTANTS = require('../lib/_constants');

export default class GMusicMiniPlayerController extends GMusicNamespace {
  constructor(...args) {
    super(...args);

    this.GPM_API = new GMusic(window);
    this.SELECTORS = GMusic.SELECTORS;

    this._initCSS();
    this._initMiniPlayerUI();
    this._initMiniPlayerNowPlayingMonitor();
    this._initMiniPlayerTimingUI();
    this._initMiniPlayerTimingMonitor();
    this._initMiniPlayerRadioMonitor();

    this.miniState = false;
    this.scrollVolume = true;

    this._initGlobalEventHandlers();

    this.addMethods([
      'enable',
      'disable',
      'toggle',
      'enableButton',
      'disableButton',
      'showControlsWhen',
      'setScrollVolume',
      'getScrollVolume',
    ]);
  }

  _initCSS() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = BASE_CSS;
    document.body.appendChild(styleElement);
  }

  _initMiniPlayerUI() {
    this.miniNowPlayerInfo = document.createElement('div');
    this.miniAlbumArt = document.createElement('img');

    // DEV: Configure mini player elements
    this.miniNowPlayerInfo.id = 'mini-info';
    this.miniNowPlayerInfo.setAttribute('style', 'display: none');
    this.miniNowPlayerInfo.innerHTML = '<span></span><span></span>';

    this.miniAlbumArt.id = 'mini-album';
    // DEV: Placeholder image
    this.miniAlbumArt.src = 'https://www.samuelattard.com/img/gpm_placeholder.jpg';
    this.miniAlbumArt.setAttribute('style', 'display: none');
    // DEV: If the album art load ever fails, use the placeholder
    this.miniAlbumArt.addEventListener('error', (e) => {
      e.target.src = 'https://www.samuelattard.com/img/gpm_placeholder.jpg'; // eslint-disable-line
    });
    // DEV: Prevent dragging of the album image
    this.miniAlbumArt.addEventListener('mousedown', (e) => {
      e.preventDefault();
    });

    document.body.appendChild(this.miniNowPlayerInfo);
    document.body.appendChild(this.miniAlbumArt);
  }

  _initMiniPlayerTimingUI() {
    const player = document.getElementById('player');
    const container = document.createElement('div');
    this.timeSpan_SoFar = document.createElement('span');
    this.timeSpan_Total = document.createElement('span');

    this.timeSpan_SoFar.classList.add('mini-timespan-c');
    this.timeSpan_SoFar.setAttribute('style', 'display: none');
    this.timeSpan_SoFar.innerHTML = '0:00';
    player.appendChild(this.timeSpan_SoFar);

    this.timeSpan_Total.classList.add('mini-timespan-t');
    this.timeSpan_Total.setAttribute('style', 'display: none');
    this.timeSpan_Total.innerHTML = '0:00';
    player.appendChild(this.timeSpan_Total);

    container.innerHTML = `
      <paper-icon-button
        data-id="show-miniplayer-dp"
        icon="open-in-new"
        title="Show mini player"
        aria-label="Show mini player"
        role="button"
        tabindex="0"
        no-focus="">
      </paper-icon-button>`;
    this.miniButtonElement = container.querySelectorAll('[data-id="show-miniplayer-dp"]')[0];
    this.miniButtonElement.addEventListener('click', (e) => {
      this.toggle();
      e.target.blur();
      this.miniButtonElement.style.display = 'none';
      document.body.removeAttribute('ready');
      setTimeout(() => {
        this.miniButtonElement.style.display = 'block';
      }, 400);
      e.preventDefault();
      return false;
    });
    document.getElementById('player').appendChild(container);
  }

  _initMiniPlayerTimingMonitor() {
    this.GPM_API.on('change:playback-time', (e) => {
      this.timeSpan_SoFar.innerHTML = (e.current ? this._timeFormat(e.current) : '0:00');
      this.timeSpan_Total.innerHTML = (e.total ? this._timeFormat(e.total) : '0:00');
    });
  }

  _initMiniPlayerRadioMonitor() {
    this.GPM_API.on('change:playback', this._radioMonitor.bind(this));
    this.GPM_API.on('change:playback-time', this._radioMonitor.bind(this));
    this.GPM_API.on('change:track', this._radioMonitor.bind(this));
  }

  _radioMonitor() {
    const repeatElement = document.querySelectorAll(this.SELECTORS.controlsSelectors.repeat);
    const player = document.querySelector('#player');
    if (repeatElement && repeatElement[0] && player) {
      if (repeatElement[0].style.display === 'none') {
        if (player.getAttribute('radio') === null) {
          player.setAttribute('radio', 'on');
        }
      } else if (player.getAttribute('radio') !== null) {
        player.removeAttribute('radio');
      }
    }
  }

  _initMiniPlayerNowPlayingMonitor() {
    this.GPM_API.on('change:track', (e) => {
      this.miniAlbumArt.src = e.albumArt.replace('=s90', '=s1500');
      const infoSpans = this.miniNowPlayerInfo.getElementsByTagName('span');
      infoSpans[0].innerHTML = e.title;
      infoSpans[1].innerHTML = `${e.artist} - ${e.album}`;
    });
  }

  _initGlobalEventHandlers() {
    // DEV: Scroll to change volume in mini player mode
    window.addEventListener('mousewheel', (e) => {
      if (!this.scrollVolume) return;
      if (this.miniState) {
        if (e.wheelDelta < 0) {
          this.GPM_API.volume.decreaseVolume();
        } else {
          this.GPM_API.volume.increaseVolume();
        }
      }
    });

    // DEV: Handle abstract resizing of the window
    document.body.addEventListener('mousemove', () => {
      if (this.miniState && this.miniButtonElement.style.display !== 'none') {
        document.body.setAttribute('ready', 'ready');
      }
    });

    // DEV: When in mini player mode implementees might want to drag the window
    document.addEventListener('mousedown', (e) => {
      if (this.miniState && e.clientY <= 210) {
        this._fire('dragstart');
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      return true;
    });
  }

  _timeFormat(milli) {
    const totalSeconds = Math.floor(milli / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${(seconds < 10 ? `0${seconds}` : seconds)}`;
  }

  enable() {
    let delay = 0;
    this.miniState = true;
    // close menu
    const closeBtn = document.getElementById('left-nav-close-button');
    if (closeBtn !== null) {
      closeBtn.click();
    }
    // DEV: Allow a syncronous callback to handle the enable event and delay by X milliseconds
    this.emit('mini:enable', (newDelay) => {
      delay = newDelay;
    });
    setTimeout(() => {
      document.querySelector('html').classList.add(CONSTANTS.CLASS_NAMESPACE);
    }, delay);
  }

  disable() {
    let delay = 0;
    this.miniState = false;
    // DEV: Allow a syncronous callback to handle the disable event and delay by X milliseconds
    this.emit('mini:disable', (newDelay) => {
      delay = newDelay;
    });
    setTimeout(() => {
      document.querySelector('html').classList.remove(CONSTANTS.CLASS_NAMESPACE);
    }, delay);
  }

  toggle() {
    if (this.miniState) {
      this.disable();
    } else {
      this.enable();
    }
  }

  enableButton() {
    this.miniButtonElement.style.display = 'block';
  }

  disableButton() {
    this.miniButtonElement.style.display = 'none';
  }

  showControlsWhen(when) {
    if (when === 'hover') {
      document.body.removeAttribute('controls');
    } else {
      document.body.setAttribute('controls', 'controls');
    }
  }

  setScrollVolume(state) {
    this.scrollVolume = state;
  }

  getScrollVolume() {
    return this.scrollVolume;
  }
}
