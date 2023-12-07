document.addEventListener("DOMContentLoaded", function() {
  var membersLink = document.querySelector('a[href="#members-section"]');
  var membersContainer = document.getElementById('membersContainer');
  var creditsLink = document.querySelector('a[href="#credits-section"]');
  var creditsContainer = document.getElementById('creditsContainer');

  membersLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (membersContainer.classList.contains('show-members')) {
      membersContainer.classList.remove('show-members');
    } else {
      membersContainer.classList.add('show-members');
      creditsContainer.classList.remove('show-credits');
    }
  });

  creditsLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (creditsContainer.classList.contains('show-credits')) {
      creditsContainer.classList.remove('show-credits');
    } else {
      creditsContainer.classList.add('show-credits');
      membersContainer.classList.remove('show-members');
    }
  });
});

function goToAboutUsPage() {
    window.location.href = "aboutus.html"; 
}

document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.pageX - cursor.offsetWidth / 2 + 'px';
    cursor.style.top = e.pageY - cursor.offsetHeight / 2 + 'px';
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var membersLink = document.getElementById("members-link");
  var buttonSound = document.getElementById("buttonSound");

  // Function to play the sound
  function playSound() {
    if (buttonSound.paused) {
      buttonSound.play();
    } else {
      buttonSound.currentTime = 0;
    }
  }

  // Adding click event listener to the "Members" link
  membersLink.addEventListener("click", playSound);
});
