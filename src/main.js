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
    type: 'SYSTEM',
    status: 'Ready',
    title: 'Zulip Open Source',
    description: 'Contributor to Zulip, a powerful open-source team chat application. Working with Python and scalable backend systems.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    link: 'https://github.com/sayan1112/zulip'
  },
  {
    type: 'WEB DEV',
    status: 'Active',
    title: 'VST Web Labs',
    description: 'A collection of modern web development implementations and experiments. Focus on semantic HTML and CSS systems.',
    tags: ['HTML5', 'CSS3', 'Web Design'],
    link: 'https://github.com/sayan1112/VST-2025-web-dev'
  },
  {
    type: 'GAME',
    status: 'Ready',
    title: 'HTML Game Suite',
    description: 'A series of interactive web games including Rock Paper Scissors and custom HTML adventures.',
    tags: ['JavaScript', 'Canvas API', 'Gamedev'],
    link: 'https://github.com/sayan1112/html-games'
  },
  {
    type: 'VIDEO',
    status: 'Featured',
    title: 'Cinematic Video Portfolio',
    description: 'Professional video editing projects for the Entrepreneurship Club and commercial clients.',
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
