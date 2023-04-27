// Function that will be called under the scene switcher. 
function switchToScene(sceneName) {
    fetch(`${sceneName}.html`)
      .then(response => response.text())
      .then(html => {
        // Replace the current page content with the loaded scene HTML
        document.documentElement.innerHTML = html;
      })
      .catch(error => {
        console.error(`Error loading scene: ${error}`);
      });
  }
  


////Switching the scene ↓
//DOMContentLoaded makes sure everything in html file is loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Gets list from .menu-select class in index.html
    const menuSelect = document.querySelector('.menu-select');
    
    //Listens to see if a click has happened. 
    menuSelect.addEventListener('click', function(event) {
        const target = event.target;
        //Once a click happens, this ^ and this ↓ work together to figure out what was clicked.
        if (target.classList.contains('menu-item')) {
            const buttonText = target.innerText;
        if (buttonText === 'About me!') {
          // From here, says it's switching and does the action after the click.
          console.log("Switching to the About scene...");
        } else if (buttonText === 'My Qualities') {
          console.log("Switching to the Qualities scene...");
        } else if (buttonText === 'How I spend my free time!') {
          console.log("Switching to the Free Time scene...");
        }
      }
    });
  });
  



      