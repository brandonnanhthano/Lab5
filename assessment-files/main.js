// Functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// adding in functionality so that the keyboard can navigate the page
showHideBtn.setAttribute('tabindex', '0');
commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');

function toggleComments() {
  const isExpanded = showHideBtn.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-expanded', 'false');
  } else {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-expanded', 'true');
    
    // Move the selector back to the first comment when expanded
    const firstComment = document.querySelector('.comment-container li');
    if (firstComment) {
      firstComment.querySelector('p').focus();
    }
  }
}

// event for toggling comments
showHideBtn.addEventListener('click', toggleComments);

// Event listener for tab enter and space keys
showHideBtn.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.key === ' ') {
    toggleComments();
    event.preventDefault(); // Prevent scrolling when pressing Space
  }
});

// Tab navigation accessibility
document.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex="0"]'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      // If Shift and Tab is pressed on the first element, move back to the last element
      lastElement.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      // If Tab is pressed on the last element move back to the first element
      firstElement.focus();
      event.preventDefault();
    }
  }
});

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue || !commentValue) {
    alert('Please enter both your name and a comment.');
    return;
  }

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // Set focus to the new comment for better navigation
  namePara.setAttribute('tabindex', '0');
  commentPara.setAttribute('tabindex', '0');
  namePara.focus();

  nameField.value = '';
  commentField.value = '';
}
