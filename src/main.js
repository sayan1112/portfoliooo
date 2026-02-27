import './style.css'

// Data for the portfolio
const skillsData = {
  web: [
    { icon: '🎬', text: 'Visual Storytelling' },
    { icon: '✂️', text: 'Video Editing (Premiere Pro)' },
    { icon: '📽️', text: 'Motion Graphics (AE)' }
  ],
  backend: [
    { icon: '💻', text: 'Building Scalable Systems' },
    { icon: '🚀', text: 'Backend (Node.js & Python)' },
    { icon: '💾', text: 'Java & Database Management' }
  ],
  fundamentals: [
    { icon: '⚛️', text: 'React.js & Frontend Dev' },
    { icon: '📜', text: 'Modern JavaScript (ES6+)' },
    { icon: '🤝', text: 'Open Source Contributor' }
  ]
};

const projectsData = [
  {
    type: 'OPEN SOURCE',
    status: 'Active',
    title: 'Zulip Chat Platform',
    description: 'Contributor to Zulip — a powerful open-source team chat app used by thousands of organizations worldwide. Built with Python, Django & PostgreSQL.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: 'https://github.com/sayan1112/zulip'
  },
  {
    type: 'FULL STACK',
    status: 'Ready',
    title: 'Coffee Shop Website',
    description: 'A full-stack coffee shop web application with product catalog, shopping cart, and order management system.',
    tags: ['Node.js', 'Express', 'JavaScript'],
    link: 'https://github.com/sayan1112/coffee-shop'
  },
  {
    type: 'APP',
    status: 'Ready',
    title: 'Weather App',
    description: 'A modern weather application built with Next.js featuring real-time forecasts, location search, and a beautiful responsive UI.',
    tags: ['Next.js', 'React', 'API Integration'],
    link: 'https://github.com/sayan1112/v0-next-js-weather-app-6k'
  },
  {
    type: 'INTERACTIVE',
    status: 'Ready',
    title: 'Virtual Piano',
    description: 'A browser-based virtual piano with realistic sound playback, keyboard mapping, and an elegant visual interface.',
    tags: ['JavaScript', 'Web Audio API', 'CSS3'],
    link: 'https://github.com/sayan1112/Piano-virtual'
  },
  {
    type: 'INTERACTIVE',
    status: 'Ready',
    title: 'Drum Kit',
    description: 'An interactive drum machine that lets you play beats using keyboard strokes with animated visual feedback.',
    tags: ['JavaScript', 'DOM Manipulation', 'Audio'],
    link: 'https://github.com/sayan1112/Drum-Kit-project'
  },
  {
    type: 'BACKEND',
    status: 'Active',
    title: 'Backend Development',
    description: 'A collection of backend projects and APIs exploring server-side architecture, routing, and database integration.',
    tags: ['Node.js', 'Express', 'REST APIs'],
    link: 'https://github.com/sayan1112/backend-development'
  },
  {
    type: 'GAME',
    status: 'Ready',
    title: 'HTML Game Suite',
    description: 'A series of interactive browser games including Rock Paper Scissors, Clickball, and custom HTML adventures.',
    tags: ['JavaScript', 'Canvas API', 'Gamedev'],
    link: 'https://github.com/sayan1112/html-games'
  },
  {
    type: 'VIDEO',
    status: 'Featured',
    title: 'Cinematic Video Portfolio',
    description: 'Professional video editing work for the Entrepreneurship Club, short films, and commercial clients.',
    tags: ['Premiere Pro', 'After Effects', 'LumaFusion'],
    link: '#'
  }
];

// Tab Switching Logic
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const display = document.getElementById('system-display');

  // Rename tabs to match the hybrid CS + Video profile
  if (tabs[0]) tabs[0].innerText = 'Editing';
  if (tabs[1]) tabs[1].innerText = 'Systems';
  if (tabs[2]) tabs[2].innerText = 'Frontend';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Map button index to data keys
      const index = Array.from(tabs).indexOf(tab);
      const keys = ['web', 'backend', 'fundamentals']; 
      const category = keys[index];
      const skills = skillsData[category];
      
      display.style.opacity = '0';
      setTimeout(() => {
        display.innerHTML = skills.map(skill => `
          <div class="skill-item">
            <span class="icon">${skill.icon}</span>
            <span class="text">${skill.text}</span>
          </div>
        `).join('');
        display.style.opacity = '1';
      }, 100);
    });
  });
  
  // Initialize with the first content
  if (tabs.length > 0) tabs[0].click();
}

// Render Project Cards
function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  
  grid.innerHTML = projectsData.map(project => `
    <div class="project-card">
      <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; align-items: center;">
        <span class="project-type">${project.type}</span>
        <span class="tag" style="margin: 0; padding: 4px 12px; font-size: 0.7rem;">${project.status}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('')}
      </div>
      <a href="${project.link}" target="_blank" class="project-link">View Project →</a>
    </div>
  `).join('');
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderProjects();
});
