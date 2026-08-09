// app.js

const app = {
  currentCourse: null,
  currentLesson: null,
  currentSection: 'intro',

  init() {
    this.renderNavbar();
    this.navigate('home');
  },

  renderNavbar() {
    const navLinks = document.getElementById('nav-links');
    navLinks.innerHTML = window.coursesData.map(course => 
      `<button class="nav-btn" onclick="app.navigate('course', '${course.id}')">${course.title.split(':')[0]}</button>`
    ).join('');
  },

  navigate(page, id = null, lessonId = null) {
    const root = document.getElementById('app-root');
    
    if (page === 'home') {
      this.currentCourse = null;
      this.currentLesson = null;
      root.innerHTML = this.getHomeHTML();
    } else if (page === 'course') {
      this.currentCourse = window.coursesData.find(c => c.id === id);
      this.currentLesson = null;
      root.innerHTML = this.getCourseHTML();
    } else if (page === 'lesson') {
      this.currentCourse = window.coursesData.find(c => c.id === id);
      this.currentLesson = this.currentCourse.lessons.find(l => l.id === lessonId);
      this.currentSection = 'intro';
      root.innerHTML = this.getLessonHTML();
      this.renderLessonSection();
    }
    
    window.scrollTo(0, 0);
  },

  getHomeHTML() {
    const cards = window.coursesData.map(course => `
      <div class="glass-panel course-card" onclick="app.navigate('course', '${course.id}')">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      </div>
    `).join('');

    return `
      <div class="text-center mb-8">
        <h1 class="text-4xl mb-4">Master Finance</h1>
        <p class="text-xl text-muted">Select a course to begin learning</p>
      </div>
      <div class="grid grid-cols-4">
        ${cards}
      </div>
    `;
  },

  getCourseHTML() {
    const lessons = this.currentCourse.lessons.map((lesson, idx) => `
      <div class="glass-panel course-card" onclick="app.navigate('lesson', '${this.currentCourse.id}', '${lesson.id}')">
        <h3>${idx + 1}. ${lesson.title}</h3>
        <p>${lesson.introduction.substring(0, 100)}...</p>
      </div>
    `).join('');

    return `
      <button class="btn btn-secondary mb-4" onclick="app.navigate('home')">← Back</button>
      <div class="glass-panel mb-8">
        <h1 class="text-4xl mb-4">${this.currentCourse.title}</h1>
        <p class="text-xl text-muted">${this.currentCourse.description}</p>
      </div>
      <h2 class="text-2xl mb-4">Lessons</h2>
      <div class="grid grid-cols-4">
        ${lessons}
      </div>
    `;
  },

  getLessonHTML() {
    const sections = [
      { id: 'intro', title: 'Introduction' },
      { id: 'flashcards', title: 'Key Terms' },
      { id: 'lesson', title: 'The Lesson' },
      { id: 'realworld', title: 'Real World' },
      { id: 'tips', title: 'Tips & Mistakes' }
    ];

    sections.push({ id: 'quiz', title: 'Quiz' });

    const sidebar = sections.map(s => `
      <button class="sidebar-btn" id="btn-${s.id}" onclick="app.setSection('${s.id}')">
        ${s.title}
      </button>
    `).join('');

    return `
      <button class="btn btn-secondary mb-4" onclick="app.navigate('course', '${this.currentCourse.id}')">← Back to Course</button>
      <div class="lesson-layout">
        <div class="sidebar glass-panel">
          <h3 class="mb-4">Contents</h3>
          ${sidebar}
        </div>
        <div class="main-content glass-panel" id="lesson-content-area">
          <!-- Content injected here -->
        </div>
      </div>
    `;
  },

  setSection(sectionId) {
    this.currentSection = sectionId;
    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${sectionId}`).classList.add('active');
    this.renderLessonSection();
  },

  renderLessonSection() {
    const area = document.getElementById('lesson-content-area');
    const l = this.currentLesson;
    
    let html = '';
    
    if (this.currentSection === 'intro') {
      html = `<h2>${l.title}</h2><div class="prose">${l.introduction.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>`;
    } 
    else if (this.currentSection === 'flashcards') {
      html = `<h2>Key Terms</h2><div class="flashcard-grid">` + 
        (l.flashcards || []).map(f => `
          <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-inner">
              <div class="flashcard-front"><h3>${f.term}</h3></div>
              <div class="flashcard-back"><p>${f.definition}</p></div>
            </div>
          </div>
        `).join('') + `</div>`;
    }
    else if (this.currentSection === 'lesson') {
      html = `<h2>The Lesson</h2><div class="prose">${l.lessonContent.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>`;
    }
    else if (this.currentSection === 'realworld') {
      html = `<h2>Real World Examples</h2><div class="prose"><i>"${l.realWorldExamples}"</i></div>`;
    }
    else if (this.currentSection === 'tips') {
      html = `<h2>Tips & Mistakes</h2><div class="prose"><ul>` + 
        (l.tipsAndMistakes || []).map(t => `<li><b>${t.type.toUpperCase()}:</b> ${t.content}</li>`).join('') + 
        `</ul></div>`;
    }

    else if (this.currentSection === 'quiz') {
      html = `<h2>Quiz</h2><div id="quiz-container"></div>`;
      setTimeout(() => this.renderQuiz(), 50);
    }

    area.innerHTML = html;
  },

  renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    const l = this.currentLesson;
    if (!l.quiz || l.quiz.length === 0) {
      container.innerHTML = '<p>No quiz available for this lesson.</p>';
      return;
    }
    
    let html = '';
    l.quiz.forEach((currentQ, qIndex) => {
      // Safely escape quotes for inline handler
      const safeExplanation = (currentQ.explanation || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      html += `
        <div class="mb-8 p-6 glass-panel" id="q-block-${qIndex}">
          <h3 class="mb-4">Question ${qIndex + 1}: ${currentQ.question}</h3>
          <button class="btn btn-primary" id="btn-reveal-${qIndex}" onclick="app.revealAnswer(${qIndex}, '${safeExplanation}')">Reveal Answer</button>
          <div id="quiz-feedback-${qIndex}" style="display:none;" class="quiz-explanation mt-4"></div>
        </div>
      `;
    });
    container.innerHTML = html;
  },

  revealAnswer(qIndex, explanation) {
    const btn = document.getElementById(`btn-reveal-${qIndex}`);
    if (btn) btn.style.display = 'none';
    
    const feedback = document.getElementById(`quiz-feedback-${qIndex}`);
    feedback.style.display = 'block';
    feedback.innerHTML = `<b>Answer:</b> ${explanation}`;
  }
};

window.onload = () => app.init();
