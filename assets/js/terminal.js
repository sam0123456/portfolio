/* ==========================================================================
   Interactive Developer Terminal — Saurabh Ranjan
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const quickChips = document.querySelectorAll('.chip-btn');

  if (!terminalInput || !terminalHistory) return;

  const COMMANDS = {
    help: `
<span class="term-accent">Available Commands:</span>
  <span class="term-cmd">about</span>       - Saurabh's background, MERN stack experience & vision
  <span class="term-cmd">skills</span>      - Breakdown of MERN Stack, C++, Python, MongoDB & AI/ML
  <span class="term-cmd">projects</span>    - ShiftPe, Hostel/PG Complaint System, C++ AlgoForge
  <span class="term-cmd">education</span>   - MCA (RGPV Bhopal: 8.35) & BCA (AKU Patna: 8.11)
  <span class="term-cmd">certs</span>       - Cisco Networking Essentials & IBM Web Development
  <span class="term-cmd">contact</span>     - Direct email, phone, LinkedIn & GitHub links
  <span class="term-cmd">hire</span>        - Why hire Saurabh for Full Stack / SDE roles
  <span class="term-cmd">whoami</span>      - Displays active session identity
  <span class="term-cmd">clear</span>       - Clears terminal history
`,
    about: `
<span class="term-success">❯ Saurabh Ranjan — MCA Student & Full Stack Developer</span>
Location: Wagholi, Pune, Maharashtra
MCA student with hands-on experience in MERN Stack development. Proficient in HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Built full-stack web applications featuring authentication, real-time communication (Socket.io), and geospatial search. Possess foundational knowledge of AI and Machine Learning.
`,
    skills: `
<span class="term-accent">❯ Languages:</span> C++, Python, JavaScript
<span class="term-accent">❯ Frontend:</span> HTML5, CSS3, React.js
<span class="term-accent">❯ Backend:</span> Node.js, Express.js, REST APIs, WebSockets
<span class="term-accent">❯ Database:</span> MongoDB (Mongoose, Geospatial Search)
<span class="term-accent">❯ Concepts:</span> Object-Oriented Programming (OOP), Data Structures & Algorithms
<span class="term-accent">❯ AI/ML:</span> Neural Networks, Generative AI Foundations
`,
    projects: `
<span class="term-success">❯ Real-World Projects:</span>
  1. <span class="term-cmd">ShiftPe</span> - Gig Marketplace Platform (MERN Stack)
     • Geospatial 10km radius discovery, swipe-based interface, live chat.
     • GitHub: github.com/sam0123456/shiftpe_onlinejob
  2. <span class="term-cmd">Hostel/PG Complaint System</span> (MERN Stack)
     • Role-based login (Student vs Warden), complaint lifecycle, soft-delete.
     • GitHub: github.com/sam0123456/hostel-complaint-box
  3. <span class="term-cmd">AlgoForge (C++)</span> - Core DSA & Competitive Problem Solving
`,
    education: `
<span class="term-success">❯ Academic Qualifications:</span>
  • <span class="term-accent">MCA (Master of Computer Applications)</span> | 2024 – 2026
    RGPV Bhopal, M.P — <span class="term-success">CGPA: 8.35</span>
  • <span class="term-accent">BCA (Bachelor of Computer Applications)</span> | 2021 – 2024
    AKU Patna, Bihar — <span class="term-success">CGPA: 8.11</span>
  • <span class="term-accent">Intermediate (12th) Science</span> | 2020 – 2021
    KVS — <span class="term-success">83.6%</span>
  • <span class="term-accent">Matriculation (10th)</span> | 2018 – 2019
    KVS — <span class="term-success">78.8%</span>
`,
    certs: `
<span class="term-success">❯ Verified Certifications:</span>
  • <span class="term-accent">Networking Essentials</span> — Cisco
  • <span class="term-accent">Web Development Fundamentals</span> — IBM
`,
    contact: `
<span class="term-success">❯ Direct Contact Details:</span>
  • Name:     Saurabh Ranjan
  • Email:    <a href="mailto:ranjansaurabh523@gmail.com" class="term-accent">ranjansaurabh523@gmail.com</a>
  • Phone:    <a href="tel:+917493961242" class="term-accent">+91 7493961242</a>
  • LinkedIn: <a href="https://linkedin.com/in/saurabhranjan123/" target="_blank" class="term-accent">linkedin.com/in/saurabhranjan123/</a>
  • GitHub:   <a href="https://github.com/sam0123456" target="_blank" class="term-accent">github.com/sam0123456</a>
  • Location: Wagholi, Pune, Maharashtra 412207
`,
    hire: `
<span class="term-success">✓ Why Hire Saurabh Ranjan:</span>
Solid practical experience shipping full-stack MERN apps (ShiftPe, Hostel Complaint System) with complex features like geospatial querying, WebSockets live chat, and RBAC authentication, backed by strong C++ & OOP foundations.
`,
    whoami: `
<span class="term-cmd">guest@saurabh-portfolio:~$</span> visitor exploring Saurabh Ranjan's portfolio
`,
    date: () => new Date().toLocaleString(),
    sudo: `Access granted! You are authorized to contact Saurabh for software engineering roles.`
  };

  function executeCommand(rawCmd) {
    const trimmed = rawCmd.trim();
    const cmd = trimmed.toLowerCase();

    // Create entry row
    const entryEl = document.createElement('div');
    entryEl.className = 'term-line';
    entryEl.innerHTML = `<span class="term-prompt">saurabh@dev:~$</span> <span class="term-cmd">${escapeHtml(trimmed)}</span>`;
    terminalHistory.appendChild(entryEl);

    if (cmd === '') {
      // blank line
    } else if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      return;
    } else if (COMMANDS[cmd]) {
      const outputEl = document.createElement('div');
      outputEl.className = 'term-line term-output';
      outputEl.innerHTML = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
      terminalHistory.appendChild(outputEl);
    } else {
      const errorEl = document.createElement('div');
      errorEl.className = 'term-line';
      errorEl.innerHTML = `<span style="color: #ef4444;">command not found: "${escapeHtml(trimmed)}". Type <span class="term-cmd">help</span> for commands.</span>`;
      terminalHistory.appendChild(errorEl);
    }

    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      executeCommand(val);
      terminalInput.value = '';
    }
  });

  // Click on quick chip buttons
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

  // Focus input when clicking anywhere in terminal body
  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });
});
