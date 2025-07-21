// Mock API service for demonstration
// In a real application, this would connect to your backend API

import { 
  User, Role, Permission, Survey, Question, TestSession, TestResult, 
  Certificate, Dashboard, ZODashboard, RODashboard, SupervisorDashboard, 
  EnumeratorDashboard, SystemSettings, AnalyticsData, AnalyticsFilter,
  ApiResponse, FileUploadResult, Activity, PerformanceData, MonthlyTrend,
  ZonePerformance, DistrictPerformance, SupervisorPerformance, TeamPerformance,
  EnumeratorStatus, AvailableTest, CompletedTest, UpcomingTest, Section
} from '../types';

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@esigma.com',
    name: 'System Administrator',
    roleId: '1',
    role: { id: '1', name: 'Admin', description: 'System Administrator', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 1 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    jurisdiction: 'National'
  },
  {
    id: '2',
    email: 'zo@esigma.com',
    name: 'Zonal Officer',
    roleId: '2',
    role: { id: '2', name: 'ZO User', description: 'Zonal Office User', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 2 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    zone: 'Zone A',
    jurisdiction: 'Zone A'
  },
  {
    id: '3',
    email: 'ro@esigma.com',
    name: 'Regional Officer',
    roleId: '3',
    role: { id: '3', name: 'RO User', description: 'Regional Office User', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 3 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    zone: 'Zone A',
    region: 'Region 1',
    jurisdiction: 'Region 1'
  },
  {
    id: '4',
    email: 'supervisor@esigma.com',
    name: 'Field Supervisor',
    roleId: '4',
    role: { id: '4', name: 'Supervisor', description: 'Field Supervisor', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 4 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    zone: 'Zone A',
    region: 'Region 1',
    district: 'District 1',
    jurisdiction: 'District 1'
  },
  {
    id: '5',
    email: 'enumerator@esigma.com',
    name: 'Field Enumerator',
    roleId: '5',
    role: { id: '5', name: 'Enumerator', description: 'Field Enumerator', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 5 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    zone: 'Zone A',
    region: 'Region 1',
    district: 'District 1',
    jurisdiction: 'District 1'
  }
];

const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Digital Literacy Assessment 2024',
    description: 'Comprehensive assessment of digital literacy skills for field staff',
    targetDate: new Date('2024-12-31'),
    duration: 35,
    totalQuestions: 30,
    passingScore: 70,
    maxAttempts: 3,
    isActive: true,
    sections: [
      {
        id: 's1',
        surveyId: '1',
        title: 'Basic Computer Skills',
        description: 'Fundamental computer operation skills',
        questionsCount: 10,
        order: 1,
        questions: []
      },
      {
        id: 's2',
        surveyId: '1',
        title: 'Internet and Communication',
        description: 'Internet usage and digital communication',
        questionsCount: 10,
        order: 2,
        questions: []
      },
      {
        id: 's3',
        surveyId: '1',
        title: 'Data Security',
        description: 'Basic data security and privacy concepts',
        questionsCount: 10,
        order: 3,
        questions: []
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: '1'
  },
  {
    id: '2',
    title: 'Data Collection Training',
    description: 'Training assessment for data collection procedures',
    targetDate: new Date('2024-11-30'),
    duration: 25,
    totalQuestions: 20,
    passingScore: 75,
    maxAttempts: 2,
    isActive: true,
    sections: [
      {
        id: 's4',
        surveyId: '2',
        title: 'Data Collection Methods',
        description: 'Various methods of data collection',
        questionsCount: 10,
        order: 1,
        questions: []
      },
      {
        id: 's5',
        surveyId: '2',
        title: 'Quality Assurance',
        description: 'Quality control in data collection',
        questionsCount: 10,
        order: 2,
        questions: []
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: '1'
  }
];

const mockQuestions: Question[] = [
  {
    id: 'q1',
    sectionId: 's1',
    text: 'What is the primary function of an operating system?',
    type: 'single_choice',
    complexity: 'easy',
    options: [
      { id: 'o1', text: 'To manage hardware and software resources', isCorrect: true },
      { id: 'o2', text: 'To create documents', isCorrect: false },
      { id: 'o3', text: 'To browse the internet', isCorrect: false },
      { id: 'o4', text: 'To play games', isCorrect: false }
    ],
    correctAnswers: ['o1'],
    explanation: 'An operating system manages all hardware and software resources of a computer.',
    points: 1,
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q2',
    sectionId: 's1',
    text: 'Which of the following are input devices? (Select all that apply)',
    type: 'multiple_choice',
    complexity: 'medium',
    options: [
      { id: 'o5', text: 'Keyboard', isCorrect: true },
      { id: 'o6', text: 'Mouse', isCorrect: true },
      { id: 'o7', text: 'Monitor', isCorrect: false },
      { id: 'o8', text: 'Microphone', isCorrect: true }
    ],
    correctAnswers: ['o5', 'o6', 'o8'],
    explanation: 'Input devices allow users to provide data to the computer. Monitor is an output device.',
    points: 2,
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Authentication API
export const authApi = {
  async login(email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> {
    console.log('API: Login attempt for:', email);
    await delay(500); // Reduced delay for better UX
    
    const user = mockUsers.find(u => u.email === email);
    console.log('API: Found user:', user);
    
    if (user && password === 'password123') {
      console.log('API: Login successful');
      return {
        success: true,
        data: {
          user,
          token: 'mock-jwt-token'
        },
        message: 'Login successful'
      };
    }
    
    console.log('API: Login failed - invalid credentials');
    return {
      success: false,
      message: 'Invalid credentials'
    };
  },

  async logout(): Promise<ApiResponse<void>> {
    await delay(500);
    return {
      success: true,
      message: 'Logged out successfully'
    };
  }
};

// User API
export const userApi = {
  async getUsers(): Promise<ApiResponse<User[]>> {
    await delay(800);
    return {
      success: true,
      data: mockUsers,
      message: 'Users fetched successfully'
    };
  },

  async createUser(userData: any): Promise<ApiResponse<User>> {
    await delay(1000);
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      role: mockUsers[0].role,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    };
    
    return {
      success: true,
      data: newUser,
      message: 'User created successfully'
    };
  },

  async deleteUser(id: string): Promise<ApiResponse<void>> {
    await delay(500);
    return {
      success: true,
      message: 'User deleted successfully'
    };
  }
};

// Role API
export const roleApi = {
  async getRoles(): Promise<ApiResponse<Role[]>> {
    await delay(600);
    return {
      success: true,
      data: [
        { id: '1', name: 'Admin', description: 'System Administrator', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 1 },
        { id: '2', name: 'ZO User', description: 'Zonal Office User', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 2 },
        { id: '3', name: 'RO User', description: 'Regional Office User', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 3 },
        { id: '4', name: 'Supervisor', description: 'Field Supervisor', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 4 },
        { id: '5', name: 'Enumerator', description: 'Field Enumerator', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 5 }
      ],
      message: 'Roles fetched successfully'
    };
  },

  async getPermissions(): Promise<ApiResponse<Permission[]>> {
    await delay(400);
    return {
      success: true,
      data: [
        { id: '1', name: 'Create Users', resource: 'users', action: 'create', description: 'Create new users', module: 'user_management' },
        { id: '2', name: 'View Users', resource: 'users', action: 'read', description: 'View user information', module: 'user_management' },
        { id: '3', name: 'Edit Users', resource: 'users', action: 'update', description: 'Edit existing users', module: 'user_management' },
        { id: '4', name: 'Delete Users', resource: 'users', action: 'delete', description: 'Delete users', module: 'user_management' },
        { id: '5', name: 'Create Surveys', resource: 'surveys', action: 'create', description: 'Create new surveys', module: 'survey_management' },
        { id: '6', name: 'View Surveys', resource: 'surveys', action: 'read', description: 'View survey information', module: 'survey_management' },
        { id: '7', name: 'Edit Surveys', resource: 'surveys', action: 'update', description: 'Edit existing surveys', module: 'survey_management' },
        { id: '8', name: 'Delete Surveys', resource: 'surveys', action: 'delete', description: 'Delete surveys', module: 'survey_management' },
        { id: '9', name: 'View Results', resource: 'results', action: 'read', description: 'View test results', module: 'analytics' },
        { id: '10', name: 'Export Results', resource: 'results', action: 'export', description: 'Export test results', module: 'analytics' }
      ],
      message: 'Permissions fetched successfully'
    };
  },

  async createRole(roleData: any): Promise<ApiResponse<Role>> {
    await delay(1000);
    const newRole: Role = {
      id: Date.now().toString(),
      ...roleData,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      level: 5
    };
    
    return {
      success: true,
      data: newRole,
      message: 'Role created successfully'
    };
  },

  async updateRole(id: string, roleData: any): Promise<ApiResponse<Role>> {
    await delay(1000);
    const updatedRole: Role = {
      id,
      ...roleData,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      level: 5
    };
    
    return {
      success: true,
      data: updatedRole,
      message: 'Role updated successfully'
    };
  },

  async deleteRole(id: string): Promise<ApiResponse<void>> {
    await delay(500);
    return {
      success: true,
      message: 'Role deleted successfully'
    };
  }
};

// Survey API
export const surveyApi = {
  async getSurveys(): Promise<ApiResponse<Survey[]>> {
    await delay(800);
    return {
      success: true,
      data: mockSurveys,
      message: 'Surveys fetched successfully'
    };
  },

  async createSurvey(surveyData: any): Promise<ApiResponse<Survey>> {
    await delay(1200);
    const newSurvey: Survey = {
      id: Date.now().toString(),
      ...surveyData,
      sections: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true
    };
    
    return {
      success: true,
      data: newSurvey,
      message: 'Survey created successfully'
    };
  },

  async getSurveyById(id: string): Promise<ApiResponse<Survey>> {
    await delay(600);
    const survey = mockSurveys.find(s => s.id === id);
    if (survey) {
      return {
        success: true,
        data: survey,
        message: 'Survey fetched successfully'
      };
    }
    return {
      success: false,
      message: 'Survey not found'
    };
  },

  async getSurveySections(surveyId: string): Promise<ApiResponse<Section[]>> {
    await delay(500);
    const survey = mockSurveys.find(s => s.id === surveyId);
    if (survey) {
      return {
        success: true,
        data: survey.sections,
        message: 'Survey sections fetched successfully'
      };
    }
    return {
      success: false,
      data: [],
      message: 'Survey not found'
    };
  },

  async createSection(surveyId: string, sectionData: any): Promise<ApiResponse<Section>> {
    await delay(800);
    const newSection: Section = {
      id: Date.now().toString(),
      surveyId,
      ...sectionData,
      questions: []
    };
    
    return {
      success: true,
      data: newSection,
      message: 'Section created successfully'
    };
  }
};

// Question API
export const questionApi = {
  async getQuestions(surveyId?: string, sectionId?: string): Promise<ApiResponse<Question[]>> {
    await delay(800);
    let filteredQuestions = mockQuestions;
    
    if (sectionId) {
      filteredQuestions = mockQuestions.filter(q => q.sectionId === sectionId);
    }
    
    return {
      success: true,
      data: filteredQuestions,
      message: 'Questions fetched successfully'
    };
  },

  async createQuestion(questionData: any): Promise<ApiResponse<Question>> {
    await delay(1000);
    const newQuestion: Question = {
      id: Date.now().toString(),
      ...questionData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return {
      success: true,
      data: newQuestion,
      message: 'Question created successfully'
    };
  },

  async updateQuestion(id: string, questionData: any): Promise<ApiResponse<Question>> {
    await delay(1000);
    const updatedQuestion: Question = {
      id,
      ...questionData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return {
      success: true,
      data: updatedQuestion,
      message: 'Question updated successfully'
    };
  },

  async deleteQuestion(id: string): Promise<ApiResponse<void>> {
    await delay(500);
    return {
      success: true,
      message: 'Question deleted successfully'
    };
  },

  async uploadQuestions(surveyId: string, file: File): Promise<ApiResponse<FileUploadResult>> {
    await delay(2000);
    
    // Simulate file processing
    const result: FileUploadResult = {
      fileName: file.name,
      questionsAdded: Math.floor(Math.random() * 20) + 10,
      questionsSkipped: Math.floor(Math.random() * 5),
      errors: Math.random() > 0.7 ? ['Row 15: Invalid question format', 'Row 23: Missing correct answer'] : [],
      success: true
    };
    
    return {
      success: true,
      data: result,
      message: 'Questions uploaded successfully'
    };
  },

  async downloadTemplate(): Promise<Blob> {
    await delay(500);
    
    // Create CSV template content
    const csvContent = `Question Text,Question Type,Complexity,Option A,Option B,Option C,Option D,Correct Answer,Points,Explanation
"What is the primary function of an operating system?",single_choice,easy,"To manage hardware and software resources","To create documents","To browse the internet","To play games",A,1,"An operating system manages all hardware and software resources of a computer"
"Which of the following are input devices? (Select all that apply)",multiple_choice,medium,"Keyboard","Mouse","Monitor","Microphone","A,B,D",2,"Input devices allow users to provide data to the computer. Monitor is an output device"
"What does CPU stand for?",single_choice,easy,"Central Processing Unit","Computer Personal Unit","Central Program Unit","Computer Processing Unit",A,1,"CPU stands for Central Processing Unit"
"Which programming languages are commonly used for web development?",multiple_choice,hard,"JavaScript","Python","HTML","CSS","A,C,D",3,"JavaScript, HTML, and CSS are core web technologies. Python is primarily server-side"
"What is the purpose of RAM in a computer?",single_choice,medium,"Temporary storage for active programs","Permanent storage for files","Processing calculations","Connecting to internet",A,2,"RAM (Random Access Memory) provides temporary storage for programs currently being used"`;

    return new Blob([csvContent], { type: 'text/csv' });
  }
};

// Test API
export const testApi = {
  async startTest(surveyId: string): Promise<ApiResponse<TestSession>> {
    await delay(100);
    await delay(500); // Reduced delay for better UX
    
    const session: TestSession = {
      id: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId: '5',
      surveyId,
      startTime: new Date(),
      timeRemaining: 35 * 60, // 35 minutes in seconds
      currentQuestionIndex: 0,
      answers: [],
      status: 'in_progress',
      attemptNumber: 1
    };
    console.log('API: Created session:', session);
    
    return {
      success: true,
      data: session,
      message: 'Test started successfully'
    };
  },

  async getSession(sessionId: string): Promise<ApiResponse<TestSession>> {
    await delay(500);
    
    const session: TestSession = {
      id: sessionId,
      userId: '5',
      surveyId: '1',
      startTime: new Date(Date.now() - 10 * 60 * 1000), // Started 10 minutes ago
      timeRemaining: 25 * 60, // 25 minutes remaining
      currentQuestionIndex: 5,
      answers: [],
      status: 'in_progress',
      attemptNumber: 1
    };
    
    return {
      success: true,
      data: session,
      message: 'Session fetched successfully'
    };
  },

  async getQuestionsForSession(sessionId: string): Promise<ApiResponse<Question[]>> {
    await delay(800);
    return {
      success: true,
      data: mockQuestions,
      message: 'Questions fetched successfully'
    };
  },

  async saveAnswer(sessionId: string, questionId: string, selectedOptions: string[]): Promise<ApiResponse<void>> {
    await delay(300);
    return {
      success: true,
      message: 'Answer saved successfully'
    };
  },

  async updateSession(sessionId: string, sessionData: any): Promise<ApiResponse<void>> {
    await delay(500);
    return {
      success: true,
      message: 'Session updated successfully'
    };
  },

  async pauseSession(sessionId: string): Promise<ApiResponse<void>> {
    await delay(500);
    return {
      success: true,
      message: 'Session paused successfully'
    };
  },

  async submitTest(sessionId: string): Promise<ApiResponse<TestResult>> {
    await delay(1500);
    
    const result: TestResult = {
      id: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId: '5',
      user: mockUsers[4],
      surveyId: '1',
      survey: mockSurveys[0],
      sessionId,
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
      totalQuestions: 30,
      correctAnswers: Math.floor(Math.random() * 15) + 18, // Random between 18-32
      isPassed: true,
      timeSpent: 25 * 60, // 25 minutes
      attemptNumber: 1,
      sectionScores: [
        {
          sectionId: 's1',
          sectionTitle: 'Basic Computer Skills',
          score: 85,
          totalQuestions: 10,
          correctAnswers: 8
        },
        {
          sectionId: 's2',
          sectionTitle: 'Internet and Communication',
          score: 75,
          totalQuestions: 10,
          correctAnswers: 7
        },
        {
          sectionId: 's3',
          sectionTitle: 'Data Security',
          score: 90,
          totalQuestions: 10,
          correctAnswers: 9
        }
      ],
      completedAt: new Date()
    };
    
    return {
      success: true,
      data: result,
      message: 'Test submitted successfully'
    };
  },

  async syncOfflineData(): Promise<ApiResponse<void>> {
    await delay(1000);
    return {
      success: true,
      message: 'Offline data synced successfully'
    };
  }
};

// Dashboard APIs
export const dashboardApi = {
  async getDashboardData(): Promise<ApiResponse<Dashboard>> {
    await delay(1000);
    
    const dashboard: Dashboard = {
      totalUsers: 1247,
      totalSurveys: 8,
      totalAttempts: 3456,
      averageScore: 78.5,
      passRate: 82.3,
      recentActivity: [
        {
          id: '1',
          type: 'test_completed',
          description: 'John Doe completed Digital Literacy Assessment',
          userId: '5',
          userName: 'John Doe',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
          id: '2',
          type: 'user_created',
          description: 'New enumerator Sarah Smith was added',
          userId: '1',
          userName: 'Admin',
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000)
        }
      ],
      performanceByRole: [
        { name: 'Admin', value: 95, total: 100, percentage: 95 },
        { name: 'Supervisor', value: 88, total: 100, percentage: 88 },
        { name: 'Enumerator', value: 76, total: 100, percentage: 76 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 82, total: 100, percentage: 82 },
        { name: 'Data Collection', value: 75, total: 100, percentage: 75 }
      ],
      monthlyTrends: [
        { month: 'Jan', attempts: 245, passed: 198, failed: 47, passRate: 80.8 },
        { month: 'Feb', attempts: 289, passed: 241, failed: 48, passRate: 83.4 },
        { month: 'Mar', attempts: 312, passed: 267, failed: 45, passRate: 85.6 }
      ]
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'Dashboard data fetched successfully'
    };
  }
};

export const zoDashboardApi = {
  async getDashboardData(dateFilter: string): Promise<ApiResponse<ZODashboard>> {
    await delay(1200);
    
    const dashboard: ZODashboard = {
      totalUsers: 1247,
      totalSurveys: 8,
      totalAttempts: 3456,
      averageScore: 78.5,
      passRate: 82.3,
      totalZones: 5,
      totalRegions: 15,
      recentActivity: [],
      performanceByRole: [],
      performanceBySurvey: [],
      monthlyTrends: [],
      zonePerformance: [
        {
          zoneId: 'z1',
          zoneName: 'Zone A',
          totalEnumerators: 245,
          completedTests: 198,
          passRate: 80.8,
          averageScore: 78.5,
          regions: []
        }
      ],
      regionalBreakdown: [
        {
          regionId: 'r1',
          regionName: 'Region 1',
          totalEnumerators: 89,
          completedTests: 72,
          passRate: 80.9,
          averageScore: 79.2,
          supervisors: []
        }
      ],
      topPerformingRegions: [],
      lowPerformingRegions: []
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'ZO Dashboard data fetched successfully'
    };
  }
};

export const roDashboardApi = {
  async getDashboardData(dateFilter: string): Promise<ApiResponse<RODashboard>> {
    await delay(1200);
    
    const dashboard: RODashboard = {
      totalUsers: 456,
      totalSurveys: 8,
      totalAttempts: 1234,
      averageScore: 76.8,
      passRate: 79.5,
      totalDistricts: 8,
      totalSupervisors: 12,
      recentActivity: [],
      performanceByRole: [],
      performanceBySurvey: [],
      monthlyTrends: [],
      districtPerformance: [
        {
          districtId: 'd1',
          districtName: 'District 1',
          totalEnumerators: 56,
          completedTests: 45,
          passRate: 80.4,
          averageScore: 77.8
        }
      ],
      supervisorPerformance: [
        {
          supervisorId: 's1',
          supervisorName: 'John Smith',
          totalEnumerators: 8,
          completedTests: 6,
          passRate: 75.0,
          averageScore: 76.5,
          enumerators: []
        }
      ],
      enumeratorDistribution: []
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'RO Dashboard data fetched successfully'
    };
  }
};

export const supervisorDashboardApi = {
  async getDashboardData(dateFilter: string): Promise<ApiResponse<SupervisorDashboard>> {
    await delay(1000);
    
    const dashboard: SupervisorDashboard = {
      totalUsers: 8,
      totalSurveys: 3,
      totalAttempts: 24,
      averageScore: 78.2,
      passRate: 83.3,
      totalEnumerators: 8,
      recentActivity: [],
      performanceByRole: [],
      performanceBySurvey: [],
      monthlyTrends: [],
      teamPerformance: [
        {
          teamId: 't1',
          teamName: 'Team Alpha',
          totalMembers: 4,
          completedTests: 12,
          passRate: 83.3,
          averageScore: 79.5,
          members: []
        }
      ],
      enumeratorStatus: [
        {
          id: 'e1',
          user: mockUsers[4],
          surveys: [
            {
              surveyId: '1',
              surveyTitle: 'Digital Literacy Assessment',
              status: 'completed',
              attempts: 1,
              maxAttempts: 3,
              bestScore: 85,
              lastAttempt: new Date(),
              targetDate: new Date('2024-12-31'),
              isPassed: true,
              certificateId: 'cert1'
            }
          ],
          overallProgress: 100,
          totalCertificates: 1,
          lastActivity: new Date()
        }
      ],
      upcomingDeadlines: []
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'Supervisor Dashboard data fetched successfully'
    };
  }
};

export const enumeratorDashboardApi = {
  async getDashboardData(): Promise<ApiResponse<EnumeratorDashboard>> {
    await delay(1000);
    
    const dashboard: EnumeratorDashboard = {
      availableTests: [
        {
          surveyId: '1',
          title: 'Digital Literacy Assessment 2024',
          description: 'Comprehensive assessment of digital literacy skills',
          targetDate: new Date('2024-12-31'),
          duration: 35,
          totalQuestions: 30,
          passingScore: 70,
          attemptsLeft: 3,
          maxAttempts: 3,
          isEligible: true
        },
        {
          surveyId: '2',
          title: 'Data Collection Training',
          description: 'Training assessment for data collection procedures',
          targetDate: new Date('2024-11-30'),
          duration: 25,
          totalQuestions: 20,
          passingScore: 75,
          attemptsLeft: 2,
          maxAttempts: 2,
          isEligible: true
        }
      ],
      completedTests: [
        {
          resultId: 'r1',
          surveyTitle: 'Quality Assurance Test',
          score: 85,
          isPassed: true,
          completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          attemptNumber: 1,
          certificateId: 'cert1'
        }
      ],
      upcomingTests: [
        {
          surveyId: '1',
          title: 'Digital Literacy Assessment 2024',
          targetDate: new Date('2024-12-31'),
          daysLeft: 45,
          isOverdue: false
        }
      ],
      certificates: [
        {
          id: 'cert1',
          userId: '5',
          user: mockUsers[4],
          surveyId: '1',
          survey: mockSurveys[0],
          resultId: 'r1',
          certificateNumber: 'CERT-2024-001',
          issuedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          downloadCount: 2,
          status: 'active'
        }
      ],
      overallProgress: 75,
      averageScore: 82.5,
      totalAttempts: 3,
      passedTests: 2
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'Enumerator Dashboard data fetched successfully'
    };
  }
};

// Results and Analytics API
export const resultApi = {
  async getResults(filters: AnalyticsFilter): Promise<ApiResponse<TestResult[]>> {
    await delay(1000);
    
    const results: TestResult[] = [
      {
        id: 'r1',
        userId: '5',
        user: mockUsers[4],
        surveyId: '1',
        survey: mockSurveys[0],
        sessionId: 'session1',
        score: 85,
        totalQuestions: 30,
        correctAnswers: 25,
        isPassed: true,
        timeSpent: 25 * 60,
        attemptNumber: 1,
        sectionScores: [
          {
            sectionId: 's1',
            sectionTitle: 'Basic Computer Skills',
            score: 85,
            totalQuestions: 10,
            correctAnswers: 8
          }
        ],
        completedAt: new Date(),
        certificateId: 'cert1'
      }
    ];
    
    return {
      success: true,
      data: results,
      message: 'Results fetched successfully'
    };
  },

  async getAnalytics(filters: AnalyticsFilter): Promise<ApiResponse<AnalyticsData>> {
    await delay(1200);
    
    const analytics: AnalyticsData = {
      overview: {
        totalAttempts: 1234,
        passRate: 82.3,
        averageScore: 78.5,
        averageTime: 28 * 60
      },
      performanceByRole: [
        { name: 'Admin', value: 95, total: 100, percentage: 95 },
        { name: 'Supervisor', value: 88, total: 100, percentage: 88 },
        { name: 'Enumerator', value: 76, total: 100, percentage: 76 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 82, total: 100, percentage: 82 },
        { name: 'Data Collection', value: 75, total: 100, percentage: 75 }
      ],
      performanceByJurisdiction: [],
      timeSeriesData: [
        { date: '2024-01', attempts: 245, passed: 198, averageScore: 78.5 },
        { date: '2024-02', attempts: 289, passed: 241, averageScore: 79.2 },
        { date: '2024-03', attempts: 312, passed: 267, averageScore: 80.1 }
      ],
      topPerformers: [
        {
          userId: '1',
          userName: 'John Doe',
          averageScore: 95.5,
          totalAttempts: 3,
          passRate: 100
        }
      ],
      lowPerformers: [
        {
          userId: '2',
          userName: 'Jane Smith',
          averageScore: 65.2,
          totalAttempts: 2,
          passRate: 50
        }
      ]
    };
    
    return {
      success: true,
      data: analytics,
      message: 'Analytics data fetched successfully'
    };
  },

  async exportResults(filters: AnalyticsFilter): Promise<{ data: string }> {
    await delay(1500);
    
    const csvData = `User,Survey,Score,Status,Completed At
John Doe,Digital Literacy Assessment,85%,Passed,2024-01-15 10:30:00
Jane Smith,Data Collection Training,72%,Passed,2024-01-14 14:20:00`;
    
    return { data: csvData };
  }
};

// Certificate API
export const certificateApi = {
  async getCertificates(): Promise<ApiResponse<Certificate[]>> {
    await delay(800);
    
    const certificates: Certificate[] = [
      {
        id: 'cert1',
        userId: '5',
        user: mockUsers[4],
        surveyId: '1',
        survey: mockSurveys[0],
        resultId: 'r1',
        certificateNumber: 'CERT-2024-001',
        issuedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        downloadCount: 2,
        status: 'active'
      }
    ];
    
    return {
      success: true,
      data: certificates,
      message: 'Certificates fetched successfully'
    };
  },

  async downloadCertificate(certificateId: string): Promise<{ data: Blob }> {
    await delay(1000);
    
    // Create a mock PDF blob
    const pdfContent = 'Mock PDF content for certificate';
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    
    return { data: blob };
  },

  async revokeCertificate(certificateId: string): Promise<ApiResponse<void>> {
    await delay(100);
    return {
      success: true,
      message: 'Certificate revoked successfully'
    };
  }
};

// Enumerator API
export const enumeratorApi = {
  async getEnumeratorStatus(): Promise<ApiResponse<EnumeratorStatus[]>> {
    await delay(1000);
    
    const status: EnumeratorStatus[] = [
      {
        id: 'e1',
        user: mockUsers[4],
        surveys: [
          {
            surveyId: '1',
            surveyTitle: 'Digital Literacy Assessment',
            status: 'completed',
            attempts: 1,
            maxAttempts: 3,
            bestScore: 85,
            lastAttempt: new Date(),
            targetDate: new Date('2024-12-31'),
            isPassed: true,
            certificateId: 'cert1'
          }
        ],
        overallProgress: 100,
        totalCertificates: 1,
        lastActivity: new Date()
      }
    ];
    
    return {
      success: true,
      data: status,
      message: 'Enumerator status fetched successfully'
    };
  }
};

// Settings API
export const settingsApi = {
  async getSettings(): Promise<ApiResponse<SystemSettings[]>> {
    await delay(600);
    
    const settings: SystemSettings[] = [
      {
        id: '1',
        category: 'general',
        key: 'site_name',
        value: 'eSigma Survey Platform',
        description: 'Name of the application',
        type: 'string',
        isEditable: true,
        updatedAt: new Date(),
        updatedBy: 'Admin'
      },
      {
        id: '2',
        category: 'test',
        key: 'default_test_duration',
        value: '35',
        description: 'Default test duration in minutes',
        type: 'number',
        isEditable: true,
        updatedAt: new Date(),
        updatedBy: 'Admin'
      },
      {
        id: '3',
        category: 'security',
        key: 'session_timeout',
        value: '30',
        description: 'Session timeout in minutes',
        type: 'number',
        isEditable: true,
        updatedAt: new Date(),
        updatedBy: 'Admin'
      }
    ];
    
    return {
      success: true,
      data: settings,
      message: 'Settings fetched successfully'
    };
  },

  async updateSetting(id: string, value: string): Promise<ApiResponse<void>> {
    await delay(200);
    
    // Return more comprehensive mock questions
    const mockQuestions: Question[] = [
      {
        id: 'q1',
        sectionId: 's1',
        text: 'What is the primary function of an operating system?',
        type: 'single_choice',
        complexity: 'easy',
        options: [
          { id: 'o1', text: 'To manage hardware and software resources', isCorrect: true },
          { id: 'o2', text: 'To create documents', isCorrect: false },
          { id: 'o3', text: 'To browse the internet', isCorrect: false },
          { id: 'o4', text: 'To play games', isCorrect: false }
        ],
        correctAnswers: ['o1'],
        explanation: 'An operating system manages all hardware and software resources of a computer.',
        points: 1,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'q2',
        sectionId: 's1',
        text: 'Which of the following are input devices? (Select all that apply)',
        type: 'multiple_choice',
        complexity: 'medium',
        options: [
          { id: 'o5', text: 'Keyboard', isCorrect: true },
          { id: 'o6', text: 'Mouse', isCorrect: true },
          { id: 'o7', text: 'Monitor', isCorrect: false },
          { id: 'o8', text: 'Microphone', isCorrect: true }
        ],
        correctAnswers: ['o5', 'o6', 'o8'],
        explanation: 'Input devices allow users to provide data to the computer. Monitor is an output device.',
        points: 2,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'q3',
        sectionId: 's2',
        text: 'What does CPU stand for?',
        type: 'single_choice',
        complexity: 'easy',
        options: [
          { id: 'o9', text: 'Central Processing Unit', isCorrect: true },
          { id: 'o10', text: 'Computer Personal Unit', isCorrect: false },
          { id: 'o11', text: 'Central Program Unit', isCorrect: false },
          { id: 'o12', text: 'Computer Processing Unit', isCorrect: false }
        ],
        correctAnswers: ['o9'],
        explanation: 'CPU stands for Central Processing Unit, which is the main processor of a computer.',
        points: 1,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'q4',
        sectionId: 's2',
        text: 'Which programming languages are commonly used for web development?',
        type: 'multiple_choice',
        complexity: 'hard',
        options: [
          { id: 'o13', text: 'JavaScript', isCorrect: true },
          { id: 'o14', text: 'Python', isCorrect: false },
          { id: 'o15', text: 'HTML', isCorrect: true },
          { id: 'o16', text: 'CSS', isCorrect: true }
        ],
        correctAnswers: ['o13', 'o15', 'o16'],
        explanation: 'JavaScript, HTML, and CSS are core web technologies. Python is primarily server-side.',
        points: 3,
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'q5',
        sectionId: 's3',
        text: 'What is the purpose of RAM in a computer?',
        type: 'single_choice',
        complexity: 'medium',
        options: [
          { id: 'o17', text: 'Temporary storage for active programs', isCorrect: true },
          { id: 'o18', text: 'Permanent storage for files', isCorrect: false },
          { id: 'o19', text: 'Processing calculations', isCorrect: false },
          { id: 'o20', text: 'Connecting to internet', isCorrect: false }
        ],
        correctAnswers: ['o17'],
        explanation: 'RAM (Random Access Memory) provides temporary storage for programs currently being used.',
        points: 2,
        order: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    return {
      success: true,
      data: mockQuestions,
    };
  }
};