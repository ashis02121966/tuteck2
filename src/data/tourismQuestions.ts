export const tourismQuestions = [
  // Tourism Fundamentals (Questions 1-17)
  {
    id: 'tourism_q1',
    text: 'What is the primary definition of tourism according to the World Tourism Organization (UNWTO)?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Activities of persons traveling to places outside their usual environment for leisure only', isCorrect: false },
      { id: 'opt2', text: 'Activities of persons traveling to and staying in places outside their usual environment for not more than one consecutive year for leisure, business and other purposes', isCorrect: true },
      { id: 'opt3', text: 'Any form of travel for recreational purposes', isCorrect: false },
      { id: 'opt4', text: 'International travel for business purposes only', isCorrect: false }
    ],
    correctAnswers: ['opt2'],
    explanation: 'The UNWTO defines tourism as activities of persons traveling to and staying in places outside their usual environment for not more than one consecutive year for leisure, business and other purposes.',
    points: 1,
    order: 1
  },
  {
    id: 'tourism_q2',
    text: 'Which of the following are the main components of the tourism system?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Tourist generating region', isCorrect: true },
      { id: 'opt2', text: 'Transit route', isCorrect: true },
      { id: 'opt3', text: 'Tourist destination region', isCorrect: true },
      { id: 'opt4', text: 'Government policies only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'The tourism system consists of three main geographical components: tourist generating region, transit route, and tourist destination region.',
    points: 2,
    order: 2
  },
  {
    id: 'tourism_q3',
    text: 'What is the tourism multiplier effect?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'The increase in tourist arrivals year over year', isCorrect: false },
      { id: 'opt2', text: 'The economic impact of tourism spending as it circulates through the economy', isCorrect: true },
      { id: 'opt3', text: 'The number of jobs created per tourist', isCorrect: false },
      { id: 'opt4', text: 'The environmental impact of tourism', isCorrect: false }
    ],
    correctAnswers: ['opt2'],
    explanation: 'The tourism multiplier effect refers to how tourism spending circulates through the economy, creating additional economic activity beyond the initial expenditure.',
    points: 2,
    order: 3
  },
  {
    id: 'tourism_q4',
    text: 'Which factors influence tourism demand?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Economic factors (income, exchange rates)', isCorrect: true },
      { id: 'opt2', text: 'Social factors (demographics, lifestyle)', isCorrect: true },
      { id: 'opt3', text: 'Political factors (stability, visa requirements)', isCorrect: true },
      { id: 'opt4', text: 'Weather conditions only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Tourism demand is influenced by economic, social, political, technological, and environmental factors.',
    points: 2,
    order: 4
  },
  {
    id: 'tourism_q5',
    text: 'What is mass tourism?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Tourism involving large numbers of people visiting popular destinations', isCorrect: true },
      { id: 'opt2', text: 'Religious tourism only', isCorrect: false },
      { id: 'opt3', text: 'Business tourism', isCorrect: false },
      { id: 'opt4', text: 'Adventure tourism', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Mass tourism refers to the movement of large numbers of people to popular tourist destinations, often characterized by standardized packages and facilities.',
    points: 1,
    order: 5
  },
  {
    id: 'tourism_q6',
    text: 'What are the main types of tourism based on purpose of visit?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Leisure tourism', isCorrect: true },
      { id: 'opt2', text: 'Business tourism', isCorrect: true },
      { id: 'opt3', text: 'VFR (Visiting Friends and Relatives)', isCorrect: true },
      { id: 'opt4', text: 'Space tourism only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'The main types of tourism based on purpose include leisure, business, and VFR tourism, along with other specialized forms.',
    points: 2,
    order: 6
  },
  {
    id: 'tourism_q7',
    text: 'What is the concept of tourism carrying capacity?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'The maximum number of tourists a destination can accommodate', isCorrect: false },
      { id: 'opt2', text: 'The maximum number of visitors that can use a site without compromising its environmental, physical, economic, and socio-cultural sustainability', isCorrect: true },
      { id: 'opt3', text: 'The total hotel capacity in a destination', isCorrect: false },
      { id: 'opt4', text: 'The transportation capacity to a destination', isCorrect: false }
    ],
    correctAnswers: ['opt2'],
    explanation: 'Tourism carrying capacity is the maximum number of visitors that can use a site without compromising its environmental, physical, economic, and socio-cultural sustainability.',
    points: 3,
    order: 7
  },
  {
    id: 'tourism_q8',
    text: 'Which are the main stakeholders in tourism development?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Government and public sector', isCorrect: true },
      { id: 'opt2', text: 'Private sector businesses', isCorrect: true },
      { id: 'opt3', text: 'Local communities', isCorrect: true },
      { id: 'opt4', text: 'International organizations only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Tourism development involves multiple stakeholders including government, private sector, local communities, NGOs, and international organizations.',
    points: 2,
    order: 8
  },
  {
    id: 'tourism_q9',
    text: 'What is cultural tourism?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Tourism focused on experiencing the culture, heritage, arts, and lifestyle of a destination', isCorrect: true },
      { id: 'opt2', text: 'Tourism only to museums', isCorrect: false },
      { id: 'opt3', text: 'Religious pilgrimage only', isCorrect: false },
      { id: 'opt4', text: 'Educational tourism only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Cultural tourism involves travel to experience the culture, heritage, arts, architecture, and lifestyle of a destination.',
    points: 1,
    order: 9
  },
  {
    id: 'tourism_q10',
    text: 'What are the main economic impacts of tourism?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Foreign exchange earnings', isCorrect: true },
      { id: 'opt2', text: 'Employment generation', isCorrect: true },
      { id: 'opt3', text: 'GDP contribution', isCorrect: true },
      { id: 'opt4', text: 'Environmental degradation', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Tourism generates economic benefits through foreign exchange earnings, employment creation, GDP contribution, and tax revenues.',
    points: 2,
    order: 10
  },
  {
    id: 'tourism_q11',
    text: 'What is adventure tourism?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Tourism involving physical activity, cultural exchange, and engagement with nature', isCorrect: true },
      { id: 'opt2', text: 'Only extreme sports tourism', isCorrect: false },
      { id: 'opt3', text: 'Business travel only', isCorrect: false },
      { id: 'opt4', text: 'Urban tourism only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Adventure tourism involves physical activity, cultural exchange, and engagement with nature, often in outdoor settings.',
    points: 1,
    order: 11
  },
  {
    id: 'tourism_q12',
    text: 'Which factors contribute to destination competitiveness?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Natural and cultural resources', isCorrect: true },
      { id: 'opt2', text: 'Infrastructure and accessibility', isCorrect: true },
      { id: 'opt3', text: 'Service quality and hospitality', isCorrect: true },
      { id: 'opt4', text: 'High prices only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Destination competitiveness depends on resources, infrastructure, service quality, marketing, and overall visitor experience.',
    points: 3,
    order: 12
  },
  {
    id: 'tourism_q13',
    text: 'What is medical tourism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Travel to receive medical treatment or procedures', isCorrect: true },
      { id: 'opt2', text: 'Tourism for medical professionals only', isCorrect: false },
      { id: 'opt3', text: 'Visiting hospitals as tourist attractions', isCorrect: false },
      { id: 'opt4', text: 'Emergency medical evacuation', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Medical tourism involves traveling to another country or region to receive medical treatment, often combining healthcare with leisure activities.',
    points: 2,
    order: 13
  },
  {
    id: 'tourism_q14',
    text: 'What are the main characteristics of sustainable tourism?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Environmental protection', isCorrect: true },
      { id: 'opt2', text: 'Economic viability', isCorrect: true },
      { id: 'opt3', text: 'Social equity and cultural preservation', isCorrect: true },
      { id: 'opt4', text: 'Maximum profit generation only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Sustainable tourism balances environmental protection, economic viability, and social equity while preserving cultural heritage.',
    points: 3,
    order: 14
  },
  {
    id: 'tourism_q15',
    text: 'What is dark tourism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Tourism to sites associated with death, tragedy, or suffering', isCorrect: true },
      { id: 'opt2', text: 'Night-time tourism activities', isCorrect: false },
      { id: 'opt3', text: 'Underground cave tourism', isCorrect: false },
      { id: 'opt4', text: 'Tourism during winter months', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Dark tourism involves visiting places associated with death, tragedy, or suffering, such as battlefields, prisons, or disaster sites.',
    points: 2,
    order: 15
  },
  {
    id: 'tourism_q16',
    text: 'Which are the main components of tourism supply?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Accommodation', isCorrect: true },
      { id: 'opt2', text: 'Transportation', isCorrect: true },
      { id: 'opt3', text: 'Attractions and activities', isCorrect: true },
      { id: 'opt4', text: 'Tourist motivation only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Tourism supply includes accommodation, transportation, attractions, activities, and supporting services and infrastructure.',
    points: 2,
    order: 16
  },
  {
    id: 'tourism_q17',
    text: 'What is the tourism product lifecycle?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'The stages a destination goes through from development to decline', isCorrect: true },
      { id: 'opt2', text: 'The daily schedule of tourist activities', isCorrect: false },
      { id: 'opt3', text: 'The seasonal variation in tourism', isCorrect: false },
      { id: 'opt4', text: 'The booking process for tourism products', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'The tourism product lifecycle describes the stages a destination goes through: exploration, involvement, development, consolidation, stagnation, and either decline or rejuvenation.',
    points: 3,
    order: 17
  },

  // Hospitality Management (Questions 18-34)
  {
    id: 'tourism_q18',
    text: 'What are the main departments in a full-service hotel?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Front Office', isCorrect: true },
      { id: 'opt2', text: 'Housekeeping', isCorrect: true },
      { id: 'opt3', text: 'Food & Beverage', isCorrect: true },
      { id: 'opt4', text: 'Marketing only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Main hotel departments include Front Office, Housekeeping, Food & Beverage, Sales & Marketing, Engineering, and Human Resources.',
    points: 2,
    order: 18
  },
  {
    id: 'tourism_q19',
    text: 'What is the primary function of the front office department?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Guest registration, check-in, and check-out services', isCorrect: true },
      { id: 'opt2', text: 'Room cleaning and maintenance', isCorrect: false },
      { id: 'opt3', text: 'Food preparation and service', isCorrect: false },
      { id: 'opt4', text: 'Building maintenance only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'The front office is responsible for guest registration, check-in/check-out, reservations, and guest services.',
    points: 1,
    order: 19
  },
  {
    id: 'tourism_q20',
    text: 'What is revenue management in hospitality?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Setting fixed room rates throughout the year', isCorrect: false },
      { id: 'opt2', text: 'The practice of optimizing revenue through strategic pricing and inventory management', isCorrect: true },
      { id: 'opt3', text: 'Managing only food and beverage revenues', isCorrect: false },
      { id: 'opt4', text: 'Collecting payments from guests', isCorrect: false }
    ],
    correctAnswers: ['opt2'],
    explanation: 'Revenue management involves optimizing revenue through strategic pricing, inventory control, and demand forecasting.',
    points: 3,
    order: 20
  },
  {
    id: 'tourism_q21',
    text: 'Which metrics are important for measuring hotel performance?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Occupancy Rate', isCorrect: true },
      { id: 'opt2', text: 'Average Daily Rate (ADR)', isCorrect: true },
      { id: 'opt3', text: 'Revenue Per Available Room (RevPAR)', isCorrect: true },
      { id: 'opt4', text: 'Number of employees only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Key hotel performance metrics include occupancy rate, ADR, RevPAR, and other financial and operational indicators.',
    points: 2,
    order: 21
  },
  {
    id: 'tourism_q22',
    text: 'What is the role of a concierge in a hotel?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Providing personalized guest services and local information', isCorrect: true },
      { id: 'opt2', text: 'Managing hotel finances', isCorrect: false },
      { id: 'opt3', text: 'Cleaning guest rooms', isCorrect: false },
      { id: 'opt4', text: 'Cooking meals', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'A concierge provides personalized guest services, local recommendations, reservations, and assistance with special requests.',
    points: 2,
    order: 22
  },
  {
    id: 'tourism_q23',
    text: 'What are the key elements of exceptional customer service in hospitality?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Anticipating guest needs', isCorrect: true },
      { id: 'opt2', text: 'Personalized service delivery', isCorrect: true },
      { id: 'opt3', text: 'Quick problem resolution', isCorrect: true },
      { id: 'opt4', text: 'Ignoring guest complaints', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Exceptional customer service involves anticipating needs, personalization, responsiveness, and effective problem resolution.',
    points: 2,
    order: 23
  },
  {
    id: 'tourism_q24',
    text: 'What is a Property Management System (PMS) in hotels?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'A software system that manages hotel operations including reservations, check-in/out, and billing', isCorrect: true },
      { id: 'opt2', text: 'A system for managing building maintenance only', isCorrect: false },
      { id: 'opt3', text: 'A guest feedback system', isCorrect: false },
      { id: 'opt4', text: 'A staff scheduling system only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'A PMS is a comprehensive software system that manages various hotel operations including reservations, guest services, and financial transactions.',
    points: 2,
    order: 24
  },
  {
    id: 'tourism_q25',
    text: 'What are the main types of hotel ownership models?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Independent ownership', isCorrect: true },
      { id: 'opt2', text: 'Chain ownership', isCorrect: true },
      { id: 'opt3', text: 'Franchise operations', isCorrect: true },
      { id: 'opt4', text: 'Government ownership only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Hotel ownership models include independent, chain-owned, franchised, and management contract arrangements.',
    points: 3,
    order: 25
  },
  {
    id: 'tourism_q26',
    text: 'What is the purpose of hotel brand standards?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'To ensure consistent quality and guest experience across all properties', isCorrect: true },
      { id: 'opt2', text: 'To increase room rates', isCorrect: false },
      { id: 'opt3', text: 'To reduce operating costs only', isCorrect: false },
      { id: 'opt4', text: 'To limit competition', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Brand standards ensure consistent quality, service levels, and guest experience across all properties in a hotel chain.',
    points: 2,
    order: 26
  },
  {
    id: 'tourism_q27',
    text: 'Which factors influence hotel pricing strategies?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Demand patterns and seasonality', isCorrect: true },
      { id: 'opt2', text: 'Competition and market positioning', isCorrect: true },
      { id: 'opt3', text: 'Operating costs and profit margins', isCorrect: true },
      { id: 'opt4', text: 'Weather conditions only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Hotel pricing is influenced by demand, competition, costs, market positioning, and various external factors.',
    points: 3,
    order: 27
  },
  {
    id: 'tourism_q28',
    text: 'What is the role of housekeeping in hotel operations?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Maintaining cleanliness and comfort of guest rooms and public areas', isCorrect: true },
      { id: 'opt2', text: 'Managing hotel reservations', isCorrect: false },
      { id: 'opt3', text: 'Preparing food and beverages', isCorrect: false },
      { id: 'opt4', text: 'Handling guest check-in only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Housekeeping is responsible for maintaining cleanliness, comfort, and aesthetic appeal of guest rooms and public areas.',
    points: 1,
    order: 28
  },
  {
    id: 'tourism_q29',
    text: 'What are the key components of food and beverage operations in hotels?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Restaurant operations', isCorrect: true },
      { id: 'opt2', text: 'Room service', isCorrect: true },
      { id: 'opt3', text: 'Banquet and catering services', isCorrect: true },
      { id: 'opt4', text: 'Laundry services', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'F&B operations include restaurants, room service, banquets, catering, bars, and specialty dining venues.',
    points: 2,
    order: 29
  },
  {
    id: 'tourism_q30',
    text: 'What is yield management in hospitality?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Managing crop yields for hotel restaurants', isCorrect: false },
      { id: 'opt2', text: 'A pricing strategy that adjusts rates based on demand to maximize revenue', isCorrect: true },
      { id: 'opt3', text: 'Managing employee productivity', isCorrect: false },
      { id: 'opt4', text: 'Controlling food waste', isCorrect: false }
    ],
    correctAnswers: ['opt2'],
    explanation: 'Yield management is a pricing strategy that adjusts room rates based on demand patterns to maximize revenue and occupancy.',
    points: 3,
    order: 30
  },
  {
    id: 'tourism_q31',
    text: 'What is the importance of guest feedback in hospitality?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Identifying areas for improvement', isCorrect: true },
      { id: 'opt2', text: 'Enhancing guest satisfaction', isCorrect: true },
      { id: 'opt3', text: 'Building brand reputation', isCorrect: true },
      { id: 'opt4', text: 'Increasing room rates automatically', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Guest feedback helps identify improvement areas, enhance satisfaction, build reputation, and maintain service quality.',
    points: 2,
    order: 31
  },
  {
    id: 'tourism_q32',
    text: 'What is the role of technology in modern hospitality operations?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Streamlining operations and reducing costs', isCorrect: true },
      { id: 'opt2', text: 'Enhancing guest experience', isCorrect: true },
      { id: 'opt3', text: 'Improving communication and efficiency', isCorrect: true },
      { id: 'opt4', text: 'Replacing all human staff', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Technology streamlines operations, enhances guest experience, improves efficiency, and enables better service delivery.',
    points: 2,
    order: 32
  },
  {
    id: 'tourism_q33',
    text: 'What is the concept of hospitality?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'The friendly and generous reception and entertainment of guests', isCorrect: true },
      { id: 'opt2', text: 'Only providing accommodation services', isCorrect: false },
      { id: 'opt3', text: 'Managing hotel finances', isCorrect: false },
      { id: 'opt4', text: 'Building maintenance', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Hospitality is the friendly and generous reception and entertainment of guests, visitors, or strangers.',
    points: 1,
    order: 33
  },
  {
    id: 'tourism_q34',
    text: 'What are the main challenges facing the hospitality industry?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Labor shortages and high turnover', isCorrect: true },
      { id: 'opt2', text: 'Rising operational costs', isCorrect: true },
      { id: 'opt3', text: 'Changing guest expectations', isCorrect: true },
      { id: 'opt4', text: 'Too much profit', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'The hospitality industry faces challenges including labor issues, rising costs, changing expectations, and technological disruption.',
    points: 3,
    order: 34
  },

  // Sustainable Tourism (Questions 35-50)
  {
    id: 'tourism_q35',
    text: 'What is sustainable tourism according to the UNWTO?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Tourism that meets the needs of present tourists while protecting and enhancing opportunities for the future', isCorrect: true },
      { id: 'opt2', text: 'Tourism that generates maximum profits', isCorrect: false },
      { id: 'opt3', text: 'Tourism only in natural areas', isCorrect: false },
      { id: 'opt4', text: 'Low-cost tourism packages', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Sustainable tourism meets present needs while protecting and enhancing opportunities for future generations.',
    points: 2,
    order: 35
  },
  {
    id: 'tourism_q36',
    text: 'What are the three pillars of sustainable tourism?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Environmental sustainability', isCorrect: true },
      { id: 'opt2', text: 'Economic sustainability', isCorrect: true },
      { id: 'opt3', text: 'Social and cultural sustainability', isCorrect: true },
      { id: 'opt4', text: 'Political sustainability only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Sustainable tourism is based on environmental, economic, and social/cultural sustainability pillars.',
    points: 2,
    order: 36
  },
  {
    id: 'tourism_q37',
    text: 'What is ecotourism?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Responsible travel to natural areas that conserves the environment and improves local welfare', isCorrect: true },
      { id: 'opt2', text: 'Any tourism in natural settings', isCorrect: false },
      { id: 'opt3', text: 'Luxury tourism in remote areas', isCorrect: false },
      { id: 'opt4', text: 'Adventure sports tourism', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Ecotourism is responsible travel to natural areas that conserves the environment and improves the well-being of local people.',
    points: 1,
    order: 37
  },
  {
    id: 'tourism_q38',
    text: 'Which practices support sustainable tourism development?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Community participation in tourism planning', isCorrect: true },
      { id: 'opt2', text: 'Environmental impact assessments', isCorrect: true },
      { id: 'opt3', text: 'Local sourcing and employment', isCorrect: true },
      { id: 'opt4', text: 'Maximizing tourist numbers regardless of impact', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Sustainable practices include community participation, environmental assessments, local sourcing, and responsible development.',
    points: 3,
    order: 38
  },
  {
    id: 'tourism_q39',
    text: 'What is community-based tourism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Tourism owned and operated by communities for their benefit', isCorrect: true },
      { id: 'opt2', text: 'Tourism only for local residents', isCorrect: false },
      { id: 'opt3', text: 'Government-controlled tourism', isCorrect: false },
      { id: 'opt4', text: 'Corporate-owned tourism', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Community-based tourism is owned and operated by communities, for communities, to provide benefits to the local community.',
    points: 2,
    order: 39
  },
  {
    id: 'tourism_q40',
    text: 'How can tourism contribute to cultural preservation?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Providing economic incentives for cultural maintenance', isCorrect: true },
      { id: 'opt2', text: 'Raising awareness about cultural heritage', isCorrect: true },
      { id: 'opt3', text: 'Supporting traditional crafts and practices', isCorrect: true },
      { id: 'opt4', text: 'Replacing local culture with international standards', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Tourism can preserve culture by providing economic incentives, raising awareness, and supporting traditional practices.',
    points: 2,
    order: 40
  },
  {
    id: 'tourism_q41',
    text: 'What is the carbon footprint of tourism?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'The total greenhouse gas emissions produced by tourism activities', isCorrect: true },
      { id: 'opt2', text: 'The physical footprint of tourists on destinations', isCorrect: false },
      { id: 'opt3', text: 'The economic impact of tourism', isCorrect: false },
      { id: 'opt4', text: 'The number of tourists visiting a destination', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Carbon footprint refers to the total greenhouse gas emissions produced by tourism activities, particularly transportation.',
    points: 3,
    order: 41
  },
  {
    id: 'tourism_q42',
    text: 'Which strategies can reduce the environmental impact of tourism?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Promoting sustainable transportation options', isCorrect: true },
      { id: 'opt2', text: 'Implementing waste reduction and recycling programs', isCorrect: true },
      { id: 'opt3', text: 'Using renewable energy sources', isCorrect: true },
      { id: 'opt4', text: 'Increasing tourist numbers without limits', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Environmental impact can be reduced through sustainable transportation, waste management, renewable energy, and responsible practices.',
    points: 3,
    order: 42
  },
  {
    id: 'tourism_q43',
    text: 'What is responsible tourism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Tourism that creates better places for people to live in and visit', isCorrect: true },
      { id: 'opt2', text: 'Tourism with insurance coverage', isCorrect: false },
      { id: 'opt3', text: 'Tourism managed by government only', isCorrect: false },
      { id: 'opt4', text: 'Expensive tourism packages', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Responsible tourism creates better places for people to live in and visit, minimizing negative impacts.',
    points: 2,
    order: 43
  },
  {
    id: 'tourism_q44',
    text: 'How can tourists practice sustainable behavior?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Respecting local customs and traditions', isCorrect: true },
      { id: 'opt2', text: 'Supporting local businesses and communities', isCorrect: true },
      { id: 'opt3', text: 'Minimizing waste and conserving resources', isCorrect: true },
      { id: 'opt4', text: 'Demanding international standards everywhere', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Sustainable tourist behavior includes respecting local culture, supporting communities, and conserving resources.',
    points: 2,
    order: 44
  },
  {
    id: 'tourism_q45',
    text: 'What is overtourism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'When tourism exceeds the carrying capacity of a destination', isCorrect: true },
      { id: 'opt2', text: 'Tourism that lasts too long', isCorrect: false },
      { id: 'opt3', text: 'Tourism with too many activities', isCorrect: false },
      { id: 'opt4', text: 'International tourism only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Overtourism occurs when tourism exceeds the carrying capacity, causing negative impacts on destinations and communities.',
    points: 2,
    order: 45
  },
  {
    id: 'tourism_q46',
    text: 'Which certification programs promote sustainable tourism?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Global Sustainable Tourism Council (GSTC)', isCorrect: true },
      { id: 'opt2', text: 'Green Key certification', isCorrect: true },
      { id: 'opt3', text: 'EarthCheck certification', isCorrect: true },
      { id: 'opt4', text: 'Price comparison websites', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Sustainable tourism certifications include GSTC, Green Key, EarthCheck, and other recognized programs.',
    points: 3,
    order: 46
  },
  {
    id: 'tourism_q47',
    text: 'What is the role of local communities in sustainable tourism?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Participating in tourism planning and decision-making', isCorrect: true },
      { id: 'opt2', text: 'Providing authentic cultural experiences', isCorrect: true },
      { id: 'opt3', text: 'Benefiting economically from tourism', isCorrect: true },
      { id: 'opt4', text: 'Being excluded from tourism development', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Local communities should participate in planning, provide authentic experiences, and benefit economically from tourism.',
    points: 2,
    order: 47
  },
  {
    id: 'tourism_q48',
    text: 'What is green tourism?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Tourism that minimizes environmental impact and promotes conservation', isCorrect: true },
      { id: 'opt2', text: 'Tourism only in green-colored destinations', isCorrect: false },
      { id: 'opt3', text: 'Tourism for environmental scientists only', isCorrect: false },
      { id: 'opt4', text: 'Tourism during spring season only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Green tourism focuses on minimizing environmental impact and promoting conservation and sustainability.',
    points: 1,
    order: 48
  },
  {
    id: 'tourism_q49',
    text: 'How can technology support sustainable tourism?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Digital platforms for local business promotion', isCorrect: true },
      { id: 'opt2', text: 'Smart systems for resource management', isCorrect: true },
      { id: 'opt3', text: 'Virtual reality for destination marketing', isCorrect: true },
      { id: 'opt4', text: 'Increasing energy consumption', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Technology supports sustainability through digital platforms, smart resource management, and innovative marketing solutions.',
    points: 3,
    order: 49
  },
  {
    id: 'tourism_q50',
    text: 'What is the Global Sustainable Tourism Council (GSTC)?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'An organization that establishes global standards for sustainable tourism', isCorrect: true },
      { id: 'opt2', text: 'A travel booking platform', isCorrect: false },
      { id: 'opt3', text: 'A tourism marketing agency', isCorrect: false },
      { id: 'opt4', text: 'A hotel chain', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'GSTC establishes and manages global standards for sustainable travel and tourism, known as the GSTC Criteria.',
    points: 2,
    order: 50
  }
];