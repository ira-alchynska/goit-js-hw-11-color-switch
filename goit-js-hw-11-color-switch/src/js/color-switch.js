const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  let intervalId = null;
  let isActive = false;
  
  const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
  };
  
  refs.buttonStart.addEventListener('click', changeColor);

  refs.buttonStop.addEventListener('click', stopChangeColor);

  function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  function changeColor() {
    if (isActive) {
      return;
    };

    isActive = true;
  
    intervalId = setInterval(() => {
      const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.body.style.backgroundColor = currentColor;
    }, 1000);
  };
  
  function stopChangeColor() {
    clearInterval(intervalId);
    intervalId = null;
    isActive = false;
  };


    


