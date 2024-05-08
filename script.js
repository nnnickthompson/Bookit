const buttons = document.querySelectorAll('.details-button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const overlay = card.querySelector('.details-overlay');

    // Toggle the visibility of the details overlay
    overlay.classList.toggle('show-details');

    // Change button text based on overlay visibility
    if (overlay.classList.contains('show-details')) {
      button.textContent = 'Hide Details';
      // Expand card and center it
      card.style.transform = 'translate(-50%, -50%) scale(1.2)';
      card.style.zIndex = '2';
      card.style.position = 'absolute';
      card.style.top = '50%';
      card.style.left = '50%';
    } else {
      button.textContent = 'Details';
      // Reset card to original state
      card.style.transform = 'none';
      card.style.zIndex = '1';
      card.style.position = 'relative';
      card.style.top = 'auto';
      card.style.left = 'auto';
    }
  });
});
