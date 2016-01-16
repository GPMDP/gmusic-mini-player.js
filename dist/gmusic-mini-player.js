"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    module.exports = {
      CLASS_NAMESPACE: 'gmusic-mini-player'
    };
  }, {}], 2: [function (require, module, exports) {

    // DEV: These constants will be transformed into string constants by browserify
    var BASE_CSS = ".gmusic-mini-player #material-player-left-wrapper .now-playing-actions,.gmusic-mini-player body[controls] #mini-info,.gmusic-mini-player body[ready]:hover #mini-info{opacity:1!important}#embed-container,.gmusic-mini-player #mainContainer,.gmusic-mini-player #mini-info{overflow:hidden!important}.gmusic-mini-player,.gmusic-mini-player body{height:300px!important;width:300px!important}.gmusic-mini-player #player{min-width:280px!important;z-index:9999999!important;height:65px!important;min-height:65px!important;transition:bottom .3s!important;bottom:-100px!important;transition-timing-function:ease-in-out!important;width:280px!important;left:10px!important;right:10px!important;border-bottom-left-radius:8px!important;border-bottom-right-radius:8px!important}.gmusic-mini-player body[controls] #player,.gmusic-mini-player body[ready]:hover #player{bottom:10px!important}.gmusic-mini-player #material-player-left-wrapper .now-playing-info-content,.gmusic-mini-player #material-player-left-wrapper .player-left .image-wrapper,.gmusic-mini-player #material-player-left-wrapper [data-id=now-playing-menu],.gmusic-mini-player #material-player-right-wrapper{display:none!important}.gmusic-mini-player #material-player-left-wrapper{flex:none!important;width:0!important}.gmusic-mini-player #player #material-player-left-wrapper .rating-container paper-icon-button{background:0 0!important;position:absolute!important;top:8px!important}.gmusic-mini-player #player #material-player-left-wrapper .rating-container paper-icon-button:nth-child(1){left:20px!important;display:none!important}.gmusic-mini-player #player #material-player-left-wrapper .rating-container paper-icon-button:nth-child(2){left:210px!important;display:none!important}.gmusic-mini-player #player[radio] #material-player-left-wrapper .rating-container paper-icon-button:nth-child(1),.gmusic-mini-player #player[radio] #material-player-left-wrapper .rating-container paper-icon-button:nth-child(2){display:block!important}.gmusic-mini-player #material-player-left-wrapper .rating-container{width:0!important}.gmusic-mini-player #mini-album{position:fixed!important;top:0!important;left:0!important;display:block!important;width:100%!important;height:100%!important;z-index:9999998!important}.gmusic-mini-player .player-progress-wrapper{left:0!important}.gmusic-mini-player .material-player-middle{margin:0 auto!important}.gmusic-mini-player #player.material .material-player-middle paper-icon-button[data-id=play-pause] iron-icon,.gmusic-mini-player #player.material .material-player-middle sj-icon-button[data-id=play-pause] core-icon{height:50px!important;width:50px!important;top:-2px!important}.gmusic-mini-player paper-icon-button[data-id=play-pause]{text-align:center!important}.gmusic-mini-player [data-id=play-pause]::shadow paper-ripple.circle{height:50px!important;width:50px!important;margin-left:6px!important;margin-top:-2px!important}.gmusic-mini-player [data-id=forward],.gmusic-mini-player [data-id=repeat],.gmusic-mini-player [data-id=rewind],.gmusic-mini-player [data-id=shuffle]{top:-8px!important}.gmusic-mini-player .mini-timespan-c,.gmusic-mini-player .mini-timespan-t{position:absolute!important;top:8px!important;font-size:11px!important;display:block!important}.gmusic-mini-player [data-id=repeat]{left:28px!important}.gmusic-mini-player [data-id=rewind]{left:16px!important}.gmusic-mini-player [data-id=forward]{left:-16px!important}.gmusic-mini-player [data-id=shuffle]{left:-28px!important}.gmusic-mini-player .mini-timespan-c{left:6px!important}.gmusic-mini-player .mini-timespan-t{right:6px!important}.gmusic-mini-player ::shadow #mainContainer{overflow:hidden!important}.gmusic-mini-player #mini-info{position:fixed!important;top:0!important;left:0!important;width:100%!important;height:90px!important;background:-webkit-linear-gradient(top,rgba(45,45,45,.85) 0,rgba(9,9,9,.41) 79%,rgba(0,0,0,0) 100%)!important;display:block!important;z-index:9999999!important;transition:opacity .3s!important;transition-timing-function:ease-in-out!important;opacity:0!important}.gmusic-mini-player #mini-info span{color:#EEE!important;display:block!important;font-size:20px!important;padding:4px 12px!important;cursor:default!important}.gmusic-mini-player #mini-info span:last-child{font-size:16px!important;height:18px!important;overflow:hidden!important}[data-id=show-miniplayer-dp]{color:#9e9e9e!important;position:absolute!important;top:auto!important;bottom:-4px!important;right:-4px!important;margin:0!important}#player paper-icon-button[data-id=show-miniplayer-dp] iron-icon{width:16px!important;height:16px!important}#embed-container{width:0!important}";
    var CONSTANTS = require('../lib/_constants');

    var GMusicMiniPlayerController = (function () {
      _createClass(GMusicMiniPlayerController, [{
        key: "_initCSS",
        value: function _initCSS() {
          var styleElement = document.createElement('style');
          styleElement.innerHTML = BASE_CSS;
          document.body.appendChild(styleElement);
        }
      }, {
        key: "_initMiniPlayerUI",
        value: function _initMiniPlayerUI() {
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
          this.miniAlbumArt.addEventListener('error', function (e) {
            e.target.src = 'https://www.samuelattard.com/img/gpm_placeholder.jpg';
          });
          // DEV: Prevent dragging of the album image
          this.miniAlbumArt.addEventListener('mousedown', function (e) {
            e.preventDefault();
          });

          document.body.appendChild(this.miniNowPlayerInfo);
          document.body.appendChild(this.miniAlbumArt);
        }
      }, {
        key: "_initMiniPlayerTimingUI",
        value: function _initMiniPlayerTimingUI() {
          var _this = this;

          var player = document.getElementById('player');
          var container = document.createElement('div');
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

          container.innerHTML = '<paper-icon-button data-id="show-miniplayer-dp" icon="open-in-new" title="Show mini player" aria-label="Show mini player" role="button" tabindex="0" no-focus=""></paper-icon-button>';
          this.miniButtonElement = container.querySelectorAll('[data-id="show-miniplayer-dp"]')[0];
          this.miniButtonElement.addEventListener('click', function (e) {
            _this.getControls().toggle();
            e.target.blur();
            _this.miniButtonElement.style.display = 'none';
            document.body.removeAttribute('ready');
            setTimeout(function () {
              _this.miniButtonElement.style.display = 'block';
            }, 400);
            e.preventDefault();
            return false;
          });
          document.getElementById('player').appendChild(container);
        }
      }, {
        key: "_initMiniPlayerTimingMonitor",
        value: function _initMiniPlayerTimingMonitor() {
          var _this2 = this;

          this.GPM_API.on('change:playback-time', function (e) {
            _this2.timeSpan_SoFar.innerHTML = e.current ? _this2._timeFormat(e.current) : '0:00';
            _this2.timeSpan_Total.innerHTML = e.total ? _this2._timeFormat(e.total) : '0:00';
          });
        }
      }, {
        key: "_initMiniPlayerRadioMonitor",
        value: function _initMiniPlayerRadioMonitor() {
          var _this3 = this;

          this.GPM_API.on('change:playback', function () {
            var repeatElement = document.querySelectorAll(_this3.SELECTORS.repeat.buttonSelector);
            var player = document.querySelector('#player');
            if (repeatElement && repeatElement[0] && player) {
              if (repeatElement[0].style.display === 'none') {
                if (player.getAttribute('radio') === null) {
                  player.setAttribute('radio', 'on');
                }
              } else if (player.getAttribute('radio') !== null) {
                player.removeAttribute('radio');
              }
            }
          });
        }
      }, {
        key: "_initMiniPlayerNowPlayingMonitor",
        value: function _initMiniPlayerNowPlayingMonitor() {
          var _this4 = this;

          this.GPM_API.on('change:song', function (e) {
            _this4.miniAlbumArt.src = e.art.replace('=s90', '=s300');
            var infoSpans = _this4.miniNowPlayerInfo.getElementsByTagName('span');
            infoSpans[0].innerHTML = e.title;
            infoSpans[1].innerHTML = e.artist + ' - ' + e.album;
          });
        }
      }, {
        key: "_initGlobalEventHandlers",
        value: function _initGlobalEventHandlers() {
          var _this5 = this;

          // DEV: Scroll to change volume in mini player mode
          window.addEventListener('mousewheel', function (e) {
            if (_this5.miniState) {
              if (e.wheelDelta < 0) {
                _this5.GPM_API.volume.decreaseVolume();
              } else {
                _this5.GPM_API.volume.increaseVolume();
              }
            }
          });

          // DEV: Handle abstract resizing of the window
          document.body.addEventListener('mousemove', function () {
            if (_this5.miniState && _this5.miniButtonElement.style.display !== 'none') {
              document.body.setAttribute('ready', 'ready');
            }
          });

          // DEV: When in mini player mode implementees might want to drag the window
          document.addEventListener('mousedown', function (e) {
            if (_this5.miniState && e.clientY <= 210) {
              _this5._fire('dragstart');
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
          });
        }
      }]);

      function GMusicMiniPlayerController() {
        _classCallCheck(this, GMusicMiniPlayerController);

        this.GPM_API = new window.GMusic(window);
        this.SELECTORS = window.GMusic.SELECTORS;

        this._initCSS();
        this._initMiniPlayerUI();
        this._initMiniPlayerNowPlayingMonitor();
        this._initMiniPlayerTimingUI();
        this._initMiniPlayerTimingMonitor();
        this._initMiniPlayerRadioMonitor();

        this.miniState = false;
        this.events = {};

        this._initGlobalEventHandlers();
      }

      _createClass(GMusicMiniPlayerController, [{
        key: "_timeFormat",
        value: function _timeFormat(milli) {
          var totalSeconds = Math.floor(milli / 1000);
          var minutes = Math.floor(totalSeconds / 60);
          var seconds = totalSeconds % 60;
          return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
        }
      }, {
        key: "_hook",
        value: function _hook(what, fn) {
          this.events[what] = this.events[what] || [];
          this.events[what].push(fn);
        }
      }, {
        key: "_fire",
        value: function _fire(what, e) {
          this.events[what] = this.events[what] || [];
          this.events[what].forEach(function (fn) {
            fn(e);
          });
        }
      }, {
        key: "getControls",
        value: function getControls() {
          var _this6 = this;

          return {
            enable: function enable() {
              _this6._enable();
            },
            disable: function disable() {
              _this6._disable();
            },
            toggle: function toggle() {
              if (_this6.miniState) {
                _this6._disable();
              } else {
                _this6._enable();
              }
            },
            enableButton: function enableButton() {
              _this6._enableButton();
            },
            disableButton: function disableButton() {
              _this6._disableButton();
            },
            showControlsWhen: function showControlsWhen(when) {
              _this6._showControlsWhen(when);
            },
            on: function on(what, fn) {
              _this6._hook(what, fn);
            }
          };
        }
      }, {
        key: "_enable",
        value: function _enable() {
          var delay = 0;
          this.miniState = true;
          // DEV: Allow a syncronous callback to handle the enable event and delay by X milliseconds
          this._fire('enable', function (newDelay) {
            delay = newDelay;
          });
          setTimeout(function () {
            document.querySelector('html').classList.add(CONSTANTS.CLASS_NAMESPACE);
          }, delay);
        }
      }, {
        key: "_disable",
        value: function _disable() {
          var delay = 0;
          this.miniState = false;
          // DEV: Allow a syncronous callback to handle the disable event and delay by X milliseconds
          this._fire('disable', function (newDelay) {
            delay = newDelay;
          });
          setTimeout(function () {
            document.querySelector('html').classList.remove(CONSTANTS.CLASS_NAMESPACE);
          }, delay);
        }
      }, {
        key: "_enableButton",
        value: function _enableButton() {
          this.miniButtonElement.style.display = 'block';
        }
      }, {
        key: "_disableButton",
        value: function _disableButton() {
          this.miniButtonElement.style.display = 'none';
        }
      }, {
        key: "_showControlsWhen",
        value: function _showControlsWhen(when) {
          if (when === 'hover') {
            document.body.removeAttribute('controls');
          } else {
            document.body.setAttribute('controls', 'controls');
          }
        }
      }]);

      return GMusicMiniPlayerController;
    })();

    if (!window.GMusic) {
      console.error('The core GMusic library must be included for the GMusic mini player library to work'); // eslint-disable-line
    } else {
        var controller = new GMusicMiniPlayerController();
        // DEV: Hook into the existing GMusic libraries global prototype
        window.GMusic._protoObj.mini = controller.getControls();
      }
  }, { "../lib/_constants": 1 }] }, {}, [2]);
//# sourceMappingURL=gmusic-mini-player.js.map
