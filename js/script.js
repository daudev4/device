var feedback = document.querySelector(".feedback-button");
    feedbackModal = document.querySelector(".modal-feedback");
    feedbackClose = feedbackModal.querySelector(".modal-close");
    feedbackForm = feedbackModal.querySelector("form");
    feedbackName = feedbackModal.querySelector(".feedback-name");
    feedbackEmail = feedbackModal.querySelector(".feedback-email");
    feedbackLetter = feedbackModal.querySelector(".feedback-letter");

    isStorageSupport = true;
    storageName = "";
    storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");
  if (storageName && storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackLetter.focus();
  } else {
    if (storageName) {
      feedbackName.value = storageName;
      feedbackEmail.focus();
    } else {
      if (storageEmail) {
      feedbackEmail.value = storageEmail;
      feedbackName.focus();
      } else {
        feedbackName.focus();
        }
      }
    }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains("modal-show")) {
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});

var map = document.querySelector(".map");
    mapModal = document.querySelector(".modal-map");
    mapClose = mapModal.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapModal.classList.contains("modal-show")) {
      mapModal.classList.remove("modal-show");
    }
  }
});
