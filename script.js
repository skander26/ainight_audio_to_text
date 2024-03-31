document.getElementById('copy').addEventListener('click', function() {
    var textToCopy = document.querySelector('.hello-my-name-is').innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Text copied successfully: ');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Select the DELETE button
    var deleteButton = document.getElementById("delete");
  
    // Add click event listener to the DELETE button
    deleteButton.addEventListener("click", function() {
      // Select the text element to be deleted
      var textElement = document.querySelector(".hello-my-name-is");
  
      // Hide the text element
      textElement.style.display = "none";
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var exitButton = document.querySelector(".text-wrapper-4");
    
    exitButton.addEventListener("click", function() {
      window.close(); // Close the page
    });
  });
    