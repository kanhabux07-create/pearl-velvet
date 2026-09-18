// combined.js – all JavaScript in a single module
// ---------------------------------------------------------------
// 1️⃣ Configuration (was config.js)
export const CONFIG = {
  person1: "Alice",
  person2: "Bob",
  title: "OUR STORY",
  subtitle: "A collection of little moments that became memories.",
  accentColor: "#ff6b81",
  music: "assets/audio/music.mp3",
  performance: "AUTO",
  secret: {
    title: "Our Secret Moment",
    image: "assets/photos/secret.jpg",
    story: "The moment we kept just for us…",
    caption: "Forever yours."
  },
  enableQuiz: true,
  colors: { background: "#0a0a0a", text: "#f5f5f5", card: "rgba(255,255,255,0.08)" }
};

// ---------------------------------------------------------------
// 2️⃣ Default memories (was memories.js)
export const memories = [
  { id:1, image:"assets/photos/memory-01.jpg", title:"Our First Memory", date:"12 August 2025", story:"The first time we met under the golden sunset, a moment that started everything.", caption:"A sunrise of love." },
  { id:2, image:"assets/photos/memory-02.jpg", title:"First Date", date:"23 September 2025", story:"A cozy cafe, endless conversation, and the first shared laugh.", caption:"Coffee and chemistry." },
  { id:3, image:"assets/photos/memory-03.jpg", title:"Starlit Walk", date:"15 October 2025", story:"Walking hand‑in‑hand beneath a sky full of stars, feeling infinite.", caption:"Stars as witnesses." },
  { id:4, image:"assets/photos/memory-04.jpg", title:"First Trip", date:"02 December 2025", story:"Exploring a new city together, discovering corners and each other.", caption:"Wanderlust duo." },
  { id:5, image:"assets/photos/memory-05.jpg", title:"Celebration", date:"01 January 2026", story:"Greeting the new year with fireworks and a promise to stay together.", caption:"New beginnings." },
  { id:6, image:"assets/photos/memory-06.jpg", title:"Quiet Evening", date:"18 February 2026", story:"A rainy night, soft music, and a blanket of comfort.", caption:"Rainy‑day romance." },
  { id:7, image:"assets/photos/memory-07.jpg", title:"Adventure Day", date:"10 March 2026", story:"Hiking to the summit, sharing a breathtaking view and a sweet kiss.", caption:"High on love." },
  { id:8, image:"assets/photos/memory-08.jpg", title:"Home Sweet Home", date:"20 April 2026", story:"Moving in together, turning a house into our personal sanctuary.", caption:"Our nest." }
];

// ---------------------------------------------------------------
// 3️⃣ Utility helpers (was utils.js)
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
export function lazyLoadImage(img) {
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const src = el.getAttribute('data-src');
          if (src) el.src = src;
          o.unobserve(el);
        }
      });
    });
    obs.observe(img);
  } else {
    img.src = img.getAttribute('data-src');
  }
}

// ---------------------------------------------------------------
// 4️⃣ Particle system for landing (was particles.js)
export function initParticles(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const particles = [];
  const count = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 30 : 80;
  const colors = ["#ff6b81","#ffd700","#ffffff"];
  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < count; i++) particles.push(createParticle());
  function createParticle(){
    const size = Math.random()*2+1;
    return {x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, size, color:colors[Math.floor(Math.random()*colors.length)], life:Math.random()*200+100};
  }
  function update(){
    particles.forEach(p=>{p.x+=p.vx; p.y+=p.vy; p.life--; if(p.x<0||p.x>canvas.width) p.vx*=-1; if(p.y<0||p.y>canvas.height) p.vy*=-1; if(p.life<=0) Object.assign(p, createParticle());});
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fillStyle=p.color; ctx.fill();});
  }
  function loop(){ if(!window.reducedMotion){ update(); draw(); } requestAnimationFrame(loop); }
  loop();
}

// ---------------------------------------------------------------
// 5️⃣ 3D Book (was book.js) – uses Three.js CDN import
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.module.js";
let scene, camera, renderer, bookGroup;
let currentIndex = 0;
let pages = [];
let isTurning = false;

export function initBook(memArray, startId = null) {
  // If already initialised, just navigate
  if (scene) {
    const startIdx = startId ? memArray.findIndex(m => m.id === startId) : 0;
    goToPage(startIdx);
    return;
  }
  const container = document.getElementById('book-canvas-container');
  const width = container.clientWidth;
  const height = container.clientHeight;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);
  camera.position.set(0,2,6);
  camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(width,height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);
  // Lights
  const ambient = new THREE.AmbientLight(0xffffff,0.8); scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff,0.6); dir.position.set(5,10,7); scene.add(dir);
  bookGroup = new THREE.Group(); scene.add(bookGroup);
  const pageW = 2.5, pageH = 3.5;
  const geometry = new THREE.PlaneGeometry(pageW, pageH);
  const loader = new THREE.TextureLoader();
  memArray.forEach((mem,i)=>{
    const material = new THREE.MeshPhongMaterial({map:loader.load(mem.image), side:THREE.DoubleSide, transparent:true});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0,0,-i*0.01);
    mesh.rotation.y = Math.PI; // back side
    mesh.visible = i===0;
    pages.push({mesh, mem});
    bookGroup.add(mesh);
  });
  // simple cover
  const coverMat = new THREE.MeshPhongMaterial({color:0x2a2a2a, side:THREE.DoubleSide});
  const cover = new THREE.Mesh(geometry, coverMat);
  cover.position.set(0,0,0.02);
  bookGroup.add(cover);
  // Mouse tilt
  container.addEventListener('mousemove', e=>{
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX-rect.left)/rect.width)*2-1;
    const y = -((e.clientY-rect.top)/rect.height)*2+1;
    bookGroup.rotation.x = y*0.2;
    bookGroup.rotation.y = x*0.2;
  });
  // Keyboard navigation
  window.addEventListener('keydown', e=>{ if(e.key==='ArrowRight') nextPage(); if(e.key==='ArrowLeft') prevPage(); });
  // Render loop
  function animate(){ requestAnimationFrame(animate); renderer.render(scene,camera); }
  animate();
  // Show first page overlay
  showPageOverlay(memArray[0]);
  updateProgress(1, memArray.length);
  if(startId){ const idx = memArray.findIndex(m=>m.id===startId); if(idx>=0) goToPage(idx); }
}

function onMouseMove(){/* handled inline */}
function nextPage(){ if(isTurning||currentIndex>=pages.length-1) return; turnPage(currentIndex, currentIndex+1, false); }
function prevPage(){ if(isTurning||currentIndex<=0) return; turnPage(currentIndex, currentIndex-1, true); }
function goToPage(idx){ if(idx===currentIndex) return; if(idx>currentIndex) turnPage(currentIndex, idx, false); else turnPage(currentIndex, idx, true); }
function turnPage(fromIdx, toIdx, reverse){
  isTurning = true;
  const fromPage = pages[fromIdx].mesh;
  const toPage = pages[toIdx].mesh;
  toPage.visible = true;
  const duration = 800;
  const start = performance.now();
  function anim(time){
    const t = Math.min((time-start)/duration,1);
    const angle = reverse ? Math.PI*(1-t) : Math.PI*t;
    fromPage.rotation.y = reverse ? Math.PI*t : Math.PI*(1-t);
    toPage.rotation.y = reverse ? Math.PI*(1-t) : Math.PI*t;
    if(t<1) requestAnimationFrame(anim);
    else {
      fromPage.visible = false;
      currentIndex = toIdx;
      showPageOverlay(pages[toIdx].mem);
      updateProgress(toIdx+1, pages.length);
      isTurning = false;
    }
  }
  requestAnimationFrame(anim);
}
function showPageOverlay(memory){
  const overlay = document.getElementById('page-overlay');
  overlay.innerHTML = '';
  overlay.classList.remove('hidden');
  const div = document.createElement('div');
  div.className = 'content';
  div.innerHTML = `
    <img class="photo" src="${memory.image}" alt="${memory.title}" />
    <h2>${memory.title}</h2>
    <p><em>${memory.date}</em></p>
    <p>${memory.story}</p>
    ${memory.caption? `<p class="caption">${memory.caption}</p>` : ''}
  `;
  overlay.appendChild(div);
}
export function openPageById(id){ const idx = pages.findIndex(p=>p.mem.id===id); if(idx>=0) goToPage(idx); }

// ---------------------------------------------------------------
// 6️⃣ Timeline view (was timeline.js)
export function initTimeline(){
  const container = document.getElementById('timeline-container');
  if(!container) return;
  const list = document.createElement('ul');
  list.style.listStyle='none'; list.style.padding='2rem'; list.style.fontFamily='var(--font-secondary)'; list.style.color='var(--text-color)'; list.style.maxWidth='600px'; list.style.margin='0 auto';
  memories.forEach(mem=>{
    const li=document.createElement('li'); li.style.marginBottom='1.5rem'; li.style.cursor='pointer';
    li.innerHTML = `<strong>${mem.title}</strong> <em>(${mem.date})</em>`;
    li.addEventListener('click',()=>{ const nav=document.querySelector('#nav-bar a[data-section="book"]'); if(nav) nav.click(); openPageById(mem.id); });
    list.appendChild(li);
  });
  container.appendChild(list);
}

// ---------------------------------------------------------------
// 7️⃣ Main application bootstrap (was app.js)
// Apply accent colour from CONFIG (CSS variable already set in style sheet, but we reinforce)
document.documentElement.style.setProperty('--accent-color', CONFIG.accentColor);

// Audio handling (optional)
const audio = new Audio(CONFIG.music);
audio.loop = true;
let audioEnabled = false;
function toggleAudio(){
  audioEnabled = !audioEnabled;
  if(audioEnabled){ audio.play(); document.getElementById('audio-control').textContent='🔊'; }
  else { audio.pause(); document.getElementById('audio-control').textContent='🔈'; }
}

// Landing particles
initParticles(document.getElementById('landing-canvas'));

// Navigation handling
const sections = {
  book: document.getElementById('section-book'),
  timeline: document.getElementById('section-timeline'),
  memories: document.getElementById('section-memories'),
  game: document.getElementById('section-game'),
  secret: document.getElementById('section-secret')
};
function showSection(name){
  Object.values(sections).forEach(s=>s.classList.add('hidden'));
  sections[name].classList.remove('hidden');
  document.querySelectorAll('#nav-bar a').forEach(a=>a.classList.toggle('active', a.dataset.section===name));
}
// Nav clicks
document.querySelectorAll('#nav-bar a').forEach(a=>{
  a.addEventListener('click',e=>{ e.preventDefault(); const tgt=a.dataset.section; showSection(tgt); if(tgt==='timeline' && !window.timelineInit){ initTimeline(); window.timelineInit=true; } if(tgt==='book' && !window.bookInit){ initBook(memories); window.bookInit=true; } });
});

// Landing → Book transition
document.getElementById('enter-btn').addEventListener('click',()=>{
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  showSection('book');
  initBook(memories);
});
// Audio UI
document.getElementById('audio-control').addEventListener('click', toggleAudio);

// Progress indicator (called from book.js)
export function updateProgress(current,total){
  document.getElementById('progress-indicator').textContent = `MEMORY ${String(current).padStart(2,'0')} / ${total}`;
}

// Reduced‑motion handling
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ window.reducedMotion = true; } else { window.reducedMotion = false; }
