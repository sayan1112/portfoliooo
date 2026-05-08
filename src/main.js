import './style.css'

// Data for the portfolio
const skillsData = {
  fundamentals: [
    { icon: '⚛️', text: 'React.js & Frontend Dev' },
    { icon: '🎨', text: 'Responsive UI Design' },
    { icon: '📜', text: 'Modern JavaScript (ES6+)' }
  ],
  backend: [
    { icon: '🤖', text: 'Machine Learning & AI' },
    { icon: '🚀', text: 'Backend (Node.js & Python)' },
    { icon: '💻', text: 'Building Scalable Systems' }
  ],
  web: [
    { icon: '🎬', text: 'Visual Storytelling' },
    { icon: '✂️', text: 'Video Editing (Premiere Pro)' },
    { icon: '📽️', text: 'Motion Graphics (AE)' }
  ]
};

const projectsData = [
  {
    type: 'FULL STACK',
    status: 'Ready',
    title: 'Coffee Shop Website',
    description: 'A full-stack coffee shop web application with product catalog, shopping cart, and order management system.',
    tags: ['Node.js', 'Express', 'JavaScript'],
    link: 'https://coffee-shop22.netlify.app'
  },
  {
    type: 'APP',
    status: 'Ready',
    title: 'Sayanocast',
    description: 'A modern web application built with Next.js.',
    tags: ['Next.js', 'React', 'Web App'],
    link: 'https://sayanocast.netlify.app'
  }
];

// Tab Switching Logic
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const display = document.getElementById('system-display');

  // Rename tabs to match the AI + CS profile
  if (tabs[0]) tabs[0].innerText = 'Frontend';
  if (tabs[1]) tabs[1].innerText = 'AI & Systems';
  if (tabs[2]) tabs[2].innerText = 'Video Editing';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Map button index to data keys
      const index = Array.from(tabs).indexOf(tab);
      const keys = ['fundamentals', 'backend', 'web']; 
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
