/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

let Router = __webpack_require__(1);
let Inbox = __webpack_require__(2);
let Sent = __webpack_require__(4);
let Compose = __webpack_require__(5);

let routes = {
  inbox: Inbox,
  sent: Sent,
  compose: Compose
}

document.addEventListener("DOMContentLoaded", () => {

  let content = document.querySelector(".content");
  let router = new Router(content, routes);
  
  router.start();

  location.hash = "inbox";

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      let name = item.innerText.toLowerCase();
      location.hash = name;
    })
  })

})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {

  constructor(node, routes) {
    console.log(node, routes);
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    })
  }

  render() {
    this.node.innerHTML = "";
    let component = this.activeRoute();

    let p = document.createElement("p");
    if (component) {
      this.node.appendChild(component.render());
    }

    p.innerHTML = this.activeRoute();
    this.node.appendChild(p);

  }

  activeRoute() {
    let hashFragment = window.location.hash;
    hashFragment = hashFragment.substring(1, hashFragment.length);
    let component = this.routes[hashFragment];
    return component;
  }
}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let MessageStore = __webpack_require__(3);

module.exports = {

  renderMessage(message) {
    let item = document.createElement("li");
    item.classList.add("message");

    item.innerHTML = `
    <span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `

    return item;
  },

  render() {
    let ul = document.createElement("ul");
    ul.classList.add("messages");
    let messages = MessageStore.getInboxMessages();
    messages.forEach((message) => {
      let newMessage = this.renderMessage(message);
      ul.appendChild(newMessage);
    })
    
    return ul;
  }

}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

let messages = {
  sent: [
    {
      to: "friend@jsmail.com",
      subject: "Check This Out",
      body: "It's so cool"
    },
    {
      to: "person@jsmail.com",
      subject: "zzz",
      body: "soo boring"
    }
  ],
  inbox: [
    {
      from: "grandma@jsmail.com",
      subject: "Fwd:Fwd:Fwd: Check this out",
      body: "Stay at home mom discovers cure for leg cramps. Doctors hate her"
    },
    {
      from: "person@jsmail.com",
      subject: "Questionare",
      body: "Take this free quiz win $1000 dollars"
    }
  ]
}

class Message {
  constructor(from = "", to = "", subject = "", body = "") {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messageDraft = new Message;

const messageStore = {

  getInboxMessages() {
    return messages.inbox;
  },

  getSentMessages() {
    return messages.sent;
  },

  getMessageDraft() {
    return messageDraft;
  },

  updateDraftField(field, value) {
    messageDraft[field] = value;
  },

  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message;
  }

}

module.exports = messageStore;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let MessageStore = __webpack_require__(3);

module.exports = {

  renderMessage(message) {
    let item = document.createElement("li");
    item.classList.add("message");

    item.innerHTML = `
    <span class="to">${message.to}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `

    return item;
  },

  render() {
    let ul = document.createElement("ul");
    ul.classList.add("messages");
    let messages = MessageStore.getSentMessages();
    messages.forEach((message) => {
      let newMessage = this.renderMessage(message);
      ul.appendChild(newMessage);
    })

    return ul;
  }

}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

let MessageStore = __webpack_require__(3);

module.exports = {
  render() {
    let div = document.createElement("div");
    div.classList.add("new-message");
    div.innerHTML = this.renderForm();
    div.addEventListener("change", (event) => {
      let target = event.target;
      console.log(target);
      MessageStore.updateDraftField(target.name, target.value);
    });
    return div;
  },

  renderForm() {
    let draft = MessageStore.getMessageDraft();
    let html = `
    <p class='new-message-header'>'New Message'</p>
    <form class='compose-form'>
      <input
      placeholder='Recipient'
      name='to'
      type='text'
      value="${draft.to}">

      <input
      placeholder="Subject"
      name="subject"
      type="text"
      value="${draft.subject}">

      <textarea
      name="body"
      rows=20
      >
      ${draft.body}
      </textarea>

      <button
      type="submit"
      class="btn btn-primary submit-message"
      >
      Send
      </button>
    </form>
    `

    return html;
  }

}


/***/ })
/******/ ]);