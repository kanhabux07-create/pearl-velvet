/**
 * ============================================================================
 * OUR STORY — A Book of Memories
 * Master JavaScript Bundle (Cinematic 3D Interactive Memory Experience)
 * ============================================================================
 */

/* ============================================================================
   1. PERSONALIZATION CONFIG (EDIT YOUR MEMORIES & DETAILS HERE)
   ============================================================================
   Tip for the user:
   You can easily replace any text, names, dates, quotes, or image paths below.
   Images can be local files (e.g. "assets/photos/memory-01.jpg") or web URLs.
   If an image file is not found, a gorgeous romantic procedural artwork is
   automatically generated so your site always looks stunning!
   ============================================================================ */

const CONFIG = {
  // Couple Information
  person1: "Kanha",
  person2: "Akkanksha",
  monogram: "K & A",
  established: "9 june 2025",
  title: "OUR STORY",
  subtitle: "A collection of little moments that became our life long memory✨.",
  quote: "“In a universe of billions, my eyes will always search for you💍.”",
  
  // Custom Music MP3 path (leave empty "" to use the built-in procedural piano synthesizer)
  musicUrl: "", 

  // Secret Memory Passcode (case-insensitive)
  secretPasscode: "I LOVE MY CUTIEEE",

  // 10 Central Memories (The core storybook pages)
  memories: [
    {
  id: 1,
  image: "assets/photos/memory-01.jpg",
  title: "Our First Accidental Eye Contact",
  date: "9 june 2025",
  location: "Our Classroom",

  story: `It started with something so simple… a few looks across the classroom.

We would sit there, doing our own things, but somehow our eyes would meet again and again. Neither of us said much at first. Just a look, a little smile, and then looking away like nothing happened.

Somehow, those little moments became the reason we started talking. ❤️`,

  caption: "One picture, one moment, a memory I'll always keep. ❤️",

  bfNote: "The way you looked at me… and then pretended you weren't looking at all. ❤️"
},
    {
      id: 2,
      image: "assets/photos/memory-02.jpg",
      title: "The Rainy Walk & One Umbrella",
      date: "04 September 2023",
      location: "Downtown Cobblestone Street",
      story: "A sudden autumn downpour caught us completely off guard. I had only one tiny umbrella, and I remember subtly tilting it toward you the entire walk so you wouldn't get a single drop on your hair—even though my left shoulder was completely soaked. You noticed, took my arm, and stepped in closer. That was the first time I felt your warmth.",
      caption: "Getting soaked in the rain never felt so warm.",
      bfNote: "How cold your hands were when you wrapped your fingers around my sleeve."
    },
    {
      id: 3,
      image: "assets/photos/memory-03.jpg",
      title: "That Silly Neon Arcade Game",
      date: "28 October 2023",
      location: "Retro Pixel Arcade",
      story: "We spent almost an hour and twenty tokens trying to win that absurd, lopsided plush bear from the claw machine. When you finally grabbed it on our last coin, you jumped up and wrapped both arms around my neck in pure excitement. In that loud, neon-lit room with 8-bit sounds all around us, I realized I was falling completely in love with you.",
      caption: "You won a plush bear; I won the love of my life.",
      bfNote: "The adorable little victory dance you did right in front of the claw machine."
    },
    {
      id: 4,
      image: "assets/photos/memory-04.jpg",
      title: "Sunset Over the Golden Pier",
      date: "17 December 2023",
      location: "Ocean Harbor",
      story: "The winter sky turned into an unreal gradient of lilac, peach, and burning amber. We sat on the wooden dock with our feet dangling over the tide, sharing one cup of spiced hot chocolate. Neither of us said anything for twenty minutes; we just watched the sun dip into the horizon, listening to the waves. Some silences are more intimate than words.",
      caption: "Watching the sun go down with my forever sunrise.",
      bfNote: "The golden hour reflection glowing in your hair as the wind brushed it across your cheek."
    },
    {
      id: 5,
      image: "assets/photos/memory-05.jpg",
      title: "Midnight Voice Notes & 2 AM Calls",
      date: "15 January 2024",
      location: "Under My Bed Lamp",
      story: "Neither of us wanted to say goodnight. You were talking in your soft, sleepy whisper about your childhood dreams, and I was lying on my bed staring at the ceiling, smiling like an idiot. Having you in my days was wonderful, but having you in my quiet midnight hours made you feel like home.",
      caption: "Finding home in the quietest hours of the night.",
      bfNote: "Your sleepy yawn when you swore you weren't tired yet."
    },
    {
      id: 6,
      image: "assets/photos/memory-06.jpg",
      title: "Our First Roadtrip & Terrible Singing",
      date: "22 March 2024",
      location: "Highway 101 Toward the Coast",
      story: "Four hours of open highway, empty road, and windows rolled half down. We played that one 90s playlist on loop and sang every single lyric at the top of our lungs—completely out of tune, completely unbothered. You were feeding me sour gummy worms while I drove, laughing until your stomach hurt.",
      caption: "Nowhere to be, nothing to worry about, just you and me.",
      bfNote: "How you tapped your sneakers against the dashboard to the rhythm of the drums."
    },
    {
      id: 7,
      image: "assets/photos/memory-07.jpg",
      title: "The Great Pasta Disaster",
      date: "14 May 2024",
      location: "My Kitchen",
      story: "We were determined to make homemade fettuccine from scratch. By 8 PM, there was flour on the ceiling, sauce splattered across my favorite shirt, and the pasta was completely overcooked. We gave up, sat down on the kitchen floor with two forks and paper plates, put on jazz, and danced barefoot in the kitchen until midnight.",
      caption: "The worst dinner we ever cooked, and the best night of my life.",
      bfNote: "The tiny smudge of flour on the tip of your nose you didn't know was there for two hours."
    },
    {
      id: 8,
      image: "assets/photos/memory-08.jpg",
      title: "Stargazing Under One Big Blanket",
      date: "09 July 2024",
      location: "Pine Hill Lookout",
      story: "We drove out past the city lights with an old wool blanket and two pillows in the back. Lying there looking up at millions of stars, you pointed out constellations you probably made up on the spot. I looked over at your face lit up by the pale moonlight and thought: the universe can keep all its stars, because the most beautiful thing in existence is lying right beside me.",
      caption: "A million stars above, but I only had eyes for one.",
      bfNote: "The way you gently leaned your head onto my chest when the night breeze got cold."
    },
    {
      id: 9,
      image: "assets/photos/memory-09.jpg",
      title: "The Quiet Hug When You Were Exhausted",
      date: "18 September 2024",
      location: "Your Front Porch",
      story: "You had such an exhausting, overwhelming week. When you opened the door, you didn't even say a word; you just stepped forward and buried your face into my chest, wrapping your arms tight around me. I held you for what felt like hours without letting go, stroking your hair. In that moment, I swore to myself I would always be your safe harbor.",
      caption: "Whenever the world is too loud, my arms are always your shelter.",
      bfNote: "The deep, relieved breath you took the second my arms wrapped around you."
    },
    {
      id: 10,
      image: "assets/photos/memory-10.jpg",
      title: "Here, Now, & All Our Tomorrows",
      date: "Present & Forever",
      location: "Everywhere We Go",
      story: "Looking back through all these pages, I realize that every little second with you has been a treasure. From silly inside jokes and sleepy morning coffee to big milestones and quiet evenings. I don't know what the future holds, but as long as my hand is in yours, I know it's going to be the most magical story ever written.",
      caption: "We are only on Chapter One of our forever.",
      bfNote: "How you still give me butterflies every single time you look at me and smile."
    }
  ],

  // "Little Things I Remember" (Intimate Boyfriend Observations)
  littleThings: [
    {
      id: 1,
      emoji: "☕",
      tag: "MORNING HABITS",
      title: "How You Hold Warm Mugs",
      preview: "You wrap both hands completely around the ceramic like you're warming up your soul.",
      fullStory: "Every morning when you take your first sip of coffee or tea, you wrap both hands tight around the mug, close your eyes, and blow softly across the top. It's the sweetest, most peaceful thing to wake up to, and it never fails to make me smile."
    },
    {
      id: 2,
      emoji: "🧥",
      tag: "CLOTHES THIEF",
      title: "Stealing My Oversized Hoodies",
      preview: "You swear they are just 'more comfortable', but you look impossibly adorable in them.",
      fullStory: "Whenever you come over, within ten minutes you've stolen my biggest hoodie. The sleeves cover your hands completely and it reaches down past your knees, but you wear it like royalty. You can keep all my hoodies forever."
    },
    {
      id: 3,
      emoji: "🤙",
      tag: "SUBTLE AFFECTION",
      title: "The Pinky Finger Grip",
      preview: "When we walk through crowded sidewalks, you gently hook your pinky around mine.",
      fullStory: "You don't always grab my whole hand when we're moving through a rush of people—sometimes you just hook your little pinky around mine and give it a tiny squeeze. It's our own silent code that says 'I'm right here with you'."
    },
    {
      id: 4,
      emoji: "🍕",
      tag: "PURE JOY",
      title: "The Happy Food Dance",
      preview: "Whenever your favorite dessert or meal lands on the table, your shoulders do a little wiggle.",
      fullStory: "It's completely involuntary and you probably don't even realize you do it, but the second the waiter places your favorite dish in front of you, you do this cute little shoulder shimmy of pure happiness. It melts my heart every single time."
    },
    {
      id: 5,
      emoji: "🥱",
      tag: "SLEEPY HEAVEN",
      title: "Your Five-More-Minutes Voice",
      preview: "That sleepy morning murmur when you pull the duvet over your nose.",
      fullStory: "Whenever I try to gently wake you up, you tuck yourself deeper into the blanket, let out the softest sigh, and whisper 'just five more minutes please'. Honestly, I'd stay in that cozy morning world with you for hours."
    },
    {
      id: 6,
      emoji: "🎶",
      tag: "CAR CONCERTS",
      title: "Singing The Wrong Lyrics Proudly",
      preview: "You sing with 100% confidence even when you make up your own words to the song.",
      fullStory: "You will belt out the chorus in the car with pure passion, completely fabricating the lyrics with total conviction. When I laugh, you look at me and keep singing even louder. Don't ever change that."
    },
    {
      id: 7,
      emoji: "👀",
      tag: "SECRET GLANCES",
      title: "Looking Across Crowded Rooms",
      preview: "That second when we catch each other's eyes from across a noisy party.",
      fullStory: "Whenever we are at a gathering or dinner with lots of people, there is always that one moment where our eyes meet across the room. We share a tiny, knowing smirk that nobody else understands. You are my favorite anchor."
    },
    {
      id: 8,
      emoji: "💤",
      tag: "RESTING SAFE",
      title: "Falling Asleep On My Shoulder",
      preview: "On train rides or late-night movies, your head gently rolls onto my collarbone.",
      fullStory: "No matter how much you claim you're not tired during a movie, within twenty minutes your head tilts, your breathing slows, and you curl against my shoulder. I barely dare to breathe because I don't want to wake you."
    }
  ],

  // Couple Quiz Questions ("How Well Do You Know Us?")
  quizQuestions: [
    {
      question: "Who said 'I love you' first?",
      options: [
        { text: "Lucas (and I had butterflies for hours)", correct: true },
        { text: "Maya (she couldn't hold it in any longer)", correct: false },
        { text: "We blurted it out at the exact same time!", correct: false }
      ],
      feedback: "Yes! My heart was racing so fast, but I've never been more certain of anything in my life."
    },
    {
      question: "Where did we have our very first official date?",
      options: [
        { text: "A fancy rooftop restaurant", correct: false },
        { text: "The rainy corner bookstore cafe", correct: true },
        { text: "An open-air drive-in movie", correct: false }
      ],
      feedback: "Spot on! We ordered two lattes and talked until the staff started putting chairs on tables."
    },
    {
      question: "What is Lucas's absolute favorite thing about Maya?",
      options: [
        { text: "Her kind, compassionate heart and radiant smile", correct: true },
        { text: "Her incredible playlist taste", correct: false },
        { text: "Her competitive streak in video games", correct: false }
      ],
      feedback: "Everything about you is my favorite, but your heart and smile are my absolute world."
    },
    {
      question: "What happened on the infamous 'Homemade Pasta Night'?",
      options: [
        { text: "It was a Michelin-star worthy dish", correct: false },
        { text: "Flour ended up everywhere and we danced on the kitchen floor", correct: true },
        { text: "We forgot to turn the stove on for 45 minutes", correct: false }
      ],
      feedback: "Exactly! Flour on my face, burnt sauce, and the happiest dance of our lives."
    },
    {
      question: "What does Lucas do whenever Maya is feeling cold or tired?",
      options: [
        { text: "Gives up his jacket and makes warm tea immediately", correct: true },
        { text: "Tells her to do ten jumping jacks", correct: false },
        { text: "Searches for a heater online", correct: false }
      ],
      feedback: "You know me so well. Keeping you warm and safe is my top priority forever."
    },
    {
      question: "How long is Lucas planning to love Maya?",
      options: [
        { text: "For a few years", correct: false },
        { text: "Until we run out of memories", correct: false },
        { text: "Every single second of forever and then some", correct: true }
      ],
      feedback: "Always and forever, without a single doubt in my soul."
    }
  ],

  // Secret Memory Love Letter Details
  secretLetter: {
    recipient: "To My Absolute Favorite Human In The Entire Universe,",
    date: "A Promise For Forever",
    image: "assets/photos/secret.jpg",
    caption: "The exact moment I knew I never wanted to let you go.",
    author: "Lucas ♡",
    body: `
      If you are reading this, it means you've walked through all our little memories and unlocked the quietest corner of my heart.
      <br><br>
      I wanted to write this letter to tell you something simple, but something I don't say enough: <strong>thank you for existing</strong>. Thank you for walking into that bookstore, thank you for laughing at my dumb jokes, and thank you for trusting me with your heart.
      <br><br>
      Before I met you, life was a series of routines and grey days. With you, every Tuesday feels like an adventure, every quiet car ride feels like poetry, and even the rainiest days feel warm. You have taught me what patience looks like, what gentle kindness feels like, and what true love really means.
      <br><br>
      Whatever the future brings—whatever challenges, road trips, burnt dinners, or quiet Sunday mornings—I want you to know that I am right here by your side. I will celebrate your biggest wins, I will hold your hand through the hardest nights, and I will wake up every single morning choosing you all over again.
      <br><br>
      You are my today, my tomorrow, and my forever.
    `
  }
};

/* ============================================================================
   2. PROCEDURAL ROMANTIC AUDIO SYNTHESIZER & SFX ENGINE (Web Audio API)
   ============================================================================
   Zero external MP3 dependencies required! Generates gentle, warm, soothing
   romantic piano chords, music-box arpeggios, and soft chimes out-of-the-box.
   Also supports custom MP3 files if CONFIG.musicUrl is provided.
   ============================================================================ */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.volume = 0.45;
    this.sfxEnabled = true;
    this.musicInterval = null;
    this.audioElement = null;
    this.activeSection = "landing-section";

    // Chord notes in Hz (Warm Romantic Progression: Cmaj9, Am9, Fmaj7, Gsus4)
    this.progression = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // C, E, G, B, D (Cmaj9)
      [220.00, 261.63, 329.63, 392.00, 493.88], // A, C, E, G, B (Am9)
      [174.61, 261.63, 329.63, 349.23, 440.00], // F, C, E, F, A (Fmaj7)
      [196.00, 261.63, 293.66, 392.00, 493.88]  // G, C, D, G, B (Gsus4)
    ];
    this.chordIdx = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.init();
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this.init();
    if (!this.ctx) return;
    this.isPlaying = true;

    // Check if user specified external audio file
    if (CONFIG.musicUrl && CONFIG.musicUrl.trim().length > 0) {
      if (!this.audioElement) {
        this.audioElement = new Audio(CONFIG.musicUrl);
        this.audioElement.loop = true;
      }
      this.audioElement.volume = this.volume;
      this.audioElement.play().catch(() => {
        // Fallback to procedural synth if external file fails
        this.startProceduralSynth();
      });
    } else {
      this.startProceduralSynth();
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  startProceduralSynth() {
    if (this.musicInterval) clearInterval(this.musicInterval);
    
    // Play first chord immediately
    this.playArpeggiatedChord();

    // Loop through warm romantic chord arpeggios every 4.2 seconds
    this.musicInterval = setInterval(() => {
      if (!this.isPlaying) return;
      this.playArpeggiatedChord();
    }, 4200);
  }

  playArpeggiatedChord() {
    if (!this.ctx || !this.isPlaying) return;
    const chord = this.progression[this.chordIdx];
    this.chordIdx = (this.chordIdx + 1) % this.progression.length;

    // Play notes staggered gently like a music box or harp
    chord.forEach((freq, i) => {
      const delay = i * 0.42 + (Math.random() * 0.08);
      this.playPluckNote(freq, delay, 2.8);
    });

    // Add deep soft bass root note
    this.playPluckNote(chord[0] / 2, 0, 4.0, 0.4);
  }

  playPluckNote(freq, delaySec, durationSec, gainMultiplier = 0.25) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime + delaySec;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Gentle warm sine / triangle hybrid
    osc.type = Math.random() > 0.4 ? "sine" : "triangle";
    osc.frequency.setValueAtTime(freq, now);

    // Exponential decay envelope (acoustic pluck / music box simulation)
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.18 * gainMultiplier, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + durationSec + 0.1);
  }

  // Romantic Sound Effects: Page Turn Rustle
  playPageTurnSFX() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // White noise filtered to mimic archival paper turning
    const bufferSize = this.ctx.sampleRate * 0.35;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(700, now);
    filter.frequency.exponentialRampToValueAtTime(350, now + 0.3);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.34);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.35);
  }

  // Sound Effect: Sparkling Chime (for mini-game pickup / secret unlock)
  playChimeSFX() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const frequencies = [880, 1108.73, 1318.51, 1760]; // A major sparkle
    frequencies.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(f, now + idx * 0.06);

      gain.gain.setValueAtTime(0.001, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.85);
    });
  }

  // Sound Effect: Sweet Heart Pop (for Quiz)
  playHeartPopSFX() {
    if (!this.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  }
}

/* ============================================================================
   3. ROMANTIC PROCEDURAL IMAGE GENERATOR (FALLBACK ARTWORK)
   ============================================================================
   Ensures that even BEFORE the user adds their own JPGs to assets/photos/,
   the website displays breathtaking, artistic romantic watercolor/starlight
   silhouettes instead of broken image boxes!
   ============================================================================ */

function generateRomanticPlaceholder(id, title, date) {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");

  // Artistic palettes for different memories
  const palettes = [
    { sky1: "#1d1024", sky2: "#4a1936", glow: "#ffd6aa", star: "#ffeedd" },
    { sky1: "#0b192c", sky2: "#1e3e62", glow: "#9fb4c7", star: "#e0e7ee" },
    { sky1: "#2b101c", sky2: "#68203d", glow: "#f8a5c2", star: "#ffffff" },
    { sky1: "#1f1c2c", sky2: "#928dab", glow: "#f7d794", star: "#fff0f5" },
    { sky1: "#0f2027", sky2: "#203a43", glow: "#ffd32a", star: "#f5f6fa" }
  ];
  const p = palettes[(id - 1) % palettes.length];

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, 0, 600);
  grad.addColorStop(0, p.sky1);
  grad.addColorStop(1, p.sky2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 800, 600);

  // Soft Ambient Glow Orb (Moon / Sunset)
  const orbGrad = ctx.createRadialGradient(400, 240, 10, 400, 240, 220);
  orbGrad.addColorStop(0, p.glow);
  orbGrad.addColorStop(0.4, p.glow + "55");
  orbGrad.addColorStop(1, "transparent");
  ctx.fillStyle = orbGrad;
  ctx.beginPath();
  ctx.arc(400, 240, 220, 0, Math.PI * 2);
  ctx.fill();

  // Gentle Stardust Spatters
  ctx.fillStyle = p.star;
  for (let i = 0; i < 70; i++) {
    const sx = Math.random() * 800;
    const sy = Math.random() * 380;
    const sr = Math.random() * 1.8 + 0.5;
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();
  }

  // Silhouette Ground / Pier / Hills
  ctx.fillStyle = "#0c0812";
  ctx.beginPath();
  ctx.moveTo(0, 520);
  ctx.bezierCurveTo(240, 480, 560, 540, 800, 500);
  ctx.lineTo(800, 600);
  ctx.lineTo(0, 600);
  ctx.closePath();
  ctx.fill();

  // Romantic Couple Silhouette sitting together
  ctx.fillStyle = "#07040a";
  // Figure 1
  ctx.beginPath();
  ctx.arc(388, 455, 12, 0, Math.PI * 2); // head
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(388, 485, 16, 22, 0.1, 0, Math.PI * 2); // body
  ctx.fill();

  // Figure 2 (leaning shoulder)
  ctx.beginPath();
  ctx.arc(412, 458, 11, 0, Math.PI * 2); // head
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(410, 488, 15, 20, -0.15, 0, Math.PI * 2); // body
  ctx.fill();

  // Subtle Golden Foil Border
  ctx.strokeStyle = "rgba(229, 193, 139, 0.4)";
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, 760, 560);

  // Artistic Calligraphy Watermark in corner
  ctx.font = "italic 22px Cormorant Garamond, serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
  ctx.textAlign = "center";
  ctx.fillText(`“${title}”`, 400, 560);

  return canvas.toDataURL("image/jpeg", 0.85);
}

/* ============================================================================
   4. STARRY NIGHT SKY & WEBGL/CANVAS ATMOSPHERE
   ============================================================================ */

class SkyAtmosphere {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.stars = [];
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.quality = "high";
    this.animationFrame = null;
    this.isRunning = true;

    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);
  }

  init() {
    this.resize();
    window.addEventListener("resize", this.resize);

    window.addEventListener("mousemove", (e) => {
      this.targetMouseX = (e.clientX - window.innerWidth / 2) * 0.04;
      this.targetMouseY = (e.clientY - window.innerHeight / 2) * 0.04;
    });

    this.initStars();
    this.render();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.initStars();
  }

  initStars() {
    this.stars = [];
    let count = this.quality === "high" ? 220 : this.quality === "med" ? 120 : 60;
    if (window.innerWidth < 768) count = Math.floor(count * 0.5);

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        depth: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.3 ? "#ffd599" : "#e88b9e"
      });
    }
  }

  setQuality(mode) {
    this.quality = mode;
    this.initStars();
  }

  render() {
    if (!this.isRunning) return;

    // Smooth mouse parallax interpolation
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Deep cosmic gradient
    const bgGrad = this.ctx.createRadialGradient(
      this.width * 0.5 + this.mouseX * 3,
      this.height * 0.4 + this.mouseY * 3,
      50,
      this.width * 0.5,
      this.height * 0.5,
      this.width * 0.85
    );
    bgGrad.addColorStop(0, "#121426");
    bgGrad.addColorStop(0.5, "#0b0c16");
    bgGrad.addColorStop(1, "#050609");
    this.ctx.fillStyle = bgGrad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw twinkling stars with depth
    for (let s of this.stars) {
      s.alpha += s.speed;
      const currentAlpha = Math.abs(Math.sin(s.alpha));

      const px = s.x + this.mouseX * s.depth;
      const py = s.y + this.mouseY * s.depth;

      this.ctx.save();
      this.ctx.fillStyle = s.color;
      this.ctx.globalAlpha = currentAlpha * 0.85;
      this.ctx.beginPath();
      this.ctx.arc(px, py, s.r, 0, Math.PI * 2);
      this.ctx.fill();

      // Soft glow for larger stars in HIGH mode
      if (this.quality === "high" && s.r > 1.2 && currentAlpha > 0.7) {
        this.ctx.globalAlpha = (currentAlpha - 0.7) * 0.4;
        this.ctx.beginPath();
        this.ctx.arc(px, py, s.r * 3.5, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    this.animationFrame = requestAnimationFrame(this.render);
  }

  pause() {
    this.isRunning = false;
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
  }

  resume() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.render();
    }
  }
}

/* ============================================================================
   5. REALISTIC 3D MEMORY BOOK ENGINE
   ============================================================================ */

class MemoryBook {
  constructor(soundEngine) {
    this.soundEngine = soundEngine;
    this.memories = CONFIG.memories;
    this.currentIndex = 0; // 0 = Cover, 1 to 10 = memories
    this.isCoverOpen = false;
    this.isAnimating = false;

    // Elements
    this.bookContainer = document.getElementById("book-container");
    this.perspectiveWrapper = document.getElementById("book-perspective");
    this.coverFront = document.getElementById("book-cover-front");
    this.turningLeaf = document.getElementById("turning-leaf");
    
    // Page Content Elements
    this.imgEl = document.getElementById("current-memory-img");
    this.photoCaptionEl = document.getElementById("current-photo-caption");
    this.stampEl = document.getElementById("current-memory-stamp");
    this.dateEl = document.getElementById("current-memory-date");
    this.titleEl = document.getElementById("current-memory-title");
    this.storyEl = document.getElementById("current-memory-story");
    this.bfNoteEl = document.getElementById("current-memory-bfnote");
    this.leftPageNum = document.getElementById("left-page-num");
    this.rightPageNum = document.getElementById("right-page-num");
    
    // Buttons & Scrubber
    this.prevBtn = document.getElementById("book-prev-btn");
    this.nextBtn = document.getElementById("book-next-btn");
    this.scrubberTrack = document.getElementById("scrubber-track");
    this.counterCurrent = document.getElementById("counter-current");
    this.counterTotal = document.getElementById("counter-total");
    this.photoZoomBtn = document.getElementById("photo-zoom-btn");

    this.init();
  }

  init() {
    this.counterTotal.textContent = String(this.memories.length).padStart(2, "0");
    this.buildScrubber();
    this.setupParallaxTilt();
    this.setupEvents();
    this.loadMemory(0, false);
  }

  buildScrubber() {
    this.scrubberTrack.innerHTML = "";
    this.memories.forEach((mem, idx) => {
      const dot = document.createElement("button");
      dot.className = `scrubber-dot ${idx === 0 ? "active" : ""}`;
      dot.setAttribute("title", `Memory ${idx + 1}: ${mem.title}`);
      dot.setAttribute("role", "tab");
      dot.addEventListener("click", () => {
        this.goToMemory(idx);
      });
      this.scrubberTrack.appendChild(dot);
    });
  }

  setupParallaxTilt() {
    // 3D Parallax tilt following cursor across book stage
    const stage = document.getElementById("book-stage");
    if (!stage) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    window.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 820) return; // Skip on mobile
      const rect = stage.getBoundingClientRect();
      const inStage = e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (inStage) {
        const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        targetRotY = normX * 6; // max 6 deg
        targetRotX = -normY * 5;
      } else {
        targetRotX = 0;
        targetRotY = 0;
      }
    });

    const updateTilt = () => {
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      if (this.perspectiveWrapper) {
        this.perspectiveWrapper.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }
      requestAnimationFrame(updateTilt);
    };
    updateTilt();
  }

  setupEvents() {
    // Cover click opens book
    this.coverFront.addEventListener("click", () => {
      this.openBook();
    });

    // Prev / Next Navigation
    this.prevBtn.addEventListener("click", () => this.prevPage());
    this.nextBtn.addEventListener("click", () => this.nextPage());

    // Keyboard navigation (Left / Right Arrow)
    window.addEventListener("keydown", (e) => {
      // Only trigger if book section is currently visible
      const bookSec = document.getElementById("book-section");
      if (bookSec && bookSec.classList.contains("active-screen")) {
        if (e.key === "ArrowRight" || e.key === "PageDown") {
          this.nextPage();
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
          this.prevPage();
        }
      }
    });

    // Touch Swipe Detection for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    this.bookContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.bookContainer.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        this.nextPage();
      } else if (touchEndX - touchStartX > 50) {
        this.prevPage();
      }
    }, { passive: true });

    // Photo Zoom Lightbox trigger
    if (this.photoZoomBtn) {
      this.photoZoomBtn.addEventListener("click", () => {
        const currentMem = this.memories[this.currentIndex];
        window.openLightbox(this.imgEl.src, currentMem.title, currentMem.date, currentMem.caption);
      });
    }
  }

  openBook() {
    if (this.isCoverOpen) return;
    this.isCoverOpen = true;
    this.soundEngine.playPageTurnSFX();
    this.coverFront.classList.add("opened");
  }

  goToMemory(index) {
    if (index === this.currentIndex || this.isAnimating) return;
    if (!this.isCoverOpen) this.openBook();

    const direction = index > this.currentIndex ? "next" : "prev";
    this.triggerPageTurnAnimation(direction, () => {
      this.loadMemory(index, true);
    });
  }

  nextPage() {
    if (!this.isCoverOpen) {
      this.openBook();
      return;
    }
    if (this.currentIndex < this.memories.length - 1 && !this.isAnimating) {
      this.triggerPageTurnAnimation("next", () => {
        this.loadMemory(this.currentIndex + 1, true);
      });
    }
  }

  prevPage() {
    if (this.currentIndex > 0 && !this.isAnimating) {
      this.triggerPageTurnAnimation("prev", () => {
        this.loadMemory(this.currentIndex - 1, true);
      });
    }
  }

  triggerPageTurnAnimation(dir, onHalfwayCallback) {
    this.isAnimating = true;
    this.soundEngine.playPageTurnSFX();

    this.turningLeaf.className = `turning-leaf flipping-${dir}`;

    setTimeout(() => {
      if (onHalfwayCallback) onHalfwayCallback();
    }, 400);

    setTimeout(() => {
      this.turningLeaf.className = "turning-leaf";
      this.isAnimating = false;
    }, 800);
  }

  loadMemory(index, playAnim = false) {
    this.currentIndex = index;
    const mem = this.memories[index];
    if (!mem) return;

    // Graceful Image Handling (Try image path, fallback to procedural romantic canvas)
    const tempImg = new Image();
    tempImg.src = mem.image;
    tempImg.onload = () => {
      this.imgEl.src = mem.image;
    };
    tempImg.onerror = () => {
      this.imgEl.src = generateRomanticPlaceholder(mem.id, mem.title, mem.date);
    };

    // Populate Details
    this.titleEl.textContent = mem.title;
    this.dateEl.textContent = mem.date;
    this.stampEl.textContent = `MEMOIRE № ${String(mem.id).padStart(2, "0")}`;
    this.storyEl.textContent = mem.story;
    this.photoCaptionEl.textContent = `“${mem.caption}”`;
    this.bfNoteEl.textContent = mem.bfNote;

    // Page Numbers
    this.leftPageNum.textContent = String(mem.id * 2).padStart(2, "0");
    this.rightPageNum.textContent = String(mem.id * 2 + 1).padStart(2, "0");

    // Update Counter
    this.counterCurrent.textContent = String(mem.id).padStart(2, "0");

    // Update Scrubber Dots
    const dots = this.scrubberTrack.querySelectorAll(".scrubber-dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    // Update Buttons State
    this.prevBtn.disabled = index === 0;
    this.nextBtn.disabled = index === this.memories.length - 1;
  }
}

/* ============================================================================
   6. MEMORY TIMELINE ENGINE
   ============================================================================ */

class MemoryTimeline {
  constructor(bookInstance, soundEngine) {
    this.book = bookInstance;
    this.soundEngine = soundEngine;
    this.container = document.getElementById("timeline-cards-wrapper");
    this.init();
  }

  init() {
    if (!this.container) return;
    this.container.innerHTML = "";

    CONFIG.memories.forEach((mem, idx) => {
      const item = document.createElement("div");
      item.className = "timeline-card-item";

      item.innerHTML = `
        <div class="timeline-node"></div>
        <div class="timeline-card-content">
          <div class="tl-date">${mem.date} • ${mem.location}</div>
          <h3 class="tl-title">${mem.title}</h3>
          <p class="tl-snippet">“${mem.caption}”</p>
          <button class="tl-jump-btn" data-index="${idx}">
            <span>Open in Book</span>
            <span>📖 ➔</span>
          </button>
        </div>
      `;

      // Jump to this page in Book
      const jumpBtn = item.querySelector(".tl-jump-btn");
      jumpBtn.addEventListener("click", () => {
        window.navigateToSection("book-section");
        this.book.goToMemory(idx);
      });

      this.container.appendChild(item);
    });
  }
}

/* ============================================================================
   7. "LITTLE THINGS I REMEMBER" INTERACTIVE CARDS
   ============================================================================ */

class LittleThingsCollection {
  constructor(soundEngine) {
    this.soundEngine = soundEngine;
    this.grid = document.getElementById("little-things-grid");
    this.modal = document.getElementById("detail-modal");
    this.closeBtn = document.getElementById("detail-close-btn");
    this.backdrop = document.getElementById("detail-backdrop");

    // Modal Content Fields
    this.modalEmoji = document.getElementById("detail-emoji");
    this.modalTitle = document.getElementById("detail-title");
    this.modalText = document.getElementById("detail-text");

    this.init();
  }

  init() {
    if (!this.grid) return;
    this.grid.innerHTML = "";

    CONFIG.littleThings.forEach((item) => {
      const card = document.createElement("div");
      card.className = "micro-memory-card";

      card.innerHTML = `
        <div class="micro-card-emoji">${item.emoji}</div>
        <div class="micro-card-tag">${item.tag}</div>
        <h4 class="micro-card-title">${item.title}</h4>
        <p class="micro-card-preview">${item.preview}</p>
        <div class="micro-card-footer">
          <span>Read memory note</span>
          <span>♡ ➔</span>
        </div>
      `;

      card.addEventListener("click", () => {
        this.openDetail(item);
      });

      this.grid.appendChild(card);
    });

    // Close Modal Events
    if (this.closeBtn) this.closeBtn.addEventListener("click", () => this.closeDetail());
    if (this.backdrop) this.backdrop.addEventListener("click", () => this.closeDetail());
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.modal.classList.contains("active")) {
        this.closeDetail();
      }
    });
  }

  openDetail(item) {
    this.soundEngine.playHeartPopSFX();
    this.modalEmoji.textContent = item.emoji;
    this.modalTitle.textContent = item.title;
    this.modalText.textContent = item.fullStory;
    this.modal.classList.add("active");
  }

  closeDetail() {
    this.modal.classList.remove("active");
  }
}

/* ============================================================================
   8. ROMANTIC MINI-GAME: "COLLECT OUR MEMORIES"
   ============================================================================ */

class RomanticMiniGame {
  constructor(soundEngine) {
    this.soundEngine = soundEngine;
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.scoreEl = document.getElementById("game-score");
    this.quoteBanner = document.getElementById("game-quote-banner");
    this.quoteText = document.getElementById("game-quote-text");
    this.winModal = document.getElementById("game-win-modal");
    this.unlockVaultBtn = document.getElementById("win-unlock-vault-btn");
    this.restartBtn = document.getElementById("game-restart-btn");
    this.startBtn = document.getElementById("game-start-btn");
    this.instructionsOverlay = document.getElementById("game-instructions-overlay");

    this.score = 0;
    this.maxScore = 10;
    this.items = [];
    this.particles = [];
    this.player = { x: 200, y: 200, r: 22, targetX: 200, targetY: 200 };
    this.isRunning = false;
    this.animationFrame = null;

    // 10 Romantic Collectible Objects with Sweet Quotes
    this.collectiblesData = [
      { emoji: "💖", label: "Pure Heart", quote: "“You are my favorite notification.”" },
      { emoji: "💌", label: "Love Letter", quote: "“Every love song suddenly made sense.”" },
      { emoji: "📷", label: "Polaroid", quote: "“In a room full of art, I'd still stare at you.”" },
      { emoji: "✨", label: "Starlight", quote: "“You feel like Sunday morning coffee.”" },
      { emoji: "🌹", label: "Dried Rose", quote: "“Loving you is the easiest thing I've ever done.”" },
      { emoji: "🎶", label: "Our Song", quote: "“My favorite place in the world is right next to you.”" },
      { emoji: "☕", label: "Warm Cup", quote: "“You turned ordinary days into poetry.”" },
      { emoji: "⭐", label: "Wishing Star", quote: "“I fell in love with your beautiful soul.”" },
      { emoji: "🎀", label: "Pink Ribbon", quote: "“I still get butterflies every time you smile at me.”" },
      { emoji: "💍", label: "Forever Promise", quote: "“All of me loves all of you.”" }
    ];

    if (this.canvas) this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Mouse & Touch Tracking
    const handleMove = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      this.player.targetX = clientX - rect.left;
      this.player.targetY = clientY - rect.top;
    };

    this.canvas.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
    this.canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    if (this.startBtn) {
      this.startBtn.addEventListener("click", () => {
        if (this.instructionsOverlay) this.instructionsOverlay.style.opacity = "0";
        setTimeout(() => {
          if (this.instructionsOverlay) this.instructionsOverlay.style.display = "none";
        }, 400);
        this.start();
      });
    }

    if (this.restartBtn) {
      this.restartBtn.addEventListener("click", () => this.resetGame());
    }

    if (this.unlockVaultBtn) {
      this.unlockVaultBtn.addEventListener("click", () => {
        this.resetGame();
      });
    }
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = this.canvas.parentElement.clientWidth;
    this.height = this.canvas.height = this.canvas.parentElement.clientHeight || 500;
  }

  start() {
    this.resetGame();
    this.isRunning = true;
    this.loop = this.loop.bind(this);
    this.loop();
  }

  resetGame() {
    this.score = 0;
    this.updateScoreDisplay();
    this.winModal.classList.remove("active");
    this.quoteBanner.classList.remove("active");
    this.particles = [];
    this.spawnItems();
  }

  spawnItems() {
    this.items = [];
    const w = this.width || 800;
    const h = this.height || 500;

    this.collectiblesData.forEach((data, i) => {
      this.items.push({
        ...data,
        x: 60 + Math.random() * (w - 120),
        y: 60 + Math.random() * (h - 120),
        r: 20,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        phase: Math.random() * Math.PI * 2,
        collected: false
      });
    });
  }

  updateScoreDisplay() {
    if (this.scoreEl) {
      this.scoreEl.textContent = `${this.score} / ${this.maxScore}`;
    }
  }

  loop() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth Player Position
    this.player.x += (this.player.targetX - this.player.x) * 0.15;
    this.player.y += (this.player.targetY - this.player.y) * 0.15;

    // Draw Player (Glowing Heart Constellation Aura)
    this.drawPlayer();

    // Update & Draw Floating Collectibles
    this.items.forEach((item) => {
      if (item.collected) return;

      item.phase += 0.03;
      item.x += item.vx + Math.sin(item.phase) * 0.5;
      item.y += item.vy + Math.cos(item.phase) * 0.5;

      // Bounce against arena walls
      if (item.x < 30 || item.x > this.width - 30) item.vx *= -1;
      if (item.y < 30 || item.y > this.height - 30) item.vy *= -1;

      // Draw Collectible Emoji & Glow Ring
      this.ctx.save();
      this.ctx.font = "24px sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.shadowColor = "rgba(229, 193, 139, 0.6)";
      this.ctx.shadowBlur = 15;
      this.ctx.fillText(item.emoji, item.x, item.y);
      this.ctx.restore();

      // Check Collision with Player
      const dist = Math.hypot(this.player.x - item.x, this.player.y - item.y);
      if (dist < this.player.r + item.r) {
        this.collectItem(item);
      }
    });

    // Update & Draw Sparkle Particles
    this.updateParticles();

    this.animationFrame = requestAnimationFrame(this.loop);
  }

  drawPlayer() {
    this.ctx.save();
    // Glowing ring
    this.ctx.strokeStyle = "rgba(232, 139, 158, 0.7)";
    this.ctx.lineWidth = 2;
    this.ctx.shadowColor = "rgba(232, 139, 158, 0.8)";
    this.ctx.shadowBlur = 20;
    this.ctx.beginPath();
    this.ctx.arc(this.player.x, this.player.y, this.player.r, 0, Math.PI * 2);
    this.ctx.stroke();

    // Center Golden Heart
    this.ctx.font = "16px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText("✦", this.player.x, this.player.y);
    this.ctx.restore();
  }

  collectItem(item) {
    item.collected = true;
    this.score++;
    this.updateScoreDisplay();
    this.soundEngine.playChimeSFX();

    // Burst particles
    for (let p = 0; p < 24; p++) {
      this.particles.push({
        x: item.x,
        y: item.y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        r: Math.random() * 2.5 + 1,
        alpha: 1,
        color: Math.random() > 0.5 ? "#ffd599" : "#e88b9e"
      });
    }

    // Display Romantic Pop Quote
    this.showQuote(item.quote);

    // Check Win
    if (this.score >= this.maxScore) {
      setTimeout(() => {
        this.winModal.classList.add("active");
        this.soundEngine.playChimeSFX();
      }, 600);
    }
  }

  showQuote(quote) {
    this.quoteText.textContent = quote;
    this.quoteBanner.classList.add("active");
    clearTimeout(this.quoteTimeout);
    this.quoteTimeout = setTimeout(() => {
      this.quoteBanner.classList.remove("active");
    }, 3200);
  }

  updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.025;
      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }
      this.ctx.save();
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
  }
}

/* ============================================================================
   9. SECRET MEMORY VAULT CONTROLLER
   ============================================================================ */

class SecretVaultController {
  constructor(soundEngine) {
    this.soundEngine = soundEngine;
    this.lockedState = document.getElementById("vault-locked-state");
    this.unlockedState = document.getElementById("vault-unlocked-state");
    this.passcodeInput = document.getElementById("vault-passcode");
    this.passcodeBtn = document.getElementById("vault-passcode-btn");
    this.navLockStatus = document.getElementById("nav-lock-status");

    // Content Fields
    this.letterRecipient = document.getElementById("secret-letter-recipient");
    this.letterDate = document.getElementById("secret-letter-date");
    this.letterBody = document.getElementById("secret-letter-body");
    this.letterAuthor = document.getElementById("secret-letter-author");
    this.photoImg = document.getElementById("secret-photo-img");
    this.photoCaption = document.getElementById("secret-photo-caption");

    this.isUnlocked = false;
    this.init();
  }

  init() {
    // Populate Secret Letter Content from CONFIG
    if (this.letterRecipient) this.letterRecipient.textContent = CONFIG.secretLetter.recipient;
    if (this.letterDate) this.letterDate.textContent = CONFIG.secretLetter.date;
    if (this.letterBody) this.letterBody.innerHTML = CONFIG.secretLetter.body;
    if (this.letterAuthor) this.letterAuthor.textContent = CONFIG.secretLetter.author;
    if (this.photoCaption) this.photoCaption.textContent = `“${CONFIG.secretLetter.caption}”`;

    // Secret Photo with graceful procedural fallback
    const tempSecret = new Image();
    tempSecret.src = CONFIG.secretLetter.image;
    tempSecret.onload = () => {
      if (this.photoImg) this.photoImg.src = CONFIG.secretLetter.image;
    };
    tempSecret.onerror = () => {
      if (this.photoImg) {
        this.photoImg.src = generateRomanticPlaceholder(99, "Our Secret Forever", "Every Tomorrow");
      }
    };

    // Passcode Unlock Event
    if (this.passcodeBtn) {
      this.passcodeBtn.addEventListener("click", () => this.checkPasscode());
    }
    if (this.passcodeInput) {
      this.passcodeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") this.checkPasscode();
      });
    }
  }

  checkPasscode() {
    const inputVal = this.passcodeInput.value.trim().toLowerCase();
    const targetPass = CONFIG.secretPasscode.trim().toLowerCase();

    if (inputVal === targetPass) {
      this.unlock();
    } else {
      this.passcodeInput.style.borderColor = "#e57373";
      this.passcodeInput.placeholder = "Incorrect passcode! Try again";
      this.passcodeInput.value = "";
      setTimeout(() => {
        this.passcodeInput.style.borderColor = "";
        this.passcodeInput.placeholder = "Enter secret passcode...";
      }, 1500);
    }
  }

  unlock() {
    if (this.isUnlocked) return;
    this.isUnlocked = true;

    this.soundEngine.playChimeSFX();
    if (this.navLockStatus) this.navLockStatus.textContent = "🔓";

    this.lockedState.style.display = "none";
    this.unlockedState.style.display = "block";
  }
}

/* ============================================================================
   10. "HOW WELL DO YOU KNOW US?" PLAYFUL COUPLE QUIZ
   ============================================================================ */

class CoupleQuiz {
  constructor(soundEngine) {
    this.soundEngine = soundEngine;
    this.questions = CONFIG.quizQuestions;
    this.currentIndex = 0;
    this.score = 0;

    // Elements
    this.card = document.getElementById("quiz-card");
    this.resultCard = document.getElementById("quiz-result-card");
    this.progressFill = document.getElementById("quiz-progress-fill");
    this.currentIdxEl = document.getElementById("quiz-current-idx");
    this.totalIdxEl = document.getElementById("quiz-total-idx");
    this.questionTextEl = document.getElementById("quiz-question-text");
    this.optionsListEl = document.getElementById("quiz-options-list");
    this.feedbackBox = document.getElementById("quiz-feedback-box");
    this.feedbackMsg = document.getElementById("feedback-msg");
    this.scoreNumEl = document.getElementById("quiz-score-num");
    this.replayBtn = document.getElementById("quiz-replay-btn");

    this.init();
  }

  init() {
    this.totalIdxEl.textContent = this.questions.length;
    if (this.replayBtn) {
      this.replayBtn.addEventListener("click", () => this.restart());
    }
    this.loadQuestion(0);
  }

  loadQuestion(idx) {
    this.currentIndex = idx;
    const q = this.questions[idx];
    if (!q) return;

    this.currentIdxEl.textContent = idx + 1;
    this.questionTextEl.textContent = q.question;
    this.progressFill.style.width = `${((idx + 1) / this.questions.length) * 100}%`;
    this.feedbackBox.classList.remove("active");

    this.optionsListEl.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt-btn";
      btn.innerHTML = `
        <span>${opt.text}</span>
        <span>♡</span>
      `;
      btn.addEventListener("click", () => {
        this.handleAnswer(btn, opt.correct, q.feedback);
      });
      this.optionsListEl.appendChild(btn);
    });
  }

  handleAnswer(btn, isCorrect, feedback) {
    const allBtns = this.optionsListEl.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btn.classList.add("correct");
      this.score++;
      this.soundEngine.playHeartPopSFX();
      this.feedbackMsg.textContent = feedback;
      this.feedbackBox.classList.add("active");

      setTimeout(() => {
        if (this.currentIndex < this.questions.length - 1) {
          this.loadQuestion(this.currentIndex + 1);
        } else {
          this.showResults();
        }
      }, 1600);
    } else {
      btn.classList.add("wrong");
      this.feedbackMsg.textContent = "Aww, almost! But I still adore you endlessly. Try again!";
      this.feedbackBox.classList.add("active");
      setTimeout(() => {
        allBtns.forEach(b => {
          b.disabled = false;
          b.classList.remove("wrong");
        });
      }, 1200);
    }
  }

  showResults() {
    this.card.style.display = "none";
    this.resultCard.style.display = "block";
    this.scoreNumEl.textContent = this.score;
    this.soundEngine.playChimeSFX();
  }

  restart() {
    this.score = 0;
    this.resultCard.style.display = "none";
    this.card.style.display = "block";
    this.loadQuestion(0);
  }
}

/* ============================================================================
   11. CUSTOM MAGNETIC CURSOR & LIGHTBOX CONTROLLER
   ============================================================================ */

function setupCustomCursor() {
  const cursorDot = document.getElementById("custom-cursor");
  const cursorFollower = document.getElementById("cursor-follower");
  if (!cursorDot || !cursorFollower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  const updateFollower = () => {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
    requestAnimationFrame(updateFollower);
  };
  updateFollower();

  // Magnetic Hover effect on interactive elements
  const interactives = document.querySelectorAll("button, a, input, .micro-memory-card, .photo-card-wrapper");
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

function setupLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const date = document.getElementById("lightbox-date");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close-btn");
  const backdrop = document.getElementById("lightbox-backdrop");

  window.openLightbox = (src, t, d, c) => {
    img.src = src;
    title.textContent = t;
    date.textContent = d;
    caption.textContent = c;
    modal.classList.add("active");
  };

  const closeLightbox = () => modal.classList.remove("active");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

/* ============================================================================
   12. MASTER APPLICATION CONTROLLER & NAVIGATION ROUTER
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Engines
  const soundEngine = new SoundEngine();
  const skyCanvas = document.getElementById("sky-canvas");
  const skyAtmosphere = new SkyAtmosphere(skyCanvas);
  skyAtmosphere.init();

  const memoryBook = new MemoryBook(soundEngine);
  const memoryTimeline = new MemoryTimeline(memoryBook, soundEngine);
  const littleThings = new LittleThingsCollection(soundEngine);
  const miniGame = new RomanticMiniGame(soundEngine);
  const secretVault = new SecretVaultController(soundEngine);
  const quiz = new CoupleQuiz(soundEngine);

  setupCustomCursor();
  setupLightbox();


  // Populate Couple Personalization in Landing & Cover
  document.getElementById("landing-p1").textContent = CONFIG.person1;
  document.getElementById("landing-p2").textContent = CONFIG.person2;
  document.getElementById("landing-title").textContent = CONFIG.title;
  document.getElementById("landing-subtitle").textContent = CONFIG.subtitle;
  document.getElementById("landing-quote").textContent = CONFIG.quote;
  document.getElementById("brand-monogram").textContent = CONFIG.monogram;
  document.getElementById("cover-title").textContent = CONFIG.title;
  document.getElementById("cover-subtitle").textContent = CONFIG.subtitle;
  document.getElementById("cover-couple").textContent = `${CONFIG.person1} & ${CONFIG.person2}`;
  document.getElementById("cover-date").textContent = CONFIG.established;

  // Master Section Navigation
  const navItems = document.querySelectorAll(".nav-item");
  const screens = document.querySelectorAll(".screen-section");

  window.navigateToSection = (targetId) => {
    screens.forEach(s => s.classList.remove("active-screen"));
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active-screen");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    navItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-section") === targetId);
    });

    // If opening book section, auto open cover
    if (targetId === "book-section" && !memoryBook.isCoverOpen) {
      setTimeout(() => memoryBook.openBook(), 600);
    }
  };

  navItems.forEach(btn => {
    btn.addEventListener("click", () => {
      const secId = btn.getAttribute("data-section");
      window.navigateToSection(secId);
    });
  });

  // Brand monogram returns to Landing
  const brand = document.getElementById("nav-brand");
  if (brand) {
    brand.addEventListener("click", () => {
      window.navigateToSection("landing-section");
    });
  }

  // Landing "ENTER OUR STORY" CTA button
  const enterBtn = document.getElementById("enter-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      // Start ambient romantic music on first interaction
      if (!soundEngine.isPlaying) {
        soundEngine.play();
        const audioBtn = document.getElementById("audio-toggle-btn");
        if (audioBtn) audioBtn.classList.add("playing");
      }
      soundEngine.playPageTurnSFX();
      window.navigateToSection("book-section");
    });
  }

  // Audio Control Widget
  const audioToggleBtn = document.getElementById("audio-toggle-btn");
  const volumeSlider = document.getElementById("volume-slider");
  const sfxBtn = document.getElementById("sfx-toggle-btn");

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      const playing = soundEngine.toggle();
      audioToggleBtn.classList.toggle("playing", playing);
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      soundEngine.setVolume(parseFloat(e.target.value));
    });
  }

  if (sfxBtn) {
    sfxBtn.addEventListener("click", () => {
      soundEngine.sfxEnabled = !soundEngine.sfxEnabled;
      sfxBtn.classList.toggle("active", soundEngine.sfxEnabled);
      sfxBtn.textContent = soundEngine.sfxEnabled ? "SFX ON" : "SFX OFF";
    });
  }

  // Quality Toggle Switcher (High / Med / Low)
  const qualityBtns = document.querySelectorAll(".quality-btn");
  qualityBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      qualityBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const q = btn.getAttribute("data-quality");
      skyAtmosphere.setQuality(q);
    });
  });

  // Performance Optimization: Pause rendering when tab is inactive
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      skyAtmosphere.pause();
    } else {
      skyAtmosphere.resume();
    }
  });
});
