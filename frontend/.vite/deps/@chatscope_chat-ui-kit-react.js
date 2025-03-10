import {
  require_prop_types
} from "./chunk-X3MDYGI3.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames46() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames46.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames46.default = classNames46;
        module.exports = classNames46;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames46;
        });
      } else {
        window.classNames = classNames46;
      }
    })();
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faArrowUp.js
var require_faArrowUp = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faArrowUp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "arrow-up";
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = "f062";
    var svgPathData = "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faArrowUp = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faArrowRight.js
var require_faArrowRight = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faArrowRight.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "arrow-right";
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = "f061";
    var svgPathData = "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faArrowRight = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faArrowDown.js
var require_faArrowDown = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faArrowDown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "arrow-down";
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = "f063";
    var svgPathData = "M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faArrowDown = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faArrowLeft.js
var require_faArrowLeft = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faArrowLeft.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "arrow-left";
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = "f060";
    var svgPathData = "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faArrowLeft = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js
var require_faInfoCircle = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faInfoCircle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "info-circle";
    var width = 512;
    var height = 512;
    var ligatures = [];
    var unicode = "f05a";
    var svgPathData = "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faInfoCircle = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faPhoneAlt.js
var require_faPhoneAlt = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faPhoneAlt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "phone-alt";
    var width = 512;
    var height = 512;
    var ligatures = [];
    var unicode = "f879";
    var svgPathData = "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faPhoneAlt = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faVideo.js
var require_faVideo = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faVideo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "video";
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = "f03d";
    var svgPathData = "M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faVideo = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faStar.js
var require_faStar = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faStar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "star";
    var width = 576;
    var height = 512;
    var ligatures = [];
    var unicode = "f005";
    var svgPathData = "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faStar = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faUserPlus.js
var require_faUserPlus = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faUserPlus.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "user-plus";
    var width = 640;
    var height = 512;
    var ligatures = [];
    var unicode = "f234";
    var svgPathData = "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faUserPlus = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faEllipsisV.js
var require_faEllipsisV = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faEllipsisV.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "ellipsis-v";
    var width = 192;
    var height = 512;
    var ligatures = [];
    var unicode = "f142";
    var svgPathData = "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faEllipsisV = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js
var require_faEllipsisH = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "ellipsis-h";
    var width = 512;
    var height = 512;
    var ligatures = [];
    var unicode = "f141";
    var svgPathData = "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faEllipsisH = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faPaperPlane.js
var require_faPaperPlane = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faPaperPlane.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "paper-plane";
    var width = 512;
    var height = 512;
    var ligatures = [];
    var unicode = "f1d8";
    var svgPathData = "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faPaperPlane = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faPaperclip.js
var require_faPaperclip = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faPaperclip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "paperclip";
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = "f0c6";
    var svgPathData = "M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faPaperclip = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faChevronLeft.js
var require_faChevronLeft = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faChevronLeft.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "chevron-left";
    var width = 320;
    var height = 512;
    var ligatures = [];
    var unicode = "f053";
    var svgPathData = "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faChevronLeft = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@fortawesome/free-solid-svg-icons/faChevronDown.js
var require_faChevronDown = __commonJS({
  "node_modules/@fortawesome/free-solid-svg-icons/faChevronDown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var prefix2 = "fas";
    var iconName = "chevron-down";
    var width = 448;
    var height = 512;
    var ligatures = [];
    var unicode = "f078";
    var svgPathData = "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z";
    exports.definition = {
      prefix: prefix2,
      iconName,
      icon: [
        width,
        height,
        ligatures,
        unicode,
        svgPathData
      ]
    };
    exports.faChevronDown = exports.definition;
    exports.prefix = prefix2;
    exports.iconName = iconName;
    exports.width = width;
    exports.height = height;
    exports.ligatures = ligatures;
    exports.unicode = unicode;
    exports.svgPathData = svgPathData;
  }
});

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Avatar/Avatar.js
var import_react2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/settings.js
var prefix = "cs";

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Avatar/Avatar.js
var import_classnames2 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Status/Status.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_classnames = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/enums.js
var StatusEnum = ["available", "unavailable", "away", "dnd", "invisible", "eager"];
var SizeEnum = ["xs", "sm", "md", "lg", "fluid"];
var MessageTypeEnum = ["html", "text", "image", "custom"];
var enums_default = {
  SizeEnum,
  StatusEnum,
  MessageTypeEnum
};

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Status/Status.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var _excluded = ["status", "size", "className", "name", "selected", "children"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Status = function Status2(_ref2) {
  var status = _ref2.status, _ref$size = _ref2.size, size = _ref$size === void 0 ? "md" : _ref$size, className = _ref2.className, name = _ref2.name, selected = _ref2.selected, children = _ref2.children, rest = _objectWithoutProperties(_ref2, _excluded);
  var cName2 = "".concat(prefix, "-status");
  var bullet = import_react.default.createElement("div", {
    className: "".concat(cName2, "__bullet")
  });
  var named = name || children;
  return import_react.default.createElement("div", _extends({}, rest, {
    "aria-selected": selected === true ? "" : null,
    className: (0, import_classnames.default)(cName2, "".concat(cName2, "--").concat(size), "".concat(cName2, "--").concat(status), _defineProperty({}, "".concat(cName2, "--selected"), selected), _defineProperty({}, "".concat(cName2, "--named"), named), className)
  }), bullet, named && import_react.default.createElement("div", {
    className: "".concat(cName2, "__name")
  }, name ? name : children));
};
true ? Status.propTypes = {
  /** Primary content */
  children: import_prop_types.default.node,
  /** Status. */
  status: import_prop_types.default.oneOf(StatusEnum).isRequired,
  /** Size. */
  size: import_prop_types.default.oneOf(SizeEnum),
  /** Name */
  name: import_prop_types.default.node,
  /** Selected */
  selected: import_prop_types.default.bool,
  /** Additional classes. */
  className: import_prop_types.default.string
} : void 0;
var Status_default = Status;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Avatar/Avatar.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
var _excluded2 = ["name", "src", "size", "status", "className", "active", "children"];
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof2(i) ? i : String(i);
}
function _toPrimitive2(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function AvatarInner(_ref2, ref) {
  var _ref$name = _ref2.name, name = _ref$name === void 0 ? "" : _ref$name, _ref$src = _ref2.src, src = _ref$src === void 0 ? "" : _ref$src, _ref$size = _ref2.size, size = _ref$size === void 0 ? "md" : _ref$size, status = _ref2.status, className = _ref2.className, _ref$active = _ref2.active, active2 = _ref$active === void 0 ? false : _ref$active, children = _ref2.children, rest = _objectWithoutProperties2(_ref2, _excluded2);
  var cName2 = "".concat(prefix, "-avatar");
  var sizeClass = typeof size !== "undefined" ? " ".concat(cName2, "--").concat(size) : "";
  var avatarRef = (0, import_react2.useRef)();
  (0, import_react2.useImperativeHandle)(ref, function() {
    return {
      focus: function focus() {
        return avatarRef.current.focus();
      }
    };
  });
  return import_react2.default.createElement("div", _extends2({
    ref: avatarRef
  }, rest, {
    className: (0, import_classnames2.default)("".concat(cName2).concat(sizeClass), _defineProperty2({}, "".concat(cName2, "--active"), active2), className)
  }), children ? children : import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement("img", {
    src,
    alt: name
  }), typeof status === "string" && import_react2.default.createElement(Status, {
    status,
    size
  }), " "));
}
var Avatar = (0, import_react2.forwardRef)(AvatarInner);
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  /** Primary content */
  children: import_prop_types2.default.node,
  /**
   * User name/nickname/full name for displaying initials and image alt description
   */
  name: import_prop_types2.default.string,
  /** Avatar image source */
  src: import_prop_types2.default.string,
  /** Size */
  size: import_prop_types2.default.oneOf(SizeEnum),
  /** Status. */
  status: import_prop_types2.default.oneOf(StatusEnum),
  /** Active */
  active: import_prop_types2.default.bool,
  /** Additional classes. */
  className: import_prop_types2.default.string
};
true ? AvatarInner.propTypes = Avatar.propTypes : void 0;
var Avatar_default = Avatar;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Avatar/index.js
var Avatar_default2 = Avatar_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/AvatarGroup/AvatarGroup.js
var import_react4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/utils.js
var import_react3 = __toESM(require_react());
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == _typeof3(i) ? i : String(i);
}
function _toPrimitive3(t, r) {
  if ("object" != _typeof3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
var noop = function noop2() {
};
var isChildrenNil = function isChildrenNil2(children) {
  return children === null || children === void 0 || Array.isArray(children) && children.length === 0;
};
var getChildren = function getChildren2(children, types) {
  var ret = [];
  var strTypes = types.map(function(t) {
    return t.displayName || t.name;
  });
  import_react3.default.Children.toArray(children).forEach(function(item) {
    var idx = types.indexOf(item.type);
    if (idx !== -1) {
      ret[idx] = item;
    } else {
      var _item$props$as, _item$props, _item$props2;
      var is = (_item$props$as = item === null || item === void 0 ? void 0 : (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.as) !== null && _item$props$as !== void 0 ? _item$props$as : item === null || item === void 0 ? void 0 : (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.is;
      var typeofIs = _typeof3(is);
      if (typeofIs === "function") {
        var fIdx = types.indexOf(is);
        if (fIdx !== -1) {
          ret[fIdx] = import_react3.default.cloneElement(item, _objectSpread(_objectSpread({}, item.props), {}, {
            as: null
          }));
        }
      } else if (typeofIs === "object") {
        var typeName = is.name || is.displayName;
        var tIdx = strTypes.indexOf(typeName);
        if (tIdx !== -1) {
          ret[tIdx] = import_react3.default.cloneElement(item, _objectSpread(_objectSpread({}, item.props), {}, {
            as: null
          }));
        }
      } else if (typeofIs === "string") {
        var sIdx = strTypes.indexOf(is);
        if (sIdx !== -1) {
          ret[sIdx] = item;
        }
      }
    }
  });
  return ret;
};
var getComponentName = function getComponentName2(component) {
  if (typeof component === "string") {
    return component;
  }
  if ("type" in component) {
    var componentType = _typeof3(component.type);
    if (componentType === "function" || componentType === "object") {
      if ("displayName" in component.type) {
        return component.type.displayName;
      }
      if ("name" in component.type) {
        return component.type.name;
      }
    } else if (componentType === "string") {
      return component.type;
    }
    return "undefined";
  }
  return "undefined";
};
var allowedChildren = function allowedChildren2(allowedTypes) {
  return function(props, propName, componentName) {
    var allowedTypesAsStrings = allowedTypes.map(function(t) {
      return t.name || t.displayName;
    });
    var forbidden = import_react3.default.Children.toArray(props[propName]).find(function(item) {
      if (typeof item === "string" && item.trim().length === 0) {
        return false;
      }
      if (allowedTypes.indexOf(item.type) === -1) {
        var _item$props3, _item$props4;
        var is = (item === null || item === void 0 ? void 0 : (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.as) || (item === null || item === void 0 ? void 0 : (_item$props4 = item.props) === null || _item$props4 === void 0 ? void 0 : _item$props4.is);
        var typeofIs = _typeof3(is);
        if (typeofIs === "function") {
          return allowedTypes.indexOf(is) === -1;
        } else if (typeofIs === "object") {
          var typeName2 = is.name || is.displayName;
          return allowedTypesAsStrings.indexOf(typeName2) === -1;
        } else if (typeofIs === "string") {
          return allowedTypesAsStrings.indexOf(is) === -1;
        } else {
          return true;
        }
      }
      return void 0;
    });
    if (typeof forbidden !== "undefined") {
      var typeName = getComponentName(forbidden);
      var allowedNames = allowedTypes.map(function(t) {
        return t.name || t.displayName;
      }).join(", ");
      var errMessage = '"'.concat(typeName, '" is not a valid child for ').concat(componentName, ". Allowed types: ").concat(allowedNames);
      return new Error(errMessage);
    }
  };
};

// node_modules/@chatscope/chat-ui-kit-react/dist/es/AvatarGroup/AvatarGroup.js
var import_classnames3 = __toESM(require_classnames());
var _excluded3 = ["children", "size", "className", "max", "activeIndex", "hoverToFront"];
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var AvatarGroup = function AvatarGroup2(_ref2) {
  var children = _ref2.children, _ref$size = _ref2.size, size = _ref$size === void 0 ? "md" : _ref$size, className = _ref2.className, max = _ref2.max, activeIndex = _ref2.activeIndex, hoverToFront = _ref2.hoverToFront, rest = _objectWithoutProperties3(_ref2, _excluded3);
  var cName2 = "".concat(prefix, "-avatar-group");
  var avatars = typeof max === "number" && import_react4.default.Children.count(children) > max ? import_react4.default.Children.toArray(children).reverse().slice(0, max) : import_react4.default.Children.toArray(children).reverse();
  var reversedActiveIndex = typeof activeIndex === "number" ? avatars.length - activeIndex - 1 : void 0;
  return import_react4.default.createElement("div", _extends3({}, rest, {
    className: (0, import_classnames3.default)(cName2, "".concat(cName2, "--").concat(size), className)
  }), avatars.map(function(a, i) {
    var newProps = typeof reversedActiveIndex === "number" ? {
      active: reversedActiveIndex === i
    } : {};
    if (hoverToFront === true) {
      newProps.className = (0, import_classnames3.default)("".concat(prefix, "-avatar--active-on-hover"), a.props.className);
    }
    return import_react4.default.cloneElement(a, newProps);
  }));
};
AvatarGroup.displayName = "AvatarGroup";
true ? AvatarGroup.propTypes = {
  /**
   * Primary content.
   * Allowed node:
   *
   * * &lt;Avatar /&gt;
   */
  children: allowedChildren([Avatar_default2]),
  /** Additional classes. */
  className: import_prop_types3.default.string,
  /** Maximum stacked children */
  max: import_prop_types3.default.number,
  /** Size */
  size: import_prop_types3.default.oneOf(["xs", "sm", "md", "lg", "fluid"]),
  /** Active index.
   * Active element has higher z-index independent of its order.
   */
  activeIndex: import_prop_types3.default.number,
  /** Bring to front on hover */
  hoverToFront: import_prop_types3.default.bool
} : void 0;
var AvatarGroup_default = AvatarGroup;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/AvatarGroup/index.js
var AvatarGroup_default2 = AvatarGroup_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ChatContainer/ChatContainer.js
var import_react40 = __toESM(require_react());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/ConversationHeader.js
var import_react19 = __toESM(require_react());
var import_classnames17 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/ConversationHeaderBack.js
var import_react16 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
var import_classnames14 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/Button.js
var import_react5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_classnames4 = __toESM(require_classnames());
var _excluded4 = ["children", "className", "icon", "border", "labelPosition"];
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Button = function Button2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$icon = _ref2.icon, icon2 = _ref$icon === void 0 ? void 0 : _ref$icon, _ref$border = _ref2.border, border = _ref$border === void 0 ? false : _ref$border, _ref$labelPosition = _ref2.labelPosition, labelPosition = _ref$labelPosition === void 0 ? void 0 : _ref$labelPosition, rest = _objectWithoutProperties4(_ref2, _excluded4);
  var cName2 = "".concat(prefix, "-button");
  var lPos = typeof labelPosition !== "undefined" ? labelPosition : "right";
  var labelPositionClassName = import_react5.default.Children.count(children) > 0 ? "".concat(cName2, "--").concat(lPos) : "";
  var borderClassName = border === true ? "".concat(cName2, "--border") : "";
  return import_react5.default.createElement("button", _extends4({}, rest, {
    className: (0, import_classnames4.default)(cName2, labelPositionClassName, borderClassName, className)
  }), lPos === "left" && children, icon2, lPos === "right" && children);
};
true ? Button.propTypes = {
  /** Primary content */
  children: import_prop_types4.default.node,
  /** Additional classes. */
  className: import_prop_types4.default.string,
  icon: import_prop_types4.default.node,
  labelPosition: import_prop_types4.default.oneOf(["left", "right"]),
  border: import_prop_types4.default.bool
} : void 0;
var Button_default = Button;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/ArrowButton.js
var import_react7 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_classnames5 = __toESM(require_classnames());

// node_modules/@fortawesome/fontawesome-svg-core/index.es.js
function _typeof4(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof4 = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof4 = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof4(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    });
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var noop3 = function noop4() {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop3,
  measure: noop3
};
try {
  if (typeof window !== "undefined") _WINDOW = window;
  if (typeof document !== "undefined") _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined") _PERFORMANCE = performance;
} catch (e) {
}
var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === void 0 ? "" : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var DEFAULT_FAMILY_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var PRODUCTION = function() {
  try {
    return false;
  } catch (e) {
    return false;
  }
}();
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var DUOTONE_CLASSES = {
  GROUP: "group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var RESERVED_CLASSES = ["xs", "sm", "lg", "fw", "ul", "li", "border", "pull-left", "pull-right", "spin", "pulse", "rotate-90", "rotate-180", "rotate-270", "flip-horizontal", "flip-vertical", "flip-both", "stack", "stack-1x", "stack-2x", "inverse", "layers", "layers-text", "layers-counter", DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function(n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function(n) {
  return "w-".concat(n);
}));
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "true") return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  attrs = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach(function(_ref2) {
    var _ref22 = _slicedToArray(_ref2, 2), attr = _ref22[0], key = _ref22[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var attrs;
var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
var _config = _objectSpread2({}, _default, initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = _objectSpread2({}, _config);
WINDOW.FontAwesomeConfig = config;
var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function listener2() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener2);
  loaded = 1;
  functions.map(function(fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
var PENDING = "pending";
var SETTLED = "settled";
var FULFILLED = "fulfilled";
var REJECTED = "rejected";
var NOOP = function NOOP2() {
};
var isNode = typeof global !== "undefined" && typeof global.process !== "undefined" && typeof global.process.emit === "function";
var asyncSetTimer = typeof setImmediate === "undefined" ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;
function asyncFlush() {
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  }
  asyncQueue = [];
  asyncTimer = false;
}
function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);
  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}
function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }
  function rejectPromise(reason) {
    reject(promise, reason);
  }
  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}
function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;
  if (typeof callback === "function") {
    settled = FULFILLED;
    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }
  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }
    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}
function handleThenable(promise, value) {
  var resolved;
  try {
    if (promise === value) {
      throw new TypeError("A promises callback cannot return that same promise.");
    }
    if (value && (typeof value === "function" || _typeof4(value) === "object")) {
      var then2 = value.then;
      if (typeof then2 === "function") {
        then2.call(value, function(val) {
          if (!resolved) {
            resolved = true;
            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function(reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }
    return true;
  }
  return false;
}
function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}
function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}
function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}
function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}
function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}
function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);
  if (!promise._handled && isNode) {
    global.process.emit("unhandledRejection", promise._data, promise);
  }
}
function notifyRejectionHandled(promise) {
  global.process.emit("rejectionHandled", promise);
}
function P(resolver) {
  if (typeof resolver !== "function") {
    throw new TypeError("Promise resolver " + resolver + " is not a function");
  }
  if (this instanceof P === false) {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }
  this._then = [];
  invokeResolver(resolver, this);
}
P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: void 0,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };
    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;
      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }
    if (this._state === FULFILLED || this._state === REJECTED) {
      asyncCall(invokeCallback, subscriber);
    } else {
      this._then.push(subscriber);
    }
    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};
P.all = function(promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError("You must pass an array to Promise.all().");
  }
  return new P(function(resolve2, reject2) {
    var results = [];
    var remaining = 0;
    function resolver(index) {
      remaining++;
      return function(value) {
        results[index] = value;
        if (!--remaining) {
          resolve2(results);
        }
      };
    }
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];
      if (promise && typeof promise.then === "function") {
        promise.then(resolver(i), reject2);
      } else {
        results[i] = promise;
      }
    }
    if (!remaining) {
      resolve2(results);
    }
  });
};
P.race = function(promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError("You must pass an array to Promise.race().");
  }
  return new P(function(resolve2, reject2) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];
      if (promise && typeof promise.then === "function") {
        promise.then(resolve2, reject2);
      } else {
        resolve2(promise);
      }
    }
  });
};
P.resolve = function(value) {
  if (value && _typeof4(value) === "object" && value.constructor === P) {
    return value;
  }
  return new P(function(resolve2) {
    resolve2(value);
  });
};
P.reject = function(reason) {
  return new P(function(resolve2, reject2) {
    reject2(reason);
  });
};
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  var size = 12;
  var id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function(acc, attributeName) {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce(function(acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName], ";");
  }, "");
}
function transformIsMeaningful(transform2) {
  return transform2.size !== meaninglessTransform.size || transform2.x !== meaninglessTransform.x || transform2.y !== meaninglessTransform.y || transform2.rotate !== meaninglessTransform.rotate || transform2.flipX || transform2.flipY;
}
function transformForSvg(_ref2) {
  var transform2 = _ref2.transform, containerWidth = _ref2.containerWidth, iconWidth = _ref2.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform2.x * 32, ", ").concat(transform2.y * 32, ") ");
  var innerScale = "scale(".concat(transform2.size / 16 * (transform2.flipX ? -1 : 1), ", ").concat(transform2.size / 16 * (transform2.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform2.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
function makeIconMasking(_ref2) {
  var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, mask = _ref2.mask, explicitMaskId = _ref2.maskId, transform2 = _ref2.transform;
  var mainWidth = main.width, mainPath = main.icon;
  var maskWidth = mask.width, maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform2,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: "rect",
    attributes: _objectSpread2({}, ALL_SPACE, {
      fill: "white"
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: "g",
    attributes: _objectSpread2({}, trans.inner),
    children: [fillBlack(_objectSpread2({
      tag: mainPath.tag,
      attributes: _objectSpread2({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: "g",
    attributes: _objectSpread2({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: "mask",
    attributes: _objectSpread2({}, ALL_SPACE, {
      id: maskId,
      maskUnits: "userSpaceOnUse",
      maskContentUnits: "userSpaceOnUse"
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: "defs",
    children: [{
      tag: "clipPath",
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: "rect",
    attributes: _objectSpread2({
      fill: "currentColor",
      "clip-path": "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children,
    attributes
  };
}
function makeIconStandard(_ref2) {
  var children = _ref2.children, attributes = _ref2.attributes, main = _ref2.main, transform2 = _ref2.transform, styles2 = _ref2.styles;
  var styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  if (transformIsMeaningful(transform2)) {
    var trans = transformForSvg({
      transform: transform2,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: "g",
      attributes: _objectSpread2({}, trans.outer),
      children: [{
        tag: "g",
        attributes: _objectSpread2({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread2({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }
  return {
    children,
    attributes
  };
}
function asIcon(_ref2) {
  var children = _ref2.children, main = _ref2.main, mask = _ref2.mask, attributes = _ref2.attributes, styles2 = _ref2.styles, transform2 = _ref2.transform;
  if (transformIsMeaningful(transform2) && main.found && !mask.found) {
    var width = main.width, height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2({}, styles2, {
      "transform-origin": "".concat(offset.x + transform2.x / 16, "em ").concat(offset.y + transform2.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref2) {
  var prefix2 = _ref2.prefix, iconName = _ref2.iconName, children = _ref2.children, attributes = _ref2.attributes, symbol = _ref2.symbol;
  var id = symbol === true ? "".concat(prefix2, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2({}, attributes, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons, main = _params$icons.main, mask = _params$icons.mask, prefix2 = params.prefix, iconName = params.iconName, transform2 = params.transform, symbol = params.symbol, title = params.title, maskId = params.maskId, titleId = params.titleId, extra = params.extra, _params$watchable = params.watchable, watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref2 = mask.found ? mask : main, width = _ref2.width, height = _ref2.height;
  var isUploadedIcon = prefix2 === "fak";
  var widthClass = isUploadedIcon ? "" : "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : "", widthClass].filter(function(c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function(c) {
    return c !== "" || !!c;
  }).concat(extra.classes).join(" ");
  var content = {
    children: [],
    attributes: _objectSpread2({}, extra.attributes, {
      "data-prefix": prefix2,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) content.children.push({
    tag: "title",
    attributes: {
      id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });
  var args = _objectSpread2({}, content, {
    prefix: prefix2,
    iconName,
    main,
    mask,
    maskId,
    transform: transform2,
    symbol,
    styles: _objectSpread2({}, uploadedIconWidthStyle, extra.styles)
  });
  var _ref22 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args), children = _ref22.children, attributes = _ref22.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
var noop$1 = function noop5() {
};
var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function defineIcons(prefix2, icons) {
  var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks, skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function(acc, iconName) {
    var icon2 = icons[iconName];
    var expanded = !!icon2.icon;
    if (expanded) {
      acc[icon2.iconName] = icon2.icon;
    } else {
      acc[iconName] = icon2;
    }
    return acc;
  }, {});
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix2, normalized);
  } else {
    namespace.styles[prefix2] = _objectSpread2({}, namespace.styles[prefix2] || {}, normalized);
  }
  if (prefix2 === "fas") {
    defineIcons("fa", icons);
  }
}
var styles = namespace.styles;
var shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build2() {
  var lookup = function lookup2(reducer) {
    return reduce(styles, function(o, style, prefix2) {
      o[prefix2] = reduce(style, reducer, {});
      return o;
    }, {});
  };
  _byUnicode = lookup(function(acc, icon2, iconName) {
    if (icon2[3]) {
      acc[icon2[3]] = iconName;
    }
    return acc;
  });
  _byLigature = lookup(function(acc, icon2, iconName) {
    var ligatures = icon2[2];
    acc[iconName] = iconName;
    ligatures.forEach(function(ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = "far" in styles;
  _byOldName = reduce(shims, function(acc, shim) {
    var oldName = shim[0];
    var prefix2 = shim[1];
    var iconName = shim[2];
    if (prefix2 === "far" && !hasRegular) {
      prefix2 = "fas";
    }
    acc[oldName] = {
      prefix: prefix2,
      iconName
    };
    return acc;
  }, {});
};
build();
var styles$1 = namespace.styles;
function iconFromMapping(mapping, prefix2, iconName) {
  if (mapping && mapping[prefix2] && mapping[prefix2][iconName]) {
    return {
      prefix: prefix2,
      iconName,
      icon: mapping[prefix2][iconName]
    };
  }
}
function toHtml(abstractNodes) {
  var tag = abstractNodes.tag, _abstractNodes$attrib = abstractNodes.attributes, attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib, _abstractNodes$childr = abstractNodes.children, children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
var parseTransformString = function parseTransformString2(transformString) {
  var transform2 = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  if (!transformString) {
    return transform2;
  } else {
    return transformString.toLowerCase().split(" ").reduce(function(acc, n) {
      var parts = n.toLowerCase().split("-");
      var first = parts[0];
      var rest = parts.slice(1).join("-");
      if (first && rest === "h") {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === "v") {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case "grow":
          acc.size = acc.size + rest;
          break;
        case "shrink":
          acc.size = acc.size - rest;
          break;
        case "left":
          acc.x = acc.x - rest;
          break;
        case "right":
          acc.x = acc.x + rest;
          break;
        case "up":
          acc.y = acc.y - rest;
          break;
        case "down":
          acc.y = acc.y + rest;
          break;
        case "rotate":
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform2);
  }
};
function MissingIcon(error) {
  this.name = "MissingIcon";
  this.message = error || "Icon unavailable";
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;
var FILL = {
  fill: "currentColor"
};
var ANIMATION_BASE = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
var RING = {
  tag: "path",
  attributes: _objectSpread2({}, FILL, {
    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
  })
};
var OPACITY_ANIMATE = _objectSpread2({}, ANIMATION_BASE, {
  attributeName: "opacity"
});
var DOT = {
  tag: "circle",
  attributes: _objectSpread2({}, FILL, {
    cx: "256",
    cy: "364",
    r: "28"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread2({}, ANIMATION_BASE, {
      attributeName: "r",
      values: "28;14;28;28;14;28;"
    })
  }, {
    tag: "animate",
    attributes: _objectSpread2({}, OPACITY_ANIMATE, {
      values: "1;0;1;1;0;1;"
    })
  }]
};
var QUESTION = {
  tag: "path",
  attributes: _objectSpread2({}, FILL, {
    opacity: "1",
    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread2({}, OPACITY_ANIMATE, {
      values: "1;0;0;0;0;1;"
    })
  }]
};
var EXCLAMATION = {
  tag: "path",
  attributes: _objectSpread2({}, FILL, {
    opacity: "0",
    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
  }),
  children: [{
    tag: "animate",
    attributes: _objectSpread2({}, OPACITY_ANIMATE, {
      values: "0;0;1;1;0;0;"
    })
  }]
};
var styles$2 = namespace.styles;
function asFoundIcon(icon2) {
  var width = icon2[0];
  var height = icon2[1];
  var _icon$slice = icon2.slice(4), _icon$slice2 = _slicedToArray(_icon$slice, 1), vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var styles$3 = namespace.styles;
var baseStyles = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
function css() {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), "g");
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), "g");
    var rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var Library = function() {
  function Library2() {
    _classCallCheck(this, Library2);
    this.definitions = {};
  }
  _createClass(Library2, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function(key) {
        _this.definitions[key] = _objectSpread2({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function(key) {
        var _normalized$key = normalized[key], prefix2 = _normalized$key.prefix, iconName = _normalized$key.iconName, icon2 = _normalized$key.icon;
        if (!additions[prefix2]) additions[prefix2] = {};
        additions[prefix2][iconName] = icon2;
      });
      return additions;
    }
  }]);
  return Library2;
}();
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
function apiObject(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function get2() {
      return val.abstract.map(function(a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, "node", {
    get: function get2() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix, prefix2 = _iconLookup$prefix === void 0 ? "fa" : _iconLookup$prefix, iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix2, iconName) || iconFromMapping(namespace.styles, prefix2, iconName);
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2({}, params, {
      mask
    }));
  };
}
var library = new Library();
var _cssInserted = false;
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _params$transform = params.transform, transform2 = _params$transform === void 0 ? meaninglessTransform : _params$transform, _params$symbol = params.symbol, symbol = _params$symbol === void 0 ? false : _params$symbol, _params$mask = params.mask, mask = _params$mask === void 0 ? null : _params$mask, _params$maskId = params.maskId, maskId = _params$maskId === void 0 ? null : _params$maskId, _params$title = params.title, title = _params$title === void 0 ? null : _params$title, _params$titleId = params.titleId, titleId = _params$titleId === void 0 ? null : _params$titleId, _params$classes = params.classes, classes = _params$classes === void 0 ? [] : _params$classes, _params$attributes = params.attributes, attributes = _params$attributes === void 0 ? {} : _params$attributes, _params$styles = params.styles, styles2 = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix2 = iconDefinition.prefix, iconName = iconDefinition.iconName, icon2 = iconDefinition.icon;
  return apiObject(_objectSpread2({
    type: "icon"
  }, iconDefinition), function() {
    ensureCss();
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon2),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix2,
      iconName,
      transform: _objectSpread2({}, meaninglessTransform, transform2),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
});

// node_modules/@fortawesome/react-fontawesome/index.es.js
var import_prop_types5 = __toESM(require_prop_types());
var import_react6 = __toESM(require_react());
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof5(obj) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof5(obj);
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function classList(props) {
  var _classes;
  var beat = props.beat, fade = props.fade, beatFade = props.beatFade, bounce = props.bounce, shake = props.shake, flash = props.flash, spin = props.spin, spinPulse = props.spinPulse, spinReverse = props.spinReverse, pulse = props.pulse, fixedWidth = props.fixedWidth, inverse = props.inverse, border = props.border, listItem = props.listItem, flip = props.flip, size = props.size, rotation = props.rotation, pull = props.pull;
  var classes = (_classes = {
    "fa-beat": beat,
    "fa-fade": fade,
    "fa-beat-fade": beatFade,
    "fa-bounce": bounce,
    "fa-shake": shake,
    "fa-flash": flash,
    "fa-spin": spin,
    "fa-spin-reverse": spinReverse,
    "fa-spin-pulse": spinPulse,
    "fa-pulse": pulse,
    "fa-fw": fixedWidth,
    "fa-inverse": inverse,
    "fa-border": border,
    "fa-li": listItem,
    "fa-flip": flip === true,
    "fa-flip-horizontal": flip === "horizontal" || flip === "both",
    "fa-flip-vertical": flip === "vertical" || flip === "both"
  }, _defineProperty5(_classes, "fa-".concat(size), typeof size !== "undefined" && size !== null), _defineProperty5(_classes, "fa-rotate-".concat(rotation), typeof rotation !== "undefined" && rotation !== null && rotation !== 0), _defineProperty5(_classes, "fa-pull-".concat(pull), typeof pull !== "undefined" && pull !== null), _defineProperty5(_classes, "fa-swap-opacity", props.swapOpacity), _classes);
  return Object.keys(classes).map(function(key) {
    return classes[key] ? key : null;
  }).filter(function(key) {
    return key;
  });
}
function _isNumerical(obj) {
  obj = obj - 0;
  return obj === obj;
}
function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  }
  string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : "";
  });
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}
var _excluded$1 = ["style"];
function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
function styleToObject(style) {
  return style.split(";").map(function(s) {
    return s.trim();
  }).filter(function(s) {
    return s;
  }).reduce(function(acc, pair) {
    var i = pair.indexOf(":");
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith("webkit") ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}
function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof element === "string") {
    return element;
  }
  var children = (element.children || []).map(function(child) {
    return convert(createElement, child);
  });
  var mixins = Object.keys(element.attributes || {}).reduce(function(acc, key) {
    var val = element.attributes[key];
    switch (key) {
      case "class":
        acc.attrs["className"] = val;
        delete element.attributes["class"];
        break;
      case "style":
        acc.attrs["style"] = styleToObject(val);
        break;
      default:
        if (key.indexOf("aria-") === 0 || key.indexOf("data-") === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }
    }
    return acc;
  }, {
    attrs: {}
  });
  var _extraProps$style = extraProps.style, existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style, remaining = _objectWithoutProperties5(extraProps, _excluded$1);
  mixins.attrs["style"] = _objectSpread22(_objectSpread22({}, mixins.attrs["style"]), existingStyle);
  return createElement.apply(void 0, [element.tag, _objectSpread22(_objectSpread22({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
}
var PRODUCTION2 = false;
try {
  PRODUCTION2 = false;
} catch (e) {
}
function log() {
  if (!PRODUCTION2 && console && typeof console.error === "function") {
    var _console;
    (_console = console).error.apply(_console, arguments);
  }
}
function normalizeIconArgs(icon2) {
  if (icon2 && _typeof5(icon2) === "object" && icon2.prefix && icon2.iconName && icon2.icon) {
    return icon2;
  }
  if (parse.icon) {
    return parse.icon(icon2);
  }
  if (icon2 === null) {
    return null;
  }
  if (icon2 && _typeof5(icon2) === "object" && icon2.prefix && icon2.iconName) {
    return icon2;
  }
  if (Array.isArray(icon2) && icon2.length === 2) {
    return {
      prefix: icon2[0],
      iconName: icon2[1]
    };
  }
  if (typeof icon2 === "string") {
    return {
      prefix: "fas",
      iconName: icon2
    };
  }
}
function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty5({}, key, value) : {};
}
var _excluded5 = ["forwardedRef"];
function FontAwesomeIcon(_ref2) {
  var forwardedRef = _ref2.forwardedRef, props = _objectWithoutProperties5(_ref2, _excluded5);
  var iconArgs = props.icon, maskArgs = props.mask, symbol = props.symbol, className = props.className, title = props.title, titleId = props.titleId, maskId = props.maskId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey("classes", [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(" "))));
  var transform2 = objectWithKey("transform", typeof props.transform === "string" ? parse.transform(props.transform) : props.transform);
  var mask = objectWithKey("mask", normalizeIconArgs(maskArgs));
  var renderedIcon = icon(iconLookup, _objectSpread22(_objectSpread22(_objectSpread22(_objectSpread22({}, classes), transform2), mask), {}, {
    symbol,
    title,
    titleId,
    maskId
  }));
  if (!renderedIcon) {
    log("Could not find icon", iconLookup);
    return null;
  }
  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function(key) {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = "FontAwesomeIcon";
FontAwesomeIcon.propTypes = {
  beat: import_prop_types5.default.bool,
  border: import_prop_types5.default.bool,
  beatFade: import_prop_types5.default.bool,
  bounce: import_prop_types5.default.bool,
  className: import_prop_types5.default.string,
  fade: import_prop_types5.default.bool,
  flash: import_prop_types5.default.bool,
  mask: import_prop_types5.default.oneOfType([import_prop_types5.default.object, import_prop_types5.default.array, import_prop_types5.default.string]),
  maskId: import_prop_types5.default.string,
  fixedWidth: import_prop_types5.default.bool,
  inverse: import_prop_types5.default.bool,
  flip: import_prop_types5.default.oneOf([true, false, "horizontal", "vertical", "both"]),
  icon: import_prop_types5.default.oneOfType([import_prop_types5.default.object, import_prop_types5.default.array, import_prop_types5.default.string]),
  listItem: import_prop_types5.default.bool,
  pull: import_prop_types5.default.oneOf(["right", "left"]),
  pulse: import_prop_types5.default.bool,
  rotation: import_prop_types5.default.oneOf([0, 90, 180, 270]),
  shake: import_prop_types5.default.bool,
  size: import_prop_types5.default.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: import_prop_types5.default.bool,
  spinPulse: import_prop_types5.default.bool,
  spinReverse: import_prop_types5.default.bool,
  symbol: import_prop_types5.default.oneOfType([import_prop_types5.default.bool, import_prop_types5.default.string]),
  title: import_prop_types5.default.string,
  titleId: import_prop_types5.default.string,
  transform: import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.object]),
  swapOpacity: import_prop_types5.default.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, import_react6.default.createElement);

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/ArrowButton.js
var import_faArrowUp = __toESM(require_faArrowUp());
var import_faArrowRight = __toESM(require_faArrowRight());
var import_faArrowDown = __toESM(require_faArrowDown());
var import_faArrowLeft = __toESM(require_faArrowLeft());
var _excluded6 = ["className", "direction", "children"];
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
function _objectWithoutProperties6(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ArrowButton = function ArrowButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$direction = _ref2.direction, direction = _ref$direction === void 0 ? "right" : _ref$direction, children = _ref2.children, rest = _objectWithoutProperties6(_ref2, _excluded6);
  var cName2 = "".concat(prefix, "-button--arrow");
  var icon2 = function() {
    if (direction === "up") {
      return import_faArrowUp.faArrowUp;
    } else if (direction === "right") {
      return import_faArrowRight.faArrowRight;
    } else if (direction === "down") {
      return import_faArrowDown.faArrowDown;
    } else if (direction === "left") {
      return import_faArrowLeft.faArrowLeft;
    }
  }();
  return import_react7.default.createElement(Button_default, _extends5({}, rest, {
    className: (0, import_classnames5.default)(cName2, className),
    icon: import_react7.default.createElement(FontAwesomeIcon, {
      icon: icon2
    })
  }), children);
};
true ? ArrowButton.propTypes = {
  /**
   * Primary content.
   */
  children: import_prop_types6.default.node,
  /** Additional classes. */
  className: import_prop_types6.default.string,
  direction: import_prop_types6.default.oneOf(["up", "right", "down", "left"])
} : void 0;
var ArrowButton_default = ArrowButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/InfoButton.js
var import_react8 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_classnames6 = __toESM(require_classnames());
var import_faInfoCircle = __toESM(require_faInfoCircle());
var _excluded7 = ["className", "children"];
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
function _objectWithoutProperties7(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var InfoButton = function InfoButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties7(_ref2, _excluded7);
  var cName2 = "".concat(prefix, "-button--info");
  return import_react8.default.createElement(Button_default, _extends6({}, rest, {
    className: (0, import_classnames6.default)(cName2, className),
    icon: import_react8.default.createElement(FontAwesomeIcon, {
      icon: import_faInfoCircle.faInfoCircle
    })
  }), children);
};
true ? InfoButton.propTypes = {
  /** Primary content. */
  children: import_prop_types7.default.node,
  /** Additional classes. */
  className: import_prop_types7.default.string
} : void 0;
var InfoButton_default = InfoButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/VoiceCallButton.js
var import_react9 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var import_classnames7 = __toESM(require_classnames());
var import_faPhoneAlt = __toESM(require_faPhoneAlt());
var _excluded8 = ["className", "children"];
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties8(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var VoiceCallButton = function VoiceCallButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties8(_ref2, _excluded8);
  var cName2 = "".concat(prefix, "-button--voicecall");
  return import_react9.default.createElement(Button_default, _extends7({}, rest, {
    className: (0, import_classnames7.default)(cName2, className),
    icon: import_react9.default.createElement(FontAwesomeIcon, {
      icon: import_faPhoneAlt.faPhoneAlt
    })
  }), children);
};
true ? VoiceCallButton.propTypes = {
  /** Primary content. */
  children: import_prop_types8.default.node,
  /** Additional classes. */
  className: import_prop_types8.default.string
} : void 0;
var VoiceCallButton_default = VoiceCallButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/VideoCallButton.js
var import_react10 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
var import_classnames8 = __toESM(require_classnames());
var import_faVideo = __toESM(require_faVideo());
var _excluded9 = ["className", "children"];
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
function _objectWithoutProperties9(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var VideoCallButton = function VideoCallButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties9(_ref2, _excluded9);
  var cName2 = "".concat(prefix, "-button--videocall");
  return import_react10.default.createElement(Button_default, _extends8({}, rest, {
    className: (0, import_classnames8.default)(cName2, className),
    icon: import_react10.default.createElement(FontAwesomeIcon, {
      icon: import_faVideo.faVideo
    })
  }), children);
};
true ? VideoCallButton.propTypes = {
  /** Primary content. */
  children: import_prop_types9.default.node,
  /** Additional classes. */
  className: import_prop_types9.default.string
} : void 0;
var VideoCallButton_default = VideoCallButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/StarButton.js
var import_react11 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var import_classnames9 = __toESM(require_classnames());
var import_faStar = __toESM(require_faStar());
var _excluded10 = ["className", "children"];
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
function _objectWithoutProperties10(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose10(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose10(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var StarButton = function StarButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties10(_ref2, _excluded10);
  var cName2 = "".concat(prefix, "-button--star");
  return import_react11.default.createElement(Button_default, _extends9({}, rest, {
    className: (0, import_classnames9.default)(cName2, className),
    icon: import_react11.default.createElement(FontAwesomeIcon, {
      icon: import_faStar.faStar
    })
  }), children);
};
true ? StarButton.propTypes = {
  /** Primary content. */
  children: import_prop_types10.default.node,
  /** Additional classes. */
  className: import_prop_types10.default.string
} : void 0;
var StarButton_default = StarButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/AddUserButton.js
var import_react12 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
var import_classnames10 = __toESM(require_classnames());
var import_faUserPlus = __toESM(require_faUserPlus());
var _excluded11 = ["className", "children"];
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends10.apply(this, arguments);
}
function _objectWithoutProperties11(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose11(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose11(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var AddUserButton = function AddUserButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties11(_ref2, _excluded11);
  var cName2 = "".concat(prefix, "-button--adduser");
  return import_react12.default.createElement(Button_default, _extends10({}, rest, {
    className: (0, import_classnames10.default)(cName2, className),
    icon: import_react12.default.createElement(FontAwesomeIcon, {
      icon: import_faUserPlus.faUserPlus
    })
  }), children);
};
true ? AddUserButton.propTypes = {
  /**
   * Primary content.
   */
  children: import_prop_types11.default.node,
  /** Additional classes. */
  className: import_prop_types11.default.string
} : void 0;
var AddUserButton_default = AddUserButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/EllipsisButton.js
var import_react13 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
var import_classnames11 = __toESM(require_classnames());
var import_faEllipsisV = __toESM(require_faEllipsisV());
var import_faEllipsisH = __toESM(require_faEllipsisH());
var _excluded12 = ["className", "orientation", "children"];
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends11.apply(this, arguments);
}
function _objectWithoutProperties12(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose12(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose12(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var EllipsisButton = function EllipsisButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$orientation = _ref2.orientation, orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation, children = _ref2.children, rest = _objectWithoutProperties12(_ref2, _excluded12);
  var cName2 = "".concat(prefix, "-button--ellipsis");
  var icon2 = orientation === "vertical" ? import_faEllipsisV.faEllipsisV : import_faEllipsisH.faEllipsisH;
  return import_react13.default.createElement(Button_default, _extends11({}, rest, {
    className: (0, import_classnames11.default)(cName2, className),
    icon: import_react13.default.createElement(FontAwesomeIcon, {
      icon: icon2
    })
  }), children);
};
true ? EllipsisButton.propTypes = {
  /** Primary content. */
  children: import_prop_types12.default.node,
  /** Additional classes. */
  className: import_prop_types12.default.string,
  orientation: import_prop_types12.default.oneOf(["horizontal", "vertical"])
} : void 0;
var EllipsisButton_default = EllipsisButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/SendButton.js
var import_react14 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var import_classnames12 = __toESM(require_classnames());
var import_faPaperPlane = __toESM(require_faPaperPlane());
var _excluded13 = ["className", "children"];
function _extends12() {
  _extends12 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends12.apply(this, arguments);
}
function _objectWithoutProperties13(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose13(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose13(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var SendButton = function SendButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties13(_ref2, _excluded13);
  var cName2 = "".concat(prefix, "-button--send");
  return import_react14.default.createElement(Button_default, _extends12({}, rest, {
    className: (0, import_classnames12.default)(cName2, className),
    icon: import_react14.default.createElement(FontAwesomeIcon, {
      icon: import_faPaperPlane.faPaperPlane
    })
  }), children);
};
true ? SendButton.propTypes = {
  /** Primary content. */
  children: import_prop_types13.default.node,
  /** Additional classes. */
  className: import_prop_types13.default.string
} : void 0;
var SendButton_default = SendButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/AttachmentButton.js
var import_react15 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var import_classnames13 = __toESM(require_classnames());
var import_faPaperclip = __toESM(require_faPaperclip());
var _excluded14 = ["className", "children"];
function _extends13() {
  _extends13 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends13.apply(this, arguments);
}
function _objectWithoutProperties14(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose14(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose14(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var AttachmentButton = function AttachmentButton2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, children = _ref2.children, rest = _objectWithoutProperties14(_ref2, _excluded14);
  var cName2 = "".concat(prefix, "-button--attachment");
  return import_react15.default.createElement(Button_default, _extends13({}, rest, {
    className: (0, import_classnames13.default)(cName2, className),
    icon: import_react15.default.createElement(FontAwesomeIcon, {
      icon: import_faPaperclip.faPaperclip
    })
  }), children);
};
true ? AttachmentButton.propTypes = {
  /** Primary content. */
  children: import_prop_types14.default.node,
  /** Additional classes. */
  className: import_prop_types14.default.string
} : void 0;
var AttachmentButton_default = AttachmentButton;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Buttons/index.js
var Buttons_default = {
  Button: Button_default,
  ArrowButton: ArrowButton_default,
  InfoButton: InfoButton_default,
  VoiceCallButton: VoiceCallButton_default,
  VideoCallButton: VideoCallButton_default,
  StarButton: StarButton_default,
  AddUserButton: AddUserButton_default,
  EllipsisButton: EllipsisButton_default,
  SendButton: SendButton_default,
  AttachmentButton: AttachmentButton_default
};

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/ConversationHeaderBack.js
var _excluded15 = ["onClick", "children", "className"];
function _extends14() {
  _extends14 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends14.apply(this, arguments);
}
function _objectWithoutProperties15(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose15(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose15(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConversationHeaderBack = function ConversationHeaderBack2(_ref2) {
  var _ref$onClick = _ref2.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties15(_ref2, _excluded15);
  var cName2 = "".concat(prefix, "-conversation-header__back");
  return import_react16.default.createElement("div", _extends14({}, rest, {
    className: (0, import_classnames14.default)(cName2, className)
  }), typeof children !== "undefined" ? children : import_react16.default.createElement(ArrowButton, {
    direction: "left",
    onClick
  }));
};
ConversationHeaderBack.displayName = "ConversationHeader.Back";
true ? ConversationHeaderBack.propTypes = {
  /** OnClick handler attached to button. */
  onClick: import_prop_types15.default.func,
  /** Primary content - override default button. */
  children: import_prop_types15.default.node,
  /** Additional classes. */
  className: import_prop_types15.default.string
} : void 0;
var ConversationHeaderBack_default = ConversationHeaderBack;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/ConversationHeaderActions.js
var import_react17 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
var import_classnames15 = __toESM(require_classnames());
var _excluded16 = ["children", "className"];
function _extends15() {
  _extends15 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends15.apply(this, arguments);
}
function _objectWithoutProperties16(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose16(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose16(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConversationHeaderActions = function ConversationHeaderActions2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties16(_ref2, _excluded16);
  var cName2 = "".concat(prefix, "-conversation-header__actions");
  return import_react17.default.createElement("section", _extends15({}, rest, {
    className: (0, import_classnames15.default)(cName2, className)
  }), children);
};
ConversationHeaderActions.displayName = "ConversationHeader.Actions";
true ? ConversationHeaderActions.propTypes = {
  /** Primary content. */
  children: import_prop_types16.default.node,
  /** Additional classes. */
  className: import_prop_types16.default.string
} : void 0;
var ConversationHeaderActions_default = ConversationHeaderActions;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/ConversationHeaderContent.js
var import_react18 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
var import_classnames16 = __toESM(require_classnames());
var _excluded17 = ["userName", "info", "children", "className"];
function _extends16() {
  _extends16 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends16.apply(this, arguments);
}
function _objectWithoutProperties17(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose17(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose17(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConversationHeaderContent = function ConversationHeaderContent2(_ref2) {
  var _ref$userName = _ref2.userName, userName = _ref$userName === void 0 ? "" : _ref$userName, _ref$info = _ref2.info, info = _ref$info === void 0 ? "" : _ref$info, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties17(_ref2, _excluded17);
  var cName2 = "".concat(prefix, "-conversation-header__content");
  return import_react18.default.createElement("div", _extends16({}, rest, {
    className: (0, import_classnames16.default)(cName2, className)
  }), typeof children !== "undefined" ? children : import_react18.default.createElement(import_react18.default.Fragment, null, import_react18.default.createElement("div", {
    className: "".concat(prefix, "-conversation-header__user-name")
  }, userName), import_react18.default.createElement("div", {
    className: "".concat(prefix, "-conversation-header__info")
  }, info)));
};
ConversationHeaderContent.displayName = "ConversationHeader.Content";
true ? ConversationHeaderContent.propTypes = {
  /** Primary content. Has precedence over userName and info properties. */
  children: import_prop_types17.default.node,
  userName: import_prop_types17.default.node,
  info: import_prop_types17.default.node,
  /** Additional classes. */
  className: import_prop_types17.default.string
} : void 0;
var ConversationHeaderContent_default = ConversationHeaderContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/ConversationHeader.js
var import_prop_types18 = __toESM(require_prop_types());
var _excluded18 = ["children", "className"];
function _extends17() {
  _extends17 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends17.apply(this, arguments);
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties18(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose18(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose18(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConversationHeader = function ConversationHeader2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties18(_ref2, _excluded18);
  var cName2 = "".concat(prefix, "-conversation-header");
  var _getChildren = getChildren(children, [ConversationHeaderBack_default, Avatar_default2, AvatarGroup_default2, ConversationHeaderContent_default, ConversationHeaderActions_default]), _getChildren2 = _slicedToArray2(_getChildren, 5), back = _getChildren2[0], avatar = _getChildren2[1], avatarGroup = _getChildren2[2], content = _getChildren2[3], actions = _getChildren2[4];
  return import_react19.default.createElement("div", _extends17({}, rest, {
    className: (0, import_classnames17.default)(cName2, className)
  }), back, avatar && import_react19.default.createElement("div", {
    className: "".concat(cName2, "__avatar")
  }, avatar), !avatar && avatarGroup && import_react19.default.createElement("div", {
    className: "".concat(cName2, "__avatar")
  }, avatarGroup), content, actions);
};
ConversationHeader.displayName = "ConversationHeader";
true ? ConversationHeader.propTypes = {
  /**
   * Primary content.
   * Available elements:
   *
   * * &lt;Avatar /&gt;
   * * &lt;AvatarGroup /&gt;
   * * &lt;ConversationHeader.Back /&gt;
   * * &lt;ConversationHeader.Content /&gt;
   * * &lt;ConversationHeader.Actions /&gt;
   */
  children: allowedChildren([ConversationHeaderBack_default, Avatar_default2, AvatarGroup_default2, ConversationHeaderContent_default, ConversationHeaderActions_default]),
  /** Additional classes. */
  className: import_prop_types18.default.string
} : void 0;
ConversationHeader.Back = ConversationHeaderBack_default;
ConversationHeader.Actions = ConversationHeaderActions_default;
ConversationHeader.Content = ConversationHeaderContent_default;
var ConversationHeader_default = ConversationHeader;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationHeader/index.js
var ConversationHeader_default2 = ConversationHeader_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageList/MessageList.js
var import_react36 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
var import_classnames32 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Scroll/ReactPerfectScrollbar.js
var import_react20 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Scroll/perfect-scrollbar.esm.js
function get(element) {
  return getComputedStyle(element);
}
function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === "number") {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}
function div(className) {
  var div2 = document.createElement("div");
  div2.className = className;
  return div2;
}
var elMatches = typeof Element !== "undefined" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function matches(element, query) {
  if (!elMatches) {
    throw new Error("No element matching method supported");
  }
  return elMatches.call(element, query);
}
function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function(child) {
    return matches(child, selector);
  });
}
var cls = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function thumb(x) {
      return "ps__thumb-" + x;
    },
    rail: function rail(x) {
      return "ps__rail-" + x;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function active(x) {
      return "ps--active-" + x;
    },
    scrolling: function scrolling(x) {
      return "ps--scrolling-" + x;
    }
  }
};
var scrollingClassTimeout = {
  x: null,
  y: null
};
function addScrollingClass(i, x) {
  var classList2 = i.element.classList;
  var className = cls.state.scrolling(x);
  if (classList2.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList2.add(className);
  }
}
function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(function() {
    return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
  }, i.settings.scrollingThreshold);
}
function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}
var EventElement = function EventElement2(element) {
  this.element = element;
  this.handlers = {};
};
var prototypeAccessors = {
  isEmpty: {
    configurable: true
  }
};
EventElement.prototype.bind = function bind(eventName, handler) {
  if (typeof this.handlers[eventName] === "undefined") {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  var evts = ["touchstart", "wheel", "touchmove"];
  if (evts.indexOf(eventName) !== -1) {
    this.element.addEventListener(eventName, handler, {
      passive: false
    });
  } else {
    this.element.addEventListener(eventName, handler, false);
  }
};
EventElement.prototype.unbind = function unbind(eventName, target) {
  var this$1 = this;
  this.handlers[eventName] = this.handlers[eventName].filter(function(handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};
EventElement.prototype.unbindAll = function unbindAll() {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};
prototypeAccessors.isEmpty.get = function() {
  var this$1 = this;
  return Object.keys(this.handlers).every(function(key) {
    return this$1.handlers[key].length === 0;
  });
};
Object.defineProperties(EventElement.prototype, prototypeAccessors);
var EventManager = function EventManager2() {
  this.eventElements = [];
};
EventManager.prototype.eventElement = function eventElement(element) {
  var ee = this.eventElements.filter(function(ee2) {
    return ee2.element === element;
  })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};
EventManager.prototype.bind = function bind2(element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};
EventManager.prototype.unbind = function unbind2(element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);
  if (ee.isEmpty) {
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};
EventManager.prototype.unbindAll = function unbindAll2() {
  this.eventElements.forEach(function(e) {
    return e.unbindAll();
  });
  this.eventElements = [];
};
EventManager.prototype.once = function once(element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function onceHandler2(evt) {
    ee.unbind(eventName, onceHandler2);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};
function createEvent(name) {
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(name, false, false, void 0);
    return evt;
  }
}
function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent, disableOnYReachWhenNoScroll) {
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var fields;
  if (axis === "top") {
    fields = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
  } else if (axis === "left") {
    fields = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
  } else {
    throw new Error("A proper axis should be provided");
  }
  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent, disableOnYReachWhenNoScroll);
}
function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent, disableOnYReachWhenNoScroll) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var element = i.element;
  i.reach[y] = null;
  var eventFlag = disableOnYReachWhenNoScroll === true ? i[contentHeight] !== i[containerHeight] : true;
  if (eventFlag && element[scrollTop] < 1) {
    i.reach[y] = "start";
  }
  if (eventFlag && element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = "end";
  }
  if (diff) {
    element.dispatchEvent(createEvent("ps-scroll-" + y));
    if (diff < 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + up));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + down));
    }
    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }
  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
  }
}
function toInt(x) {
  return parseInt(x, 10) || 0;
}
function isEditable(el) {
  return matches(el, "input,[contenteditable]") || matches(el, "select,[contenteditable]") || matches(el, "textarea,[contenteditable]") || matches(el, "button,[contenteditable]");
}
function outerWidth(element) {
  var styles2 = get(element);
  return toInt(styles2.width) + toInt(styles2.paddingLeft) + toInt(styles2.paddingRight) + toInt(styles2.borderLeftWidth) + toInt(styles2.borderRightWidth);
}
var env = {
  isWebKit: typeof document !== "undefined" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window !== "undefined" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator !== "undefined" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator !== "undefined" && /Chrome/i.test(navigator && navigator.userAgent)
};
function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();
  i.containerWidth = Math.round(rect.width);
  i.containerHeight = Math.round(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;
  if (!element.contains(i.scrollbarXRail)) {
    queryChildren(element, cls.element.rail("x")).forEach(function(el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    queryChildren(element, cls.element.rail("y")).forEach(function(el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarYRail);
  }
  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }
  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }
  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }
  updateCss(element, i);
  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active("x"));
  } else {
    element.classList.remove(cls.state.active("x"));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active("y"));
  } else {
    element.classList.remove(cls.state.active("y"));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}
function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}
function updateCss(element, i) {
  var xRailOffset = {
    width: i.railXWidth
  };
  var roundedScrollTop = Math.floor(element.scrollTop);
  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);
  var yRailOffset = {
    top: roundedScrollTop,
    height: i.railYHeight
  };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);
  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth
  });
}
function clickRail(i) {
  var element = i.element;
  i.event.bind(i.scrollbarY, "mousedown", function(e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarYRail, "mousedown", function(e) {
    var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;
    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);
    e.stopPropagation();
  });
  i.event.bind(i.scrollbarX, "mousedown", function(e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarXRail, "mousedown", function(e) {
    var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);
    e.stopPropagation();
  });
}
function dragThumb(i) {
  bindMouseScrollHandler(i, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]);
  bindMouseScrollHandler(i, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
}
function bindMouseScrollHandler(i, ref) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];
  var element = i.element;
  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;
  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);
    e.stopPropagation();
    e.preventDefault();
  }
  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, "mousemove", mouseMoveHandler);
  }
  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, "mousemove", mouseMoveHandler);
      i.event.once(i.ownerDocument, "mouseup", mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, "touchmove", mouseMoveHandler);
    }
    i[scrollbarYRail].classList.add(cls.state.clicking);
    e.stopPropagation();
  }
  i.event.bind(i[scrollbarY], "mousedown", function(e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], "touchstart", function(e) {
    bindMoves(e, true);
  });
}
function keyboard(i) {
  var element = i.element;
  var elementHovered = function elementHovered2() {
    return matches(element, ":hover");
  };
  var scrollbarFocused = function scrollbarFocused2() {
    return matches(i.scrollbarX, ":focus") || matches(i.scrollbarY, ":focus");
  };
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
        return !i.settings.wheelPropagation;
      }
    }
    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }
  i.event.bind(i.ownerDocument, "keydown", function(e) {
    if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
      return;
    }
    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }
    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === "IFRAME") {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }
    var deltaX = 0;
    var deltaY = 0;
    switch (e.which) {
      case 37:
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38:
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39:
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40:
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32:
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33:
        deltaY = i.containerHeight;
        break;
      case 34:
        deltaY = -i.containerHeight;
        break;
      case 36:
        deltaY = i.contentHeight;
        break;
      case 35:
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }
    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }
    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);
    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}
function wheel(i) {
  var element = i.element;
  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
    var hitsBound;
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }
    return hitsBound ? !i.settings.wheelPropagation : true;
  }
  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;
    if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }
    if (e.deltaMode && e.deltaMode === 1) {
      deltaX *= 10;
      deltaY *= 10;
    }
    if (deltaX !== deltaX && deltaY !== deltaY) {
      deltaX = 0;
      deltaY = e.wheelDelta;
    }
    if (e.shiftKey) {
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }
  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!env.isWebKit && element.querySelector("select:focus")) {
      return true;
    }
    if (!element.contains(target)) {
      return false;
    }
    var cursor = target;
    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }
      var style = get(cursor);
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      }
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }
      cursor = cursor.parentNode;
    }
    return false;
  }
  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];
    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }
    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }
    updateGeometry(i);
    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  if (typeof window.onwheel !== "undefined") {
    i.event.bind(element, "wheel", mousewheelHandler);
  } else if (typeof window.onmousewheel !== "undefined") {
    i.event.bind(element, "mousewheel", mousewheelHandler);
  }
}
function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }
  var element = i.element;
  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = Math.ceil(element.scrollLeft);
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);
    if (!i.settings.wheelPropagation) {
      return true;
    }
    if (magnitudeY > magnitudeX) {
      if (i.settings.suppressScrollY) {
        return false;
      }
      if (deltaY > 0) {
        return scrollTop !== 0;
      }
      if (deltaY < 0) {
        return scrollTop < i.contentHeight - i.containerHeight;
      }
    } else if (magnitudeX > magnitudeY) {
      if (i.settings.suppressScrollX) {
        return false;
      }
      if (deltaX > 0) {
        return scrollLeft !== 0;
      }
      if (deltaY < 0) {
        return scrollLeft < i.contentWidth - i.containerWidth;
      }
    }
    return true;
  }
  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;
    updateGeometry(i);
  }
  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;
  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      return e;
    }
  }
  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === "pen" && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }
    return false;
  }
  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }
    var touch2 = getTouch(e);
    startOffset.pageX = touch2.pageX;
    startOffset.pageY = touch2.pageY;
    startTime = (/* @__PURE__ */ new Date()).getTime();
    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }
  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }
    var cursor = target;
    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }
      var style = get(cursor);
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      }
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }
      cursor = cursor.parentNode;
    }
    return false;
  }
  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch2 = getTouch(e);
      var currentOffset = {
        pageX: touch2.pageX,
        pageY: touch2.pageY
      };
      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;
      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }
      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }
      if (e.cancelable && shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }
        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }
        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }
        applyTouchMove(speed.x * 30, speed.y * 30);
        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }
  if (env.supportsTouch) {
    i.event.bind(element, "touchstart", touchStart);
    i.event.bind(element, "touchmove", touchMove);
    i.event.bind(element, "touchend", touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, "pointerdown", touchStart);
      i.event.bind(element, "pointermove", touchMove);
      i.event.bind(element, "pointerup", touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, "MSPointerDown", touchStart);
      i.event.bind(element, "MSPointerMove", touchMove);
      i.event.bind(element, "MSPointerUp", touchEnd);
    }
  }
}
var defaultSettings = function defaultSettings2() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1
  };
};
var handlers = {
  "click-rail": clickRail,
  "drag-thumb": dragThumb,
  keyboard,
  wheel,
  touch
};
var PerfectScrollbar = function PerfectScrollbar2(element, userSettings) {
  var this$1 = this;
  if (userSettings === void 0) userSettings = {};
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if (!element || !element.nodeName) {
    throw new Error("no element is specified to initialize PerfectScrollbar");
  }
  this.element = element;
  element.classList.add(cls.main);
  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }
  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;
  var focus = function focus2() {
    return element.classList.add(cls.state.focus);
  };
  var blur = function blur2() {
    return element.classList.remove(cls.state.focus);
  };
  this.isRtl = get(element).direction === "rtl";
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = function() {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  }();
  this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;
  this.scrollbarXRail = div(cls.element.rail("x"));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb("x"));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute("tabindex", 0);
  this.event.bind(this.scrollbarX, "focus", focus);
  this.event.bind(this.scrollbarX, "blur", blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  set(this.scrollbarXRail, {
    display: "block"
  });
  this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, {
    display: ""
  });
  this.railXWidth = null;
  this.railXRatio = null;
  this.scrollbarYRail = div(cls.element.rail("y"));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb("y"));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute("tabindex", 0);
  this.event.bind(this.scrollbarY, "focus", focus);
  this.event.bind(this.scrollbarY, "blur", blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, {
    display: "block"
  });
  this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, {
    display: ""
  });
  this.railYHeight = null;
  this.railYRatio = null;
  this.reach = {
    x: element.scrollLeft <= 0 ? "start" : element.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: element.scrollTop <= 0 ? "start" : element.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  };
  this.isAlive = true;
  this.settings.handlers.forEach(function(handlerName) {
    return handlers[handlerName](this$1);
  });
  this.lastScrollTop = Math.floor(element.scrollTop);
  this.lastScrollLeft = element.scrollLeft;
  this.event.bind(this.element, "scroll", function(e) {
    return this$1.onScroll(e);
  });
  updateGeometry(this);
};
PerfectScrollbar.prototype.update = function update(disableOnYReachWhenNoScroll) {
  if (!this.isAlive) {
    return;
  }
  this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0;
  set(this.scrollbarXRail, {
    display: "block"
  });
  set(this.scrollbarYRail, {
    display: "block"
  });
  this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom);
  set(this.scrollbarXRail, {
    display: "none"
  });
  set(this.scrollbarYRail, {
    display: "none"
  });
  updateGeometry(this);
  processScrollDiff(this, "top", 0, false, true, disableOnYReachWhenNoScroll);
  processScrollDiff(this, "left", 0, false, true, disableOnYReachWhenNoScroll);
  set(this.scrollbarXRail, {
    display: ""
  });
  set(this.scrollbarYRail, {
    display: ""
  });
};
PerfectScrollbar.prototype.onScroll = function onScroll(e) {
  if (!this.isAlive) {
    return;
  }
  updateGeometry(this);
  processScrollDiff(this, "top", this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(this, "left", this.element.scrollLeft - this.lastScrollLeft);
  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};
PerfectScrollbar.prototype.destroy = function destroy() {
  if (!this.isAlive) {
    return;
  }
  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;
  this.isAlive = false;
};
PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
  this.element.className = this.element.className.split(" ").filter(function(name) {
    return !name.match(/^ps([-_].+|)$/);
  }).join(" ");
};
var perfect_scrollbar_esm_default = PerfectScrollbar;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Scroll/ReactPerfectScrollbar.js
function _typeof6(o) {
  "@babel/helpers - typeof";
  return _typeof6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof6(o);
}
var _excluded19 = ["className", "style", "option", "options", "containerRef", "onScrollY", "onScrollX", "onScrollUp", "onScrollDown", "onScrollLeft", "onScrollRight", "onYReachStart", "onYReachEnd", "onXReachStart", "onXReachEnd", "component", "onSync", "children"];
function _extends18() {
  _extends18 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends18.apply(this, arguments);
}
function _objectWithoutProperties19(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose19(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose19(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey4(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == _typeof6(i) ? i : String(i);
}
function _toPrimitive4(t, r) {
  if ("object" != _typeof6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof6(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct5() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf5(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
var handlerNameByEvent = {
  "ps-scroll-y": "onScrollY",
  "ps-scroll-x": "onScrollX",
  "ps-scroll-up": "onScrollUp",
  "ps-scroll-down": "onScrollDown",
  "ps-scroll-left": "onScrollLeft",
  "ps-scroll-right": "onScrollRight",
  "ps-y-reach-start": "onYReachStart",
  "ps-y-reach-end": "onYReachEnd",
  "ps-x-reach-start": "onXReachStart",
  "ps-x-reach-end": "onXReachEnd"
};
Object.freeze(handlerNameByEvent);
var ScrollBar = function(_Component) {
  _inherits(ScrollBar2, _Component);
  function ScrollBar2(props) {
    var _this;
    _classCallCheck2(this, ScrollBar2);
    _this = _callSuper(this, ScrollBar2, [props]);
    _this.handleRef = _this.handleRef.bind(_assertThisInitialized(_this));
    _this._handlerByEvent = {};
    return _this;
  }
  _createClass2(ScrollBar2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.option) {
        console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"');
      }
      this._ps = new perfect_scrollbar_esm_default(this._container, this.props.options || this.props.option);
      this._updateEventHook();
      this._updateClassName();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this._updateEventHook(prevProps);
      this.updateScroll();
      if (prevProps.className !== this.props.className) {
        this._updateClassName();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;
      Object.keys(this._handlerByEvent).forEach(function(key) {
        var value = _this2._handlerByEvent[key];
        if (value) {
          _this2._container.removeEventListener(key, value, false);
        }
      });
      this._handlerByEvent = {};
      this._ps.destroy();
      this._ps = null;
    }
  }, {
    key: "_updateEventHook",
    value: function _updateEventHook() {
      var _this3 = this;
      var prevProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Object.keys(handlerNameByEvent).forEach(function(key) {
        var callback = _this3.props[handlerNameByEvent[key]];
        var prevCallback = prevProps[handlerNameByEvent[key]];
        if (callback !== prevCallback) {
          if (prevCallback) {
            var prevHandler = _this3._handlerByEvent[key];
            _this3._container.removeEventListener(key, prevHandler, false);
            _this3._handlerByEvent[key] = null;
          }
          if (callback) {
            var handler = function handler2() {
              return callback(_this3._container);
            };
            _this3._container.addEventListener(key, handler, false);
            _this3._handlerByEvent[key] = handler;
          }
        }
      });
    }
  }, {
    key: "_updateClassName",
    value: function _updateClassName() {
      var className = this.props.className;
      var psClassNames = this._container.className.split(" ").filter(function(name) {
        return name.match(/^ps([-_].+|)$/);
      }).join(" ");
      if (this._container) {
        this._container.className = "scrollbar-container".concat(className ? " ".concat(className) : "").concat(psClassNames ? " ".concat(psClassNames) : "");
      }
    }
  }, {
    key: "updateScroll",
    value: function updateScroll() {
      var onSync = this.props.onSync;
      if (typeof onSync === "function") {
        onSync(this._ps);
      } else {
        this._ps.update();
      }
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this$props$container, _this$props;
      this._container = ref;
      (_this$props$container = (_this$props = this.props).containerRef) === null || _this$props$container === void 0 ? void 0 : _this$props$container.call(_this$props, ref);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, className = _this$props2.className, style = _this$props2.style, option = _this$props2.option, options = _this$props2.options, containerRef = _this$props2.containerRef, onScrollY = _this$props2.onScrollY, onScrollX = _this$props2.onScrollX, onScrollUp = _this$props2.onScrollUp, onScrollDown = _this$props2.onScrollDown, onScrollLeft = _this$props2.onScrollLeft, onScrollRight = _this$props2.onScrollRight, onYReachStart = _this$props2.onYReachStart, onYReachEnd = _this$props2.onYReachEnd, onXReachStart = _this$props2.onXReachStart, onXReachEnd = _this$props2.onXReachEnd, component = _this$props2.component, onSync = _this$props2.onSync, children = _this$props2.children, remainProps = _objectWithoutProperties19(_this$props2, _excluded19);
      var Comp = typeof component === "undefined" ? "div" : component;
      return import_react20.default.createElement(Comp, _extends18({
        style,
        ref: this.handleRef
      }, remainProps), children);
    }
  }]);
  return ScrollBar2;
}(import_react20.Component);
true ? ScrollBar.propTypes = {
  children: import_prop_types19.PropTypes.node.isRequired,
  className: import_prop_types19.PropTypes.string,
  style: import_prop_types19.PropTypes.object,
  option: import_prop_types19.PropTypes.object,
  options: import_prop_types19.PropTypes.object,
  containerRef: import_prop_types19.PropTypes.func,
  onScrollY: import_prop_types19.PropTypes.func,
  onScrollX: import_prop_types19.PropTypes.func,
  onScrollUp: import_prop_types19.PropTypes.func,
  onScrollDown: import_prop_types19.PropTypes.func,
  onScrollLeft: import_prop_types19.PropTypes.func,
  onScrollRight: import_prop_types19.PropTypes.func,
  onYReachStart: import_prop_types19.PropTypes.func,
  onYReachEnd: import_prop_types19.PropTypes.func,
  onXReachStart: import_prop_types19.PropTypes.func,
  onXReachEnd: import_prop_types19.PropTypes.func,
  onSync: import_prop_types19.PropTypes.func,
  component: import_prop_types19.PropTypes.string
} : void 0;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Scroll/index.js
var Scroll_default = ScrollBar;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Loader/Loader.js
var import_react21 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
var import_classnames18 = __toESM(require_classnames());
function _typeof7(o) {
  "@babel/helpers - typeof";
  return _typeof7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof7(o);
}
var _excluded20 = ["className", "variant", "children"];
function _extends19() {
  _extends19 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends19.apply(this, arguments);
}
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == _typeof7(i) ? i : String(i);
}
function _toPrimitive5(t, r) {
  if ("object" != _typeof7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties20(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose20(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose20(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Loader = function Loader2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? void 0 : _ref$className, _ref$variant = _ref2.variant, variant = _ref$variant === void 0 ? "default" : _ref$variant, children = _ref2.children, rest = _objectWithoutProperties20(_ref2, _excluded20);
  var cName2 = "".concat(prefix, "-loader");
  var textClass = import_react21.default.Children.count(children) > 0 ? "".concat(cName2, "--content") : "";
  return import_react21.default.createElement("div", _extends19({}, rest, {
    className: (0, import_classnames18.default)(cName2, textClass, _defineProperty6({}, "".concat(cName2, "--variant-").concat(variant), variant !== "default"), className),
    role: "status"
  }), children);
};
true ? Loader.propTypes = {
  /** Primary content. */
  children: import_prop_types20.default.node,
  /** Additional classes. */
  className: import_prop_types20.default.string,
  /** Loader variant */
  variant: import_prop_types20.default.oneOf(["default"])
} : void 0;
var Loader_default = Loader;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Loader/index.js
var Loader_default2 = Loader_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Overlay/Overlay.js
var import_react22 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
var import_classnames19 = __toESM(require_classnames());
function _typeof8(o) {
  "@babel/helpers - typeof";
  return _typeof8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof8(o);
}
var _excluded21 = ["className", "children", "blur", "grayscale"];
function _extends20() {
  _extends20 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends20.apply(this, arguments);
}
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == _typeof8(i) ? i : String(i);
}
function _toPrimitive6(t, r) {
  if ("object" != _typeof8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties21(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose21(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose21(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Overlay = function Overlay2(_ref2) {
  var _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, _ref$blur = _ref2.blur, blur = _ref$blur === void 0 ? false : _ref$blur, _ref$grayscale = _ref2.grayscale, grayscale = _ref$grayscale === void 0 ? false : _ref$grayscale, rest = _objectWithoutProperties21(_ref2, _excluded21);
  var cName2 = "".concat(prefix, "-overlay");
  var blurClass = "".concat(cName2, "--blur");
  var grayscaleClass = "".concat(cName2, "--grayscale");
  return import_react22.default.createElement("div", _extends20({}, rest, {
    className: (0, import_classnames19.default)(cName2, _defineProperty7({}, blurClass, blur), _defineProperty7({}, grayscaleClass, grayscale), className)
  }), import_react22.default.createElement("div", {
    className: "".concat(cName2, "__content")
  }, children));
};
true ? Overlay.propTypes = {
  /** Primary content. */
  children: import_prop_types21.default.node,
  /** Additional classes. */
  className: import_prop_types21.default.string,
  /**
   * Blur overlayed content.
   * This feature is experimental and have limited browser support
   */
  blur: import_prop_types21.default.bool,
  /**
   * Grayscale overlayed content.
   * This feature is experimental and have limited browser support
   */
  grayscale: import_prop_types21.default.bool
} : void 0;
var Overlay_default = Overlay;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Overlay/index.js
var Overlay_default2 = Overlay_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/Message.js
var import_react29 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
var import_classnames26 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/MessageHeader.js
var import_react23 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
var import_classnames20 = __toESM(require_classnames());
var _excluded22 = ["sender", "sentTime", "children", "className"];
function _extends21() {
  _extends21 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends21.apply(this, arguments);
}
function _objectWithoutProperties22(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose22(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose22(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageHeader = function MessageHeader2(_ref2) {
  var _ref$sender = _ref2.sender, sender = _ref$sender === void 0 ? "" : _ref$sender, _ref$sentTime = _ref2.sentTime, sentTime = _ref$sentTime === void 0 ? "" : _ref$sentTime, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties22(_ref2, _excluded22);
  var cName2 = "".concat(prefix, "-message__header");
  return import_react23.default.createElement("div", _extends21({}, rest, {
    className: (0, import_classnames20.default)(cName2, className)
  }), typeof children !== "undefined" ? children : import_react23.default.createElement(import_react23.default.Fragment, null, import_react23.default.createElement("div", {
    className: "".concat(prefix, "-message__sender-name")
  }, sender), import_react23.default.createElement("div", {
    className: "".concat(prefix, "-message__sent-time")
  }, sentTime)));
};
MessageHeader.displayName = "Message.Header";
true ? MessageHeader.propTypes = {
  sender: import_prop_types22.default.string,
  sentTime: import_prop_types22.default.string,
  /** Primary content. */
  children: import_prop_types22.default.node,
  /** Additional classes. */
  className: import_prop_types22.default.string
} : void 0;
var MessageHeader_default = MessageHeader;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/MessageFooter.js
var import_react24 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
var import_classnames21 = __toESM(require_classnames());
var _excluded23 = ["sender", "sentTime", "children", "className"];
function _extends22() {
  _extends22 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends22.apply(this, arguments);
}
function _objectWithoutProperties23(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose23(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose23(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageFooter = function MessageFooter2(_ref2) {
  var _ref$sender = _ref2.sender, sender = _ref$sender === void 0 ? "" : _ref$sender, _ref$sentTime = _ref2.sentTime, sentTime = _ref$sentTime === void 0 ? "" : _ref$sentTime, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties23(_ref2, _excluded23);
  var cName2 = "".concat(prefix, "-message__footer");
  return import_react24.default.createElement("div", _extends22({}, rest, {
    className: (0, import_classnames21.default)(cName2, className)
  }), typeof children !== "undefined" ? children : import_react24.default.createElement(import_react24.default.Fragment, null, import_react24.default.createElement("div", {
    className: "".concat(prefix, "-message__sender-name")
  }, sender), import_react24.default.createElement("div", {
    className: "".concat(prefix, "-message__sent-time")
  }, sentTime)));
};
MessageFooter.displayName = "Message.Footer";
true ? MessageFooter.propTypes = {
  sender: import_prop_types23.default.string,
  sentTime: import_prop_types23.default.string,
  /** Primary content. */
  children: import_prop_types23.default.node,
  /** Additional classes. */
  className: import_prop_types23.default.string
} : void 0;
var MessageFooter_default = MessageFooter;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/MessageCustomContent.js
var import_react25 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
var import_classnames22 = __toESM(require_classnames());
var MessageCustomContent = function MessageCustomContent2(_ref2) {
  var children = _ref2.children, className = _ref2.className;
  var cName2 = "".concat(prefix, "-message__custom-content");
  return import_react25.default.createElement("div", {
    className: (0, import_classnames22.default)(cName2, className)
  }, children);
};
MessageCustomContent.displayName = "Message.CustomContent";
true ? MessageCustomContent.propTypes = {
  /** Primary content. */
  children: import_prop_types24.default.node,
  /** Additional classes. */
  className: import_prop_types24.default.string
} : void 0;
var MessageCustomContent_default = MessageCustomContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/MessageImageContent.js
var import_react26 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
var import_classnames23 = __toESM(require_classnames());
var MessageImageContent = function MessageImageContent2(_ref2) {
  var src = _ref2.src, width = _ref2.width, height = _ref2.height, alt = _ref2.alt, className = _ref2.className;
  var cName2 = "".concat(prefix, "-message__image-content");
  var style = {
    width: typeof width === "number" ? "".concat(width, "px") : typeof width === "string" ? width : void 0,
    height: typeof height === "number" ? "".concat(height, "px") : typeof height === "string" ? height : void 0
  };
  return import_react26.default.createElement("div", {
    className: (0, import_classnames23.default)(cName2, className)
  }, import_react26.default.createElement("img", {
    src,
    style,
    alt
  }));
};
MessageImageContent.displayName = "Message.ImageContent";
true ? MessageImageContent.propTypes = {
  /** Image source*/
  src: import_prop_types25.default.string,
  /** Image width */
  width: import_prop_types25.default.oneOfType([import_prop_types25.default.string, import_prop_types25.default.number]),
  /** Image height */
  height: import_prop_types25.default.oneOfType([import_prop_types25.default.string, import_prop_types25.default.number]),
  /** Alternate text for image */
  alt: import_prop_types25.default.string,
  /** Additional classes. */
  className: import_prop_types25.default.string
} : void 0;
var MessageImageContent_default = MessageImageContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/MessageHtmlContent.js
var import_react27 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
var import_classnames24 = __toESM(require_classnames());
var MessageHtmlContent = function MessageHtmlContent2(_ref2) {
  var html = _ref2.html, className = _ref2.className;
  var cName2 = "".concat(prefix, "-message__html-content");
  var createMarkup = function createMarkup2() {
    return {
      __html: html
    };
  };
  return import_react27.default.createElement("div", {
    className: (0, import_classnames24.default)(cName2, className),
    dangerouslySetInnerHTML: createMarkup()
  });
};
MessageHtmlContent.displayName = "Message.HtmlContent";
true ? MessageHtmlContent.propTypes = {
  /**
   * Html string will be rendered in component using dangerouslySetInnerHTML
   */
  html: import_prop_types26.default.string,
  /** Additional classes. */
  className: import_prop_types26.default.string
} : void 0;
var MessageHtmlContent_default = MessageHtmlContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/MessageTextContent.js
var import_react28 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
var import_classnames25 = __toESM(require_classnames());
var MessageTextContent = function MessageTextContent2(_ref2) {
  var text = _ref2.text, className = _ref2.className, children = _ref2.children;
  var cName2 = "".concat(prefix, "-message__text-content");
  var content = children !== null && children !== void 0 ? children : text;
  return import_react28.default.createElement("div", {
    className: (0, import_classnames25.default)(cName2, className)
  }, content);
};
MessageTextContent.displayName = "Message.TextContent";
true ? MessageTextContent.propTypes = {
  /** Primary content - message text */
  children: import_prop_types27.default.string,
  /** Message text. Property has precedence over children */
  text: import_prop_types27.default.string,
  /** Additional classes. */
  className: import_prop_types27.default.string
} : void 0;
var MessageTextContent_default = MessageTextContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/Message.js
var _excluded24 = ["model", "avatarSpacer", "avatarPosition", "type", "payload", "children", "className"];
function _extends23() {
  _extends23 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends23.apply(this, arguments);
}
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == _typeof9(i) ? i : String(i);
}
function _toPrimitive7(t, r) {
  if ("object" != _typeof9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _typeof9(o) {
  "@babel/helpers - typeof";
  return _typeof9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof9(o);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties24(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose24(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose24(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Message = function Message2(_ref2) {
  var _ref22, _ref3;
  var _ref$model = _ref2.model, _ref$model$message = _ref$model.message, message = _ref$model$message === void 0 ? "" : _ref$model$message, _ref$model$sentTime = _ref$model.sentTime, sentTime = _ref$model$sentTime === void 0 ? "" : _ref$model$sentTime, _ref$model$sender = _ref$model.sender, sender = _ref$model$sender === void 0 ? "" : _ref$model$sender, _ref$model$direction = _ref$model.direction, direction = _ref$model$direction === void 0 ? 1 : _ref$model$direction, position = _ref$model.position, modelType = _ref$model.type, modelPayload = _ref$model.payload, _ref$avatarSpacer = _ref2.avatarSpacer, avatarSpacer = _ref$avatarSpacer === void 0 ? false : _ref$avatarSpacer, _ref$avatarPosition = _ref2.avatarPosition, avatarPosition = _ref$avatarPosition === void 0 ? void 0 : _ref$avatarPosition, _ref$type = _ref2.type, type = _ref$type === void 0 ? "html" : _ref$type, argPayload = _ref2.payload, children = _ref2.children, className = _ref2.className, rest = _objectWithoutProperties24(_ref2, _excluded24);
  var cName2 = "".concat(prefix, "-message");
  var _getChildren = getChildren(children, [Avatar_default2, MessageHeader_default, MessageFooter_default, MessageHtmlContent_default, MessageTextContent_default, MessageImageContent_default, MessageCustomContent_default]), _getChildren2 = _slicedToArray3(_getChildren, 7), avatar = _getChildren2[0], header = _getChildren2[1], footer = _getChildren2[2], htmlContent = _getChildren2[3], textContent = _getChildren2[4], imageContent = _getChildren2[5], customContent = _getChildren2[6];
  var directionClass = function() {
    if (direction === 0 || direction === "incoming") {
      return "".concat(cName2, "--incoming");
    } else if (direction === 1 || direction === "outgoing") {
      return "".concat(cName2, "--outgoing");
    }
  }();
  var avatarPositionClass = function(position2) {
    var classPrefix = "".concat(cName2, "--avatar-");
    if (position2 === 0 || position2 === "top-left" || position2 === "tl") {
      return "".concat(classPrefix, "tl");
    } else if (position2 === 1 || position2 === "top-right" || position2 === "tr") {
      return "".concat(classPrefix, "tr");
    } else if (position2 === 2 || position2 === "bottom-right" || position2 === "br") {
      return "".concat(classPrefix, "br");
    } else if (position2 === 3 || position2 === "bottom-left" || position2 === "bl") {
      return "".concat(classPrefix, "bl");
    } else if (position2 === 4 || position2 === "center-left" || position2 === "cl") {
      return "".concat(classPrefix, "cl");
    } else if (position2 === 5 || position2 === "center-right" || position2 === "cr") {
      return "".concat(classPrefix, "cr");
    }
  }(avatarPosition);
  var positionClass = function(position2) {
    var classPrefix = "".concat(prefix, "-message--");
    if (position2 === "single" || position2 === 0) {
      return "".concat(classPrefix, "single");
    } else if (position2 === "first" || position2 === 1) {
      return "".concat(classPrefix, "first");
    } else if (position2 === "normal" || position2 === 2) {
      return "";
    } else if (position2 === "last" || position2 === 3) {
      return "".concat(classPrefix, "last");
    }
  }(position);
  var ariaLabel = function() {
    if ((sender === null || sender === void 0 ? void 0 : sender.length) > 0 && (sentTime === null || sentTime === void 0 ? void 0 : sentTime.length) > 0) {
      return "".concat(sender, ": ").concat(sentTime);
    } else if ((sender === null || sender === void 0 ? void 0 : sender.length) > 0 && (typeof sentTime === "undefined" || (sentTime === null || sentTime === void 0 ? void 0 : sentTime.length) === 0)) {
      return sender;
    } else {
      return null;
    }
  }();
  var childContent = (_ref22 = (_ref3 = htmlContent !== null && htmlContent !== void 0 ? htmlContent : textContent) !== null && _ref3 !== void 0 ? _ref3 : imageContent) !== null && _ref22 !== void 0 ? _ref22 : customContent;
  var messageContent = childContent !== null && childContent !== void 0 ? childContent : function() {
    var messageType = modelType !== null && modelType !== void 0 ? modelType : type;
    var payloadFromModel = modelPayload !== null && modelPayload !== void 0 ? modelPayload : message;
    var payload = payloadFromModel !== null && payloadFromModel !== void 0 ? payloadFromModel : argPayload;
    var payloadName = _typeof9(payload) === "object" ? getComponentName(payload) : "";
    if (messageType === "html" && payloadName !== "Message.CustomContent") {
      return import_react29.default.createElement(MessageHtmlContent_default, {
        html: payload
      });
    } else if (messageType === "text") {
      return import_react29.default.createElement(MessageTextContent_default, {
        text: payload
      });
    } else if (messageType === "image") {
      return import_react29.default.createElement(MessageImageContent_default, payload);
    } else if (messageType === "custom" || payloadName === "Message.CustomContent") {
      return payload;
    }
  }();
  return import_react29.default.createElement("section", _extends23({}, rest, {
    "aria-label": ariaLabel,
    className: (0, import_classnames26.default)(cName2, directionClass, _defineProperty8({}, "".concat(cName2, "--avatar-spacer"), avatarSpacer), positionClass, avatarPositionClass, className)
  }, _defineProperty8({}, "data-".concat(prefix, "-message"), "")), typeof avatar !== "undefined" && import_react29.default.createElement("div", {
    className: "".concat(cName2, "__avatar")
  }, avatar), import_react29.default.createElement("div", {
    className: "".concat(cName2, "__content-wrapper")
  }, header, import_react29.default.createElement("div", {
    className: "".concat(cName2, "__content")
  }, messageContent), footer));
};
true ? Message.propTypes = {
  /**
   * Model object
   * **message**: string - Message to send
   * **sentTime**: string - Message sent time
   * **sender**: string - Sender name
   * **direction**: "incoming" | "outgoing" | 0 | 1 - Message direction
   * **position**: "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3 - Message position in feed
   * **type**: "html" | "text" | "image" | "custom"
   */
  model: import_prop_types28.default.shape({
    /** Chat message to display - content. */
    message: import_prop_types28.default.string,
    sentTime: import_prop_types28.default.string,
    sender: import_prop_types28.default.string,
    direction: import_prop_types28.default.oneOf(["incoming", "outgoing", 0, 1]),
    /** Position. */
    position: import_prop_types28.default.oneOf(["single", "first", "normal", "last", 0, 1, 2, 3]),
    /**
     * Message type
     * This property can also be added directly to component, but property from model has precedence.
     * Each type can have payload defined in model.payload or in payload property.
     * Allowed payloads for different message are described in payload property.
     */
    type: import_prop_types28.default.oneOf(["html", "text", "image", "custom"]),
    /**
     * Message payload.
     * Must be adequate to message type.
     * Allowed payloads for different message types:
     * html: String - Html string to render,
     * text: String - Text to render,
     * image: Object - for object properties please see **&lt;Message.ImageContent /&gt** properties,
     * custom: **Message.CustomContent** - Component
     */
    payload: import_prop_types28.default.oneOfType([import_prop_types28.default.string, import_prop_types28.default.object, allowedChildren([MessageCustomContent_default])])
  }),
  avatarSpacer: import_prop_types28.default.bool,
  avatarPosition: import_prop_types28.default.oneOf(["tl", "tr", "cl", "cr", "bl", "br", "top-left", "top-right", "center-left", "center-right", "bottom-left", "bottom-right"]),
  /**
   * Primary content.
   * Content from payload has precedence over Message.*Content properties.
   * Whe
   * Allowed components:
   *
   * * &lt;Avatar /&gt;
   * * &lt;Message.Header /&gt;
   * * &lt;Message.Footer /&gt;
   * * &lt;Message.HtmlContent /&gt;
   * * &lt;Message.TextContent /&gt;
   * * &lt;Message.ImageContent /&gt;
   * * &lt;Message.CustomContent /&gt;
   */
  children: allowedChildren([Avatar_default2, MessageHeader_default, MessageFooter_default, MessageHtmlContent_default, MessageTextContent_default, MessageImageContent_default, MessageCustomContent_default]),
  /** Additional classes. */
  className: import_prop_types28.default.string,
  /**
   * Message type
   * This property can also exists in model. In that case value from model has precedence.
   **/
  type: import_prop_types28.default.oneOf(["html", "text", "image", "custom"]),
  /**
   * Message payload.
   * Must be adequate to message type.
   * Allowed payloads for different message types:
   * html: String - Html string to render,
   * text: String - Text to render,
   * image: Object - for object properties please see **&lt;Message.ImageContent &gt/>** properties,
   * custom: **Message.CustomContent** - Component
   */
  payload: import_prop_types28.default.oneOfType([import_prop_types28.default.string, allowedChildren([MessageCustomContent_default])])
} : void 0;
Message.Header = MessageHeader_default;
Message.HtmlContent = MessageHtmlContent_default;
Message.TextContent = MessageTextContent_default;
Message.ImageContent = MessageImageContent_default;
Message.CustomContent = MessageCustomContent_default;
Message.Footer = MessageFooter_default;
var Message_default = Message;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Message/index.js
var Message_default2 = Message_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageGroup/MessageGroup.js
var import_react33 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
var import_classnames30 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageGroup/MessageGroupHeader.js
var import_react30 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
var import_classnames27 = __toESM(require_classnames());
var _excluded25 = ["children", "className"];
function _extends24() {
  _extends24 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends24.apply(this, arguments);
}
function _objectWithoutProperties25(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose25(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose25(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageGroupHeader = function MessageGroupHeader2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties25(_ref2, _excluded25);
  var cName2 = "".concat(prefix, "-message-group__header");
  return import_react30.default.createElement("div", _extends24({}, rest, {
    className: (0, import_classnames27.default)(cName2, className)
  }), children);
};
MessageGroupHeader.displayName = "MessageGroup.Header";
true ? MessageGroupHeader.propTypes = {
  /** Primary content. */
  children: import_prop_types29.default.node,
  /** Additional classes. */
  className: import_prop_types29.default.string
} : void 0;
var MessageGroupHeader_default = MessageGroupHeader;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageGroup/MessageGroupFooter.js
var import_react31 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
var import_classnames28 = __toESM(require_classnames());
var _excluded26 = ["children", "className"];
function _extends25() {
  _extends25 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends25.apply(this, arguments);
}
function _objectWithoutProperties26(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose26(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose26(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageGroupFooter = function MessageGroupFooter2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties26(_ref2, _excluded26);
  var cName2 = "".concat(prefix, "-message-group__footer");
  return import_react31.default.createElement("div", _extends25({}, rest, {
    className: (0, import_classnames28.default)(cName2, className)
  }), children);
};
MessageGroupFooter.displayName = "MessageGroup.Footer";
true ? MessageGroupFooter.propTypes = {
  /** Primary content. */
  children: import_prop_types30.default.node,
  /** Additional classes. */
  className: import_prop_types30.default.string
} : void 0;
var MessageGroupFooter_default = MessageGroupFooter;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageGroup/MessageGroupMessages.js
var import_react32 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
var import_classnames29 = __toESM(require_classnames());
var _excluded27 = ["children", "className"];
function _extends26() {
  _extends26 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends26.apply(this, arguments);
}
function _objectWithoutProperties27(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose27(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose27(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageGroupMessages = function MessageGroupMessages2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties27(_ref2, _excluded27);
  var cName2 = "".concat(prefix, "-message-group");
  return import_react32.default.createElement("div", _extends26({}, rest, {
    className: (0, import_classnames29.default)("".concat(cName2, "__messages"), className)
  }), children);
};
MessageGroupMessages.displayName = "MessageGroup.Messages";
true ? MessageGroupMessages.propTypes = {
  /**
   * Messages.
   * Allowed node:
   *
   * * &lt;Message /&gt;
   */
  children: import_prop_types31.default.node,
  /** Additional classes. */
  className: import_prop_types31.default.string
} : void 0;
var MessageGroupMessages_default = MessageGroupMessages;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageGroup/MessageGroup.js
function _typeof10(o) {
  "@babel/helpers - typeof";
  return _typeof10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof10(o);
}
var _excluded28 = ["direction", "avatarPosition", "sender", "sentTime", "children", "className"];
function _extends27() {
  _extends27 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends27.apply(this, arguments);
}
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return "symbol" == _typeof10(i) ? i : String(i);
}
function _toPrimitive8(t, r) {
  if ("object" != _typeof10(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof10(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties28(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose28(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose28(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageGroup = function MessageGroup2(_ref2) {
  var _ref$direction = _ref2.direction, direction = _ref$direction === void 0 ? "incoming" : _ref$direction, _ref$avatarPosition = _ref2.avatarPosition, avatarPosition = _ref$avatarPosition === void 0 ? void 0 : _ref$avatarPosition, _ref$sender = _ref2.sender, sender = _ref$sender === void 0 ? "" : _ref$sender, _ref$sentTime = _ref2.sentTime, sentTime = _ref$sentTime === void 0 ? "" : _ref$sentTime, children = _ref2.children, className = _ref2.className, rest = _objectWithoutProperties28(_ref2, _excluded28);
  var cName2 = "".concat(prefix, "-message-group");
  var directionClass = function() {
    if (direction === 0 || direction === "incoming") {
      return "".concat(cName2, "--incoming");
    } else if (direction === 1 || direction === "outgoing") {
      return "".concat(cName2, "--outgoing");
    }
  }();
  var avatarPositionClass = function() {
    var prefix2 = "".concat(cName2, "--avatar-");
    if (typeof avatarPosition === "string") {
      if (avatarPosition === "tl" || avatarPosition === "top-left" || avatarPosition === "tr" || avatarPosition === "top-right" || avatarPosition === "bl" || avatarPosition === "bottom-right" || avatarPosition === "br" || avatarPosition === "bottom-right" || avatarPosition === "cl" || avatarPosition === "center-left" || avatarPosition === "cr" || avatarPosition === "center-right") {
        return "".concat(prefix2).concat(avatarPosition);
      }
    }
  }();
  var _getChildren = getChildren(children, [Avatar_default2, MessageGroupHeader_default, MessageGroupFooter_default, MessageGroupMessages_default]), _getChildren2 = _slicedToArray4(_getChildren, 4), avatar = _getChildren2[0], header = _getChildren2[1], footer = _getChildren2[2], messages = _getChildren2[3];
  var ariaLabel = function() {
    if (sender.length > 0 && sentTime.length > 0) {
      return "".concat(sender, ": ").concat(sentTime);
    } else if (sender.length > 0 && sentTime.length === 0) {
      return sender;
    } else {
      return null;
    }
  }();
  return import_react33.default.createElement("section", _extends27({
    "aria-label": ariaLabel
  }, rest, {
    className: (0, import_classnames30.default)(cName2, directionClass, avatarPositionClass, className)
  }, _defineProperty9({}, "data-".concat(prefix, "-message-group"), "")), typeof avatar !== "undefined" && import_react33.default.createElement("div", {
    className: "".concat(cName2, "__avatar")
  }, avatar), import_react33.default.createElement("div", {
    className: "".concat(cName2, "__content")
  }, header, messages, footer));
};
true ? MessageGroup.propTypes = {
  /** Direction. */
  direction: import_prop_types32.default.oneOf(["incoming", "outgoing", 0, 1]),
  /** Avatar position. */
  avatarPosition: import_prop_types32.default.oneOf(["tl", "tr", "br", "bl", "cl", "cr"]),
  sentTime: import_prop_types32.default.string,
  sender: import_prop_types32.default.string,
  /**
   * Primary content.
   * Allowed nodes:
   *
   * * &lt;Avatar /&gt;
   * * &lt;MessageGroup.Header /&gt;
   * * &lt;MessageGroup.Footer /&gt;
   * * &lt;MessageGroup.Messages /&gt;
   * </ul>
   */
  children: allowedChildren([Avatar_default2, MessageGroupHeader_default, MessageGroupFooter_default, MessageGroupMessages_default]),
  /** Additional classes. */
  className: import_prop_types32.default.string
} : void 0;
MessageGroup.Header = MessageGroupHeader_default;
MessageGroup.Footer = MessageGroupFooter_default;
MessageGroup.Messages = MessageGroupMessages_default;
var MessageGroup_default = MessageGroup;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageGroup/index.js
var MessageGroup_default2 = MessageGroup_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageSeparator/MessageSeparator.js
var import_react34 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
var import_classnames31 = __toESM(require_classnames());
var _excluded29 = ["content", "as", "children", "className"];
function _extends28() {
  _extends28 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends28.apply(this, arguments);
}
function _objectWithoutProperties29(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose29(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose29(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageSeparator = function MessageSeparator2(_ref2) {
  var _ref$content = _ref2.content, content = _ref$content === void 0 ? void 0 : _ref$content, _ref$as = _ref2.as, as = _ref$as === void 0 ? "div" : _ref$as, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties29(_ref2, _excluded29);
  var cName2 = "".concat(prefix, "-message-separator");
  var Tag = function() {
    if (typeof as === "string" && as.length > 0) {
      return as;
    } else {
      return "div";
    }
  }();
  return import_react34.default.createElement(Tag, _extends28({}, rest, {
    className: (0, import_classnames31.default)(cName2, className)
  }), isChildrenNil(children) === true ? content : children);
};
true ? MessageSeparator.propTypes = {
  /** Primary content. */
  children: import_prop_types33.default.node,
  /** Shorthand for primary content. */
  content: import_prop_types33.default.node,
  /** An element type to render as. */
  as: import_prop_types33.default.elementType,
  /** Additional classes. */
  className: import_prop_types33.default.string
} : void 0;
var MessageSeparator_default = MessageSeparator;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageSeparator/index.js
var MessageSeparator_default2 = MessageSeparator_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageList/MessageListContent.js
var import_react35 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
var _excluded30 = ["className", "children"];
function _extends29() {
  _extends29 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends29.apply(this, arguments);
}
function _objectWithoutProperties30(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose30(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose30(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MessageListContent = function MessageListContent2(_ref2) {
  var className = _ref2.className, children = _ref2.children, rest = _objectWithoutProperties30(_ref2, _excluded30);
  return import_react35.default.createElement("div", _extends29({}, rest, {
    className
  }), children);
};
MessageListContent.displayName = "MessageList.Content";
true ? MessageListContent.propTypes = {
  /** Primary content. Message elements */
  children: import_prop_types34.default.node,
  /** Additional classes. */
  className: import_prop_types34.default.string
} : void 0;
var MessageListContent_default = MessageListContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageList/MessageList.js
var _excluded31 = ["children", "typingIndicator", "loading", "loadingMore", "loadingMorePosition", "onYReachStart", "onYReachEnd", "className", "disableOnYReachWhenNoScroll", "scrollBehavior", "autoScrollToBottom", "autoScrollToBottomOnMount"];
function _typeof11(o) {
  "@babel/helpers - typeof";
  return _typeof11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof11(o);
}
function _extends30() {
  _extends30 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends30.apply(this, arguments);
}
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties31(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose31(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose31(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey9(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper2(t, o, e) {
  return o = _getPrototypeOf2(o), _possibleConstructorReturn2(t, _isNativeReflectConstruct2() ? Reflect.construct(o, e || [], _getPrototypeOf2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn2(self, call) {
  if (call && (_typeof11(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self);
}
function _isNativeReflectConstruct2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct5() {
    return !!t;
  })();
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf5(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p2) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf2(o, p2);
}
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return "symbol" == _typeof11(i) ? i : String(i);
}
function _toPrimitive9(t, r) {
  if ("object" != _typeof11(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof11(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var MessageListInner = function(_React$Component) {
  _inherits2(MessageListInner2, _React$Component);
  function MessageListInner2(props) {
    var _this;
    _classCallCheck3(this, MessageListInner2);
    _this = _callSuper2(this, MessageListInner2, [props]);
    _defineProperty10(_assertThisInitialized2(_this), "handleResize", function() {
      if (_this.containerRef.current.clientHeight < _this.lastClientHeight) {
        _this.scrollToEnd(_this.props.scrollBehavior);
      }
      _this.scrollRef.current.updateScroll();
    });
    _defineProperty10(_assertThisInitialized2(_this), "handleContainerResize", function() {
      if (_this.resizeTicking === false) {
        window.requestAnimationFrame(function() {
          var list = _this.containerRef.current;
          if (list) {
            var currentHeight = list.clientHeight;
            var diff = currentHeight - _this.lastClientHeight;
            if (diff >= 1) {
              if (_this.preventScrollTop === false) {
                list.scrollTop = Math.round(list.scrollTop) - diff;
              }
            } else {
              list.scrollTop = list.scrollTop - diff;
            }
            _this.lastClientHeight = list.clientHeight;
            _this.scrollRef.current.updateScroll();
          }
          _this.resizeTicking = false;
        });
        _this.resizeTicking = true;
      }
    });
    _defineProperty10(_assertThisInitialized2(_this), "isSticked", function() {
      var list = _this.containerRef.current;
      return list.scrollHeight === Math.round(list.scrollTop + list.clientHeight);
    });
    _defineProperty10(_assertThisInitialized2(_this), "handleScroll", function() {
      if (_this.scrollTicking === false) {
        window.requestAnimationFrame(function() {
          if (_this.noScroll === false) {
            _this.preventScrollTop = _this.isSticked();
          } else {
            _this.noScroll = false;
          }
          _this.scrollTicking = false;
        });
        _this.scrollTicking = true;
      }
    });
    _defineProperty10(_assertThisInitialized2(_this), "getLastMessageOrGroup", function() {
      var lastElement = _this.containerRef.current.querySelector("[data-".concat(prefix, "-message-list]>[data-").concat(prefix, "-message]:last-of-type,[data-").concat(prefix, "-message-list]>[data-").concat(prefix, "-message-group]:last-of-type"));
      var lastMessageInGroup = lastElement === null || lastElement === void 0 ? void 0 : lastElement.querySelector("[data-".concat(prefix, "-message]:last-of-type"));
      return {
        lastElement,
        lastMessageInGroup
      };
    });
    _this.scrollPointRef = import_react36.default.createRef();
    _this.containerRef = import_react36.default.createRef();
    _this.scrollRef = import_react36.default.createRef();
    _this.lastClientHeight = 0;
    _this.preventScrollTop = false;
    _this.resizeObserver = void 0;
    _this.scrollTicking = false;
    _this.resizeTicking = false;
    _this.noScroll = void 0;
    return _this;
  }
  _createClass3(MessageListInner2, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      var list = this.containerRef.current;
      var topHeight = Math.round(list.scrollTop + list.clientHeight);
      var sticky = list.scrollHeight === topHeight || list.scrollHeight + 1 === topHeight || list.scrollHeight - 1 === topHeight;
      return {
        sticky,
        clientHeight: list.clientHeight,
        scrollHeight: list.scrollHeight,
        lastMessageOrGroup: this.getLastMessageOrGroup(),
        diff: list.scrollHeight - list.scrollTop
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoScrollToBottomOnMount === true) {
        this.scrollToEnd(this.props.scrollBehavior);
      }
      this.lastClientHeight = this.containerRef.current.clientHeight;
      window.addEventListener("resize", this.handleResize);
      if (typeof window.ResizeObserver === "function") {
        this.resizeObserver = new ResizeObserver(this.handleContainerResize);
        this.resizeObserver.observe(this.containerRef.current);
      }
      this.containerRef.current.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var autoScrollToBottom = this.props.autoScrollToBottom;
      if (typeof snapshot !== "undefined") {
        var list = this.containerRef.current;
        var _this$getLastMessageO = this.getLastMessageOrGroup(), lastElement = _this$getLastMessageO.lastElement, lastMessageInGroup = _this$getLastMessageO.lastMessageInGroup;
        if (lastElement === snapshot.lastMessageOrGroup.lastElement) {
          if (typeof lastMessageInGroup === "undefined" || lastMessageInGroup === snapshot.lastMessageOrGroup.lastMessageInGroup) {
            list.scrollTop = list.scrollHeight - snapshot.diff + (this.lastClientHeight - list.clientHeight);
          }
        }
        if (snapshot.sticky === true) {
          if (autoScrollToBottom === true) {
            this.scrollToEnd(this.props.scrollBehavior);
          }
          this.preventScrollTop = true;
        } else {
          if (snapshot.clientHeight < this.lastClientHeight) {
            var sHeight = list.scrollTop + this.lastClientHeight;
            if (list.scrollHeight === sHeight || list.scrollHeight + 1 === sHeight || list.scrollHeight - 1 === sHeight) {
              if (autoScrollToBottom === true) {
                this.scrollToEnd(this.props.scrollBehavior);
                this.preventScrollTop = true;
              }
            } else {
              this.preventScrollTop = false;
            }
          } else {
            this.preventScrollTop = false;
            if (lastElement === snapshot.lastMessageOrGroup.lastElement) {
              if (typeof lastMessageInGroup === "undefined" || lastMessageInGroup === snapshot.lastMessageOrGroup.lastMessageInGroup) {
                if (list.scrollTop === 0 && list.scrollHeight > snapshot.scrollHeight) {
                  list.scrollTop = list.scrollHeight - snapshot.scrollHeight;
                }
              }
            }
          }
        }
        this.lastClientHeight = snapshot.clientHeight;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      if (typeof this.resizeObserver !== "undefined") {
        this.resizeObserver.disconnect();
      }
      this.containerRef.current.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "scrollToEnd",
    value: function scrollToEnd() {
      var scrollBehavior = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.scrollBehavior;
      var list = this.containerRef.current;
      var scrollPoint = this.scrollPointRef.current;
      var parentRect = list.getBoundingClientRect();
      var childRect = scrollPoint.getBoundingClientRect();
      var scrollOffset = childRect.top + list.scrollTop - parentRect.top;
      if (list.scrollBy) {
        list.scrollBy({
          top: scrollOffset,
          behavior: scrollBehavior
        });
      } else {
        list.scrollTop = scrollOffset;
      }
      this.lastClientHeight = list.clientHeight;
      this.noScroll = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, children = _this$props.children, typingIndicator = _this$props.typingIndicator, loading = _this$props.loading, loadingMore = _this$props.loadingMore, loadingMorePosition = _this$props.loadingMorePosition, onYReachStart = _this$props.onYReachStart, onYReachEnd = _this$props.onYReachEnd, className = _this$props.className, disableOnYReachWhenNoScroll = _this$props.disableOnYReachWhenNoScroll, scrollBehavior = _this$props.scrollBehavior, autoScrollToBottom = _this$props.autoScrollToBottom, autoScrollToBottomOnMount = _this$props.autoScrollToBottomOnMount, rest = _objectWithoutProperties31(_this$props, _excluded31);
      var cName2 = "".concat(prefix, "-message-list");
      var _getChildren = getChildren(children, [MessageListContent_default]), _getChildren2 = _slicedToArray5(_getChildren, 1), customContent = _getChildren2[0];
      return import_react36.default.createElement("div", _extends30({}, rest, {
        className: (0, import_classnames32.default)(cName2, className)
      }), loadingMore && import_react36.default.createElement("div", {
        className: (0, import_classnames32.default)("".concat(cName2, "__loading-more"), _defineProperty10({}, "".concat(cName2, "__loading-more--bottom"), loadingMorePosition === "bottom"))
      }, import_react36.default.createElement(Loader_default2, null)), loading && import_react36.default.createElement(Overlay_default2, null, import_react36.default.createElement(Loader_default2, null)), import_react36.default.createElement(Scroll_default, _extends30({
        onYReachStart,
        onYReachEnd,
        onSync: function onSync(ps) {
          return ps.update(disableOnYReachWhenNoScroll);
        },
        className: "".concat(cName2, "__scroll-wrapper"),
        ref: this.scrollRef,
        containerRef: function containerRef(ref) {
          return _this2.containerRef.current = ref;
        },
        options: {
          suppressScrollX: true
        }
      }, _defineProperty10({}, "data-".concat(prefix, "-message-list"), ""), {
        style: {
          overscrollBehaviorY: "none",
          overflowAnchor: "auto",
          touchAction: "none"
        }
      }), customContent ? customContent : children, import_react36.default.createElement("div", {
        className: "".concat(cName2, "__scroll-to"),
        ref: this.scrollPointRef
      })), typeof typingIndicator !== "undefined" && import_react36.default.createElement("div", {
        className: "".concat(cName2, "__typing-indicator-container")
      }, typingIndicator));
    }
  }]);
  return MessageListInner2;
}(import_react36.default.Component);
MessageListInner.displayName = "MessageList";
function MessageListFunc(props, ref) {
  var msgListRef = (0, import_react36.useRef)();
  var scrollToBottom = function scrollToBottom2(scrollBehavior) {
    return msgListRef.current.scrollToEnd(scrollBehavior);
  };
  (0, import_react36.useImperativeHandle)(ref, function() {
    return {
      scrollToBottom
    };
  });
  return import_react36.default.createElement(MessageListInner, _extends30({
    ref: msgListRef
  }, props));
}
var MessageList = (0, import_react36.forwardRef)(MessageListFunc);
MessageList.propTypes = {
  /**
   * Primary content. Message elements
   * Allowed components:
   *
   * * &lt;Message /&gt;
   * * &lt;MessageGroup /&gt;
   * * &lt;MessageSeparator /&gt;
   * * &lt;MessageListContent /&gt;
   */
  children: allowedChildren([Message_default2, MessageGroup_default2, MessageSeparator_default2, MessageListContent_default]),
  /** Typing indicator element. */
  typingIndicator: import_prop_types35.default.node,
  /** Loading flag. */
  loading: import_prop_types35.default.bool,
  /** Loading more flag for infinity scroll. */
  loadingMore: import_prop_types35.default.bool,
  /** Loading more loader position. */
  loadingMorePosition: import_prop_types35.default.oneOf(["top", "bottom"]),
  /**
   * This is fired when the scrollbar reaches the beginning on the y axis.<br/>
   * It can be used to load previous messages using the infinite scroll.
   */
  onYReachStart: import_prop_types35.default.func,
  /**
   * This is fired when the scrollbar reaches the end on the y axis.<br/>
   * It can be used to load next messages using the infinite scroll.
   */
  onYReachEnd: import_prop_types35.default.func,
  /**
   * Disables onYReachStart and onYReachEnd events from being fired<br />
   * when the list is not scrollable.
   * This is set to false by default for backward compatibility.
   */
  disableOnYReachWhenNoScroll: import_prop_types35.default.bool,
  /**
   * Auto scroll to bottom
   */
  autoScrollToBottom: import_prop_types35.default.bool,
  /**
   * Auto scroll to bottom on mount
   */
  autoScrollToBottomOnMount: import_prop_types35.default.bool,
  /**
   * Scroll behavior
   * https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
   */
  scrollBehavior: import_prop_types35.default.oneOf(["auto", "smooth"]),
  /** Additional classes. */
  className: import_prop_types35.default.string
};
MessageList.defaultProps = {
  typingIndicator: void 0,
  loading: false,
  loadingMore: false,
  loadingMorePosition: "top",
  disableOnYReachWhenNoScroll: false,
  autoScrollToBottom: true,
  autoScrollToBottomOnMount: true,
  scrollBehavior: "auto"
};
true ? MessageListInner.propTypes = MessageList.propTypes : void 0;
MessageListInner.defaultProps = MessageList.defaultProps;
MessageList.Content = MessageListContent_default;
var MessageList_default = MessageList;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageList/index.js
var MessageList_default2 = MessageList_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageInput/MessageInput.js
var import_react38 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());
var import_classnames33 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ContentEditable/ContentEditable.js
var import_react37 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());
function _typeof12(o) {
  "@babel/helpers - typeof";
  return _typeof12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof12(o);
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey10(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper3(t, o, e) {
  return o = _getPrototypeOf3(o), _possibleConstructorReturn3(t, _isNativeReflectConstruct3() ? Reflect.construct(o, e || [], _getPrototypeOf3(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn3(self, call) {
  if (call && (_typeof12(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized3(self);
}
function _isNativeReflectConstruct3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct3 = function _isNativeReflectConstruct5() {
    return !!t;
  })();
}
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf5(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
function _assertThisInitialized3(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p2) {
  _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf3(o, p2);
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey10(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return "symbol" == _typeof12(i) ? i : String(i);
}
function _toPrimitive10(t, r) {
  if ("object" != _typeof12(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof12(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var replaceCaret = function replaceCaret2(el, activateAfterChange) {
  var isTargetFocused = document.activeElement === el;
  var target = document.createTextNode("");
  el.appendChild(target);
  if (target !== null && target.nodeValue !== null && (isTargetFocused || activateAfterChange)) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
};
var ContentEditable = function(_Component) {
  _inherits3(ContentEditable2, _Component);
  function ContentEditable2(props) {
    var _this;
    _classCallCheck4(this, ContentEditable2);
    _this = _callSuper3(this, ContentEditable2, [props]);
    _defineProperty11(_assertThisInitialized3(_this), "innerHTML", function() {
      var _assertThisInitialize = _assertThisInitialized3(_this), value = _assertThisInitialize.props.value;
      return {
        __html: typeof value !== "undefined" ? value : ""
      };
    });
    _defineProperty11(_assertThisInitialized3(_this), "handleKeyPress", function(evt) {
      var _assertThisInitialize2 = _assertThisInitialized3(_this), onKeyPress = _assertThisInitialize2.props.onKeyPress;
      onKeyPress === null || onKeyPress === void 0 ? void 0 : onKeyPress(evt);
    });
    _defineProperty11(_assertThisInitialized3(_this), "handleInput", function(evt) {
      var _assertThisInitialize3 = _assertThisInitialized3(_this), onChange = _assertThisInitialize3.props.onChange;
      var target = evt.target;
      onChange === null || onChange === void 0 ? void 0 : onChange(target.innerHTML, target.textContent, target.innerText);
    });
    _this.msgRef = import_react37.default.createRef();
    return _this;
  }
  _createClass4(ContentEditable2, [{
    key: "focus",
    value: (
      // Public API
      function focus() {
        if (typeof this.msgRef.current !== "undefined") {
          this.msgRef.current.focus();
        }
      }
    )
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus === true) {
        this.msgRef.current.focus();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var msgRef = this.msgRef, _this$props = this.props, placeholder = _this$props.placeholder, disabled = _this$props.disabled, activateAfterChange = _this$props.activateAfterChange;
      if (typeof msgRef.current === "undefined") {
        return true;
      }
      if (nextProps.value !== msgRef.current.innerHTML) {
        return true;
      }
      return placeholder !== nextProps.placeholder || disabled !== nextProps.disabled || activateAfterChange !== nextProps.activateAfterChange;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var msgRef = this.msgRef, _this$props2 = this.props, value = _this$props2.value, activateAfterChange = _this$props2.activateAfterChange;
      if (value !== msgRef.current.innerHTML) {
        msgRef.current.innerHTML = typeof value === "string" ? value : "";
      }
      replaceCaret(msgRef.current, activateAfterChange);
    }
  }, {
    key: "render",
    value: function render() {
      var msgRef = this.msgRef, handleInput = this.handleInput, handleKeyPress = this.handleKeyPress, innerHTML = this.innerHTML, _this$props3 = this.props, placeholder = _this$props3.placeholder, disabled = _this$props3.disabled, className = _this$props3.className, ph = typeof placeholder === "string" ? placeholder : "";
      return import_react37.default.createElement("div", {
        ref: msgRef,
        className,
        contentEditable: disabled === false,
        disabled,
        "data-placeholder": ph,
        onInput: handleInput,
        onKeyPress: handleKeyPress,
        dangerouslySetInnerHTML: innerHTML()
      });
    }
  }]);
  return ContentEditable2;
}(import_react37.Component);
true ? ContentEditable.propTypes = {
  /** Value. */
  value: import_prop_types36.default.string,
  /** Placeholder. */
  placeholder: import_prop_types36.default.string,
  /** A input can show it is currently unable to be interacted with. */
  disabled: import_prop_types36.default.bool,
  /**
   * Sets focus element and caret at the end of input
   * when value is changed programmatically (e.g) from button click and element is not active
   */
  activateAfterChange: import_prop_types36.default.bool,
  /** Set focus after mount. */
  autoFocus: import_prop_types36.default.bool,
  /**
   * onChange handler<br>
   * @param {String} value
   */
  onChange: import_prop_types36.default.func,
  /**
   * onKeyPress handler<br>
   * @param {String} value
   */
  onKeyPress: import_prop_types36.default.func,
  /** Additional classes. */
  className: import_prop_types36.default.string
} : void 0;
var ContentEditable_default = ContentEditable;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ContentEditable/index.js
var ContentEditable_default2 = ContentEditable_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageInput/MessageInput.js
function _typeof13(o) {
  "@babel/helpers - typeof";
  return _typeof13 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof13(o);
}
var _excluded32 = ["fancyScroll", "children", "forwardedRef"];
var _excluded210 = ["value", "onSend", "onChange", "autoFocus", "placeholder", "fancyScroll", "className", "activateAfterChange", "disabled", "sendDisabled", "sendOnReturnDisabled", "attachDisabled", "sendButton", "attachButton", "onAttachClick"];
function _defineProperty12(obj, key, value) {
  key = _toPropertyKey11(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit6(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr)) return arr;
}
function _extends31() {
  _extends31 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends31.apply(this, arguments);
}
function _objectWithoutProperties32(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose32(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose32(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey11(descriptor.key), descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return "symbol" == _typeof13(i) ? i : String(i);
}
function _toPrimitive11(t, r) {
  if ("object" != _typeof13(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof13(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _callSuper4(t, o, e) {
  return o = _getPrototypeOf4(o), _possibleConstructorReturn4(t, _isNativeReflectConstruct4() ? Reflect.construct(o, e || [], _getPrototypeOf4(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn4(self, call) {
  if (call && (_typeof13(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized4(self);
}
function _assertThisInitialized4(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct4() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct4 = function _isNativeReflectConstruct5() {
    return !!t;
  })();
}
function _getPrototypeOf4(o) {
  _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf5(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf4(o);
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p2) {
  _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf5(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf4(o, p2);
}
function editorContainer() {
  var Container = function(_Component) {
    _inherits4(Container2, _Component);
    function Container2() {
      _classCallCheck5(this, Container2);
      return _callSuper4(this, Container2, arguments);
    }
    _createClass5(Container2, [{
      key: "render",
      value: function render() {
        var _this$props = this.props, fancyScroll = _this$props.fancyScroll, children = _this$props.children, forwardedRef = _this$props.forwardedRef, rest = _objectWithoutProperties32(_this$props, _excluded32);
        return import_react38.default.createElement(import_react38.default.Fragment, null, fancyScroll === true && import_react38.default.createElement(Scroll_default, _extends31({
          ref: function ref(elRef) {
            return forwardedRef.current = elRef;
          }
        }, rest, {
          options: {
            suppressScrollX: true
          }
        }), children), fancyScroll === false && import_react38.default.createElement("div", _extends31({
          ref: forwardedRef
        }, rest), children));
      }
    }]);
    return Container2;
  }(import_react38.Component);
  return import_react38.default.forwardRef(function(props, ref) {
    return import_react38.default.createElement(Container, _extends31({
      forwardedRef: ref
    }, props));
  });
}
var EditorContainer = editorContainer();
var useControllableState = function useControllableState2(value, initialValue) {
  var initial2 = typeof value !== "undefined" ? value : initialValue;
  var _useState = (0, import_react38.useState)(initial2), _useState2 = _slicedToArray6(_useState, 2), stateValue = _useState2[0], setStateValue = _useState2[1];
  var effectiveValue = typeof value !== "undefined" ? value : stateValue;
  return [effectiveValue, function(newValue) {
    setStateValue(newValue);
  }];
};
function MessageInputInner(_ref2, ref) {
  var _ref$value = _ref2.value, value = _ref$value === void 0 ? void 0 : _ref$value, _ref$onSend = _ref2.onSend, onSend = _ref$onSend === void 0 ? noop : _ref$onSend, _ref$onChange = _ref2.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$autoFocus = _ref2.autoFocus, autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus, _ref$placeholder = _ref2.placeholder, placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder, _ref$fancyScroll = _ref2.fancyScroll, fancyScroll = _ref$fancyScroll === void 0 ? true : _ref$fancyScroll, className = _ref2.className, _ref$activateAfterCha = _ref2.activateAfterChange, activateAfterChange = _ref$activateAfterCha === void 0 ? false : _ref$activateAfterCha, _ref$disabled = _ref2.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, sendDisabled = _ref2.sendDisabled, _ref$sendOnReturnDisa = _ref2.sendOnReturnDisabled, sendOnReturnDisabled = _ref$sendOnReturnDisa === void 0 ? false : _ref$sendOnReturnDisa, _ref$attachDisabled = _ref2.attachDisabled, attachDisabled = _ref$attachDisabled === void 0 ? false : _ref$attachDisabled, _ref$sendButton = _ref2.sendButton, sendButton = _ref$sendButton === void 0 ? true : _ref$sendButton, _ref$attachButton = _ref2.attachButton, attachButton = _ref$attachButton === void 0 ? true : _ref$attachButton, _ref$onAttachClick = _ref2.onAttachClick, onAttachClick = _ref$onAttachClick === void 0 ? noop : _ref$onAttachClick, rest = _objectWithoutProperties32(_ref2, _excluded210);
  var scrollRef = (0, import_react38.useRef)();
  var msgRef = (0, import_react38.useRef)();
  var _useControllableState = useControllableState(value, ""), _useControllableState2 = _slicedToArray6(_useControllableState, 2), stateValue = _useControllableState2[0], setStateValue = _useControllableState2[1];
  var _useControllableState3 = useControllableState(sendDisabled, true), _useControllableState4 = _slicedToArray6(_useControllableState3, 2), stateSendDisabled = _useControllableState4[0], setStateSendDisabled = _useControllableState4[1];
  var focus = function focus2() {
    if (typeof msgRef.current !== "undefined") {
      msgRef.current.focus();
    }
  };
  (0, import_react38.useImperativeHandle)(ref, function() {
    return {
      focus
    };
  });
  (0, import_react38.useEffect)(function() {
    if (autoFocus === true) {
      focus();
    }
  }, []);
  (0, import_react38.useEffect)(function() {
    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }
  });
  var getContent = function getContent2() {
    var contentEditableRef = msgRef.current.msgRef.current;
    return [contentEditableRef.textContent, contentEditableRef.innerText, contentEditableRef.cloneNode(true).childNodes];
  };
  var send = function send2() {
    if (stateValue.length > 0) {
      if (value === void 0) {
        setStateValue("");
      }
      if (typeof sendDisabled === "undefined") {
        setStateSendDisabled(true);
      }
      var content = getContent();
      onSend(stateValue, content[0], content[1], content[2]);
    }
  };
  var handleKeyPress = function handleKeyPress2(evt) {
    if (evt.key === "Enter" && evt.shiftKey === false && sendOnReturnDisabled === false) {
      evt.preventDefault();
      send();
    }
  };
  var handleChange = function handleChange2(innerHTML, textContent, innerText) {
    setStateValue(innerHTML);
    if (typeof sendDisabled === "undefined") {
      setStateSendDisabled(textContent.length === 0);
    }
    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }
    var content = getContent();
    onChange(innerHTML, textContent, innerText, content[2]);
  };
  var cName2 = "".concat(prefix, "-message-input"), ph = typeof placeholder === "string" ? placeholder : "";
  return import_react38.default.createElement("div", _extends31({}, rest, {
    className: (0, import_classnames33.default)(cName2, _defineProperty12({}, "".concat(cName2, "--disabled"), disabled), className)
  }), attachButton === true && import_react38.default.createElement("div", {
    className: "".concat(cName2, "__tools")
  }, import_react38.default.createElement(AttachmentButton_default, {
    onClick: onAttachClick,
    disabled: disabled === true || attachDisabled === true
  })), import_react38.default.createElement("div", {
    className: "".concat(cName2, "__content-editor-wrapper")
  }, import_react38.default.createElement(EditorContainer, {
    fancyScroll,
    ref: scrollRef,
    className: "".concat(cName2, "__content-editor-container")
  }, import_react38.default.createElement(ContentEditable_default2, {
    ref: msgRef,
    className: "".concat(cName2, "__content-editor"),
    disabled,
    placeholder: ph,
    onKeyPress: handleKeyPress,
    onChange: handleChange,
    activateAfterChange,
    value: stateValue
  }))), sendButton === true && import_react38.default.createElement("div", {
    className: "".concat(cName2, "__tools")
  }, import_react38.default.createElement(SendButton_default, {
    onClick: send,
    disabled: disabled === true || stateSendDisabled === true
  })));
}
var MessageInput = (0, import_react38.forwardRef)(MessageInputInner);
MessageInput.displayName = "MessageInput";
MessageInput.propTypes = {
  /** Value. */
  value: import_prop_types37.default.string,
  /** Placeholder. */
  placeholder: import_prop_types37.default.string,
  /** A input can show it is currently unable to be interacted with. */
  disabled: import_prop_types37.default.bool,
  /** Prevent that the input message is sent on a return press */
  sendOnReturnDisabled: import_prop_types37.default.bool,
  /** Send button can be disabled.<br>
   * It's state is tracked by component, but it can be forced */
  sendDisabled: import_prop_types37.default.bool,
  /**
   * Fancy scroll
   * This property is set in constructor, and is not changing when component update.
   */
  fancyScroll: import_prop_types37.default.bool,
  /**
   * Sets focus element and caret at the end of input<br>
   * when value is changed programmatically (e.g) from button click and element is not active
   */
  activateAfterChange: import_prop_types37.default.bool,
  /** Set focus after mount. */
  autoFocus: import_prop_types37.default.bool,
  /**
   * onChange handler<br>
   * @param {String} innerHtml
   * @param {String} textContent
   * @param {String} innerText
   * @param {NodeList} nodes
   */
  onChange: import_prop_types37.default.func,
  /**
   * onSend handler<br>
   * @param {String} innerHtml
   * @param {String} textContent
   * @param {String} innerText
   * @param {NodeList} nodes
   */
  onSend: import_prop_types37.default.func,
  /** Additional classes. */
  className: import_prop_types37.default.string,
  /** Show send button */
  sendButton: import_prop_types37.default.bool,
  /** Show add attachment button */
  attachButton: import_prop_types37.default.bool,
  /** Disable add attachment button */
  attachDisabled: import_prop_types37.default.bool,
  /**
   * onAttachClick handler
   */
  onAttachClick: import_prop_types37.default.func
};
true ? MessageInputInner.propTypes = MessageInput.propTypes : void 0;
var MessageInput_default = MessageInput;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MessageInput/index.js
var MessageInput_default2 = MessageInput_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/InputToolbox/InputToolbox.js
var import_react39 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());
var import_classnames34 = __toESM(require_classnames());
var _excluded33 = ["className", "children"];
function _extends32() {
  _extends32 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends32.apply(this, arguments);
}
function _objectWithoutProperties33(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose33(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose33(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var InputToolbox = function InputToolbox2(_ref2) {
  var className = _ref2.className, children = _ref2.children, rest = _objectWithoutProperties33(_ref2, _excluded33);
  var cName2 = "".concat(prefix, "-input-toolbox");
  return import_react39.default.createElement("div", _extends32({}, rest, {
    className: (0, import_classnames34.default)(cName2, className)
  }), children);
};
InputToolbox.displayName = "InputToolbox";
true ? InputToolbox.propTypes = {
  /** Primary content. */
  children: import_prop_types38.default.node,
  /** Additional classes. */
  className: import_prop_types38.default.string
} : void 0;
var InputToolbox_default = InputToolbox;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/InputToolbox/index.js
var InputToolbox_default2 = InputToolbox_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ChatContainer/ChatContainer.js
var import_classnames35 = __toESM(require_classnames());
var import_prop_types39 = __toESM(require_prop_types());
var _excluded34 = ["children", "className"];
function _extends33() {
  _extends33 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends33.apply(this, arguments);
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties34(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose34(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose34(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ChatContainer = function ChatContainer2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties34(_ref2, _excluded34);
  var cName2 = "".concat(prefix, "-chat-container");
  var _getChildren = getChildren(children, [ConversationHeader_default2, MessageList_default2, MessageInput_default2, InputToolbox_default2]), _getChildren2 = _slicedToArray7(_getChildren, 4), header = _getChildren2[0], messageList = _getChildren2[1], messageInput = _getChildren2[2], inputToolbox = _getChildren2[3];
  return import_react40.default.createElement("div", _extends33({}, rest, {
    className: (0, import_classnames35.default)(cName2, className)
  }), header, messageList, messageInput, inputToolbox);
};
true ? ChatContainer.propTypes = {
  /**
   * Primary content.
   * Allowed elements:
   *
   * * &lt;ConversationHeader /&gt;
   * * &lt;MessageList /&gt;
   * * &lt;MessageInput /&gt;
   * * &lt;InputToolbox /&gt;
   */
  children: allowedChildren([ConversationHeader_default2, MessageList_default2, MessageInput_default2, InputToolbox_default2]),
  /** Additional classes. */
  className: import_prop_types39.default.string
} : void 0;
var ChatContainer_default = ChatContainer;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ChatContainer/index.js
var ChatContainer_default2 = ChatContainer_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Conversation/Conversation.js
var import_react43 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());
var import_classnames38 = __toESM(require_classnames());

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Conversation/cName.js
var cName = "".concat(prefix, "-conversation");
var cName_default = cName;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Conversation/ConversationOperations.js
var import_react41 = __toESM(require_react());
var import_classnames36 = __toESM(require_classnames());
var import_faEllipsisV2 = __toESM(require_faEllipsisV());
var import_prop_types40 = __toESM(require_prop_types());
function _typeof14(o) {
  "@babel/helpers - typeof";
  return _typeof14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof14(o);
}
var _excluded35 = ["children", "className", "visible"];
function _extends34() {
  _extends34 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends34.apply(this, arguments);
}
function _defineProperty13(obj, key, value) {
  key = _toPropertyKey12(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey12(t) {
  var i = _toPrimitive12(t, "string");
  return "symbol" == _typeof14(i) ? i : String(i);
}
function _toPrimitive12(t, r) {
  if ("object" != _typeof14(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof14(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties35(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose35(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose35(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConversationOperations = function ConversationOperations2(_ref2) {
  var children = _ref2.children, className = _ref2.className, visible = _ref2.visible, rest = _objectWithoutProperties35(_ref2, _excluded35);
  return import_react41.default.createElement("div", _extends34({}, rest, {
    className: (0, import_classnames36.default)("".concat(cName_default, "__operations"), _defineProperty13({}, "".concat(cName_default, "__operations--visible"), visible), className)
  }), import_react41.default.Children.count(children) > 0 ? children : import_react41.default.createElement(FontAwesomeIcon, {
    icon: import_faEllipsisV2.faEllipsisV
  }));
};
ConversationOperations.displayName = "Conversation.Operations";
true ? ConversationOperations.propTypes = {
  /** Primary content. */
  children: import_prop_types40.default.node,
  /** Additional classes. */
  className: import_prop_types40.default.string,
  /** Always visible not only on hover */
  visible: import_prop_types40.default.bool
} : void 0;
var ConversationOperations_default = ConversationOperations;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Conversation/ConversationContent.js
var import_react42 = __toESM(require_react());
var import_classnames37 = __toESM(require_classnames());
var import_prop_types41 = __toESM(require_prop_types());
var _excluded36 = ["lastSenderName", "info", "name", "children", "className"];
function _extends35() {
  _extends35 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends35.apply(this, arguments);
}
function _typeof15(o) {
  "@babel/helpers - typeof";
  return _typeof15 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof15(o);
}
function _objectWithoutProperties36(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose36(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose36(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var LastSenderName = function LastSenderName2(_ref2) {
  var name = _ref2.name;
  return import_react42.default.createElement(import_react42.default.Fragment, null, import_react42.default.createElement("div", {
    className: "".concat(cName_default, "__last-sender")
  }, name), ":");
};
true ? LastSenderName.propTypes = {
  name: import_prop_types41.default.node
} : void 0;
var InfoContent = function InfoContent2(_ref2) {
  var info = _ref2.info;
  return import_react42.default.createElement("div", {
    className: "".concat(cName_default, "__info-content")
  }, info);
};
true ? InfoContent.propTypes = {
  info: import_prop_types41.default.node
} : void 0;
var ConversationContent = function ConversationContent2(_ref3) {
  var lastSenderName = _ref3.lastSenderName, info = _ref3.info, name = _ref3.name, children = _ref3.children, className = _ref3.className, rest = _objectWithoutProperties36(_ref3, _excluded36);
  var typeofLastSenderName = _typeof15(lastSenderName);
  return import_react42.default.createElement("div", _extends35({}, rest, {
    className: (0, import_classnames37.default)("".concat(cName_default, "__content"), className)
  }), import_react42.default.Children.count(children) > 0 ? children : import_react42.default.createElement(import_react42.default.Fragment, null, import_react42.default.createElement("div", {
    className: "".concat(cName_default, "__name")
  }, name), import_react42.default.createElement("div", {
    className: "".concat(cName_default, "__info")
  }, typeofLastSenderName !== "undefined" ? import_react42.default.createElement(import_react42.default.Fragment, null, typeofLastSenderName === "string" ? import_react42.default.createElement(LastSenderName, {
    name: lastSenderName
  }) : lastSenderName, " ") : null, typeof info !== "undefined" && import_react42.default.createElement(InfoContent, {
    info
  }))));
};
ConversationContent.displayName = "Conversation.Content";
true ? ConversationContent.propTypes = {
  /** Primary content. */
  children: import_prop_types41.default.node,
  /** Additional classes. */
  className: import_prop_types41.default.string,
  /** First text line - contact name etc. */
  name: import_prop_types41.default.node,
  /** Last sender name. */
  lastSenderName: import_prop_types41.default.node,
  /** Informational message / last message. */
  info: import_prop_types41.default.node
} : void 0;
var ConversationContent_default = ConversationContent;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Conversation/Conversation.js
function _typeof16(o) {
  "@babel/helpers - typeof";
  return _typeof16 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof16(o);
}
var _excluded37 = ["name", "unreadCnt", "lastSenderName", "info", "lastActivityTime", "unreadDot", "children", "className", "active"];
function _extends36() {
  _extends36 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends36.apply(this, arguments);
}
function _defineProperty14(obj, key, value) {
  key = _toPropertyKey13(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey13(t) {
  var i = _toPrimitive13(t, "string");
  return "symbol" == _typeof16(i) ? i : String(i);
}
function _toPrimitive13(t, r) {
  if ("object" != _typeof16(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof16(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties37(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose37(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose37(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var LastActivityTime = function LastActivityTime2(_ref2) {
  var time = _ref2.time;
  return import_react43.default.createElement("div", {
    className: "".concat(cName_default, "__last-activity-time"),
    title: time
  }, time);
};
var UnreadDot = function UnreadDot2() {
  return import_react43.default.createElement("div", {
    className: "".concat(cName_default, "__unread-dot")
  });
};
var Conversation = function Conversation2(_ref2) {
  var _ref2$name = _ref2.name, name = _ref2$name === void 0 ? void 0 : _ref2$name, _ref2$unreadCnt = _ref2.unreadCnt, unreadCnt = _ref2$unreadCnt === void 0 ? void 0 : _ref2$unreadCnt, _ref2$lastSenderName = _ref2.lastSenderName, lastSenderName = _ref2$lastSenderName === void 0 ? void 0 : _ref2$lastSenderName, _ref2$info = _ref2.info, info = _ref2$info === void 0 ? void 0 : _ref2$info, _ref2$lastActivityTim = _ref2.lastActivityTime, lastActivityTime = _ref2$lastActivityTim === void 0 ? void 0 : _ref2$lastActivityTim, _ref2$unreadDot = _ref2.unreadDot, unreadDot = _ref2$unreadDot === void 0 ? false : _ref2$unreadDot, children = _ref2.children, className = _ref2.className, _ref2$active = _ref2.active, active2 = _ref2$active === void 0 ? false : _ref2$active, rest = _objectWithoutProperties37(_ref2, _excluded37);
  var _getChildren = getChildren(children, [Avatar_default2, AvatarGroup_default2, ConversationOperations_default, ConversationContent_default]), _getChildren2 = _slicedToArray8(_getChildren, 4), avatar = _getChildren2[0], avatarGroup = _getChildren2[1], operations = _getChildren2[2], content = _getChildren2[3];
  return import_react43.default.createElement("div", _extends36({}, rest, {
    className: (0, import_classnames38.default)(cName_default, _defineProperty14({}, "".concat(cName_default, "--active"), active2), className)
  }), avatar, avatarGroup, (typeof name !== "undefined" || typeof lastSenderName !== "undefined" || typeof info !== "undefined") && import_react43.default.createElement(ConversationContent_default, {
    name,
    lastSenderName,
    info
  }), (typeof name === "undefined" || name === null) && (typeof lastSenderName === "undefined" || lastSenderName === null) && (typeof info === "undefined" || info === null) && content, lastActivityTime !== null && typeof lastActivityTime !== "undefined" && import_react43.default.createElement(LastActivityTime, {
    time: lastActivityTime
  }), unreadDot && import_react43.default.createElement(UnreadDot, null), operations, unreadCnt !== null && typeof unreadCnt !== "undefined" && parseInt(unreadCnt) > 0 && import_react43.default.createElement("div", {
    className: "".concat(cName_default, "__unread"),
    title: unreadCnt
  }, unreadCnt));
};
true ? Conversation.propTypes = {
  /**
   * Primary content.
   * Allowed node:
   *
   * * &lt;Avatar /&gt;
   * * &lt;AvatarGroup /&gt;
   * * &lt;Conversation.Content /&gt;
   * * &lt;Conversation.Operations /&gt;
   */
  children: allowedChildren([Avatar_default2, AvatarGroup_default2, ConversationOperations_default, ConversationContent_default]),
  /** First text line in &lt;Conversation.Content /&gt; contact name etc. */
  name: import_prop_types42.default.node,
  /** Unread messages quantity. */
  unreadCnt: import_prop_types42.default.number,
  /** Unread dot visible. */
  unreadDot: import_prop_types42.default.bool,
  /** Last sender in &lt;Conversation.Content /&gt; name. */
  lastSenderName: import_prop_types42.default.node,
  /** Informational message / last message in &lt;Conversation.Content /&gt;. */
  info: import_prop_types42.default.node,
  /** Last activity time. */
  lastActivityTime: import_prop_types42.default.node,
  /** Active (currently viewed) */
  active: import_prop_types42.default.bool,
  /** Additional classes. */
  className: import_prop_types42.default.string
} : void 0;
Conversation.Operations = ConversationOperations_default;
Conversation.Content = ConversationContent_default;
var Conversation_default = Conversation;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Conversation/index.js
var Conversation_default2 = Conversation_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationList/ConversationList.js
var import_react44 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
var import_classnames39 = __toESM(require_classnames());
var _excluded38 = ["children", "scrollable", "loading", "loadingMore", "onYReachEnd", "className"];
function _extends37() {
  _extends37 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends37.apply(this, arguments);
}
function _objectWithoutProperties38(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose38(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose38(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConversationList = function ConversationList2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? [] : _ref$children, _ref$scrollable = _ref2.scrollable, scrollable = _ref$scrollable === void 0 ? true : _ref$scrollable, _ref$loading = _ref2.loading, loading = _ref$loading === void 0 ? false : _ref$loading, _ref$loadingMore = _ref2.loadingMore, loadingMore = _ref$loadingMore === void 0 ? false : _ref$loadingMore, onYReachEnd = _ref2.onYReachEnd, _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, props = _objectWithoutProperties38(_ref2, _excluded38);
  var cName2 = "".concat(prefix, "-conversation-list");
  var Tag = (0, import_react44.useMemo)(function() {
    return function(_ref22) {
      var children2 = _ref22.children;
      if (scrollable === false || scrollable === true && loading === true) {
        return import_react44.default.createElement("div", null, loading && import_react44.default.createElement(Overlay_default2, null, import_react44.default.createElement(Loader_default2, null)), children2);
      } else {
        return import_react44.default.createElement(Scroll_default, {
          onYReachEnd,
          options: {
            suppressScrollX: true
          }
        }, children2);
      }
    };
  }, [scrollable, loading]);
  return import_react44.default.createElement("div", _extends37({
    className: (0, import_classnames39.default)(cName2, className)
  }, props), import_react44.default.createElement(Tag, null, import_react44.default.Children.count(children) > 0 && import_react44.default.createElement("ul", null, import_react44.default.Children.map(children, function(item) {
    return import_react44.default.createElement("li", null, item);
  }))), loadingMore && import_react44.default.createElement("div", {
    className: "".concat(cName2, "__loading-more")
  }, import_react44.default.createElement(Loader_default2, null)));
};
true ? ConversationList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Conversation /&gt;
   *
   */
  children: allowedChildren([Conversation_default2]),
  /** Init scrollbar flag. */
  scrollable: import_prop_types43.default.bool,
  /** Loading flag. */
  loading: import_prop_types43.default.bool,
  /** Loading more flag for infinity scroll. */
  loadingMore: import_prop_types43.default.bool,
  /**
   * This is fired when the scrollbar reaches the end on the y axis.<br/>
   * It can be used to load next conversations using the infinite scroll.
   */
  onYReachEnd: import_prop_types43.default.func,
  /** Additional classes. */
  className: import_prop_types43.default.string
} : void 0;
var ConversationList_default = ConversationList;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ConversationList/index.js
var ConversationList_default2 = ConversationList_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ExpansionPanel/ExpansionPanel.js
var import_react45 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
var import_classnames40 = __toESM(require_classnames());
var import_faChevronLeft = __toESM(require_faChevronLeft());
var import_faChevronDown = __toESM(require_faChevronDown());
var _excluded39 = ["children", "title", "open", "isOpened", "onChange", "className"];
function _extends38() {
  _extends38 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends38.apply(this, arguments);
}
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray9(o, minLen);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit9(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties39(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose39(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose39(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ExpansionPanel = function ExpansionPanel2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, _ref$title = _ref2.title, title = _ref$title === void 0 ? "" : _ref$title, _ref$open = _ref2.open, defaultOpen = _ref$open === void 0 ? false : _ref$open, isOpened = _ref2.isOpened, onChange = _ref2.onChange, className = _ref2.className, rest = _objectWithoutProperties39(_ref2, _excluded39);
  var cName2 = "".concat(prefix, "-expansion-panel");
  var defaultOpenFlag = defaultOpen === true ? defaultOpen : false;
  var _useState = (0, import_react45.useState)(defaultOpenFlag), _useState2 = _slicedToArray9(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
  var opened = (0, import_react45.useMemo)(function() {
    return typeof isOpened === "boolean" ? isOpened : open;
  }, [isOpened, open]);
  var openModifier = opened === true ? "".concat(cName2, "--open") : "";
  var icon2 = opened === true ? import_faChevronDown.faChevronDown : import_faChevronLeft.faChevronLeft;
  var handleOpen = (0, import_react45.useCallback)(function(e) {
    if (typeof isOpened === "boolean") {
      onChange === null || onChange === void 0 ? void 0 : onChange(e);
    } else {
      setOpen(!opened);
      onChange === null || onChange === void 0 ? void 0 : onChange(!opened, e);
    }
  }, [onChange, open, opened, isOpened]);
  return import_react45.default.createElement("div", _extends38({}, rest, {
    className: (0, import_classnames40.default)(cName2, openModifier, className)
  }), import_react45.default.createElement("div", {
    className: "".concat(cName2, "__header"),
    onClick: handleOpen
  }, import_react45.default.createElement("div", {
    className: "".concat(cName2, "__title")
  }, title), import_react45.default.createElement("div", {
    className: "".concat(cName2, "__icon")
  }, import_react45.default.createElement(FontAwesomeIcon, {
    icon: icon2
  }))), import_react45.default.createElement("div", {
    className: "".concat(cName2, "__content")
  }, children));
};
ExpansionPanel.displayName = "ExpansionPanel";
true ? ExpansionPanel.propTypes = {
  /** Primary content. */
  children: import_prop_types44.default.node,
  /** Title. */
  title: import_prop_types44.default.string,
  /** Default open state (uncontrolled mode). */
  open: import_prop_types44.default.bool,
  /** If panel is opened (controlled mode). */
  isOpened: import_prop_types44.default.bool,
  /** Additional classes. */
  className: import_prop_types44.default.string,
  /** Called when the opening state changes. */
  onChange: import_prop_types44.default.func
} : void 0;
var ExpansionPanel_default = ExpansionPanel;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/ExpansionPanel/index.js
var ExpansionPanel_default2 = ExpansionPanel_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MainContainer/MainContainer.js
var import_react46 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());
var import_classnames41 = __toESM(require_classnames());
function _typeof17(o) {
  "@babel/helpers - typeof";
  return _typeof17 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof17(o);
}
var _excluded40 = ["responsive", "children", "className"];
function _extends39() {
  _extends39 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends39.apply(this, arguments);
}
function _defineProperty15(obj, key, value) {
  key = _toPropertyKey14(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey14(t) {
  var i = _toPrimitive14(t, "string");
  return "symbol" == _typeof17(i) ? i : String(i);
}
function _toPrimitive14(t, r) {
  if ("object" != _typeof17(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof17(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties40(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose40(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose40(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var MainContainer = function MainContainer2(_ref2) {
  var _ref$responsive = _ref2.responsive, responsive = _ref$responsive === void 0 ? false : _ref$responsive, _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, className = _ref2.className, rest = _objectWithoutProperties40(_ref2, _excluded40);
  var cName2 = "".concat(prefix, "-main-container");
  return import_react46.default.createElement("div", _extends39({}, rest, {
    className: (0, import_classnames41.default)(cName2, _defineProperty15({}, "".concat(cName2, "--responsive"), responsive), className)
  }), children);
};
true ? MainContainer.propTypes = {
  /** Primary content. */
  children: import_prop_types45.default.node,
  /** Is container responsive. */
  responsive: import_prop_types45.default.bool,
  /** Additional classes. */
  className: import_prop_types45.default.string
} : void 0;
var MainContainer_default = MainContainer;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/MainContainer/index.js
var MainContainer_default2 = MainContainer_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Search/Search.js
var import_react47 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());
var import_classnames42 = __toESM(require_classnames());

// node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var faSearch = {
  prefix: "fas",
  iconName: "search",
  icon: [512, 512, [], "f002", "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]
};
var faTimes = {
  prefix: "fas",
  iconName: "times",
  icon: [352, 512, [], "f00d", "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]
};

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Search/Search.js
function _typeof18(o) {
  "@babel/helpers - typeof";
  return _typeof18 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof18(o);
}
var _excluded41 = ["placeholder", "value", "onChange", "onClearClick", "className", "disabled"];
function _extends40() {
  _extends40 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends40.apply(this, arguments);
}
function _defineProperty16(obj, key, value) {
  key = _toPropertyKey15(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey15(t) {
  var i = _toPrimitive15(t, "string");
  return "symbol" == _typeof18(i) ? i : String(i);
}
function _toPrimitive15(t, r) {
  if ("object" != _typeof18(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof18(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit10(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties41(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose41(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose41(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var useControlledOrNot = function useControlledOrNot2(initialValue, value) {
  if (typeof value === "undefined") {
    return (0, import_react47.useState)(initialValue);
  } else {
    return [value, function() {
    }];
  }
};
function SearchInner(_ref2, ref) {
  var _ref$placeholder = _ref2.placeholder, placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder, _ref$value = _ref2.value, value = _ref$value === void 0 ? void 0 : _ref$value, _ref$onChange = _ref2.onChange, onChange = _ref$onChange === void 0 ? function() {
  } : _ref$onChange, _ref$onClearClick = _ref2.onClearClick, onClearClick = _ref$onClearClick === void 0 ? function() {
  } : _ref$onClearClick, className = _ref2.className, _ref$disabled = _ref2.disabled, disabled = _ref$disabled === void 0 ? false : _ref$disabled, rest = _objectWithoutProperties41(_ref2, _excluded41);
  var cName2 = "".concat(prefix, "-search");
  var isControlled = (0, import_react47.useMemo)(function() {
    return typeof value !== "undefined";
  }, []);
  var _useControlledOrNot = useControlledOrNot("", value), _useControlledOrNot2 = _slicedToArray10(_useControlledOrNot, 2), searchValue = _useControlledOrNot2[0], setSearchValue = _useControlledOrNot2[1];
  var _useState = (0, import_react47.useState)(isControlled ? searchValue.length > 0 : false), _useState2 = _slicedToArray10(_useState, 2), clearActive = _useState2[0], setClearActive = _useState2[1];
  if (isControlled !== (typeof value !== "undefined")) {
    throw "Search: Changing from controlled to uncontrolled component and vice versa is not allowed";
  }
  var inputRef = (0, import_react47.useRef)(void 0);
  var focus = function focus2() {
    if (typeof inputRef.current !== "undefined") {
      inputRef.current.focus();
    }
  };
  (0, import_react47.useImperativeHandle)(ref, function() {
    return {
      focus
    };
  });
  var handleChange = function handleChange2(e) {
    var value2 = e.target.value;
    setClearActive(value2.length > 0);
    if (isControlled === false) {
      setSearchValue(value2);
    }
    onChange(value2);
  };
  var handleClearClick = function handleClearClick2() {
    if (isControlled === false) {
      setSearchValue("");
    }
    setClearActive(false);
    onClearClick();
  };
  return import_react47.default.createElement("div", _extends40({}, rest, {
    className: (0, import_classnames42.default)(cName2, _defineProperty16({}, "".concat(cName2, "--disabled"), disabled), className)
  }), import_react47.default.createElement(FontAwesomeIcon, {
    icon: faSearch,
    className: "".concat(cName2, "__search-icon")
  }), import_react47.default.createElement("input", {
    ref: inputRef,
    type: "text",
    className: "".concat(cName2, "__input"),
    placeholder,
    onChange: handleChange,
    disabled,
    value: searchValue
  }), import_react47.default.createElement(FontAwesomeIcon, {
    icon: faTimes,
    className: (0, import_classnames42.default)("".concat(cName2, "__clear-icon"), _defineProperty16({}, "".concat(cName2, "__clear-icon--active"), clearActive)),
    onClick: handleClearClick
  }));
}
var Search = (0, import_react47.forwardRef)(SearchInner);
Search.displayName = "Search";
Search.propTypes = {
  /** Placeholder. */
  placeholder: import_prop_types46.default.string,
  /** Current value of the search input. Creates a controlled component */
  value: import_prop_types46.default.string,
  /** OnInput handler. */
  onChange: import_prop_types46.default.func,
  /** OnClearClick handler. */
  onClearClick: import_prop_types46.default.func,
  /** Additional classes. */
  className: import_prop_types46.default.string,
  /** Disabled */
  disabled: import_prop_types46.default.bool
};
true ? SearchInner.propTypes = Search.propTypes : void 0;
var Search_default = Search;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Search/index.js
var Search_default2 = Search_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Sidebar/Sidebar.js
var import_react48 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());
var import_classnames43 = __toESM(require_classnames());
var _excluded42 = ["children", "position", "scrollable", "loading", "className"];
var _excluded211 = ["children"];
function _extends41() {
  _extends41 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends41.apply(this, arguments);
}
function _objectWithoutProperties42(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose42(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose42(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Sidebar = function Sidebar2(_ref2) {
  var _ref$children = _ref2.children, children = _ref$children === void 0 ? void 0 : _ref$children, _ref$position = _ref2.position, position = _ref$position === void 0 ? void 0 : _ref$position, _ref$scrollable = _ref2.scrollable, scrollable = _ref$scrollable === void 0 ? true : _ref$scrollable, _ref$loading = _ref2.loading, loading = _ref$loading === void 0 ? false : _ref$loading, _ref$className = _ref2.className, className = _ref$className === void 0 ? "" : _ref$className, props = _objectWithoutProperties42(_ref2, _excluded42);
  var cName2 = "".concat(prefix, "-sidebar");
  var sideClass = function() {
    if (position === "left") {
      return "".concat(cName2, "--left");
    } else if (position === "right") {
      return "".concat(cName2, "--right");
    } else {
      return "";
    }
  }();
  var Tag = (0, import_react48.useMemo)(function() {
    return function(_ref22) {
      var children2 = _ref22.children, rest = _objectWithoutProperties42(_ref22, _excluded211);
      if (scrollable === false || scrollable === true && loading === true) {
        return import_react48.default.createElement("div", rest, loading && import_react48.default.createElement(Overlay_default2, null, import_react48.default.createElement(Loader_default2, null)), children2);
      } else {
        return import_react48.default.createElement(Scroll_default, rest, children2);
      }
    };
  }, [scrollable, loading]);
  return import_react48.default.createElement(Tag, _extends41({}, props, {
    className: (0, import_classnames43.default)(cName2, sideClass, className)
  }), children);
};
true ? Sidebar.propTypes = {
  /** Primary content. */
  children: import_prop_types47.default.node,
  /** Sidebar can be placed on two positions */
  position: import_prop_types47.default.oneOf(["left", "right"]),
  /** Sidebar can be scrollable */
  scrollable: import_prop_types47.default.bool,
  /** Loading flag. */
  loading: import_prop_types47.default.bool,
  /** Additional classes. */
  className: import_prop_types47.default.string
} : void 0;
var Sidebar_default = Sidebar;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Sidebar/index.js
var Sidebar_default2 = Sidebar_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/Status/index.js
var Status_default2 = Status_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/TypingIndicator/TypingIndicator.js
var import_react49 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());
var import_classnames44 = __toESM(require_classnames());
var _excluded43 = ["content", "className"];
function _extends42() {
  _extends42 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends42.apply(this, arguments);
}
function _objectWithoutProperties43(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose43(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose43(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var TypingIndicator = function TypingIndicator2(_ref2) {
  var _ref$content = _ref2.content, content = _ref$content === void 0 ? "" : _ref$content, className = _ref2.className, rest = _objectWithoutProperties43(_ref2, _excluded43);
  var cName2 = "".concat(prefix, "-typing-indicator");
  return import_react49.default.createElement("div", _extends42({}, rest, {
    className: (0, import_classnames44.default)(cName2, className)
  }), import_react49.default.createElement("div", {
    className: "".concat(cName2, "__indicator")
  }, import_react49.default.createElement("div", {
    className: "".concat(cName2, "__dot")
  }), import_react49.default.createElement("div", {
    className: "".concat(cName2, "__dot")
  }), import_react49.default.createElement("div", {
    className: "".concat(cName2, "__dot")
  })), import_react49.default.createElement("div", {
    className: "".concat(cName2, "__text")
  }, content));
};
true ? TypingIndicator.propTypes = {
  /** Indicator content. */
  content: import_prop_types48.default.node,
  /** Additional classes. */
  className: import_prop_types48.default.string
} : void 0;
var TypingIndicator_default = TypingIndicator;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/TypingIndicator/index.js
var TypingIndicator_default2 = TypingIndicator_default;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/StatusList/StatusList.js
var import_react50 = __toESM(require_react());
var import_prop_types49 = __toESM(require_prop_types());
var import_classnames45 = __toESM(require_classnames());
function _typeof19(o) {
  "@babel/helpers - typeof";
  return _typeof19 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof19(o);
}
var _excluded44 = ["className", "children", "size", "selected", "onChange", "itemsTabIndex"];
function _extends43() {
  _extends43 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends43.apply(this, arguments);
}
function _defineProperty17(obj, key, value) {
  key = _toPropertyKey16(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey16(t) {
  var i = _toPrimitive16(t, "string");
  return "symbol" == _typeof19(i) ? i : String(i);
}
function _toPrimitive16(t, r) {
  if ("object" != _typeof19(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof19(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties44(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose44(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose44(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function StatusListInner(_ref2, ref) {
  var className = _ref2.className, children = _ref2.children, size = _ref2.size, selected = _ref2.selected, _ref$onChange = _ref2.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, itemsTabIndex = _ref2.itemsTabIndex, rest = _objectWithoutProperties44(_ref2, _excluded44);
  var cName2 = "".concat(prefix, "-status-list");
  var listRef = (0, import_react50.useRef)();
  (0, import_react50.useImperativeHandle)(ref, function() {
    return {
      focus: function focus(idx) {
        var items = Array.from(listRef.current.querySelectorAll("li"));
        var directChild = items.filter(function(item) {
          return item.parentNode === listRef.current;
        });
        if (typeof directChild[idx] !== "undefined") {
          directChild[idx].focus();
        }
      }
    };
  });
  var tabIndex = itemsTabIndex;
  return import_react50.default.createElement("ul", _extends43({
    ref: listRef
  }, rest, {
    className: (0, import_classnames45.default)(cName2, className, _defineProperty17({}, "".concat(cName2, "--").concat(size), size))
  }), import_react50.default.Children.map(children, function(item) {
    var newProps = {};
    if (selected) {
      newProps.selected = item.props.status === selected;
    }
    if (onChange) {
      newProps.onClick = function(evt) {
        onChange(item.props.status);
        if (item.onClick) {
          item.onClick(evt);
        }
      };
    }
    var onKeyPress = function onKeyPress2(evt) {
      if (onChange) {
        if (evt.key === "Enter" && evt.shiftKey === false && evt.altKey === false) {
          onChange(item.props.status);
        }
      }
    };
    var tIndex = function() {
      if (typeof tabIndex === "number") {
        if (tabIndex > 0) {
          return tabIndex++;
        } else {
          return tabIndex;
        }
      } else {
        return void 0;
      }
    }();
    return import_react50.default.createElement("li", {
      tabIndex: tIndex,
      onKeyPress
    }, import_react50.default.cloneElement(item, newProps));
  }));
}
var StatusList = (0, import_react50.forwardRef)(StatusListInner);
StatusList.displayName = "StatusList";
StatusList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Status /&gt;
   */
  children: allowedChildren([Status_default2]),
  /** Selected element */
  selected: import_prop_types49.default.oneOf(StatusEnum),
  /** Size */
  size: import_prop_types49.default.oneOf(SizeEnum),
  /** tabindex value for items. Any positive integer will be treated as start index for counting. Zero and negative values will be applied to all items */
  itemsTabIndex: import_prop_types49.default.number,
  /** Additional classes. */
  className: import_prop_types49.default.string,
  /** onChange handler */
  onChange: import_prop_types49.default.func
};
true ? StatusListInner.propTypes = StatusList.propTypes : void 0;
var StatusList_default = StatusList;

// node_modules/@chatscope/chat-ui-kit-react/dist/es/StatusList/index.js
var StatusList_default2 = StatusList_default;
export {
  AddUserButton_default as AddUserButton,
  ArrowButton_default as ArrowButton,
  AttachmentButton_default as AttachmentButton,
  Avatar_default2 as Avatar,
  AvatarGroup_default2 as AvatarGroup,
  Button_default as Button,
  Buttons_default as Buttons,
  ChatContainer_default2 as ChatContainer,
  Conversation_default2 as Conversation,
  ConversationHeader_default2 as ConversationHeader,
  ConversationList_default2 as ConversationList,
  EllipsisButton_default as EllipsisButton,
  enums_default as Enums,
  ExpansionPanel_default2 as ExpansionPanel,
  InfoButton_default as InfoButton,
  InputToolbox_default2 as InputToolbox,
  Loader_default2 as Loader,
  MainContainer_default2 as MainContainer,
  Message_default2 as Message,
  MessageGroup_default2 as MessageGroup,
  MessageInput_default2 as MessageInput,
  MessageList_default2 as MessageList,
  MessageSeparator_default2 as MessageSeparator,
  Overlay_default2 as Overlay,
  Search_default2 as Search,
  SendButton_default as SendButton,
  Sidebar_default2 as Sidebar,
  StarButton_default as StarButton,
  Status_default2 as Status,
  StatusList_default2 as StatusList,
  TypingIndicator_default2 as TypingIndicator,
  VideoCallButton_default as VideoCallButton,
  VoiceCallButton_default as VoiceCallButton
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@fortawesome/fontawesome-svg-core/index.es.js:
  (*!
   * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   *)

@chatscope/chat-ui-kit-react/dist/es/Scroll/perfect-scrollbar.esm.js:
  (*!
   * perfect-scrollbar v1.5.0
   * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   *)

@fortawesome/free-solid-svg-icons/index.es.js:
  (*!
   * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   *)
*/
//# sourceMappingURL=@chatscope_chat-ui-kit-react.js.map
