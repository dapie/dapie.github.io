"use strict";

window.onscroll = function() {
	scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button-up").style.display = "block";
  } else {
    document.getElementById("button-up").style.display = "none";
  }
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}