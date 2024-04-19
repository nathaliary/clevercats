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

function goToRecentStreamPage() {
    window.location.href = "stream.html"; 
}

function goToHomepage() {
    window.location.href = "index.html"; 
}

document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const contentText = document.querySelector('.content-text');
    contentText.classList.remove('hidden');
});



document.addEventListener("DOMContentLoaded", function() {
  const content = document.querySelector('.content');

  function showContent() {
    content.classList.add('show-content');
  }

  showContent();
});





 