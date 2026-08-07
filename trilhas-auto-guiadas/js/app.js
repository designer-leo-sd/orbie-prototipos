/**
 * ORBIE APP - TRILHAS AUTO-GUIADAS
 * JavaScript interactions and app logic
 */

// ====================================================================
// APP STATE MANAGEMENT
// ====================================================================

const AppState = {
    currentScreen: 'lab-home',
    currentStep: 1,
    selectedAnswer: null,
    trailData: null,
    currentQuestion: 0,
    timer: null,
    timeRemaining: 0,
    
    // Mock data will be populated later
    mockData: {
        trails: [],
        questions: [],
        user: {
            xp: 127,
            completedTrails: 8
        }
    }
};

// ====================================================================
// SCREEN NAVIGATION
// ====================================================================

class ScreenManager {
    constructor() {
        this.screens = document.querySelectorAll('.screen');
        this.navItems = document.querySelectorAll('.nav-item');
        this.init();
    }
    
    init() {
        // Set initial screen
        this.showScreen('lab-home');
        
        // Navigation event listeners
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const screenId = item.dataset.screen;
                if (screenId) {
                    this.showScreen(screenId);
                    this.setActiveNavItem(item);
                }
            });
        });
        
        // Back button listeners
        document.querySelectorAll('.back-button').forEach(button => {
            button.addEventListener('click', () => {
                this.goBack();
            });
        });
        
        // Screen-specific navigation
        this.setupScreenNavigation();
    }
    
    showScreen(screenId) {
        // Hide all screens
        this.screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            AppState.currentScreen = screenId;
        }
    }
    
    setActiveNavItem(activeItem) {
        this.navItems.forEach(item => {
            item.classList.remove('active');
        });
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
    
    goBack() {
        const currentScreen = AppState.currentScreen;
        
        switch (currentScreen) {
            case 'create-trail':
                this.showScreen('lab-home');
                break;
            case 'trail-details':
                this.showScreen('lab-home');
                break;
            case 'question-screen':
                this.showScreen('trail-details');
                break;
            case 'trail-completion':
                this.showScreen('lab-home');
                break;
            default:
                this.showScreen('lab-home');
        }
    }
    
    setupScreenNavigation() {
        // Create Trail button
        const createTrailBtn = document.getElementById('create-trail-btn');
        if (createTrailBtn) {
            createTrailBtn.addEventListener('click', () => {
                this.showScreen('create-trail');
            });
        }
        
        // Start Trail button
        const startTrailBtn = document.getElementById('start-trail-btn');
        if (startTrailBtn) {
            startTrailBtn.addEventListener('click', () => {
                this.showScreen('question-screen');
                questionManager.startTrail();
            });
        }
        
        // Back to Lab button
        const backToLabBtn = document.getElementById('back-to-lab-btn');
        if (backToLabBtn) {
            backToLabBtn.addEventListener('click', () => {
                this.showScreen('lab-home');
            });
        }
    }
}

// ====================================================================
// FORM MANAGEMENT
// ====================================================================

class FormManager {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 1; // Only one step for simplicity
        this.formData = {};
        this.init();
    }
    
    init() {
        // Step navigation
        const nextBtn = document.getElementById('next-step');
        const prevBtn = document.getElementById('prev-step');
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.handleNext();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.handlePrevious();
            });
        }
        
        // Form validation
        this.setupFormValidation();
    }
    
    handleNext() {
        if (this.validateCurrentStep()) {
            this.saveStepData();
            
            if (this.currentStep < this.totalSteps) {
                this.goToStep(this.currentStep + 1);
            } else {
                // Form complete, create trail
                this.createTrail();
            }
        }
    }
    
    handlePrevious() {
        if (this.currentStep > 1) {
            this.goToStep(this.currentStep - 1);
        }
    }
    
    goToStep(stepNumber) {
        // Hide current step
        const currentStepEl = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        if (currentStepEl) {
            currentStepEl.classList.remove('active');
        }
        
        // Show target step
        const targetStepEl = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        if (targetStepEl) {
            targetStepEl.classList.add('active');
            this.currentStep = stepNumber;
        }
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }
    
    updateNavigationButtons() {
        const nextBtn = document.getElementById('next-step');
        const prevBtn = document.getElementById('prev-step');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentStep === 1;
        }
        
        if (nextBtn) {
            nextBtn.textContent = this.currentStep === this.totalSteps ? 'Criar Trilha' : 'Próximo';
        }
    }
    
    validateCurrentStep() {
        const currentStepEl = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        if (!currentStepEl) return false;
        
        // Basic validation - check required fields
        const requiredSelects = currentStepEl.querySelectorAll('select[required]');
        const requiredRadios = currentStepEl.querySelectorAll('input[type="radio"][required]');
        
        for (let select of requiredSelects) {
            if (!select.value) {
                this.showValidationError('Por favor, preencha todos os campos obrigatórios.');
                return false;
            }
        }
        
        // Check if at least one topic is selected
        const topicCheckboxes = currentStepEl.querySelectorAll('input[name="topics"]:checked');
        if (topicCheckboxes.length === 0) {
            this.showValidationError('Selecione pelo menos um assunto de interesse.');
            return false;
        }
        
        return true;
    }
    
    saveStepData() {
        const currentStepEl = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        if (!currentStepEl) return;
        
        // Save form data
        const formInputs = currentStepEl.querySelectorAll('input, select');
        formInputs.forEach(input => {
            if (input.type === 'checkbox') {
                if (input.checked) {
                    if (!this.formData[input.name]) {
                        this.formData[input.name] = [];
                    }
                    this.formData[input.name].push(input.value);
                }
            } else if (input.type === 'radio') {
                if (input.checked) {
                    this.formData[input.name] = input.value;
                }
            } else {
                this.formData[input.name] = input.value;
            }
        });
    }
    
    showValidationError(message) {
        // Simple alert for now - could be improved with custom modal
        alert(message);
    }
    
    setupFormValidation() {
        // Real-time validation feedback
        const selects = document.querySelectorAll('.form-select');
        selects.forEach(select => {
            select.addEventListener('change', () => {
                if (select.value) {
                    select.style.borderColor = 'var(--brand-blue-300)';
                } else {
                    select.style.borderColor = 'var(--border-default)';
                }
            });
        });
    }
    
    createTrail() {
        // Show loading screen
        screenManager.showScreen('trail-loading');
        
        // Simulate trail creation process
        this.simulateTrailCreation();
    }
    
    simulateTrailCreation() {
        const steps = document.querySelectorAll('.loading-step');
        let currentStep = 0;
        
        const processStep = () => {
            // Mark current step as completed
            if (currentStep > 0) {
                steps[currentStep - 1].classList.remove('active');
                steps[currentStep - 1].classList.add('completed');
            }
            
            // Activate next step
            if (currentStep < steps.length) {
                steps[currentStep].classList.add('active');
                currentStep++;
                setTimeout(processStep, 1500);
            } else {
                // All steps complete, show trail details
                setTimeout(() => {
                    this.generateTrailData();
                    screenManager.showScreen('trail-details');
                }, 1000);
            }
        };
        
        setTimeout(processStep, 500);
    }
    
    generateTrailData() {
        // Use MockDataManager to generate trail based on form data
        AppState.trailData = MockDataManager.generateTrailFromForm(this.formData);
    }
    
    getTrailTitle() {
        const subject = this.formData['subject-select'];
        const topics = this.formData['topics'] || [];
        
        const subjectNames = {
            'matematica': 'Matemática',
            'portugues': 'Português',
            'ciencias': 'Ciências',
            'historia': 'História',
            'geografia': 'Geografia'
        };
        
        const topicNames = {
            'fracoes': 'Frações',
            'geometria': 'Geometria',
            'operacoes': 'Operações',
            'algebra': 'Álgebra'
        };
        
        const subjectName = subjectNames[subject] || 'Estudo';
        const mainTopic = topicNames[topics[0]] || 'Geral';
        const difficulty = this.formData['difficulty'] || 'medio';
        const difficultyNames = {
            'facil': 'Nível Fácil',
            'medio': 'Nível Médio',
            'dificil': 'Nível Difícil'
        };
        
        return `${mainTopic} - ${difficultyNames[difficulty]}`;
    }
}
// ====================================================================
// QUESTION MANAGEMENT
// ====================================================================

class QuestionManager {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.timer = null;
        this.timeRemaining = 0;
        this.init();
    }
    
    init() {
        // Answer selection
        this.setupAnswerSelection();
        
        // Submit button
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                this.submitAnswer();
            });
        }
        
        // Close button
        const closeBtn = document.querySelector('.close-button');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.exitTrail();
            });
        }
    }
    
    setupAnswerSelection() {
        const answerOptions = document.querySelectorAll('.answer-option');
        answerOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.selectAnswer(option);
            });
        });
    }
    
    selectAnswer(selectedOption) {
        // Remove previous selection
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
            const radio = option.querySelector('input[type="radio"]');
            if (radio) radio.checked = false;
        });
        
        // Select new option
        selectedOption.classList.add('selected');
        const radio = selectedOption.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        
        AppState.selectedAnswer = selectedOption.dataset.option;
        
        // Enable submit button
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.disabled = false;
        }
    }
    
    submitAnswer() {
        if (!AppState.selectedAnswer) return;
        
        // Store answer
        this.answers[this.currentQuestion] = AppState.selectedAnswer;
        
        // Show correct/wrong feedback
        this.showAnswerFeedback();
        
        // Change button to "Continuar"
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.textContent = 'Continuar';
            submitBtn.onclick = () => this.nextQuestion();
        }
    }
    
    showAnswerFeedback() {
        const correctAnswer = 'B'; // Mock correct answer
        const selectedOption = document.querySelector(`.answer-option[data-option="${AppState.selectedAnswer}"]`);
        const correctOption = document.querySelector(`.answer-option[data-option="${correctAnswer}"]`);
        
        // Show correct answer
        if (correctOption) {
            correctOption.classList.add('correct');
        }
        
        // Show wrong answer if different
        if (AppState.selectedAnswer !== correctAnswer && selectedOption) {
            selectedOption.classList.add('wrong');
        }
        
        // Disable all options
        document.querySelectorAll('.answer-option').forEach(option => {
            option.style.pointerEvents = 'none';
        });
    }
    
    nextQuestion() {
        this.currentQuestion++;
        const totalQuestions = AppState.trailData?.questionCount || 15;
        
        if (this.currentQuestion >= totalQuestions) {
            // Trail complete
            this.completeTrail();
        } else {
            // Next question (for demo, just reset current question)
            this.resetQuestionState();
            this.updateQuestionCounter();
        }
    }
    
    resetQuestionState() {
        // Reset UI state
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected', 'correct', 'wrong');
            option.style.pointerEvents = 'auto';
            const radio = option.querySelector('input[type="radio"]');
            if (radio) radio.checked = false;
        });
        
        // Reset button
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn) {
            submitBtn.textContent = 'Responder';
            submitBtn.disabled = true;
            submitBtn.onclick = () => this.submitAnswer();
        }
        
        AppState.selectedAnswer = null;
    }
    
    updateQuestionCounter() {
        const counter = document.querySelector('.question-counter');
        const progressFill = document.querySelector('.question-header .progress-fill');
        const totalQuestions = AppState.trailData?.questionCount || 15;
        
        if (counter) {
            counter.textContent = `${this.currentQuestion + 1}/${totalQuestions}`;
        }
        
        if (progressFill) {
            const percentage = ((this.currentQuestion + 1) / totalQuestions) * 100;
            progressFill.style.width = `${percentage}%`;
        }
    }
    
    startTrail() {
        this.currentQuestion = 0;
        this.answers = [];
        this.startTimer();
        this.updateQuestionCounter();
    }
    
    startTimer() {
        const totalQuestions = AppState.trailData?.questionCount || 15;
        this.timeRemaining = totalQuestions * 60; // 1 minute per question
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.completeTrail();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const timerEl = document.querySelector('.timer');
        if (timerEl) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            const timeText = timerEl.querySelector('span') || timerEl.childNodes[1];
            if (timeText) {
                timeText.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
        }
    }
    
    completeTrail() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Calculate results
        this.calculateResults();
        
        // Show completion screen
        screenManager.showScreen('trail-completion');
    }
    
    calculateResults() {
        const totalQuestions = AppState.trailData?.questionCount || 15;
        const correctAnswers = Math.floor(totalQuestions * 0.8); // Mock 80% success rate
        const xpEarned = AppState.trailData?.xpReward || 22;
        const timeSpent = Math.floor((totalQuestions - this.timeRemaining / 60));
        
        // Calculate performance rating
        const performance = MockDataManager.calculatePerformance(correctAnswers, totalQuestions);
        
        // Update completion screen with results
        this.updateCompletionResults(correctAnswers, totalQuestions, xpEarned, timeSpent, performance);
        
        // Update user stats
        MockData.user.xp += xpEarned;
        MockData.user.completedTrails++;
        
        // Update displayed stats
        dataManager.populateUserStats();
    }
    
    updateCompletionResults(correct, total, xp, timeSpent, performance) {
        // Update score
        const scoreEl = document.querySelector('.result-stat .stat-value');
        if (scoreEl) {
            scoreEl.textContent = `${correct}/${total}`;
        }
        
        // Update XP
        const xpEl = document.querySelector('.result-stat:nth-child(2) .stat-value');
        if (xpEl) {
            xpEl.textContent = `+${xp}`;
        }
        
        // Update time
        const timeEl = document.querySelector('.result-stat:nth-child(3) .stat-value');
        if (timeEl) {
            timeEl.textContent = `${timeSpent}m`;
        }
        
        // Update star rating
        const starsContainer = document.querySelector('.rating-stars');
        if (starsContainer) {
            const stars = starsContainer.querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.className = `star ${index < performance.stars ? 'filled' : 'empty'}`;
            });
        }
        
        // Update performance message
        const messageEl = document.querySelector('.rating-text');
        if (messageEl) {
            messageEl.textContent = performance.message;
        }
        
        // Update recommendations
        this.updateRecommendations();
    }
    
    updateRecommendations() {
        const recommendations = MockDataManager.getNextRecommendations(AppState.trailData);
        const container = document.querySelector('.recommendation-cards');
        
        if (container && recommendations.length > 0) {
            container.innerHTML = recommendations.map(trail => `
                <div class="recommendation-card" data-trail-id="${trail.id}">
                    <h4 class="body-md font-bold text-primary">${trail.title}</h4>
                    <p class="body-sm text-secondary">${trail.description}</p>
                    <span class="xp-badge body-sm">+${trail.xpReward} XP</span>
                </div>
            `).join('');
        }
    }
    
    exitTrail() {
        if (confirm('Tem certeza que deseja sair da trilha? Seu progresso será perdido.')) {
            if (this.timer) {
                clearInterval(this.timer);
            }
            screenManager.showScreen('lab-home');
        }
    }
}

// ====================================================================
// SEARCH AND FILTER
// ====================================================================

class SearchManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }
        
        // Filter button and modal
        this.setupFilterModal();
    }
    
    handleSearch(query) {
        // Mock search functionality
        console.log('Searching for:', query);
        // In a real app, this would filter the trails display
    }
    
    setupFilterModal() {
        const filterBtn = document.getElementById('filter-btn');
        const filterModal = document.getElementById('filter-modal');
        const modalBackdrop = filterModal?.querySelector('.modal-backdrop');
        const modalClose = filterModal?.querySelector('.modal-close');
        
        if (filterBtn && filterModal) {
            filterBtn.addEventListener('click', () => {
                filterModal.classList.add('active');
            });
        }
        
        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', () => {
                filterModal.classList.remove('active');
            });
        }
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                filterModal.classList.remove('active');
            });
        }
        
        // Filter apply/clear buttons
        const applyBtn = filterModal?.querySelector('.modal-footer .btn-primary');
        const clearBtn = filterModal?.querySelector('.modal-footer .btn-secondary');
        
        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                this.applyFilters();
                filterModal.classList.remove('active');
            });
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearFilters();
            });
        }
    }
    
    applyFilters() {
        // Get selected filters
        const selectedFilters = {};
        const filterInputs = document.querySelectorAll('#filter-modal input:checked');
        
        filterInputs.forEach(input => {
            const filterType = input.closest('.filter-group').querySelector('h3').textContent;
            if (!selectedFilters[filterType]) {
                selectedFilters[filterType] = [];
            }
            selectedFilters[filterType].push(input.value);
        });
        
        console.log('Applied filters:', selectedFilters);
        // In a real app, this would filter the trails display
    }
    
    clearFilters() {
        const filterInputs = document.querySelectorAll('#filter-modal input[type="checkbox"]');
        filterInputs.forEach(input => {
            input.checked = false;
        });
    }
}

// ====================================================================
// TRAIL INTERACTIONS
// ====================================================================

class TrailManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Trail card clicks
        this.setupTrailCardClicks();
        
        // Continue trail card
        this.setupContinueCard();
    }
    
    setupTrailCardClicks() {
        document.addEventListener('click', (e) => {
            const trailCard = e.target.closest('.trail-card, .trail-list-item');
            if (trailCard) {
                this.handleTrailClick(trailCard);
            }
        });
    }
    
    setupContinueCard() {
        const continueCard = document.querySelector('.continue-trail-card');
        if (continueCard) {
            continueCard.addEventListener('click', () => {
                screenManager.showScreen('question-screen');
                questionManager.startTrail();
            });
        }
    }
    
    handleTrailClick(trailCard) {
        // Get trail data from card
        const title = trailCard.querySelector('.trail-title')?.textContent;
        const description = trailCard.querySelector('.trail-description')?.textContent;
        
        // Set mock trail data
        AppState.trailData = {
            title: title || 'Trilha Selecionada',
            subject: 'matematica',
            grade: '5',
            difficulty: 'medio',
            type: 'estudo',
            topics: ['fracoes'],
            questionCount: 15,
            estimatedTime: 18,
            xpReward: 22
        };
        
        // Update trail details screen
        this.updateTrailDetailsScreen();
        
        // Navigate to trail details
        screenManager.showScreen('trail-details');
    }
    
    updateTrailDetailsScreen() {
        if (!AppState.trailData) return;
        
        // Update trail preview header
        const trailTitle = document.querySelector('.trail-preview-header .display-md');
        if (trailTitle) {
            trailTitle.textContent = AppState.trailData.title;
        }
        
        const trailDesc = document.querySelector('.trail-preview-header .body-lg');
        if (trailDesc) {
            const subjectNames = {
                'matematica': 'Matemática',
                'portugues': 'Português',
                'ciencias': 'Ciências'
            };
            const subject = subjectNames[AppState.trailData.subject] || 'Estudo';
            trailDesc.textContent = `${subject} • ${AppState.trailData.grade}º ano • ${AppState.trailData.questionCount} questões`;
        }
        
        // Update XP badge
        const xpBadge = document.querySelector('.trail-metadata .xp-badge');
        if (xpBadge) {
            xpBadge.textContent = `+${AppState.trailData.xpReward} XP`;
        }
        
        // Update time estimate
        const timeEstimate = document.querySelector('.trail-metadata .time-estimate');
        if (timeEstimate) {
            timeEstimate.textContent = `~${AppState.trailData.estimatedTime} min`;
        }
    }
}

// ====================================================================
// APP INITIALIZATION
// ====================================================================

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    window.screenManager = new ScreenManager();
    window.formManager = new FormManager();
    window.questionManager = new QuestionManager();
    window.searchManager = new SearchManager();
    window.trailManager = new TrailManager();
    window.dataManager = new DataManager();
    
    console.log('Orbie App initialized successfully!');
});