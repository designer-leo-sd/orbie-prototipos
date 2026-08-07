/**
 * ORBIE APP - MOCK DATA
 * Realistic educational content for the Trilhas Auto-Guiadas prototype
 */

// ====================================================================
// MOCK DATA STRUCTURE
// ====================================================================

const MockData = {
    
    // User profile data
    user: {
        id: "usr_123456",
        name: "Ana Beatriz Silva",
        grade: "5º ano",
        school: "Escola Municipal Dom Pedro II",
        xp: 1247,
        completedTrails: 23,
        currentStreak: 7,
        rank: 15,
        avatar: "👩‍🎓"
    },

    // Continue trail (in progress)
    continueTrail: {
        id: "trail_ongoing_001",
        title: "Frações Equivalentes",
        subject: "Matemática",
        grade: "5º ano",
        difficulty: "Médio",
        icon: "🧮",
        progress: {
            current: 6,
            total: 10,
            percentage: 60
        },
        xpReward: 15,
        estimatedTimeRemaining: 8,
        timeSpent: 12
    },

    // Recommended trails
    recommendedTrails: [
        {
            id: "trail_rec_001",
            title: "Interpretação de Texto",
            subject: "Português", 
            subjectKey: "portugues",
            grade: "6º ano",
            difficulty: "Fácil",
            difficultyKey: "facil",
            icon: "📖",
            description: "Desenvolva suas habilidades de leitura e interpretação",
            questionCount: 12,
            xpReward: 18,
            estimatedTime: 15,
            rating: 4.8,
            completions: 234,
            tags: ["Leitura", "Compreensão", "Análise"]
        },
        {
            id: "trail_rec_002", 
            title: "Sistema Solar",
            subject: "Ciências",
            subjectKey: "ciencias",
            grade: "7º ano", 
            difficulty: "Médio",
            difficultyKey: "medio",
            icon: "🌍",
            description: "Explore os planetas e características do nosso sistema solar",
            questionCount: 15,
            xpReward: 22,
            estimatedTime: 18,
            rating: 4.6,
            completions: 189,
            tags: ["Astronomia", "Planetas", "Universo"]
        },
        {
            id: "trail_rec_003",
            title: "Brasil Colônia", 
            subject: "História",
            subjectKey: "historia",
            grade: "8º ano",
            difficulty: "Difícil", 
            difficultyKey: "dificil",
            icon: "🏛️",
            description: "Período colonial brasileiro: economia, sociedade e cultura",
            questionCount: 20,
            xpReward: 30,
            estimatedTime: 25,
            rating: 4.9,
            completions: 156,
            tags: ["Colonização", "Economia", "Sociedade"]
        }
    ],

    // Popular trails
    popularTrails: [
        {
            id: "trail_pop_001",
            rank: 1,
            title: "Operações Básicas",
            subject: "Matemática",
            grade: "5º ano",
            completions: 1247,
            icon: "➕"
        },
        {
            id: "trail_pop_002", 
            rank: 2,
            title: "Ortografia e Acentuação",
            subject: "Português", 
            grade: "6º ano",
            completions: 987,
            icon: "✍️"
        },
        {
            id: "trail_pop_003",
            rank: 3,
            title: "Estados da Matéria",
            subject: "Ciências",
            grade: "4º ano", 
            completions: 856,
            icon: "🧪"
        },
        {
            id: "trail_pop_004",
            rank: 4,
            title: "Regiões do Brasil",
            subject: "Geografia",
            grade: "7º ano",
            completions: 743,
            icon: "🗺️"
        },
        {
            id: "trail_pop_005",
            rank: 5,
            title: "Independência do Brasil", 
            subject: "História",
            grade: "8º ano",
            completions: 692,
            icon: "🇧🇷"
        }
    ],

    // Sample questions for different subjects
    sampleQuestions: {
        matematica: [
            {
                id: "q_mat_001",
                type: "multiple_choice",
                question: "Maria tinha 3/4 de uma pizza. Ela comeu 1/4 da pizza. Qual fração representa a quantidade de pizza que sobrou?",
                image: {
                    type: "illustration", 
                    description: "Pizza dividida em quartos com partes destacadas",
                    emoji: "🍕"
                },
                options: [
                    { id: "A", text: "1/4", correct: false },
                    { id: "B", text: "2/4", correct: true },
                    { id: "C", text: "3/4", correct: false },
                    { id: "D", text: "4/4", correct: false }
                ],
                explanation: "Maria tinha 3/4 e comeu 1/4, então sobrou 3/4 - 1/4 = 2/4 da pizza.",
                difficulty: "medio",
                topic: "Frações"
            },
            {
                id: "q_mat_002",
                type: "multiple_choice", 
                question: "Qual é o resultado de 25 ÷ 5?",
                options: [
                    { id: "A", text: "3", correct: false },
                    { id: "B", text: "4", correct: false },
                    { id: "C", text: "5", correct: true },
                    { id: "D", text: "6", correct: false }
                ],
                explanation: "25 dividido por 5 é igual a 5, pois 5 × 5 = 25.",
                difficulty: "facil",
                topic: "Divisão"
            }
        ],
        
        portugues: [
            {
                id: "q_por_001",
                type: "multiple_choice",
                question: "Leia o texto: 'O gato subiu no telhado para buscar a bola.' Qual é o sujeito da oração?",
                options: [
                    { id: "A", text: "O gato", correct: true },
                    { id: "B", text: "no telhado", correct: false },
                    { id: "C", text: "a bola", correct: false },
                    { id: "D", text: "subiu", correct: false }
                ],
                explanation: "O sujeito é quem pratica a ação do verbo. Quem subiu? O gato.",
                difficulty: "facil",
                topic: "Análise Sintática"
            }
        ],

        ciencias: [
            {
                id: "q_cie_001",
                type: "multiple_choice",
                question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
                options: [
                    { id: "A", text: "Vênus", correct: false },
                    { id: "B", text: "Marte", correct: true },
                    { id: "C", text: "Júpiter", correct: false },
                    { id: "D", text: "Saturno", correct: false }
                ],
                explanation: "Marte é chamado de Planeta Vermelho devido à cor avermelhada de sua superfície, causada pela presença de óxido de ferro.",
                difficulty: "facil",
                topic: "Sistema Solar"
            }
        ]
    },

    // Subject configuration
    subjects: {
        matematica: {
            name: "Matemática",
            icon: "🧮",
            color: "#0059E7",
            topics: [
                "Operações Básicas",
                "Frações", 
                "Decimais",
                "Geometria",
                "Álgebra",
                "Estatística",
                "Probabilidade",
                "Medidas"
            ]
        },
        portugues: {
            name: "Português", 
            icon: "📖",
            color: "#2ABC4E", 
            topics: [
                "Interpretação de Texto",
                "Gramática",
                "Ortografia",
                "Acentuação", 
                "Pontuação",
                "Análise Sintática",
                "Literatura",
                "Produção Textual"
            ]
        },
        ciencias: {
            name: "Ciências",
            icon: "🧪", 
            color: "#F79009",
            topics: [
                "Sistema Solar",
                "Estados da Matéria", 
                "Animais e Plantas",
                "Corpo Humano",
                "Meio Ambiente",
                "Química Básica",
                "Física Básica",
                "Ecologia"
            ]
        },
        historia: {
            name: "História",
            icon: "🏛️",
            color: "#8455DD", 
            topics: [
                "Brasil Colônia",
                "Independência do Brasil",
                "República", 
                "História Antiga",
                "Idade Média",
                "Descobrimentos",
                "Escravidão",
                "Ditadura Militar"
            ]
        },
        geografia: {
            name: "Geografia",
            icon: "🗺️",
            color: "#00A6FB",
            topics: [
                "Regiões do Brasil",
                "Relevo",
                "Clima", 
                "Hidrografia",
                "População",
                "Economia",
                "Urbanização",
                "Meio Ambiente"
            ]
        }
    },

    // Grade configuration
    grades: [
        { value: "4", name: "4º ano - Ensino Fundamental", level: "fundamental1" },
        { value: "5", name: "5º ano - Ensino Fundamental", level: "fundamental1" },
        { value: "6", name: "6º ano - Ensino Fundamental", level: "fundamental2" },
        { value: "7", name: "7º ano - Ensino Fundamental", level: "fundamental2" },
        { value: "8", name: "8º ano - Ensino Fundamental", level: "fundamental2" },
        { value: "9", name: "9º ano - Ensino Fundamental", level: "fundamental2" },
        { value: "10", name: "1º ano - Ensino Médio", level: "medio" },
        { value: "11", name: "2º ano - Ensino Médio", level: "medio" },
        { value: "12", name: "3º ano - Ensino Médio", level: "medio" }
    ],

    // Difficulty levels
    difficulties: {
        facil: {
            name: "Fácil",
            description: "Questões básicas e conceitos fundamentais",
            color: "#12B76A",
            xpMultiplier: 1.0
        },
        medio: {
            name: "Médio", 
            description: "Aplicação de conceitos e raciocínio",
            color: "#F79009",
            xpMultiplier: 1.5
        },
        dificil: {
            name: "Difícil",
            description: "Problemas complexos e análise crítica", 
            color: "#F04438",
            xpMultiplier: 2.0
        }
    },

    // Achievement data for completion screen
    achievements: [
        {
            id: "first_trail",
            name: "Primeira Trilha",
            description: "Complete sua primeira trilha",
            icon: "🎯",
            unlocked: true
        },
        {
            id: "math_specialist", 
            name: "Especialista em Matemática",
            description: "Complete 10 trilhas de Matemática",
            icon: "🧮",
            unlocked: false,
            progress: 7
        },
        {
            id: "streak_master",
            name: "Sequência Perfeita", 
            description: "Mantenha uma sequência de 7 dias",
            icon: "🔥",
            unlocked: true
        }
    ],

    // Recommendation reasons
    recommendationReasons: [
        "Com base no seu desempenho em Matemática",
        "Assunto relacionado ao que você está estudando", 
        "Popular entre alunos do seu ano",
        "Recomendado pelos seus professores",
        "Próximo nível de dificuldade",
        "Complementa trilhas que você já fez"
    ]
};

// ====================================================================
// MOCK DATA FUNCTIONS
// ====================================================================

const MockDataManager = {
    
    // Get user stats for display
    getUserStats() {
        return {
            xp: MockData.user.xp,
            completedTrails: MockData.user.completedTrails,
            currentStreak: MockData.user.currentStreak,
            rank: MockData.user.rank
        };
    },

    // Get continue trail data
    getContinueTrail() {
        return MockData.continueTrail;
    },

    // Get recommended trails with random selection
    getRecommendedTrails(count = 3) {
        const shuffled = [...MockData.recommendedTrails].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // Get popular trails
    getPopularTrails(count = 5) {
        return MockData.popularTrails.slice(0, count);
    },

    // Generate sample questions for a subject
    generateQuestions(subject, count = 15) {
        const subjectQuestions = MockData.sampleQuestions[subject] || MockData.sampleQuestions.matematica;
        const questions = [];
        
        for (let i = 0; i < count; i++) {
            // Cycle through available questions
            const baseQuestion = subjectQuestions[i % subjectQuestions.length];
            questions.push({
                ...baseQuestion,
                id: `${baseQuestion.id}_${i}`,
                questionNumber: i + 1
            });
        }
        
        return questions;
    },

    // Get subject data
    getSubjectData(subjectKey) {
        return MockData.subjects[subjectKey] || MockData.subjects.matematica;
    },

    // Get grade data  
    getGradeData(gradeValue) {
        return MockData.grades.find(g => g.value === gradeValue) || MockData.grades[1];
    },

    // Get difficulty data
    getDifficultyData(difficultyKey) {
        return MockData.difficulties[difficultyKey] || MockData.difficulties.medio;
    },

    // Generate trail based on form data
    generateTrailFromForm(formData) {
        const subject = this.getSubjectData(formData.subject);
        const difficulty = this.getDifficultyData(formData.difficulty);
        const topics = formData.topics || [];
        const isSimulado = formData.type === 'simulado';
        
        // Generate main topic name
        const mainTopic = topics.length > 0 ? 
            (subject.topics.find(t => t.toLowerCase().includes(topics[0])) || topics[0]) :
            subject.topics[Math.floor(Math.random() * subject.topics.length)];

        return {
            id: `trail_generated_${Date.now()}`,
            title: `${mainTopic} - ${difficulty.name}`,
            subject: subject.name,
            subjectKey: formData.subject,
            grade: formData.grade,
            difficulty: difficulty.name,
            difficultyKey: formData.difficulty,
            icon: subject.icon,
            type: isSimulado ? 'Simulado' : 'Estudo',
            topics: topics.slice(0, 3), // Max 3 topics for display
            questionCount: isSimulado ? 40 : 15,
            estimatedTime: isSimulado ? 50 : Math.ceil((15 * 1.2)), // 1.2 min per question
            xpReward: Math.ceil((isSimulado ? 40 : 15) * difficulty.xpMultiplier * 1.5),
            questions: this.generateQuestions(formData.subject, isSimulado ? 40 : 15)
        };
    },

    // Get random recommendation reason
    getRandomRecommendationReason() {
        const reasons = MockData.recommendationReasons;
        return reasons[Math.floor(Math.random() * reasons.length)];
    },

    // Calculate performance rating
    calculatePerformance(correctAnswers, totalQuestions) {
        const percentage = (correctAnswers / totalQuestions) * 100;
        
        if (percentage >= 90) return { stars: 5, message: "Excelente trabalho!" };
        if (percentage >= 80) return { stars: 4, message: "Muito bom!" };
        if (percentage >= 70) return { stars: 3, message: "Bom trabalho!" };
        if (percentage >= 60) return { stars: 2, message: "Continue praticando!" };
        return { stars: 1, message: "Não desista, você consegue!" };
    },

    // Get next recommended trails after completion
    getNextRecommendations(completedTrail) {
        // Filter recommendations related to the completed trail
        const related = MockData.recommendedTrails.filter(trail => 
            trail.subjectKey === completedTrail.subjectKey ||
            trail.difficulty === completedTrail.difficulty
        );
        
        return related.slice(0, 2);
    }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MockData, MockDataManager };
} else {
    window.MockData = MockData;
    window.MockDataManager = MockDataManager;
}