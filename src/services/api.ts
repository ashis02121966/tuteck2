import { 
  User, Role, Permission, Survey, Section, Question, TestSession, TestResult, 
  Certificate, Dashboard, ZODashboard, RODashboard, SupervisorDashboard, 
  EnumeratorDashboard, SystemSettings, AnalyticsData, AnalyticsFilter,
  ApiResponse, FileUploadResult, Activity, EnumeratorStatus
} from '../types';

// Mock API responses for development
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
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
    zone: 'North Zone',
    jurisdiction: 'North Zone'
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
    zone: 'North Zone',
    region: 'Delhi Region',
    jurisdiction: 'Delhi Region'
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
    zone: 'North Zone',
    region: 'Delhi Region',
    district: 'Central Delhi',
    jurisdiction: 'Central Delhi District'
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
    zone: 'North Zone',
    region: 'Delhi Region',
    district: 'Central Delhi',
    jurisdiction: 'Block A, Central Delhi'
  }
];

const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Digital Literacy Assessment',
    description: 'Comprehensive assessment of digital skills and computer literacy',
    targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    duration: 35,
    totalQuestions: 30,
    passingScore: 70,
    maxAttempts: 3,
    isActive: true,
    sections: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: '1'
  }
];

// Auth API
export const authApi = {
  login: async (email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> => {
    await delay(1000);
    
    const user = mockUsers.find(u => u.email === email);
    if (user && password === 'password123') {
      return {
        success: true,
        data: {
          user,
          token: 'mock-jwt-token'
        },
        message: 'Login successful'
      };
    }
    
    return {
      success: false,
      message: 'Invalid credentials'
    };
  },

  logout: async (): Promise<ApiResponse<void>> => {
    await delay(500);
    return {
      success: true,
      message: 'Logged out successfully'
    };
  }
};

// User API
export const userApi = {
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    await delay(800);
    return {
      success: true,
      data: mockUsers,
      message: 'Users fetched successfully'
    };
  },

  createUser: async (userData: any): Promise<ApiResponse<User>> => {
    await delay(1000);
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      role: mockUsers.find(u => u.roleId === userData.roleId)?.role || mockUsers[0].role,
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

  deleteUser: async (id: string): Promise<ApiResponse<void>> => {
    await delay(500);
    return {
      success: true,
      message: 'User deleted successfully'
    };
  }
};

// Role API
export const roleApi = {
  getRoles: async (): Promise<ApiResponse<Role[]>> => {
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

  getPermissions: async (): Promise<ApiResponse<Permission[]>> => {
    await delay(400);
    return {
      success: true,
      data: [
        { id: '1', name: 'Create Users', resource: 'users', action: 'create', description: 'Create new users', module: 'user_management' },
        { id: '2', name: 'View Users', resource: 'users', action: 'read', description: 'View user information', module: 'user_management' },
        { id: '3', name: 'Edit Users', resource: 'users', action: 'update', description: 'Edit existing users', module: 'user_management' },
        { id: '4', name: 'Delete Users', resource: 'users', action: 'delete', description: 'Delete users', module: 'user_management' }
      ],
      message: 'Permissions fetched successfully'
    };
  },

  createRole: async (roleData: any): Promise<ApiResponse<Role>> => {
    await delay(1000);
    return {
      success: true,
      data: {
        id: Date.now().toString(),
        ...roleData,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        level: 5
      },
      message: 'Role created successfully'
    };
  },

  updateRole: async (id: string, roleData: any): Promise<ApiResponse<Role>> => {
    await delay(1000);
    return {
      success: true,
      data: {
        id,
        ...roleData,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        level: 5
      },
      message: 'Role updated successfully'
    };
  },

  deleteRole: async (id: string): Promise<ApiResponse<void>> => {
    await delay(500);
    return {
      success: true,
      message: 'Role deleted successfully'
    };
  }
};

// Survey API
export const surveyApi = {
  getSurveys: async (): Promise<ApiResponse<Survey[]>> => {
    await delay(800);
    return {
      success: true,
      data: mockSurveys,
      message: 'Surveys fetched successfully'
    };
  },

  createSurvey: async (surveyData: any): Promise<ApiResponse<Survey>> => {
    await delay(1200);
    const newSurvey: Survey = {
      id: Date.now().toString(),
      ...surveyData,
      sections: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      createdBy: '1'
    };
    mockSurveys.push(newSurvey);
    return {
      success: true,
      data: newSurvey,
      message: 'Survey created successfully'
    };
  },

  getSurveySections: async (surveyId: string): Promise<ApiResponse<Section[]>> => {
    await delay(600);
    return {
      success: true,
      data: [
        {
          id: '1',
          surveyId,
          title: 'Basic Computer Skills',
          description: 'Fundamental computer operations and software usage',
          questionsCount: 10,
          order: 1,
          questions: []
        },
        {
          id: '2',
          surveyId,
          title: 'Internet and Digital Communication',
          description: 'Web browsing, email, and online communication tools',
          questionsCount: 10,
          order: 2,
          questions: []
        },
        {
          id: '3',
          surveyId,
          title: 'Digital Security and Privacy',
          description: 'Online safety, password management, and privacy protection',
          questionsCount: 10,
          order: 3,
          questions: []
        }
      ],
      message: 'Sections fetched successfully'
    };
  },

  createSection: async (surveyId: string, sectionData: any): Promise<ApiResponse<Section>> => {
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
  getQuestions: async (surveyId: string, sectionId: string): Promise<ApiResponse<Question[]>> => {
    await delay(600);
    return {
      success: true,
      data: [],
      message: 'Questions fetched successfully'
    };
  },

  createQuestion: async (questionData: any): Promise<ApiResponse<Question>> => {
    await delay(800);
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

  uploadQuestions: async (surveyId: string, file: File): Promise<ApiResponse<FileUploadResult>> => {
    await delay(2000);
    return {
      success: true,
      data: {
        fileName: file.name,
        questionsAdded: 25,
        questionsSkipped: 5,
        errors: ['Row 3: Invalid question type', 'Row 8: Missing correct answer'],
        success: true
      },
      message: 'Questions uploaded successfully'
    };
  },

  downloadTemplate: async (): Promise<Blob> => {
    await delay(500);
    const csvContent = `Question Text,Question Type,Complexity,Option A,Option B,Option C,Option D,Correct Answer,Points,Explanation
"What is the capital of France?",single_choice,easy,"Paris","London","Berlin","Madrid",A,1,"Paris is the capital and largest city of France"
"Which of the following are programming languages?",multiple_choice,medium,"Python","JavaScript","HTML","CSS","A,B",2,"Python and JavaScript are programming languages, while HTML and CSS are markup and styling languages"`;
    
    return new Blob([csvContent], { type: 'text/csv' });
  }
};

// Test API
export const testApi = {
  getQuestionsForSession: async (sessionId: string): Promise<ApiResponse<Question[]>> => {
    await delay(1000);
    return {
      success: true,
      data: [],
      message: 'Questions loaded for session'
    };
  },

  saveAnswer: async (sessionId: string, questionId: string, selectedOptions: string[]): Promise<ApiResponse<void>> => {
    await delay(200);
    return {
      success: true,
      message: 'Answer saved'
    };
  },

  updateSession: async (sessionId: string, sessionData: any): Promise<ApiResponse<void>> => {
    await delay(300);
    return {
      success: true,
      message: 'Session updated'
    };
  },

  pauseSession: async (sessionId: string): Promise<ApiResponse<void>> => {
    await delay(500);
    return {
      success: true,
      message: 'Session paused'
    };
  },

  submitTest: async (sessionId: string): Promise<ApiResponse<TestResult>> => {
    await delay(1500);
    return {
      success: true,
      data: {
        id: Date.now().toString(),
        userId: '5',
        user: mockUsers[4],
        surveyId: '1',
        survey: mockSurveys[0],
        sessionId,
        score: 85,
        totalQuestions: 30,
        correctAnswers: 26,
        isPassed: true,
        timeSpent: 1800,
        attemptNumber: 1,
        sectionScores: [],
        completedAt: new Date()
      },
      message: 'Test submitted successfully'
    };
  },

  syncOfflineData: async (): Promise<ApiResponse<void>> => {
    await delay(1000);
    return {
      success: true,
      message: 'Offline data synced'
    };
  }
};

// Dashboard APIs
export const dashboardApi = {
  getDashboardData: async (): Promise<ApiResponse<Dashboard>> => {
    await delay(1000);
    return {
      success: true,
      data: {
        totalUsers: 1250,
        totalSurveys: 15,
        totalAttempts: 3420,
        averageScore: 78.5,
        passRate: 82.3,
        recentActivity: [],
        performanceByRole: [
          { name: 'Admin', value: 95, total: 100, percentage: 95 },
          { name: 'Supervisor', value: 88, total: 100, percentage: 88 },
          { name: 'Enumerator', value: 75, total: 100, percentage: 75 }
        ],
        performanceBySurvey: [
          { name: 'Digital Literacy', value: 82, total: 100, percentage: 82 },
          { name: 'Data Collection', value: 76, total: 100, percentage: 76 }
        ],
        monthlyTrends: []
      },
      message: 'Dashboard data fetched successfully'
    };
  }
};

export const zoDashboardApi = {
  getDashboardData: async (dateFilter: string): Promise<ApiResponse<ZODashboard>> => {
    await delay(1200);
    return {
      success: true,
      data: {
        totalUsers: 1250,
        totalSurveys: 15,
        totalAttempts: 3420,
        averageScore: 78.5,
        passRate: 82.3,
        recentActivity: [],
        performanceByRole: [],
        performanceBySurvey: [],
        monthlyTrends: [],
        totalZones: 5,
        totalRegions: 25,
        zonePerformance: [],
        regionalBreakdown: [],
        topPerformingRegions: [],
        lowPerformingRegions: []
      },
      message: 'ZO Dashboard data fetched successfully'
    };
  }
};

export const roDashboardApi = {
  getDashboardData: async (dateFilter: string): Promise<ApiResponse<RODashboard>> => {
    await delay(1200);
    return {
      success: true,
      data: {
        totalUsers: 250,
        totalSurveys: 15,
        totalAttempts: 680,
        averageScore: 76.2,
        passRate: 79.8,
        recentActivity: [],
        performanceByRole: [],
        performanceBySurvey: [],
        monthlyTrends: [],
        totalDistricts: 8,
        totalSupervisors: 24,
        districtPerformance: [],
        supervisorPerformance: [],
        enumeratorDistribution: []
      },
      message: 'RO Dashboard data fetched successfully'
    };
  }
};

export const supervisorDashboardApi = {
  getDashboardData: async (dateFilter: string): Promise<ApiResponse<SupervisorDashboard>> => {
    await delay(1000);
    return {
      success: true,
      data: {
        totalUsers: 50,
        totalSurveys: 15,
        totalAttempts: 150,
        averageScore: 74.8,
        passRate: 76.5,
        recentActivity: [],
        performanceByRole: [],
        performanceBySurvey: [],
        monthlyTrends: [],
        totalEnumerators: 12,
        teamPerformance: [],
        enumeratorStatus: [],
        upcomingDeadlines: []
      },
      message: 'Supervisor Dashboard data fetched successfully'
    };
  }
};

export const enumeratorDashboardApi = {
  getDashboardData: async (): Promise<ApiResponse<EnumeratorDashboard>> => {
    await delay(800);
    return {
      success: true,
      data: {
        availableTests: [
          {
            surveyId: '1',
            title: 'Digital Literacy Assessment',
            description: 'Comprehensive assessment of digital skills and computer literacy',
            targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            duration: 35,
            totalQuestions: 30,
            passingScore: 70,
            attemptsLeft: 3,
            maxAttempts: 3,
            isEligible: true
          }
        ],
        completedTests: [],
        upcomingTests: [],
        certificates: [],
        overallProgress: 0,
        averageScore: 0,
        totalAttempts: 0,
        passedTests: 0
      },
      message: 'Enumerator Dashboard data fetched successfully'
    };
  }
};

// Results API
export const resultApi = {
  getResults: async (filters: AnalyticsFilter): Promise<ApiResponse<TestResult[]>> => {
    await delay(1000);
    return {
      success: true,
      data: [],
      message: 'Results fetched successfully'
    };
  },

  getAnalytics: async (filters: AnalyticsFilter): Promise<ApiResponse<AnalyticsData>> => {
    await delay(1200);
    return {
      success: true,
      data: {
        overview: {
          totalAttempts: 3420,
          passRate: 82.3,
          averageScore: 78.5,
          averageTime: 1800
        },
        performanceByRole: [],
        performanceBySurvey: [],
        performanceByJurisdiction: [],
        timeSeriesData: [],
        topPerformers: [],
        lowPerformers: []
      },
      message: 'Analytics data fetched successfully'
    };
  },

  exportResults: async (filters: AnalyticsFilter): Promise<ApiResponse<Blob>> => {
    await delay(2000);
    return {
      success: true,
      data: new Blob(['mock csv data'], { type: 'text/csv' }),
      message: 'Results exported successfully'
    };
  }
};

// Certificate API
export const certificateApi = {
  getCertificates: async (): Promise<ApiResponse<Certificate[]>> => {
    await delay(800);
    return {
      success: true,
      data: [],
      message: 'Certificates fetched successfully'
    };
  },

  downloadCertificate: async (certificateId: string): Promise<ApiResponse<Blob>> => {
    await delay(1500);
    return {
      success: true,
      data: new Blob(['mock pdf data'], { type: 'application/pdf' }),
      message: 'Certificate downloaded successfully'
    };
  },

  revokeCertificate: async (certificateId: string): Promise<ApiResponse<void>> => {
    await delay(800);
    return {
      success: true,
      message: 'Certificate revoked successfully'
    };
  }
};

// Settings API
export const settingsApi = {
  getSettings: async (): Promise<ApiResponse<SystemSettings[]>> => {
    await delay(600);
    return {
      success: true,
      data: [
        {
          id: '1',
          category: 'general',
          key: 'site_name',
          value: 'eSigma Survey Platform',
          description: 'Name of the application',
          type: 'string',
          isEditable: true,
          updatedAt: new Date(),
          updatedBy: 'admin'
        }
      ],
      message: 'Settings fetched successfully'
    };
  },

  updateSetting: async (id: string, value: string): Promise<ApiResponse<void>> => {
    await delay(800);
    return {
      success: true,
      message: 'Setting updated successfully'
    };
  }
};

// Enumerator API
export const enumeratorApi = {
  getEnumeratorStatus: async (): Promise<ApiResponse<EnumeratorStatus[]>> => {
    await delay(1000);
    return {
      success: true,
      data: [],
      message: 'Enumerator status fetched successfully'
    };
  }
};