var confettiPlayers = [];

function makeItConfetti() {
  var confetti = document.querySelectorAll('.confetti');
  
  if (!confetti[0].animate) {
    return false;
  }

  for (var i = 0, len = confetti.length; i < len; ++i) {
    var candycorn = confetti[i];
    candycorn.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
    var scale = Math.random() * .7 + .3;
    var player = candycorn.animate([
      { transform: `translate3d(${(i/len*100)}vw,-5vh,0) scale(${scale}) rotate(0turn)`, opacity: scale },
      { transform: `translate3d(${(i/len*100 + 10)}vw,105vh,0) scale(${scale}) rotate(${ Math.random() > .5 ? '' : '-'}2turn)`, opacity: 1 }
    ], {
      duration: Math.random() * 3000 + 5000,
      iterations: Infinity,
      delay: -(Math.random() * 7000)
    });
    
    confettiPlayers.push(player);
  }
}

makeItConfetti();
onChange({currentTarget: {value: 'bookmarks'}})

document.getElementById('type').addEventListener('change', onChange)

function onChange(e) {
  document.body.setAttribute('data-type', e.currentTarget.value);
  confettiPlayers.forEach(player => player.playbackRate = e.currentTarget.value === 'bookmarks' ? 2 : 1);
}