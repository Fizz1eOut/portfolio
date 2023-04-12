document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'light') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'light')
    }
    addDarkClassToHTML()
  });
  
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'light') {
        document.querySelector('html').classList.add('light');
        // document.querySelector('.themetoggle span').textContent = 'dark_mode';
      }
      else {
        document.querySelector('html').classList.remove('light');
        // document.querySelector('.themetoggle span').textContent = 'light_mode';
      }
    } catch (err) { }
  }
  
  addDarkClassToHTML();