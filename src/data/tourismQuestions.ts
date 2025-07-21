export const tourismSurveyData = {
  survey: {
    title: "Tourism Industry Knowledge Assessment",
    description: "Comprehensive assessment covering tourism fundamentals, hospitality management, and sustainable tourism practices",
    targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    duration: 90, // 90 minutes
    totalQuestions: 90,
    passingScore: 75,
    maxAttempts: 3
  },
  sections: [
    {
      title: "Tourism Fundamentals",
      description: "Basic concepts, types of tourism, and industry overview",
      questionsCount: 30,
      order: 1
    },
    {
      title: "Hospitality Management",
      description: "Hotel operations, customer service, and hospitality best practices",
      questionsCount: 30,
      order: 2
    },
    {
      title: "Sustainable Tourism",
      description: "Environmental impact, community involvement, and sustainable practices",
      questionsCount: 30,
      order: 3
    }
  ],
  questions: {
    "Tourism Fundamentals": [
      {
        text: "What is the primary definition of tourism according to the World Tourism Organization (UNWTO)?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Activities of persons traveling to places outside their usual environment for leisure", isCorrect: true },
          { text: "Only international travel for business purposes", isCorrect: false },
          { text: "Domestic travel within one's own country", isCorrect: false },
          { text: "Travel exclusively for educational purposes", isCorrect: false }
        ],
        explanation: "UNWTO defines tourism as activities of persons traveling to and staying in places outside their usual environment for not more than one consecutive year for leisure, business and other purposes.",
        points: 1
      },
      {
        text: "Which of the following are considered types of tourism? (Select all that apply)",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Cultural tourism", isCorrect: true },
          { text: "Adventure tourism", isCorrect: true },
          { text: "Medical tourism", isCorrect: true },
          { text: "Virtual tourism", isCorrect: false }
        ],
        explanation: "Cultural, adventure, and medical tourism are recognized forms of tourism, while virtual tourism is not considered traditional tourism.",
        points: 2
      },
      {
        text: "What does the term 'multiplier effect' mean in tourism economics?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "The direct spending by tourists only", isCorrect: false },
          { text: "The total economic impact including direct, indirect, and induced effects", isCorrect: true },
          { text: "The number of tourists visiting a destination", isCorrect: false },
          { text: "The profit margin of tourism businesses", isCorrect: false }
        ],
        explanation: "The multiplier effect refers to the total economic impact of tourism spending, including direct, indirect, and induced effects throughout the economy.",
        points: 3
      },
      {
        text: "Which organization is responsible for international tourism statistics and policies?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "World Health Organization (WHO)", isCorrect: false },
          { text: "World Tourism Organization (UNWTO)", isCorrect: true },
          { text: "International Monetary Fund (IMF)", isCorrect: false },
          { text: "World Bank", isCorrect: false }
        ],
        explanation: "The World Tourism Organization (UNWTO) is the United Nations agency responsible for the promotion of responsible, sustainable and universally accessible tourism.",
        points: 1
      },
      {
        text: "What are the main components of the tourism system?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Origin region", isCorrect: true },
          { text: "Transit route", isCorrect: true },
          { text: "Destination region", isCorrect: true },
          { text: "Weather conditions", isCorrect: false }
        ],
        explanation: "The tourism system consists of the origin region (where tourists come from), transit route (how they travel), and destination region (where they visit).",
        points: 2
      },
      {
        text: "What is 'dark tourism'?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Tourism during nighttime hours", isCorrect: false },
          { text: "Tourism to sites associated with death, disaster, or tragedy", isCorrect: true },
          { text: "Underground cave tourism", isCorrect: false },
          { text: "Tourism without proper documentation", isCorrect: false }
        ],
        explanation: "Dark tourism refers to tourism directed to places that are historically associated with death and tragedy.",
        points: 2
      },
      {
        text: "Which factor is most important in determining tourism demand?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Weather conditions only", isCorrect: false },
          { text: "Disposable income and leisure time", isCorrect: true },
          { text: "Population size", isCorrect: false },
          { text: "Government policies only", isCorrect: false }
        ],
        explanation: "Disposable income and available leisure time are the most critical factors determining tourism demand.",
        points: 2
      },
      {
        text: "What is the difference between a tourist and an excursionist?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Tourists stay overnight, excursionists do not", isCorrect: true },
          { text: "Tourists travel internationally, excursionists travel domestically", isCorrect: false },
          { text: "Tourists travel for leisure, excursionists for business", isCorrect: false },
          { text: "There is no difference", isCorrect: false }
        ],
        explanation: "A tourist stays at least one night at the destination, while an excursionist is a same-day visitor who does not stay overnight.",
        points: 1
      },
      {
        text: "Which of the following are push factors in tourism motivation?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Escape from routine", isCorrect: true },
          { text: "Rest and relaxation", isCorrect: true },
          { text: "Beautiful beaches at destination", isCorrect: false },
          { text: "Adventure seeking", isCorrect: true }
        ],
        explanation: "Push factors are internal motivations that drive people to travel, such as escaping routine, seeking rest, or adventure. Beautiful beaches are pull factors (destination attributes).",
        points: 2
      },
      {
        text: "What is mass tourism?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Tourism involving large numbers of people visiting popular destinations", isCorrect: true },
          { text: "Tourism for religious purposes", isCorrect: false },
          { text: "Tourism using public transportation", isCorrect: false },
          { text: "Tourism during peak seasons only", isCorrect: false }
        ],
        explanation: "Mass tourism refers to the phenomenon of large numbers of people visiting the same destinations, often characterized by standardized packages and popular attractions.",
        points: 1
      },
      {
        text: "Which tourism model emphasizes community involvement and local benefits?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Mass tourism", isCorrect: false },
          { text: "Community-based tourism", isCorrect: true },
          { text: "Business tourism", isCorrect: false },
          { text: "Virtual tourism", isCorrect: false }
        ],
        explanation: "Community-based tourism is a form of tourism that emphasizes community involvement, local ownership, and ensuring that tourism benefits reach local communities.",
        points: 2
      },
      {
        text: "What are the main characteristics of the tourism product?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Intangibility", isCorrect: true },
          { text: "Perishability", isCorrect: true },
          { text: "Inseparability", isCorrect: true },
          { text: "Durability", isCorrect: false }
        ],
        explanation: "Tourism products are characterized by intangibility (cannot be touched), perishability (cannot be stored), and inseparability (production and consumption occur simultaneously).",
        points: 3
      },
      {
        text: "What is the tourism value chain?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "The price structure of tourism products", isCorrect: false },
          { text: "The sequence of activities from trip planning to post-trip experience", isCorrect: true },
          { text: "The hierarchy of tourism organizations", isCorrect: false },
          { text: "The transportation network", isCorrect: false }
        ],
        explanation: "The tourism value chain represents the full range of activities required to bring a tourism product from conception through delivery to final consumers.",
        points: 3
      },
      {
        text: "Which factor has the greatest impact on tourism seasonality?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Climate and weather patterns", isCorrect: true },
          { text: "Currency exchange rates", isCorrect: false },
          { text: "Political stability", isCorrect: false },
          { text: "Technology advancement", isCorrect: false }
        ],
        explanation: "Climate and weather patterns are the primary drivers of tourism seasonality, affecting when people choose to visit destinations.",
        points: 2
      },
      {
        text: "What is heritage tourism?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Tourism to historical and cultural sites", isCorrect: true },
          { text: "Tourism for elderly people", isCorrect: false },
          { text: "Tourism using traditional transportation", isCorrect: false },
          { text: "Tourism to family origins", isCorrect: false }
        ],
        explanation: "Heritage tourism involves traveling to experience the places, artifacts, and activities that authentically represent the stories and people of the past and present.",
        points: 1
      },
      {
        text: "Which of the following are barriers to tourism development?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Lack of infrastructure", isCorrect: true },
          { text: "Political instability", isCorrect: true },
          { text: "Limited financial resources", isCorrect: true },
          { text: "High tourist demand", isCorrect: false }
        ],
        explanation: "Common barriers include inadequate infrastructure, political instability, and limited financial resources. High tourist demand is actually beneficial for development.",
        points: 2
      },
      {
        text: "What is the concept of 'carrying capacity' in tourism?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "The weight limit for tourist luggage", isCorrect: false },
          { text: "The maximum number of tourists a destination can accommodate without negative impacts", isCorrect: true },
          { text: "The capacity of transportation vehicles", isCorrect: false },
          { text: "The financial capacity of tourists", isCorrect: false }
        ],
        explanation: "Carrying capacity refers to the maximum number of people that may visit a tourist destination without causing destruction of the physical, economic, or socio-cultural environment.",
        points: 3
      },
      {
        text: "Which tourism segment focuses on learning and education?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Educational tourism", isCorrect: true },
          { text: "Adventure tourism", isCorrect: false },
          { text: "Medical tourism", isCorrect: false },
          { text: "Sports tourism", isCorrect: false }
        ],
        explanation: "Educational tourism involves travel for the purpose of learning, including study tours, language learning, and skill development programs.",
        points: 1
      },
      {
        text: "What are the main types of tourism impacts?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Economic impacts", isCorrect: true },
          { text: "Environmental impacts", isCorrect: true },
          { text: "Socio-cultural impacts", isCorrect: true },
          { text: "Technological impacts", isCorrect: false }
        ],
        explanation: "Tourism impacts are typically categorized into economic (financial effects), environmental (ecological effects), and socio-cultural (social and cultural effects).",
        points: 2
      },
      {
        text: "What is the role of tourism intermediaries?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "To provide direct services to tourists", isCorrect: false },
          { text: "To connect tourism suppliers with consumers", isCorrect: true },
          { text: "To regulate tourism activities", isCorrect: false },
          { text: "To finance tourism projects", isCorrect: false }
        ],
        explanation: "Tourism intermediaries, such as travel agents and tour operators, act as middlemen connecting tourism suppliers (hotels, airlines) with consumers (tourists).",
        points: 2
      },
      {
        text: "Which factor is crucial for destination competitiveness?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Low prices only", isCorrect: false },
          { text: "Unique attractions and quality service", isCorrect: true },
          { text: "Large population", isCorrect: false },
          { text: "Industrial development", isCorrect: false }
        ],
        explanation: "Destination competitiveness depends on offering unique attractions, quality services, and value for money, not just low prices.",
        points: 3
      },
      {
        text: "What is geo-tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Tourism using GPS technology", isCorrect: false },
          { text: "Tourism that sustains the geographic character of a place", isCorrect: true },
          { text: "Tourism to geological sites only", isCorrect: false },
          { text: "Tourism using geographic information systems", isCorrect: false }
        ],
        explanation: "Geo-tourism is tourism that sustains or enhances the geographical character of a place—its environment, culture, aesthetics, heritage, and the well-being of its residents.",
        points: 2
      },
      {
        text: "Which of the following are characteristics of alternative tourism?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Small-scale operations", isCorrect: true },
          { text: "Locally owned businesses", isCorrect: true },
          { text: "Environmental consciousness", isCorrect: true },
          { text: "Mass market appeal", isCorrect: false }
        ],
        explanation: "Alternative tourism is characterized by small-scale, locally owned, environmentally conscious operations that contrast with mass tourism.",
        points: 3
      },
      {
        text: "What is the primary purpose of tourism planning?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "To increase tourist numbers only", isCorrect: false },
          { text: "To maximize economic benefits while minimizing negative impacts", isCorrect: true },
          { text: "To restrict tourism development", isCorrect: false },
          { text: "To promote only luxury tourism", isCorrect: false }
        ],
        explanation: "Tourism planning aims to maximize the positive economic, social, and environmental benefits of tourism while minimizing negative impacts.",
        points: 2
      },
      {
        text: "Which tourism theory explains the evolution of tourist destinations?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Maslow's hierarchy of needs", isCorrect: false },
          { text: "Butler's Tourism Area Life Cycle", isCorrect: true },
          { text: "Herzberg's two-factor theory", isCorrect: false },
          { text: "Porter's five forces", isCorrect: false }
        ],
        explanation: "Butler's Tourism Area Life Cycle model describes how tourist destinations evolve through stages of exploration, involvement, development, consolidation, stagnation, and either decline or rejuvenation.",
        points: 3
      },
      {
        text: "What is the significance of tourism satellite accounts?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "They track tourist movements via satellite", isCorrect: false },
          { text: "They measure tourism's economic contribution to GDP", isCorrect: true },
          { text: "They monitor weather for tourism", isCorrect: false },
          { text: "They provide satellite internet for tourists", isCorrect: false }
        ],
        explanation: "Tourism Satellite Accounts (TSA) are a statistical framework that measures tourism's direct economic contribution to GDP and employment.",
        points: 3
      },
      {
        text: "Which factors influence tourism demand elasticity?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Income levels", isCorrect: true },
          { text: "Price of substitutes", isCorrect: true },
          { text: "Necessity vs. luxury perception", isCorrect: true },
          { text: "Destination size", isCorrect: false }
        ],
        explanation: "Tourism demand elasticity is influenced by income levels, availability and price of substitute destinations, and whether tourism is perceived as a necessity or luxury.",
        points: 3
      },
      {
        text: "What is pro-poor tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Tourism for people with low incomes", isCorrect: false },
          { text: "Tourism that generates net benefits for poor people", isCorrect: true },
          { text: "Budget tourism options", isCorrect: false },
          { text: "Tourism in developing countries", isCorrect: false }
        ],
        explanation: "Pro-poor tourism is tourism that generates net benefits for poor people, focusing on unlocking opportunities for the poor rather than expanding the overall size of the tourism sector.",
        points: 2
      },
      {
        text: "Which of the following are key performance indicators (KPIs) for tourism destinations?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Tourist arrival numbers", isCorrect: true },
          { text: "Average length of stay", isCorrect: true },
          { text: "Tourism expenditure per visitor", isCorrect: true },
          { text: "Number of tourism businesses", isCorrect: false }
        ],
        explanation: "Key KPIs include tourist arrivals, length of stay, and expenditure per visitor, which directly measure tourism performance and economic impact.",
        points: 2
      },
      {
        text: "What is the concept of 'leakage' in tourism economics?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Water leakage in hotels", isCorrect: false },
          { text: "Tourism revenue that leaves the destination economy", isCorrect: true },
          { text: "Information leakage about destinations", isCorrect: false },
          { text: "Tourist departures before planned", isCorrect: false }
        ],
        explanation: "Economic leakage refers to the portion of tourism revenue that leaves the destination economy through imports, foreign ownership, or external services.",
        points: 3
      }
    ],
    "Hospitality Management": [
      {
        text: "What are the main departments in a full-service hotel?",
        type: "multiple_choice",
        complexity: "easy",
        options: [
          { text: "Front Office", isCorrect: true },
          { text: "Housekeeping", isCorrect: true },
          { text: "Food & Beverage", isCorrect: true },
          { text: "Marketing only", isCorrect: false }
        ],
        explanation: "A full-service hotel typically includes Front Office, Housekeeping, Food & Beverage, Sales & Marketing, Engineering, and Security departments.",
        points: 1
      },
      {
        text: "What is the primary function of the front office department?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Guest registration and check-in/check-out", isCorrect: true },
          { text: "Room cleaning and maintenance", isCorrect: false },
          { text: "Food preparation and service", isCorrect: false },
          { text: "Building security", isCorrect: false }
        ],
        explanation: "The front office is responsible for guest registration, check-in/check-out, reservations, and serving as the primary point of contact with guests.",
        points: 1
      },
      {
        text: "Which of the following are key principles of excellent customer service in hospitality?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Anticipating guest needs", isCorrect: true },
          { text: "Prompt response to requests", isCorrect: true },
          { text: "Personalized service", isCorrect: true },
          { text: "Minimizing guest interaction", isCorrect: false }
        ],
        explanation: "Excellent customer service involves anticipating needs, responding promptly, personalizing service, and maximizing positive guest interactions.",
        points: 2
      },
      {
        text: "What is revenue management in the hospitality industry?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Managing hotel expenses only", isCorrect: false },
          { text: "Optimizing room rates and inventory to maximize revenue", isCorrect: true },
          { text: "Collecting guest payments", isCorrect: false },
          { text: "Managing staff salaries", isCorrect: false }
        ],
        explanation: "Revenue management involves strategically controlling inventory and pricing to maximize revenue per available room (RevPAR) based on demand patterns.",
        points: 3
      },
      {
        text: "What does ADR stand for in hotel management?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Average Daily Rate", isCorrect: true },
          { text: "Advanced Dining Reservation", isCorrect: false },
          { text: "Automated Door Response", isCorrect: false },
          { text: "Annual Depreciation Rate", isCorrect: false }
        ],
        explanation: "ADR (Average Daily Rate) is a key performance metric that measures the average rental income per occupied room over a specific period.",
        points: 2
      },
      {
        text: "Which housekeeping standards are essential for guest satisfaction?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Cleanliness and hygiene", isCorrect: true },
          { text: "Room maintenance and functionality", isCorrect: true },
          { text: "Proper amenity placement", isCorrect: true },
          { text: "Loud cleaning during guest hours", isCorrect: false }
        ],
        explanation: "Essential housekeeping standards include maintaining cleanliness, ensuring room functionality, proper amenity placement, and quiet operations during guest hours.",
        points: 2
      },
      {
        text: "What is the purpose of a Property Management System (PMS) in hotels?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Managing building maintenance only", isCorrect: false },
          { text: "Integrating all hotel operations and guest information", isCorrect: true },
          { text: "Controlling room temperature", isCorrect: false },
          { text: "Managing staff schedules only", isCorrect: false }
        ],
        explanation: "A PMS integrates reservations, front office, housekeeping, billing, and other hotel operations to manage guest information and streamline operations.",
        points: 2
      },
      {
        text: "Which factors are important in food and beverage cost control?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Portion control", isCorrect: true },
          { text: "Inventory management", isCorrect: true },
          { text: "Menu engineering", isCorrect: true },
          { text: "Unlimited buffet offerings", isCorrect: false }
        ],
        explanation: "Effective F&B cost control involves portion control, proper inventory management, menu engineering to optimize profitability, and strategic menu offerings.",
        points: 3
      },
      {
        text: "What is the difference between occupancy rate and RevPAR?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "They are the same metric", isCorrect: false },
          { text: "Occupancy rate shows rooms sold, RevPAR shows revenue per available room", isCorrect: true },
          { text: "RevPAR only applies to luxury hotels", isCorrect: false },
          { text: "Occupancy rate includes revenue data", isCorrect: false }
        ],
        explanation: "Occupancy rate measures the percentage of rooms sold, while RevPAR (Revenue Per Available Room) combines occupancy and average daily rate to show revenue performance.",
        points: 3
      },
      {
        text: "Which service recovery strategies are most effective in hospitality?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Immediate acknowledgment of the problem", isCorrect: true },
          { text: "Sincere apology", isCorrect: true },
          { text: "Quick resolution and follow-up", isCorrect: true },
          { text: "Blaming other departments", isCorrect: false }
        ],
        explanation: "Effective service recovery involves immediate acknowledgment, sincere apology, quick resolution, and follow-up, never blaming others.",
        points: 2
      },
      {
        text: "What is the primary goal of hotel security management?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Ensuring guest and staff safety", isCorrect: true },
          { text: "Monitoring guest activities", isCorrect: false },
          { text: "Controlling hotel access only", isCorrect: false },
          { text: "Managing lost and found items", isCorrect: false }
        ],
        explanation: "Hotel security management primarily focuses on ensuring the safety and security of guests, staff, and property.",
        points: 1
      },
      {
        text: "Which elements are crucial for effective hotel staff training?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Product knowledge", isCorrect: true },
          { text: "Service standards", isCorrect: true },
          { text: "Emergency procedures", isCorrect: true },
          { text: "Personal social media usage", isCorrect: false }
        ],
        explanation: "Effective training covers product knowledge, service standards, emergency procedures, and professional conduct, not personal social media usage.",
        points: 2
      },
      {
        text: "What is yield management in hospitality?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Managing crop yields for hotel restaurants", isCorrect: false },
          { text: "Maximizing revenue through strategic pricing and inventory control", isCorrect: true },
          { text: "Managing staff productivity", isCorrect: false },
          { text: "Controlling energy consumption", isCorrect: false }
        ],
        explanation: "Yield management involves maximizing revenue by selling the right room to the right guest at the right time for the right price.",
        points: 3
      },
      {
        text: "Which quality assurance measures are important in hospitality?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Regular inspections and audits", isCorrect: true },
          { text: "Guest feedback monitoring", isCorrect: true },
          { text: "Staff performance evaluations", isCorrect: true },
          { text: "Reducing service standards to cut costs", isCorrect: false }
        ],
        explanation: "Quality assurance involves regular inspections, monitoring guest feedback, evaluating staff performance, and maintaining high service standards.",
        points: 2
      },
      {
        text: "What is the role of a concierge in a hotel?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Providing personalized guest services and local information", isCorrect: true },
          { text: "Managing hotel finances", isCorrect: false },
          { text: "Cleaning guest rooms", isCorrect: false },
          { text: "Cooking in the restaurant", isCorrect: false }
        ],
        explanation: "A concierge provides personalized services to guests, including local recommendations, reservations, and assistance with special requests.",
        points: 1
      },
      {
        text: "Which factors influence hotel pricing strategies?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Demand patterns and seasonality", isCorrect: true },
          { text: "Competitor pricing", isCorrect: true },
          { text: "Operating costs", isCorrect: true },
          { text: "Guest room preferences only", isCorrect: false }
        ],
        explanation: "Hotel pricing is influenced by demand patterns, competitor pricing, operating costs, market positioning, and value proposition, not just room preferences.",
        points: 3
      },
      {
        text: "What is the importance of standard operating procedures (SOPs) in hospitality?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "They limit staff creativity", isCorrect: false },
          { text: "They ensure consistency and quality in service delivery", isCorrect: true },
          { text: "They are only for management use", isCorrect: false },
          { text: "They increase operational costs", isCorrect: false }
        ],
        explanation: "SOPs ensure consistent, quality service delivery across all departments and help maintain brand standards.",
        points: 2
      },
      {
        text: "Which technologies are transforming modern hospitality operations?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Mobile check-in/check-out", isCorrect: true },
          { text: "Artificial intelligence for guest services", isCorrect: true },
          { text: "Internet of Things (IoT) for room automation", isCorrect: true },
          { text: "Fax machines for reservations", isCorrect: false }
        ],
        explanation: "Modern hospitality leverages mobile technology, AI, IoT, and other digital innovations, moving away from outdated technologies like fax machines.",
        points: 2
      },
      {
        text: "What is the primary purpose of hotel loyalty programs?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "To increase guest retention and repeat business", isCorrect: true },
          { text: "To reduce room rates", isCorrect: false },
          { text: "To limit guest services", isCorrect: false },
          { text: "To track guest movements", isCorrect: false }
        ],
        explanation: "Loyalty programs are designed to encourage repeat business by rewarding frequent guests with benefits and incentives.",
        points: 1
      },
      {
        text: "Which elements are essential for effective banquet and event management?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Detailed planning and coordination", isCorrect: true },
          { text: "Flexible space configuration", isCorrect: true },
          { text: "Professional service staff", isCorrect: true },
          { text: "Limited menu options", isCorrect: false }
        ],
        explanation: "Successful banquet management requires detailed planning, flexible spaces, professional staff, and diverse menu options to meet client needs.",
        points: 3
      },
      {
        text: "What is the significance of HACCP in hotel food service?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Hotel Accommodation and Customer Care Program", isCorrect: false },
          { text: "Hazard Analysis and Critical Control Points for food safety", isCorrect: true },
          { text: "Hotel Administrative and Cost Control Procedures", isCorrect: false },
          { text: "Hospitality Accreditation and Certification Program", isCorrect: false }
        ],
        explanation: "HACCP (Hazard Analysis and Critical Control Points) is a systematic approach to food safety that identifies, evaluates, and controls food safety hazards.",
        points: 3
      },
      {
        text: "Which factors contribute to effective hotel maintenance management?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Preventive maintenance schedules", isCorrect: true },
          { text: "Quick response to repair requests", isCorrect: true },
          { text: "Energy efficiency monitoring", isCorrect: true },
          { text: "Delaying maintenance to reduce costs", isCorrect: false }
        ],
        explanation: "Effective maintenance involves preventive scheduling, quick response times, energy efficiency monitoring, and proactive rather than reactive approaches.",
        points: 2
      },
      {
        text: "What is the role of a hotel general manager?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Managing only the front desk operations", isCorrect: false },
          { text: "Overall leadership and coordination of all hotel departments", isCorrect: true },
          { text: "Handling guest complaints only", isCorrect: false },
          { text: "Managing hotel marketing exclusively", isCorrect: false }
        ],
        explanation: "The general manager provides overall leadership, coordinates all departments, ensures profitability, and maintains service standards.",
        points: 2
      },
      {
        text: "Which metrics are used to measure hotel operational efficiency?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Labor cost percentage", isCorrect: true },
          { text: "Energy cost per occupied room", isCorrect: true },
          { text: "Guest satisfaction scores", isCorrect: true },
          { text: "Number of hotel floors", isCorrect: false }
        ],
        explanation: "Operational efficiency is measured through labor costs, energy efficiency, guest satisfaction, and other performance indicators, not physical characteristics.",
        points: 3
      },
      {
        text: "What is the importance of cross-training in hotel operations?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "It increases labor costs unnecessarily", isCorrect: false },
          { text: "It improves operational flexibility and service continuity", isCorrect: true },
          { text: "It confuses staff about their roles", isCorrect: false },
          { text: "It is only useful during peak seasons", isCorrect: false }
        ],
        explanation: "Cross-training improves operational flexibility, ensures service continuity during absences, and enhances staff understanding of hotel operations.",
        points: 2
      },
      {
        text: "Which elements are crucial for successful hotel sales and marketing?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Market segmentation", isCorrect: true },
          { text: "Digital marketing presence", isCorrect: true },
          { text: "Relationship building with clients", isCorrect: true },
          { text: "Focusing only on walk-in guests", isCorrect: false }
        ],
        explanation: "Effective sales and marketing involve market segmentation, digital presence, relationship building, and diverse customer acquisition strategies.",
        points: 2
      },
      {
        text: "What is the purpose of hotel brand standards?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "To ensure consistency across all properties", isCorrect: true },
          { text: "To increase operational costs", isCorrect: false },
          { text: "To limit guest services", isCorrect: false },
          { text: "To reduce staff training", isCorrect: false }
        ],
        explanation: "Brand standards ensure consistent guest experiences, service quality, and operational procedures across all properties in a hotel chain.",
        points: 1
      },
      {
        text: "Which factors are important in hotel location selection?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Accessibility and transportation links", isCorrect: true },
          { text: "Proximity to attractions and business centers", isCorrect: true },
          { text: "Local zoning and regulations", isCorrect: true },
          { text: "Personal preferences of investors only", isCorrect: false }
        ],
        explanation: "Hotel location selection considers accessibility, proximity to demand generators, regulatory environment, and market factors, not just personal preferences.",
        points: 3
      },
      {
        text: "What is the significance of guest feedback in hospitality management?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "It helps identify areas for improvement and maintain service quality", isCorrect: true },
          { text: "It is only useful for marketing purposes", isCorrect: false },
          { text: "It should be ignored to avoid complaints", isCorrect: false },
          { text: "It is only important for luxury hotels", isCorrect: false }
        ],
        explanation: "Guest feedback is crucial for identifying improvement opportunities, maintaining service quality, and ensuring guest satisfaction across all hotel segments.",
        points: 1
      },
      {
        text: "Which strategies help hotels manage overbooking situations?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Maintaining relationships with nearby hotels", isCorrect: true },
          { text: "Offering compensation and upgrades", isCorrect: true },
          { text: "Clear communication with affected guests", isCorrect: true },
          { text: "Denying the overbooking situation", isCorrect: false }
        ],
        explanation: "Effective overbooking management involves partnerships with other hotels, appropriate compensation, clear communication, and transparent handling of the situation.",
        points: 3
      }
    ],
    "Sustainable Tourism": [
      {
        text: "What is the primary goal of sustainable tourism?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Maximizing tourist numbers", isCorrect: false },
          { text: "Meeting present needs without compromising future generations", isCorrect: true },
          { text: "Reducing tourism costs", isCorrect: false },
          { text: "Promoting only luxury tourism", isCorrect: false }
        ],
        explanation: "Sustainable tourism aims to meet the needs of present tourists and host regions while protecting and enhancing opportunities for the future.",
        points: 1
      },
      {
        text: "Which are the three pillars of sustainable tourism?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Environmental sustainability", isCorrect: true },
          { text: "Economic sustainability", isCorrect: true },
          { text: "Social sustainability", isCorrect: true },
          { text: "Technological sustainability", isCorrect: false }
        ],
        explanation: "Sustainable tourism is built on three pillars: environmental protection, economic viability, and social equity.",
        points: 2
      },
      {
        text: "What is ecotourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Any tourism in natural areas", isCorrect: false },
          { text: "Responsible travel to natural areas that conserves environment and improves local welfare", isCorrect: true },
          { text: "Tourism using electric vehicles only", isCorrect: false },
          { text: "Tourism that avoids all human contact", isCorrect: false }
        ],
        explanation: "Ecotourism is responsible travel to natural areas that conserves the environment, sustains the well-being of local people, and involves interpretation and education.",
        points: 2
      },
      {
        text: "Which practices help reduce tourism's carbon footprint?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Using renewable energy sources", isCorrect: true },
          { text: "Promoting local transportation", isCorrect: true },
          { text: "Encouraging longer stays", isCorrect: true },
          { text: "Increasing air travel frequency", isCorrect: false }
        ],
        explanation: "Carbon footprint reduction involves renewable energy, local transport, longer stays to reduce travel frequency, and avoiding unnecessary air travel.",
        points: 2
      },
      {
        text: "What is the concept of 'overtourism'?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Tourism that exceeds a destination's carrying capacity", isCorrect: true },
          { text: "Tourism that lasts too long", isCorrect: false },
          { text: "Tourism with excessive luxury", isCorrect: false },
          { text: "Tourism with too many activities", isCorrect: false }
        ],
        explanation: "Overtourism occurs when the number of tourists exceeds a destination's carrying capacity, leading to negative impacts on the environment, local communities, and visitor experience.",
        points: 2
      },
      {
        text: "Which certification programs promote sustainable tourism practices?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Global Sustainable Tourism Council (GSTC)", isCorrect: true },
          { text: "Green Key certification", isCorrect: true },
          { text: "EarthCheck certification", isCorrect: true },
          { text: "Standard hotel rating systems", isCorrect: false }
        ],
        explanation: "GSTC, Green Key, and EarthCheck are specific sustainability certifications, while standard hotel ratings focus on amenities rather than sustainability.",
        points: 3
      },
      {
        text: "What is community-based tourism (CBT)?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Tourism organized by local communities for their benefit", isCorrect: true },
          { text: "Tourism in urban communities only", isCorrect: false },
          { text: "Tourism that excludes outside visitors", isCorrect: false },
          { text: "Tourism managed by government communities", isCorrect: false }
        ],
        explanation: "Community-based tourism is tourism owned and operated by communities, for communities, with the purpose of enabling visitors to increase their awareness and learn about the community and local ways of life.",
        points: 2
      },
      {
        text: "Which environmental impacts can tourism have on destinations?",
        type: "multiple_choice",
        complexity: "easy",
        options: [
          { text: "Water pollution", isCorrect: true },
          { text: "Habitat destruction", isCorrect: true },
          { text: "Waste generation", isCorrect: true },
          { text: "Improved air quality", isCorrect: false }
        ],
        explanation: "Tourism can cause water pollution, habitat destruction, and increased waste generation. Improved air quality is typically not a direct result of tourism.",
        points: 1
      },
      {
        text: "What is the role of local communities in sustainable tourism development?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "They should be excluded from decision-making", isCorrect: false },
          { text: "They should be active participants and beneficiaries", isCorrect: true },
          { text: "They should only provide labor", isCorrect: false },
          { text: "They should relocate to make room for tourism", isCorrect: false }
        ],
        explanation: "Local communities should be active participants in tourism planning and development, ensuring they benefit from and have control over tourism activities in their area.",
        points: 2
      },
      {
        text: "Which strategies help preserve cultural heritage in tourism destinations?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Limiting visitor numbers to sensitive sites", isCorrect: true },
          { text: "Educating tourists about local customs", isCorrect: true },
          { text: "Supporting traditional crafts and practices", isCorrect: true },
          { text: "Replacing local culture with international standards", isCorrect: false }
        ],
        explanation: "Cultural preservation involves managing visitor impacts, education, supporting traditions, and maintaining authentic local culture rather than standardizing it.",
        points: 3
      },
      {
        text: "What is the importance of biodiversity conservation in tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "It's not relevant to tourism", isCorrect: false },
          { text: "It maintains the natural attractions that draw tourists", isCorrect: true },
          { text: "It only matters for wildlife tourism", isCorrect: false },
          { text: "It increases tourism costs unnecessarily", isCorrect: false }
        ],
        explanation: "Biodiversity conservation is crucial for maintaining the natural attractions and ecosystems that form the foundation of many tourism experiences.",
        points: 2
      },
      {
        text: "Which principles guide responsible wildlife tourism?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Maintaining safe distances from animals", isCorrect: true },
          { text: "Supporting conservation efforts", isCorrect: true },
          { text: "Using local guides and services", isCorrect: true },
          { text: "Feeding wild animals for better photos", isCorrect: false }
        ],
        explanation: "Responsible wildlife tourism maintains animal welfare, supports conservation, uses local expertise, and never involves harmful practices like feeding wild animals.",
        points: 3
      },
      {
        text: "What is 'greenwashing' in the tourism industry?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Cleaning facilities with eco-friendly products", isCorrect: false },
          { text: "Misleading marketing about environmental practices", isCorrect: true },
          { text: "Washing clothes in an environmentally friendly way", isCorrect: false },
          { text: "Painting buildings green", isCorrect: false }
        ],
        explanation: "Greenwashing refers to misleading marketing that makes tourism businesses appear more environmentally responsible than they actually are.",
        points: 3
      },
      {
        text: "Which water conservation measures can hotels implement?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Low-flow fixtures and toilets", isCorrect: true },
          { text: "Towel and linen reuse programs", isCorrect: true },
          { text: "Rainwater harvesting systems", isCorrect: true },
          { text: "Unlimited water usage for guests", isCorrect: false }
        ],
        explanation: "Water conservation involves efficient fixtures, reuse programs, rainwater harvesting, and responsible usage policies rather than unlimited consumption.",
        points: 2
      },
      {
        text: "What is the significance of fair trade in tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Ensuring equitable distribution of tourism benefits", isCorrect: true },
          { text: "Promoting only expensive tourism products", isCorrect: false },
          { text: "Limiting tourism to certain groups", isCorrect: false },
          { text: "Standardizing all tourism prices", isCorrect: false }
        ],
        explanation: "Fair trade in tourism ensures that local communities receive fair compensation and benefits from tourism activities, promoting equitable development.",
        points: 2
      },
      {
        text: "Which renewable energy sources are suitable for tourism facilities?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Solar power", isCorrect: true },
          { text: "Wind energy", isCorrect: true },
          { text: "Geothermal energy", isCorrect: true },
          { text: "Coal power", isCorrect: false }
        ],
        explanation: "Renewable sources like solar, wind, and geothermal energy are sustainable options for tourism facilities, while coal is a non-renewable fossil fuel.",
        points: 2
      },
      {
        text: "What is the role of education in sustainable tourism?",
        type: "single_choice",
        complexity: "easy",
        options: [
          { text: "Raising awareness about environmental and cultural impacts", isCorrect: true },
          { text: "Teaching tourists to spend more money", isCorrect: false },
          { text: "Promoting mass tourism", isCorrect: false },
          { text: "Encouraging longer flights", isCorrect: false }
        ],
        explanation: "Education in sustainable tourism focuses on raising awareness about environmental and cultural impacts, promoting responsible behavior among tourists and industry stakeholders.",
        points: 1
      },
      {
        text: "Which waste management practices support sustainable tourism?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Reducing single-use plastics", isCorrect: true },
          { text: "Implementing recycling programs", isCorrect: true },
          { text: "Composting organic waste", isCorrect: true },
          { text: "Increasing packaging for convenience", isCorrect: false }
        ],
        explanation: "Sustainable waste management involves reducing plastics, recycling, composting, and minimizing packaging rather than increasing it for convenience.",
        points: 2
      },
      {
        text: "What is carbon offsetting in tourism?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Eliminating all carbon emissions", isCorrect: false },
          { text: "Compensating for emissions through environmental projects", isCorrect: true },
          { text: "Using only carbon-free transportation", isCorrect: false },
          { text: "Avoiding all tourism activities", isCorrect: false }
        ],
        explanation: "Carbon offsetting involves compensating for unavoidable emissions by investing in projects that remove or reduce equivalent amounts of CO2 from the atmosphere.",
        points: 3
      },
      {
        text: "Which factors contribute to sustainable transportation in tourism?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Electric and hybrid vehicles", isCorrect: true },
          { text: "Public transportation systems", isCorrect: true },
          { text: "Bicycle and walking infrastructure", isCorrect: true },
          { text: "Increasing private car usage", isCorrect: false }
        ],
        explanation: "Sustainable transportation promotes electric vehicles, public transit, active transportation, and reduces reliance on private cars.",
        points: 3
      },
      {
        text: "What is the importance of stakeholder engagement in sustainable tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "It's unnecessary and slows development", isCorrect: false },
          { text: "It ensures all parties benefit and support tourism development", isCorrect: true },
          { text: "It only involves government officials", isCorrect: false },
          { text: "It focuses only on tourist satisfaction", isCorrect: false }
        ],
        explanation: "Stakeholder engagement ensures that all parties (communities, businesses, government, tourists) are involved in planning and benefit from sustainable tourism development.",
        points: 2
      },
      {
        text: "Which indicators measure tourism sustainability performance?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Environmental impact assessments", isCorrect: true },
          { text: "Community satisfaction surveys", isCorrect: true },
          { text: "Economic leakage measurements", isCorrect: true },
          { text: "Tourist spending amounts only", isCorrect: false }
        ],
        explanation: "Sustainability indicators include environmental impacts, community satisfaction, economic distribution, and multiple factors beyond just tourist spending.",
        points: 3
      },
      {
        text: "What is regenerative tourism?",
        type: "single_choice",
        complexity: "hard",
        options: [
          { text: "Tourism that restores and enhances destinations", isCorrect: true },
          { text: "Tourism that repeats the same activities", isCorrect: false },
          { text: "Tourism that generates more tourists", isCorrect: false },
          { text: "Tourism that rebuilds damaged infrastructure", isCorrect: false }
        ],
        explanation: "Regenerative tourism goes beyond sustainability to actively restore and enhance the environmental, social, and economic health of destinations.",
        points: 3
      },
      {
        text: "Which practices support sustainable accommodation management?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Energy-efficient lighting and appliances", isCorrect: true },
          { text: "Local sourcing of food and materials", isCorrect: true },
          { text: "Green building design and construction", isCorrect: true },
          { text: "Maximizing resource consumption", isCorrect: false }
        ],
        explanation: "Sustainable accommodation involves energy efficiency, local sourcing, green building practices, and resource conservation rather than maximizing consumption.",
        points: 2
      },
      {
        text: "What is the role of technology in sustainable tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "Technology always increases environmental impact", isCorrect: false },
          { text: "Technology can help monitor and reduce environmental impacts", isCorrect: true },
          { text: "Technology is irrelevant to sustainability", isCorrect: false },
          { text: "Technology only benefits large corporations", isCorrect: false }
        ],
        explanation: "Technology can support sustainability through monitoring systems, efficient resource management, virtual experiences that reduce travel, and smart destination management.",
        points: 2
      },
      {
        text: "Which principles guide sustainable tour operator practices?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Supporting local economies", isCorrect: true },
          { text: "Minimizing environmental impacts", isCorrect: true },
          { text: "Respecting local cultures", isCorrect: true },
          { text: "Maximizing group sizes to reduce costs", isCorrect: false }
        ],
        explanation: "Sustainable tour operators support local economies, minimize environmental impacts, respect cultures, and often use smaller groups for better impact management.",
        points: 3
      },
      {
        text: "What is the significance of protected areas in sustainable tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "They should be avoided by tourists", isCorrect: false },
          { text: "They provide controlled access while conserving ecosystems", isCorrect: true },
          { text: "They are only for scientific research", isCorrect: false },
          { text: "They generate revenue without any restrictions", isCorrect: false }
        ],
        explanation: "Protected areas balance conservation with controlled tourism access, providing economic benefits while preserving ecosystems for future generations.",
        points: 2
      },
      {
        text: "Which strategies help destinations manage tourism seasonality sustainably?",
        type: "multiple_choice",
        complexity: "hard",
        options: [
          { text: "Developing year-round attractions", isCorrect: true },
          { text: "Promoting shoulder season travel", isCorrect: true },
          { text: "Diversifying tourism products", isCorrect: true },
          { text: "Concentrating all tourism in peak season", isCorrect: false }
        ],
        explanation: "Sustainable seasonality management involves spreading tourism throughout the year through diverse attractions, shoulder season promotion, and product diversification.",
        points: 3
      },
      {
        text: "What is the importance of monitoring and evaluation in sustainable tourism?",
        type: "single_choice",
        complexity: "medium",
        options: [
          { text: "It's an unnecessary expense", isCorrect: false },
          { text: "It helps track progress and adapt strategies", isCorrect: true },
          { text: "It only benefits researchers", isCorrect: false },
          { text: "It slows down tourism development", isCorrect: false }
        ],
        explanation: "Monitoring and evaluation are essential for tracking sustainability progress, identifying problems early, and adapting strategies to ensure long-term success.",
        points: 2
      },
      {
        text: "Which approaches help minimize tourism's impact on local water resources?",
        type: "multiple_choice",
        complexity: "medium",
        options: [
          { text: "Water recycling and treatment systems", isCorrect: true },
          { text: "Drought-resistant landscaping", isCorrect: true },
          { text: "Guest education about water conservation", isCorrect: true },
          { text: "Unlimited swimming pool construction", isCorrect: false }
        ],
        explanation: "Water resource protection involves recycling systems, appropriate landscaping, guest education, and responsible facility development rather than unlimited construction.",
        points: 2
      }
    ]
  }
};

export default tourismSurveyData;