document.addEventListener("DOMContentLoaded", function() {
  // Set delay in milliseconds (e.g., 3 seconds)
  const delay = 3000;

  // References to the message and flowers elements
  const message = document.getElementById('message');
  const flowers = document.getElementById('flowers');

  // Show the message first
  message.style.display = 'block';

  // After the delay, start the animation
  setTimeout(function() {
      // Fade out the message
      message.classList.add('fade-out');

      // Wait for the fade-out transition, then hide the message and show the flowers
      setTimeout(function() {
          // Hide the message completely
          message.style.display = 'none';
          
          // Display the flowers by removing the 'hidden' class
          flowers.classList.remove('hidden');

          // Trigger flower animation (if any additional classes needed)
          flowers.classList.add('start-animation'); // Example: if you have specific animations to trigger
      }, 1000);  // 1s delay to match the fade-out duration
  }, delay);
});
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};