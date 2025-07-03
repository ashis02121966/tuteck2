import { 
  User, Role, Survey, Question, TestSession, TestResult, 
  Certificate, Dashboard, ApiResponse, PaginatedResponse,
  FileUploadResult, Permission, EnumeratorStatus, AnalyticsData,
  AnalyticsFilter, SystemSettings, ZODashboard, RODashboard,
  SupervisorDashboard, EnumeratorDashboard, ZonePerformance,
  RegionalBreakdown, DistrictPerformance, SupervisorPerformance,
  TeamPerformance, AvailableTest, CompletedTest, UpcomingTest,
  UpcomingDeadline
} from '../types';

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@esigma.com',
    name: 'Admin User',
    roleId: '1',
    role: { id: '1', name: 'Admin', description: 'System Administrator', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 1 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    employeeId: 'EMP001'
  },
  {
    id: '2',
    email: 'zo@esigma.com',
    name: 'John ZO',
    roleId: '2',
    role: { id: '2', name: 'ZO User', description: 'Zonal Office User', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 2 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    zone: 'North Zone',
    employeeId: 'ZO001',
    phoneNumber: '+91-9876543210'
  },
  {
    id: '3',
    email: 'ro@esigma.com',
    name: 'Jane RO',
    roleId: '3',
    role: { id: '3', name: 'RO User', description: 'Regional Office User', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 3 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    parentId: '2',
    zone: 'North Zone',
    region: 'Delhi Region',
    employeeId: 'RO001',
    phoneNumber: '+91-9876543211'
  },
  {
    id: '4',
    email: 'supervisor@esigma.com',
    name: 'Mike Supervisor',
    roleId: '4',
    role: { id: '4', name: 'Supervisor', description: 'Field Supervisor', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 4 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    parentId: '3',
    zone: 'North Zone',
    region: 'Delhi Region',
    district: 'Central Delhi',
    employeeId: 'SUP001',
    phoneNumber: '+91-9876543212'
  },
  {
    id: '5',
    email: 'enumerator@esigma.com',
    name: 'Sarah Enumerator',
    roleId: '5',
    role: { id: '5', name: 'Enumerator', description: 'Field Enumerator', permissions: [], createdAt: new Date(), updatedAt: new Date(), isActive: true, level: 5 },
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    parentId: '4',
    zone: 'North Zone',
    region: 'Delhi Region',
    district: 'Central Delhi',
    employeeId: 'ENUM001',
    phoneNumber: '+91-9876543213'
  }
];

const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'System Administrator with full access',
    permissions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    userCount: 1,
    level: 1
  },
  {
    id: '2',
    name: 'ZO User',
    description: 'Zonal Office User with zone-level access',
    permissions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    userCount: 5,
    level: 2
  },
  {
    id: '3',
    name: 'RO User',
    description: 'Regional Office User with region-level access',
    permissions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    userCount: 12,
    level: 3
  },
  {
    id: '4',
    name: 'Supervisor',
    description: 'Field Supervisor with team management access',
    permissions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    userCount: 25,
    level: 4
  },
  {
    id: '5',
    name: 'Enumerator',
    description: 'Field Enumerator with test access',
    permissions: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    userCount: 150,
    level: 5
  }
];

const mockPermissions: Permission[] = [
  { id: '1', name: 'Create Users', resource: 'users', action: 'create', description: 'Create new users', module: 'user_management' },
  { id: '2', name: 'Edit Users', resource: 'users', action: 'update', description: 'Edit existing users', module: 'user_management' },
  { id: '3', name: 'Delete Users', resource: 'users', action: 'delete', description: 'Delete users', module: 'user_management' },
  { id: '4', name: 'View Users', resource: 'users', action: 'read', description: 'View user information', module: 'user_management' },
  { id: '5', name: 'Create Surveys', resource: 'surveys', action: 'create', description: 'Create new surveys', module: 'survey_management' },
  { id: '6', name: 'Edit Surveys', resource: 'surveys', action: 'update', description: 'Edit existing surveys', module: 'survey_management' },
  { id: '7', name: 'Delete Surveys', resource: 'surveys', action: 'delete', description: 'Delete surveys', module: 'survey_management' },
  { id: '8', name: 'View Results', resource: 'results', action: 'read', description: 'View test results', module: 'analytics' },
  { id: '9', name: 'Export Results', resource: 'results', action: 'export', description: 'Export test results', module: 'analytics' },
  { id: '10', name: 'Manage Certificates', resource: 'certificates', action: 'manage', description: 'Issue and revoke certificates', module: 'certificates' }
];

const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Digital Literacy Assessment 2024',
    description: 'Comprehensive assessment for digital literacy skills',
    targetDate: new Date('2024-12-31'),
    duration: 35,
    totalQuestions: 30,
    passingScore: 70,
    maxAttempts: 3,
    isActive: true,
    sections: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: '1',
    enrolledUsers: 125,
    completedAttempts: 89,
    averageScore: 78.5,
    assignedZones: ['North Zone', 'South Zone'],
    assignedRegions: ['Delhi Region', 'Mumbai Region']
  }
];

const mockCertificates: Certificate[] = [
  {
    id: '1',
    userId: '5',
    user: mockUsers[4],
    surveyId: '1',
    survey: mockSurveys[0],
    resultId: '1',
    certificateNumber: 'CERT-2024-001',
    issuedAt: new Date(),
    downloadCount: 3,
    status: 'active'
  }
];

const mockSettings: SystemSettings[] = [
  {
    id: '1',
    category: 'general',
    key: 'site_name',
    value: 'eSigma Survey Platform',
    description: 'Name of the application displayed in headers',
    type: 'string',
    isEditable: true,
    updatedAt: new Date(),
    updatedBy: 'admin'
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
    updatedBy: 'admin'
  },
  {
    id: '3',
    category: 'test',
    key: 'max_attempts',
    value: '3',
    description: 'Maximum number of test attempts allowed',
    type: 'number',
    isEditable: true,
    updatedAt: new Date(),
    updatedBy: 'admin'
  },
  {
    id: '4',
    category: 'security',
    key: 'session_timeout',
    value: '30',
    description: 'Session timeout in minutes',
    type: 'number',
    isEditable: true,
    updatedAt: new Date(),
    updatedBy: 'admin'
  },
  {
    id: '5',
    category: 'email',
    key: 'smtp_enabled',
    value: 'true',
    description: 'Enable email notifications',
    type: 'boolean',
    isEditable: true,
    updatedAt: new Date(),
    updatedBy: 'admin'
  },
  {
    id: '6',
    category: 'database',
    key: 'backup_enabled',
    value: 'true',
    description: 'Enable automatic database backups',
    type: 'boolean',
    isEditable: false,
    updatedAt: new Date(),
    updatedBy: 'system'
  }
];

// Mock question bank for random selection
const mockQuestionBank: Question[] = [
  {
    id: 'q1',
    sectionId: 'section-1',
    text: 'What is the primary function of an operating system?',
    type: 'single_choice',
    complexity: 'easy',
    options: [
      { id: 'opt1', text: 'Managing hardware and software resources', isCorrect: true },
      { id: 'opt2', text: 'Creating documents', isCorrect: false },
      { id: 'opt3', text: 'Browsing the internet', isCorrect: false },
      { id: 'opt4', text: 'Playing games', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'An operating system manages computer hardware and software resources.',
    points: 1,
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q2',
    sectionId: 'section-1',
    text: 'Which of the following are input devices? (Select all that apply)',
    type: 'multiple_choice',
    complexity: 'medium',
    options: [
      { id: 'opt5', text: 'Keyboard', isCorrect: true },
      { id: 'opt6', text: 'Mouse', isCorrect: true },
      { id: 'opt7', text: 'Monitor', isCorrect: false },
      { id: 'opt8', text: 'Printer', isCorrect: false }
    ],
    correctAnswers: ['opt5', 'opt6'],
    explanation: 'Keyboard and mouse are input devices, while monitor and printer are output devices.',
    points: 2,
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q3',
    sectionId: 'section-2',
    text: 'What does HTTP stand for?',
    type: 'single_choice',
    complexity: 'easy',
    options: [
      { id: 'opt9', text: 'HyperText Transfer Protocol', isCorrect: true },
      { id: 'opt10', text: 'High Tech Transfer Protocol', isCorrect: false },
      { id: 'opt11', text: 'Home Tool Transfer Protocol', isCorrect: false },
      { id: 'opt12', text: 'Host Transfer Protocol', isCorrect: false }
    ],
    correctAnswers: ['opt9'],
    explanation: 'HTTP stands for HyperText Transfer Protocol.',
    points: 1,
    order: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q4',
    sectionId: 'section-2',
    text: 'Which of the following is a web browser?',
    type: 'single_choice',
    complexity: 'easy',
    options: [
      { id: 'opt13', text: 'Microsoft Word', isCorrect: false },
      { id: 'opt14', text: 'Google Chrome', isCorrect: true },
      { id: 'opt15', text: 'Adobe Photoshop', isCorrect: false },
      { id: 'opt16', text: 'Windows Media Player', isCorrect: false }
    ],
    correctAnswers: ['opt14'],
    explanation: 'Google Chrome is a web browser developed by Google.',
    points: 1,
    order: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q5',
    sectionId: 'section-2',
    text: 'What is the purpose of a firewall?',
    type: 'single_choice',
    complexity: 'medium',
    options: [
      { id: 'opt17', text: 'To protect against unauthorized access', isCorrect: true },
      { id: 'opt18', text: 'To speed up internet connection', isCorrect: false },
      { id: 'opt19', text: 'To store website data', isCorrect: false },
      { id: 'opt20', text: 'To compress files', isCorrect: false }
    ],
    correctAnswers: ['opt17'],
    explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic.',
    points: 1,
    order: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q6',
    sectionId: 'section-3',
    text: 'Which of the following file extensions is used for spreadsheet files?',
    type: 'single_choice',
    complexity: 'easy',
    options: [
      { id: 'opt21', text: '.docx', isCorrect: false },
      { id: 'opt22', text: '.xlsx', isCorrect: true },
      { id: 'opt23', text: '.pptx', isCorrect: false },
      { id: 'opt24', text: '.txt', isCorrect: false }
    ],
    correctAnswers: ['opt22'],
    explanation: '.xlsx is the file extension used by Microsoft Excel for spreadsheet files.',
    points: 1,
    order: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q7',
    sectionId: 'section-3',
    text: 'What is the function of RAM in a computer?',
    type: 'single_choice',
    complexity: 'medium',
    options: [
      { id: 'opt25', text: 'Long-term data storage', isCorrect: false },
      { id: 'opt26', text: 'Processing data', isCorrect: false },
      { id: 'opt27', text: 'Temporary data storage while the computer is running', isCorrect: true },
      { id: 'opt28', text: 'Connecting to the internet', isCorrect: false }
    ],
    correctAnswers: ['opt27'],
    explanation: 'RAM (Random Access Memory) provides temporary storage for data that is being actively used by the computer.',
    points: 1,
    order: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q8',
    sectionId: 'section-3',
    text: 'Which of the following are cloud storage services? (Select all that apply)',
    type: 'multiple_choice',
    complexity: 'medium',
    options: [
      { id: 'opt29', text: 'Google Drive', isCorrect: true },
      { id: 'opt30', text: 'Dropbox', isCorrect: true },
      { id: 'opt31', text: 'Microsoft Word', isCorrect: false },
      { id: 'opt32', text: 'OneDrive', isCorrect: true }
    ],
    correctAnswers: ['opt29', 'opt30', 'opt32'],
    explanation: 'Google Drive, Dropbox, and OneDrive are cloud storage services that allow users to store files online.',
    points: 2,
    order: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q9',
    sectionId: 'section-1',
    text: 'What is phishing?',
    type: 'single_choice',
    complexity: 'medium',
    options: [
      { id: 'opt33', text: 'A type of computer virus', isCorrect: false },
      { id: 'opt34', text: 'A method of catching fish using technology', isCorrect: false },
      { id: 'opt35', text: 'A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity', isCorrect: true },
      { id: 'opt36', text: 'A technique to speed up internet connection', isCorrect: false }
    ],
    correctAnswers: ['opt35'],
    explanation: 'Phishing is a cybercrime where targets are contacted by email, telephone or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data.',
    points: 1,
    order: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'q10',
    sectionId: 'section-1',
    text: 'What is the purpose of a URL?',
    type: 'single_choice',
    complexity: 'easy',
    options: [
      { id: 'opt37', text: 'To format text on a webpage', isCorrect: false },
      { id: 'opt38', text: 'To specify the location of a resource on the internet', isCorrect: true },
      { id: 'opt39', text: 'To encrypt data for secure transmission', isCorrect: false },
      { id: 'opt40', text: 'To compress files for faster download', isCorrect: false }
    ],
    correctAnswers: ['opt38'],
    explanation: 'A URL (Uniform Resource Locator) is used to specify the location of a resource on the internet.',
    points: 1,
    order: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Local storage keys for offline support
const STORAGE_KEYS = {
  TEST_SESSION: 'test_session_',
  TEST_ANSWERS: 'test_answers_',
  TEST_PROGRESS: 'test_progress_',
  LAST_SYNC: 'last_sync_',
  PENDING_SAVES: 'pending_saves',
  QUESTION_SET: 'question_set_'
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Network status detection
const isOnline = () => navigator.onLine;

// Local storage helpers for offline support
const saveToLocalStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

const getFromLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to get from localStorage:', error);
    return null;
  }
};

const removeFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove from localStorage:', error);
  }
};

// Queue for pending operations when offline
const addToPendingQueue = (operation: any) => {
  const pending = getFromLocalStorage(STORAGE_KEYS.PENDING_SAVES) || [];
  pending.push({
    ...operation,
    timestamp: Date.now()
  });
  saveToLocalStorage(STORAGE_KEYS.PENDING_SAVES, pending);
};

const processPendingQueue = async () => {
  const pending = getFromLocalStorage(STORAGE_KEYS.PENDING_SAVES) || [];
  if (pending.length === 0) return;

  const processed = [];
  for (const operation of pending) {
    try {
      // Process each pending operation
      if (operation.type === 'save_answer') {
        await testApi.saveAnswer(operation.sessionId, operation.questionId, operation.selectedOptions);
      } else if (operation.type === 'update_session') {
        await testApi.updateSession(operation.sessionId, operation.data);
      }
      processed.push(operation);
    } catch (error) {
      console.error('Failed to process pending operation:', error);
      break; // Stop processing if one fails
    }
  }

  // Remove processed operations
  const remaining = pending.filter(op => !processed.includes(op));
  saveToLocalStorage(STORAGE_KEYS.PENDING_SAVES, remaining);
};

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Authentication API
export const authApi = {
  login: async (email: string, password: string): Promise<ApiResponse<{ user: User; token: string }>> => {
    await delay(1000);
    
    const user = mockUsers.find(u => u.email === email);
    
    if (!user || password !== 'password123') {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
    
    return {
      success: true,
      data: {
        user,
        token: 'mock-jwt-token'
      },
      message: 'Login successful'
    };
  },
  
  logout: async (): Promise<ApiResponse<null>> => {
    await delay(500);
    return {
      success: true,
      message: 'Logged out successfully'
    };
  }
};

// User Management API
export const userApi = {
  getUsers: async (page: number = 1, limit: number = 10): Promise<PaginatedResponse<User>> => {
    await delay(800);
    return {
      data: mockUsers.slice((page - 1) * limit, page * limit),
      total: mockUsers.length,
      page,
      limit,
      totalPages: Math.ceil(mockUsers.length / limit)
    };
  },
  
  createUser: async (userData: Partial<User>): Promise<ApiResponse<User>> => {
    await delay(1000);
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email!,
      name: userData.name!,
      roleId: userData.roleId!,
      role: mockRoles.find(r => r.id === userData.roleId) || mockRoles[0],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      jurisdiction: userData.jurisdiction,
      parentId: userData.parentId,
      zone: userData.zone,
      region: userData.region,
      district: userData.district,
      employeeId: userData.employeeId,
      phoneNumber: userData.phoneNumber
    };
    
    mockUsers.push(newUser);
    
    return {
      success: true,
      data: newUser,
      message: 'User created successfully'
    };
  },
  
  updateUser: async (id: string, userData: Partial<User>): Promise<ApiResponse<User>> => {
    await delay(1000);
    const userIndex = mockUsers.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return {
        success: false,
        message: 'User not found'
      };
    }
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...userData, updatedAt: new Date() };
    
    return {
      success: true,
      data: mockUsers[userIndex],
      message: 'User updated successfully'
    };
  },
  
  deleteUser: async (id: string): Promise<ApiResponse<null>> => {
    await delay(800);
    const userIndex = mockUsers.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
      return {
        success: false,
        message: 'User not found'
      };
    }
    
    mockUsers.splice(userIndex, 1);
    
    return {
      success: true,
      message: 'User deleted successfully'
    };
  }
};

// Role Management API
export const roleApi = {
  getRoles: async (): Promise<PaginatedResponse<Role>> => {
    await delay(800);
    return {
      data: mockRoles,
      total: mockRoles.length,
      page: 1,
      limit: 100,
      totalPages: 1
    };
  },
  
  getPermissions: async (): Promise<PaginatedResponse<Permission>> => {
    await delay(600);
    return {
      data: mockPermissions,
      total: mockPermissions.length,
      page: 1,
      limit: 100,
      totalPages: 1
    };
  },
  
  createRole: async (roleData: Partial<Role>): Promise<ApiResponse<Role>> => {
    await delay(1000);
    const newRole: Role = {
      id: Date.now().toString(),
      name: roleData.name!,
      description: roleData.description!,
      permissions: roleData.permissions || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      userCount: 0,
      level: roleData.level || 5
    };
    
    mockRoles.push(newRole);
    
    return {
      success: true,
      data: newRole,
      message: 'Role created successfully'
    };
  },
  
  updateRole: async (id: string, roleData: Partial<Role>): Promise<ApiResponse<Role>> => {
    await delay(1000);
    const roleIndex = mockRoles.findIndex(r => r.id === id);
    
    if (roleIndex === -1) {
      return {
        success: false,
        message: 'Role not found'
      };
    }
    
    mockRoles[roleIndex] = { ...mockRoles[roleIndex], ...roleData, updatedAt: new Date() };
    
    return {
      success: true,
      data: mockRoles[roleIndex],
      message: 'Role updated successfully'
    };
  },
  
  deleteRole: async (id: string): Promise<ApiResponse<null>> => {
    await delay(800);
    const roleIndex = mockRoles.findIndex(r => r.id === id);
    
    if (roleIndex === -1) {
      return {
        success: false,
        message: 'Role not found'
      };
    }
    
    mockRoles.splice(roleIndex, 1);
    
    return {
      success: true,
      message: 'Role deleted successfully'
    };
  }
};

// Survey Management API
export const surveyApi = {
  getSurveys: async (page: number = 1, limit: number = 10): Promise<PaginatedResponse<Survey>> => {
    await delay(800);
    return {
      data: mockSurveys.slice((page - 1) * limit, page * limit),
      total: mockSurveys.length,
      page,
      limit,
      totalPages: Math.ceil(mockSurveys.length / limit)
    };
  },
  
  getSurvey: async (id: string): Promise<ApiResponse<Survey>> => {
    await delay(600);
    const survey = mockSurveys.find(s => s.id === id);
    
    if (!survey) {
      return {
        success: false,
        message: 'Survey not found'
      };
    }
    
    return {
      success: true,
      data: survey,
      message: 'Survey retrieved successfully'
    };
  },
  
  createSurvey: async (surveyData: Partial<Survey>): Promise<ApiResponse<Survey>> => {
    await delay(1200);
    const newSurvey: Survey = {
      id: Date.now().toString(),
      title: surveyData.title!,
      description: surveyData.description!,
      targetDate: surveyData.targetDate!,
      duration: surveyData.duration || 35,
      totalQuestions: surveyData.totalQuestions || 30,
      passingScore: surveyData.passingScore || 70,
      maxAttempts: surveyData.maxAttempts || 3,
      isActive: surveyData.isActive || true,
      sections: surveyData.sections || [],
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: '1',
      enrolledUsers: 0,
      completedAttempts: 0,
      averageScore: 0,
      assignedZones: surveyData.assignedZones || [],
      assignedRegions: surveyData.assignedRegions || []
    };
    
    mockSurveys.push(newSurvey);
    
    return {
      success: true,
      data: newSurvey,
      message: 'Survey created successfully'
    };
  }
};

// Question Management API
export const questionApi = {
  uploadQuestions: async (surveyId: string, file: File): Promise<ApiResponse<FileUploadResult>> => {
    await delay(2000);
    
    const result: FileUploadResult = {
      fileName: file.name,
      questionsAdded: 25,
      questionsSkipped: 5,
      errors: [
        'Row 3: Invalid question format',
        'Row 8: Missing correct answer',
        'Row 15: Invalid complexity level'
      ],
      success: true
    };
    
    return {
      success: true,
      data: result,
      message: 'Questions uploaded successfully'
    };
  },
  
  getQuestions: async (surveyId: string, sectionId?: string): Promise<ApiResponse<Question[]>> => {
    await delay(800);
    
    // Filter questions by section if provided
    let questions = mockQuestionBank;
    if (sectionId) {
      questions = questions.filter(q => q.sectionId === sectionId);
    }
    
    return {
      success: true,
      data: questions,
      message: 'Questions retrieved successfully'
    };
  },
  
  getRandomQuestions: async (surveyId: string, count: number = 30): Promise<ApiResponse<Question[]>> => {
    await delay(1000);
    
    // Get random questions from the question bank
    const shuffled = shuffleArray(mockQuestionBank);
    const selectedQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
    
    return {
      success: true,
      data: selectedQuestions,
      message: 'Random questions retrieved successfully'
    };
  }
};

// Results & Analytics API
export const resultApi = {
  getResults: async (filters: AnalyticsFilter): Promise<PaginatedResponse<TestResult>> => {
    await delay(1000);
    
    const mockResults: TestResult[] = [
      {
        id: '1',
        userId: '5',
        user: mockUsers[4],
        surveyId: '1',
        survey: mockSurveys[0],
        sessionId: 'session-1',
        score: 85,
        totalQuestions: 30,
        correctAnswers: 26,
        isPassed: true,
        timeSpent: 28 * 60,
        attemptNumber: 1,
        sectionScores: [
          { sectionId: '1', sectionTitle: 'Basic Skills', score: 90, totalQuestions: 10, correctAnswers: 9 },
          { sectionId: '2', sectionTitle: 'Advanced Skills', score: 80, totalQuestions: 10, correctAnswers: 8 },
          { sectionId: '3', sectionTitle: 'Expert Skills', score: 85, totalQuestions: 10, correctAnswers: 9 }
        ],
        completedAt: new Date(),
        certificateId: '1',
        grade: 'A'
      }
    ];
    
    return {
      data: mockResults,
      total: mockResults.length,
      page: 1,
      limit: 10,
      totalPages: 1
    };
  },
  
  getAnalytics: async (filters: AnalyticsFilter): Promise<ApiResponse<AnalyticsData>> => {
    await delay(1200);
    
    const analytics: AnalyticsData = {
      overview: {
        totalAttempts: 342,
        passRate: 72.3,
        averageScore: 78.5,
        averageTime: 28
      },
      performanceByRole: [
        { name: 'Enumerators', value: 85, total: 100, percentage: 85 },
        { name: 'Supervisors', value: 12, total: 15, percentage: 80 },
        { name: 'RO Users', value: 8, total: 10, percentage: 80 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 72, total: 100, percentage: 72 },
        { name: 'Data Collection', value: 68, total: 85, percentage: 80 },
        { name: 'Quality Assessment', value: 45, total: 60, percentage: 75 }
      ],
      performanceByJurisdiction: [
        { name: 'North Zone', value: 85, total: 100, percentage: 85 },
        { name: 'South Zone', value: 78, total: 90, percentage: 87 },
        { name: 'East Zone', value: 65, total: 80, percentage: 81 }
      ],
      timeSeriesData: [
        { date: '2024-01-01', attempts: 45, passed: 32, averageScore: 78 },
        { date: '2024-01-02', attempts: 52, passed: 38, averageScore: 82 },
        { date: '2024-01-03', attempts: 48, passed: 35, averageScore: 79 }
      ],
      topPerformers: [
        { userId: '1', userName: 'John Doe', averageScore: 95, totalAttempts: 3, passRate: 100 },
        { userId: '2', userName: 'Jane Smith', averageScore: 92, totalAttempts: 2, passRate: 100 },
        { userId: '3', userName: 'Bob Johnson', averageScore: 88, totalAttempts: 4, passRate: 75 }
      ],
      lowPerformers: [
        { userId: '4', userName: 'Alice Brown', averageScore: 45, totalAttempts: 3, passRate: 0 },
        { userId: '5', userName: 'Charlie Wilson', averageScore: 52, totalAttempts: 2, passRate: 0 },
        { userId: '6', userName: 'Diana Davis', averageScore: 58, totalAttempts: 3, passRate: 33 }
      ]
    };
    
    return {
      success: true,
      data: analytics,
      message: 'Analytics data retrieved successfully'
    };
  },
  
  exportResults: async (filters: AnalyticsFilter): Promise<ApiResponse<string>> => {
    await delay(2000);
    
    const csvData = 'User,Survey,Score,Status,Date\nJohn Doe,Digital Literacy,85%,Passed,2024-01-15';
    
    return {
      success: true,
      data: csvData,
      message: 'Results exported successfully'
    };
  }
};

// Enumerator Status API
export const enumeratorApi = {
  getEnumeratorStatus: async (): Promise<PaginatedResponse<EnumeratorStatus>> => {
    await delay(1000);
    
    const mockEnumeratorStatus: EnumeratorStatus[] = [
      {
        id: '1',
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
            certificateId: '1'
          }
        ],
        overallProgress: 100,
        totalCertificates: 1,
        lastActivity: new Date()
      }
    ];
    
    return {
      data: mockEnumeratorStatus,
      total: mockEnumeratorStatus.length,
      page: 1,
      limit: 10,
      totalPages: 1
    };
  }
};

// Certificate API
export const certificateApi = {
  getCertificates: async (): Promise<PaginatedResponse<Certificate>> => {
    await delay(800);
    return {
      data: mockCertificates,
      total: mockCertificates.length,
      page: 1,
      limit: 10,
      totalPages: 1
    };
  },
  
  generateCertificate: async (resultId: string): Promise<ApiResponse<Certificate>> => {
    await delay(2000);
    
    const certificate: Certificate = {
      id: Date.now().toString(),
      userId: '5',
      user: mockUsers[4],
      surveyId: '1',
      survey: mockSurveys[0],
      resultId,
      certificateNumber: `CERT-${Date.now()}-ABC123`,
      issuedAt: new Date(),
      downloadCount: 0,
      status: 'active'
    };
    
    return {
      success: true,
      data: certificate,
      message: 'Certificate generated successfully'
    };
  },
  
  downloadCertificate: async (certificateId: string): Promise<ApiResponse<string>> => {
    await delay(1000);
    
    return {
      success: true,
      data: 'mock-certificate-pdf-content',
      message: 'Certificate ready for download'
    };
  },
  
  revokeCertificate: async (certificateId: string): Promise<ApiResponse<null>> => {
    await delay(800);
    
    return {
      success: true,
      message: 'Certificate revoked successfully'
    };
  }
};

// Settings API
export const settingsApi = {
  getSettings: async (): Promise<PaginatedResponse<SystemSettings>> => {
    await delay(800);
    return {
      data: mockSettings,
      total: mockSettings.length,
      page: 1,
      limit: 100,
      totalPages: 1
    };
  },
  
  updateSetting: async (id: string, value: string): Promise<ApiResponse<SystemSettings>> => {
    await delay(1000);
    
    const settingIndex = mockSettings.findIndex(s => s.id === id);
    if (settingIndex === -1) {
      return {
        success: false,
        message: 'Setting not found'
      };
    }
    
    mockSettings[settingIndex] = {
      ...mockSettings[settingIndex],
      value,
      updatedAt: new Date()
    };
    
    return {
      success: true,
      data: mockSettings[settingIndex],
      message: 'Setting updated successfully'
    };
  }
};

// Test Session API with offline support
export const testApi = {
  // Check for existing session on login
  checkExistingSession: async (userId: string): Promise<ApiResponse<TestSession | null>> => {
    await delay(500);
    
    // Check localStorage for existing session
    const localSession = getFromLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`);
    if (localSession && localSession.status === 'in_progress') {
      return {
        success: true,
        data: localSession,
        message: 'Existing session found'
      };
    }
    
    return {
      success: true,
      data: null,
      message: 'No existing session found'
    };
  },

  startTest: async (surveyId: string): Promise<ApiResponse<TestSession>> => {
    await delay(1000);
    
    const sessionId = `session-${Date.now()}`;
    const userId = '5'; // Mock user ID
    
    // Generate random questions for this session
    const randomQuestionsResponse = await questionApi.getRandomQuestions(surveyId, 30);
    const randomQuestions = randomQuestionsResponse.success ? randomQuestionsResponse.data : [];
    
    // Save the question set for this session
    saveToLocalStorage(`${STORAGE_KEYS.QUESTION_SET}${sessionId}`, randomQuestions);
    
    const session: TestSession = {
      id: sessionId,
      userId,
      surveyId,
      startTime: new Date(),
      timeRemaining: 35 * 60, // 35 minutes in seconds
      currentQuestionIndex: 0,
      answers: [],
      status: 'in_progress',
      attemptNumber: 1
    };
    
    // Save session to localStorage for offline recovery
    saveToLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`, session);
    saveToLocalStorage(`${STORAGE_KEYS.TEST_ANSWERS}${sessionId}`, {});
    saveToLocalStorage(`${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`, {
      currentQuestionIndex: 0,
      timeRemaining: session.timeRemaining,
      lastSaved: Date.now()
    });
    
    return {
      success: true,
      data: session,
      message: 'Test session started successfully'
    };
  },

  // Resume existing session
  resumeSession: async (sessionId: string): Promise<ApiResponse<TestSession>> => {
    await delay(500);
    
    const userId = sessionId.split('-')[1] || '5';
    const session = getFromLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`);
    const progress = getFromLocalStorage(`${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`);
    
    if (!session) {
      return {
        success: false,
        message: 'Session not found'
      };
    }
    
    // Calculate time elapsed since last save
    const timeElapsed = progress ? Math.floor((Date.now() - progress.lastSaved) / 1000) : 0;
    const adjustedTimeRemaining = Math.max(0, (progress?.timeRemaining || session.timeRemaining) - timeElapsed);
    
    const resumedSession: TestSession = {
      ...session,
      timeRemaining: adjustedTimeRemaining,
      currentQuestionIndex: progress?.currentQuestionIndex || 0,
      pauseTime: new Date(progress?.lastSaved || Date.now()),
      resumeTime: new Date(),
      totalPauseDuration: (session.totalPauseDuration || 0) + timeElapsed
    };
    
    // Update the session in localStorage
    saveToLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`, resumedSession);
    
    return {
      success: true,
      data: resumedSession,
      message: 'Session resumed successfully'
    };
  },

  saveAnswer: async (sessionId: string, questionId: string, selectedOptions: string[]): Promise<ApiResponse<null>> => {
    // Save answer locally immediately
    const answersKey = `${STORAGE_KEYS.TEST_ANSWERS}${sessionId}`;
    const currentAnswers = getFromLocalStorage(answersKey) || {};
    currentAnswers[questionId] = selectedOptions;
    saveToLocalStorage(answersKey, currentAnswers);
    
    if (!isOnline()) {
      // Queue for later sync when online
      addToPendingQueue({
        type: 'save_answer',
        sessionId,
        questionId,
        selectedOptions,
        timestamp: Date.now()
      });
      
      return {
        success: true,
        message: 'Answer saved locally (offline)'
      };
    }
    
    try {
      await delay(300);
      
      // Process any pending operations when back online
      await processPendingQueue();
      
      return {
        success: true,
        message: 'Answer saved successfully'
      };
    } catch (error) {
      // If save fails, queue it for later
      addToPendingQueue({
        type: 'save_answer',
        sessionId,
        questionId,
        selectedOptions,
        timestamp: Date.now()
      });
      
      return {
        success: true,
        message: 'Answer saved locally (will sync when online)'
      };
    }
  },

  // Update session progress (question index, time remaining)
  updateSession: async (sessionId: string, data: Partial<TestSession>): Promise<ApiResponse<null>> => {
    const progressKey = `${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`;
    const currentProgress = getFromLocalStorage(progressKey) || {};
    
    const updatedProgress = {
      ...currentProgress,
      ...data,
      lastSaved: Date.now()
    };
    
    saveToLocalStorage(progressKey, updatedProgress);
    
    // Also update the main session
    const userId = sessionId.split('-')[1] || '5'; // Extract user ID from session ID
    const sessionKey = `${STORAGE_KEYS.TEST_SESSION}${userId}`;
    const currentSession = getFromLocalStorage(sessionKey);
    
    if (currentSession) {
      const updatedSession = { ...currentSession, ...data };
      saveToLocalStorage(sessionKey, updatedSession);
    }
    
    if (!isOnline()) {
      addToPendingQueue({
        type: 'update_session',
        sessionId,
        data,
        timestamp: Date.now()
      });
      
      return {
        success: true,
        message: 'Session updated locally (offline)'
      };
    }
    
    try {
      await delay(200);
      await processPendingQueue();
      
      return {
        success: true,
        message: 'Session updated successfully'
      };
    } catch (error) {
      addToPendingQueue({
        type: 'update_session',
        sessionId,
        data,
        timestamp: Date.now()
      });
      
      return {
        success: true,
        message: 'Session updated locally (will sync when online)'
      };
    }
  },

  submitTest: async (sessionId: string): Promise<ApiResponse<TestResult>> => {
    await delay(1500);
    
    // Get saved answers and session data
    const answers = getFromLocalStorage(`${STORAGE_KEYS.TEST_ANSWERS}${sessionId}`) || {};
    const progress = getFromLocalStorage(`${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`) || {};
    
    const result: TestResult = {
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
      timeSpent: 28 * 60,
      attemptNumber: 1,
      sectionScores: [
        { sectionId: '1', sectionTitle: 'Basic Computer Skills', score: 90, totalQuestions: 10, correctAnswers: 9 },
        { sectionId: '2', sectionTitle: 'Internet & Email', score: 80, totalQuestions: 10, correctAnswers: 8 },
        { sectionId: '3', sectionTitle: 'Data Security', score: 85, totalQuestions: 10, correctAnswers: 9 }
      ],
      completedAt: new Date(),
      grade: 'A'
    };
    
    // Clean up localStorage after successful submission
    const userId = sessionId.split('-')[1] || '5';
    removeFromLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`);
    removeFromLocalStorage(`${STORAGE_KEYS.TEST_ANSWERS}${sessionId}`);
    removeFromLocalStorage(`${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`);
    removeFromLocalStorage(`${STORAGE_KEYS.QUESTION_SET}${sessionId}`);
    
    return {
      success: true,
      data: result,
      message: 'Test submitted successfully'
    };
  },

  // Get session data including offline data
  getSession: async (sessionId: string): Promise<ApiResponse<TestSession>> => {
    const userId = sessionId.split('-')[1] || '5';
    const session = getFromLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`);
    const progress = getFromLocalStorage(`${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`);
    const answers = getFromLocalStorage(`${STORAGE_KEYS.TEST_ANSWERS}${sessionId}`) || {};
    
    if (!session) {
      return {
        success: false,
        message: 'Session not found'
      };
    }
    
    // Merge session with latest progress
    const mergedSession: TestSession = {
      ...session,
      currentQuestionIndex: progress?.currentQuestionIndex || session.currentQuestionIndex,
      timeRemaining: progress?.timeRemaining || session.timeRemaining,
      answers: Object.keys(answers).map(questionId => ({
        questionId,
        selectedOptions: answers[questionId],
        isCorrect: false, // Will be calculated on server
        timeSpent: 0,
        answered: true
      }))
    };
    
    return {
      success: true,
      data: mergedSession,
      message: 'Session retrieved successfully'
    };
  },

  // Get questions for a specific test session
  getQuestionsForSession: async (sessionId: string): Promise<ApiResponse<Question[]>> => {
    await delay(800);
    
    // Try to get questions from localStorage first
    const savedQuestions = getFromLocalStorage(`${STORAGE_KEYS.QUESTION_SET}${sessionId}`);
    
    if (savedQuestions) {
      return {
        success: true,
        data: savedQuestions,
        message: 'Questions retrieved from saved session'
      };
    }
    
    // If no saved questions, generate new random set
    const randomQuestionsResponse = await questionApi.getRandomQuestions('1', 30);
    const randomQuestions = randomQuestionsResponse.success ? randomQuestionsResponse.data : [];
    
    // Save for future reference
    saveToLocalStorage(`${STORAGE_KEYS.QUESTION_SET}${sessionId}`, randomQuestions);
    
    return {
      success: true,
      data: randomQuestions,
      message: 'New random questions generated for session'
    };
  },

  // Pause test session
  pauseSession: async (sessionId: string): Promise<ApiResponse<null>> => {
    const userId = sessionId.split('-')[1] || '5';
    const session = getFromLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`);
    const progress = getFromLocalStorage(`${STORAGE_KEYS.TEST_PROGRESS}${sessionId}`);
    
    if (!session) {
      return {
        success: false,
        message: 'Session not found'
      };
    }
    
    // Update session with pause information
    const pauseTime = new Date();
    const updatedSession = {
      ...session,
      status: 'paused',
      pauseTime,
      timeRemaining: progress?.timeRemaining || session.timeRemaining
    };
    
    saveToLocalStorage(`${STORAGE_KEYS.TEST_SESSION}${userId}`, updatedSession);
    
    return {
      success: true,
      message: 'Session paused successfully'
    };
  },

  // Sync offline data when connection is restored
  syncOfflineData: async (): Promise<ApiResponse<null>> => {
    if (!isOnline()) {
      return {
        success: false,
        message: 'No internet connection'
      };
    }
    
    try {
      await processPendingQueue();
      saveToLocalStorage(STORAGE_KEYS.LAST_SYNC, Date.now());
      
      return {
        success: true,
        message: 'Offline data synced successfully'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to sync offline data'
      };
    }
  }
};

// Dashboard API
export const dashboardApi = {
  getDashboardData: async (): Promise<ApiResponse<Dashboard>> => {
    await delay(1000);
    
    const dashboard: Dashboard = {
      totalUsers: 125,
      totalSurveys: 8,
      totalAttempts: 342,
      averageScore: 78.5,
      passRate: 72.3,
      recentActivity: [
        {
          id: '1',
          type: 'test_completed',
          description: 'Digital Literacy Assessment completed',
          userId: '5',
          userName: 'Sarah Enumerator',
          timestamp: new Date()
        }
      ],
      performanceByRole: [
        { name: 'Enumerators', value: 85, total: 100, percentage: 85 },
        { name: 'Supervisors', value: 12, total: 15, percentage: 80 },
        { name: 'RO Users', value: 8, total: 10, percentage: 80 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 72, total: 100, percentage: 72 },
        { name: 'Data Collection', value: 68, total: 85, percentage: 80 },
        { name: 'Quality Assessment', value: 45, total: 60, percentage: 75 }
      ],
      monthlyTrends: [
        { month: 'Jan', attempts: 45, passed: 32, failed: 13, passRate: 71 },
        { month: 'Feb', attempts: 52, passed: 38, failed: 14, passRate: 73 },
        { month: 'Mar', attempts: 48, passed: 35, failed: 13, passRate: 73 }
      ]
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'Dashboard data retrieved'
    };
  }
};

// ZO Dashboard API
export const zoDashboardApi = {
  getDashboardData: async (dateFilter: string): Promise<ApiResponse<ZODashboard>> => {
    await delay(1200);
    
    const mockZonePerformance: ZonePerformance[] = [
      {
        zoneId: 'zone-1',
        zoneName: 'North Zone',
        totalEnumerators: 45,
        completedTests: 38,
        passRate: 84.4,
        averageScore: 82.1,
        regions: [
          {
            regionId: 'region-1',
            regionName: 'Delhi Region',
            totalEnumerators: 25,
            completedTests: 22,
            passRate: 88.0,
            averageScore: 85.2,
            supervisors: []
          },
          {
            regionId: 'region-2',
            regionName: 'Punjab Region',
            totalEnumerators: 20,
            completedTests: 16,
            passRate: 80.0,
            averageScore: 78.5,
            supervisors: []
          }
        ]
      },
      {
        zoneId: 'zone-2',
        zoneName: 'South Zone',
        totalEnumerators: 38,
        completedTests: 32,
        passRate: 84.2,
        averageScore: 81.7,
        regions: [
          {
            regionId: 'region-3',
            regionName: 'Chennai Region',
            totalEnumerators: 20,
            completedTests: 18,
            passRate: 90.0,
            averageScore: 86.3,
            supervisors: []
          },
          {
            regionId: 'region-4',
            regionName: 'Bangalore Region',
            totalEnumerators: 18,
            completedTests: 14,
            passRate: 77.8,
            averageScore: 76.2,
            supervisors: []
          }
        ]
      }
    ];

    const dashboard: ZODashboard = {
      totalUsers: 125,
      totalSurveys: 8,
      totalAttempts: 342,
      averageScore: 78.5,
      passRate: 72.3,
      totalZones: 4,
      totalRegions: 12,
      zonePerformance: mockZonePerformance,
      regionalBreakdown: mockZonePerformance.flatMap(z => z.regions),
      topPerformingRegions: [
        { name: 'Chennai Region', value: 18, total: 20, percentage: 90.0 },
        { name: 'Delhi Region', value: 22, total: 25, percentage: 88.0 },
        { name: 'Mumbai Region', value: 15, total: 18, percentage: 83.3 }
      ],
      lowPerformingRegions: [
        { name: 'Kolkata Region', value: 12, total: 20, percentage: 60.0 },
        { name: 'Hyderabad Region', value: 14, total: 22, percentage: 63.6 },
        { name: 'Pune Region', value: 11, total: 16, percentage: 68.8 }
      ],
      recentActivity: [
        {
          id: '1',
          type: 'test_completed',
          description: 'Digital Literacy Assessment completed',
          userId: '5',
          userName: 'Sarah Enumerator',
          timestamp: new Date()
        }
      ],
      performanceByRole: [
        { name: 'Enumerators', value: 85, total: 100, percentage: 85 },
        { name: 'Supervisors', value: 12, total: 15, percentage: 80 },
        { name: 'RO Users', value: 8, total: 10, percentage: 80 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 72, total: 100, percentage: 72 },
        { name: 'Data Collection', value: 68, total: 85, percentage: 80 },
        { name: 'Quality Assessment', value: 45, total: 60, percentage: 75 }
      ],
      monthlyTrends: [
        { month: 'Jan', attempts: 45, passed: 32, failed: 13, passRate: 71 },
        { month: 'Feb', attempts: 52, passed: 38, failed: 14, passRate: 73 },
        { month: 'Mar', attempts: 48, passed: 35, failed: 13, passRate: 73 }
      ]
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'ZO Dashboard data retrieved'
    };
  }
};

// RO Dashboard API
export const roDashboardApi = {
  getDashboardData: async (dateFilter: string): Promise<ApiResponse<RODashboard>> => {
    await delay(1200);
    
    const mockDistrictPerformance: DistrictPerformance[] = [
      {
        districtId: 'dist-1',
        districtName: 'Central Delhi',
        totalEnumerators: 15,
        completedTests: 13,
        passRate: 86.7,
        averageScore: 84.2
      },
      {
        districtId: 'dist-2',
        districtName: 'South Delhi',
        totalEnumerators: 12,
        completedTests: 10,
        passRate: 83.3,
        averageScore: 81.5
      },
      {
        districtId: 'dist-3',
        districtName: 'North Delhi',
        totalEnumerators: 18,
        completedTests: 14,
        passRate: 77.8,
        averageScore: 78.9
      }
    ];

    const mockSupervisorPerformance: SupervisorPerformance[] = [
      {
        supervisorId: 'sup-1',
        supervisorName: 'Mike Supervisor',
        totalEnumerators: 8,
        completedTests: 7,
        passRate: 87.5,
        averageScore: 85.3,
        enumerators: []
      },
      {
        supervisorId: 'sup-2',
        supervisorName: 'Lisa Manager',
        totalEnumerators: 6,
        completedTests: 5,
        passRate: 83.3,
        averageScore: 82.1,
        enumerators: []
      }
    ];

    const dashboard: RODashboard = {
      totalUsers: 45,
      totalSurveys: 8,
      totalAttempts: 156,
      averageScore: 81.2,
      passRate: 82.1,
      totalDistricts: 6,
      totalSupervisors: 8,
      districtPerformance: mockDistrictPerformance,
      supervisorPerformance: mockSupervisorPerformance,
      enumeratorDistribution: [
        { category: 'Active', count: 38, percentage: 84.4 },
        { category: 'Inactive', count: 5, percentage: 11.1 },
        { category: 'Pending', count: 2, percentage: 4.4 }
      ],
      recentActivity: [
        {
          id: '1',
          type: 'test_completed',
          description: 'Digital Literacy Assessment completed',
          userId: '5',
          userName: 'Sarah Enumerator',
          timestamp: new Date()
        }
      ],
      performanceByRole: [
        { name: 'Enumerators', value: 85, total: 100, percentage: 85 },
        { name: 'Supervisors', value: 12, total: 15, percentage: 80 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 72, total: 100, percentage: 72 },
        { name: 'Data Collection', value: 68, total: 85, percentage: 80 }
      ],
      monthlyTrends: [
        { month: 'Jan', attempts: 45, passed: 32, failed: 13, passRate: 71 },
        { month: 'Feb', attempts: 52, passed: 38, failed: 14, passRate: 73 },
        { month: 'Mar', attempts: 48, passed: 35, failed: 13, passRate: 73 }
      ]
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'RO Dashboard data retrieved'
    };
  }
};

// Supervisor Dashboard API
export const supervisorDashboardApi = {
  getDashboardData: async (dateFilter: string): Promise<ApiResponse<SupervisorDashboard>> => {
    await delay(1200);
    
    const mockTeamPerformance: TeamPerformance[] = [
      {
        teamId: 'team-1',
        teamName: 'Team Alpha',
        totalMembers: 5,
        completedTests: 4,
        passRate: 80.0,
        averageScore: 82.5,
        members: []
      },
      {
        teamId: 'team-2',
        teamName: 'Team Beta',
        totalMembers: 3,
        completedTests: 3,
        passRate: 100.0,
        averageScore: 88.7,
        members: []
      }
    ];

    const mockUpcomingDeadlines: UpcomingDeadline[] = [
      {
        surveyId: '1',
        surveyTitle: 'Digital Literacy Assessment',
        targetDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        daysLeft: 5,
        pendingEnumerators: 2,
        totalEnumerators: 8
      }
    ];

    const dashboard: SupervisorDashboard = {
      totalUsers: 8,
      totalSurveys: 3,
      totalAttempts: 24,
      averageScore: 84.2,
      passRate: 87.5,
      totalEnumerators: 8,
      teamPerformance: mockTeamPerformance,
      enumeratorStatus: [
        {
          id: '1',
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
              certificateId: '1'
            }
          ],
          overallProgress: 100,
          totalCertificates: 1,
          lastActivity: new Date()
        }
      ],
      upcomingDeadlines: mockUpcomingDeadlines,
      recentActivity: [
        {
          id: '1',
          type: 'test_completed',
          description: 'Digital Literacy Assessment completed',
          userId: '5',
          userName: 'Sarah Enumerator',
          timestamp: new Date()
        }
      ],
      performanceByRole: [
        { name: 'Enumerators', value: 85, total: 100, percentage: 85 }
      ],
      performanceBySurvey: [
        { name: 'Digital Literacy', value: 72, total: 100, percentage: 72 }
      ],
      monthlyTrends: [
        { month: 'Jan', attempts: 8, passed: 7, failed: 1, passRate: 87.5 },
        { month: 'Feb', attempts: 10, passed: 9, failed: 1, passRate: 90.0 },
        { month: 'Mar', attempts: 6, passed: 5, failed: 1, passRate: 83.3 }
      ]
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'Supervisor Dashboard data retrieved'
    };
  }
};

// Enumerator Dashboard API
export const enumeratorDashboardApi = {
  getDashboardData: async (): Promise<ApiResponse<EnumeratorDashboard>> => {
    await delay(1000);
    
    const mockAvailableTests: AvailableTest[] = [
      {
        surveyId: '1',
        title: 'Digital Literacy Assessment 2024',
        description: 'Comprehensive assessment for digital literacy skills required for field work',
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
        description: 'Training assessment for data collection methodologies and best practices',
        targetDate: new Date('2024-11-30'),
        duration: 45,
        totalQuestions: 40,
        passingScore: 75,
        attemptsLeft: 2,
        maxAttempts: 3,
        isEligible: true
      }
    ];

    const mockCompletedTests: CompletedTest[] = [
      {
        resultId: '1',
        surveyTitle: 'Basic Computer Skills',
        score: 85,
        isPassed: true,
        completedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        attemptNumber: 1,
        certificateId: '1'
      },
      {
        resultId: '2',
        surveyTitle: 'Communication Skills',
        score: 92,
        isPassed: true,
        completedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        attemptNumber: 1,
        certificateId: '2'
      }
    ];

    const mockUpcomingTests: UpcomingTest[] = [
      {
        surveyId: '3',
        title: 'Quality Assurance Test',
        targetDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        daysLeft: 10,
        isOverdue: false
      },
      {
        surveyId: '4',
        title: 'Advanced Data Analysis',
        targetDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        daysLeft: 3,
        isOverdue: false
      }
    ];

    const dashboard: EnumeratorDashboard = {
      availableTests: mockAvailableTests,
      completedTests: mockCompletedTests,
      upcomingTests: mockUpcomingTests,
      certificates: mockCertificates,
      overallProgress: 75,
      averageScore: 88.5,
      totalAttempts: 4,
      passedTests: 2
    };
    
    return {
      success: true,
      data: dashboard,
      message: 'Enumerator Dashboard data retrieved'
    };
  }
};

// Network status monitoring
window.addEventListener('online', () => {
  console.log('Connection restored, syncing offline data...');
  testApi.syncOfflineData();
});

window.addEventListener('offline', () => {
  console.log('Connection lost, switching to offline mode...');
});