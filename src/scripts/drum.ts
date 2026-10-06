// El tambor del hero suena al tocarlo. De momento es un sonido sintetizado;
// cuando haya grabaciones de los instrumentos, este es el sitio donde cambiarlo.

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const drum = document.querySelector<HTMLButtonElement>('[data-drum]');
const drumHint = document.querySelector<HTMLElement>('[data-drum-hint]');
let audio: AudioContext | undefined;

// Un surdo sintetizado: un tono grave que cae de afinación + el chasquido de la maza
function playDrum() {
  const AudioCtor =
    window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtor) return;
  audio ??= new AudioCtor();
  if (audio.state === 'suspended') void audio.resume();

  const now = audio.currentTime;
  const master = audio.createGain();
  master.gain.value = 0.7;
  master.connect(audio.destination);

  const body = audio.createOscillator();
  const bodyGain = audio.createGain();
  body.type = 'sine';
  body.frequency.setValueAtTime(155, now);
  body.frequency.exponentialRampToValueAtTime(52, now + 0.22);
  bodyGain.gain.setValueAtTime(0.0001, now);
  bodyGain.gain.exponentialRampToValueAtTime(1, now + 0.006);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.75);
  body.connect(bodyGain).connect(master);
  body.start(now);
  body.stop(now + 0.8);

  const length = Math.floor(audio.sampleRate * 0.05);
  const buffer = audio.createBuffer(1, length, audio.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) samples[i] = (Math.random() * 2 - 1) * (1 - i / length);
  const attack = audio.createBufferSource();
  const attackFilter = audio.createBiquadFilter();
  const attackGain = audio.createGain();
  attack.buffer = buffer;
  attackFilter.type = 'bandpass';
  attackFilter.frequency.value = 1400;
  attackGain.gain.value = 0.35;
  attack.connect(attackFilter).connect(attackGain).connect(master);
  attack.start(now);
}

function hitDrum() {
  if (!drum) return;
  playDrum();
  drumHint?.setAttribute('data-done', '');

  // Cada golpe crea su propia onda: los golpes rápidos se solapan en vez de reiniciarse
  const ring = document.createElement('span');
  ring.className = 'drum-ring';
  drum.prepend(ring);
  const frames = reducedMotion.matches
    ? [{ opacity: 0.5 }, { opacity: 0 }]
    : [
        { opacity: 0.6, transform: 'scale(0.9)' },
        { opacity: 0, transform: 'scale(1.5)' },
      ];
  const remove = () => ring.remove();
  ring.animate(frames, { duration: 700, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }).finished.then(remove, remove);
}

if (drum) {
  // Con ratón suena al bajar el botón, no al soltarlo. Con el dedo se espera al
  // toque completo para que no suene al arrastrar para hacer scroll.
  let handled = false;
  drum.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    handled = true;
    hitDrum();
  });
  drum.addEventListener('click', () => {
    if (!handled) hitDrum();
    handled = false;
  });
}
