export const travelQuestions = [
  // Travel Planning & Booking (Questions 1-17)
  {
    id: 'travel_q1',
    text: 'What are the essential documents required for international travel?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Valid passport', isCorrect: true },
      { id: 'opt2', text: 'Visa (if required)', isCorrect: true },
      { id: 'opt3', text: 'Travel insurance', isCorrect: true },
      { id: 'opt4', text: 'Birth certificate only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Essential travel documents include a valid passport, visa (if required), travel insurance, and sometimes vaccination certificates.',
    points: 2,
    order: 1
  },
  {
    id: 'travel_q2',
    text: 'What is the purpose of travel insurance?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'To protect against financial losses due to trip cancellation, medical emergencies, or other travel-related issues', isCorrect: true },
      { id: 'opt2', text: 'To guarantee hotel reservations', isCorrect: false },
      { id: 'opt3', text: 'To provide free upgrades', isCorrect: false },
      { id: 'opt4', text: 'To ensure good weather', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Travel insurance protects against financial losses from trip cancellations, medical emergencies, lost luggage, and other travel-related issues.',
    points: 1,
    order: 2
  },
  {
    id: 'travel_q3',
    text: 'Which factors should be considered when choosing travel dates?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Seasonal weather patterns', isCorrect: true },
      { id: 'opt2', text: 'Peak vs. off-peak pricing', isCorrect: true },
      { id: 'opt3', text: 'Local events and festivals', isCorrect: true },
      { id: 'opt4', text: 'Personal horoscope only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Travel date selection should consider weather, pricing, local events, personal schedule, and destination-specific factors.',
    points: 2,
    order: 3
  },
  {
    id: 'travel_q4',
    text: 'What is dynamic pricing in travel booking?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Pricing that changes based on demand, availability, and other market factors', isCorrect: true },
      { id: 'opt2', text: 'Fixed pricing throughout the year', isCorrect: false },
      { id: 'opt3', text: 'Pricing based on customer age only', isCorrect: false },
      { id: 'opt4', text: 'Government-regulated pricing', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Dynamic pricing adjusts rates in real-time based on demand, availability, competition, and other market factors.',
    points: 3,
    order: 4
  },
  {
    id: 'travel_q5',
    text: 'What are the main types of travel booking channels?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Online Travel Agencies (OTAs)', isCorrect: true },
      { id: 'opt2', text: 'Direct booking with suppliers', isCorrect: true },
      { id: 'opt3', text: 'Traditional travel agents', isCorrect: true },
      { id: 'opt4', text: 'Social media posts only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Travel can be booked through OTAs, direct supplier websites, traditional agents, and mobile apps.',
    points: 2,
    order: 5
  },
  {
    id: 'travel_q6',
    text: 'What is a travel itinerary?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'A detailed plan of a journey including dates, times, and activities', isCorrect: true },
      { id: 'opt2', text: 'A travel budget only', isCorrect: false },
      { id: 'opt3', text: 'A list of travel documents', isCorrect: false },
      { id: 'opt4', text: 'A travel insurance policy', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'A travel itinerary is a detailed plan outlining the schedule, destinations, activities, and logistics of a trip.',
    points: 1,
    order: 6
  },
  {
    id: 'travel_q7',
    text: 'Which factors affect flight pricing?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Booking timing and advance purchase', isCorrect: true },
      { id: 'opt2', text: 'Route popularity and competition', isCorrect: true },
      { id: 'opt3', text: 'Seasonal demand and fuel costs', isCorrect: true },
      { id: 'opt4', text: 'Passenger weight only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Flight pricing is influenced by booking timing, route competition, demand, fuel costs, and various market factors.',
    points: 3,
    order: 7
  },
  {
    id: 'travel_q8',
    text: 'What is the difference between a visa and a passport?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'A passport is an identity document, while a visa is permission to enter a specific country', isCorrect: true },
      { id: 'opt2', text: 'They are the same document', isCorrect: false },
      { id: 'opt3', text: 'A visa is more important than a passport', isCorrect: false },
      { id: 'opt4', text: 'Passports are only for domestic travel', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'A passport is an identity and citizenship document, while a visa is permission granted by a country to enter and stay.',
    points: 2,
    order: 8
  },
  {
    id: 'travel_q9',
    text: 'What are the benefits of travel loyalty programs?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Earning points or miles for future travel', isCorrect: true },
      { id: 'opt2', text: 'Priority services and upgrades', isCorrect: true },
      { id: 'opt3', text: 'Exclusive member benefits and discounts', isCorrect: true },
      { id: 'opt4', text: 'Guaranteed weather conditions', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Loyalty programs offer points/miles, priority services, upgrades, exclusive benefits, and enhanced travel experiences.',
    points: 2,
    order: 9
  },
  {
    id: 'travel_q10',
    text: 'What is travel risk management?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'The process of identifying, assessing, and mitigating risks associated with travel', isCorrect: true },
      { id: 'opt2', text: 'Buying the cheapest travel options', isCorrect: false },
      { id: 'opt3', text: 'Avoiding all international travel', isCorrect: false },
      { id: 'opt4', text: 'Traveling only during daytime', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Travel risk management involves identifying, assessing, and mitigating potential risks to ensure traveler safety and security.',
    points: 3,
    order: 10
  },
  {
    id: 'travel_q11',
    text: 'What should be included in a travel budget?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Transportation costs', isCorrect: true },
      { id: 'opt2', text: 'Accommodation expenses', isCorrect: true },
      { id: 'opt3', text: 'Food, activities, and emergency funds', isCorrect: true },
      { id: 'opt4', text: 'Only flight costs', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'A comprehensive travel budget includes transportation, accommodation, meals, activities, insurance, and emergency funds.',
    points: 2,
    order: 11
  },
  {
    id: 'travel_q12',
    text: 'What is the purpose of travel advisories?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'To inform travelers about safety, security, and health conditions in destinations', isCorrect: true },
      { id: 'opt2', text: 'To promote tourism to specific countries', isCorrect: false },
      { id: 'opt3', text: 'To set travel prices', isCorrect: false },
      { id: 'opt4', text: 'To book accommodations', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Travel advisories provide current information about safety, security, health, and other conditions affecting travel to specific destinations.',
    points: 2,
    order: 12
  },
  {
    id: 'travel_q13',
    text: 'Which mobile apps are commonly used for travel planning?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Flight booking and tracking apps', isCorrect: true },
      { id: 'opt2', text: 'Hotel booking platforms', isCorrect: true },
      { id: 'opt3', text: 'Navigation and translation apps', isCorrect: true },
      { id: 'opt4', text: 'Gaming apps only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Travel apps include booking platforms, navigation tools, translation services, currency converters, and travel guides.',
    points: 2,
    order: 13
  },
  {
    id: 'travel_q14',
    text: 'What is group travel management?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Coordinating travel arrangements for multiple people with shared itineraries', isCorrect: true },
      { id: 'opt2', text: 'Individual travel planning only', isCorrect: false },
      { id: 'opt3', text: 'Corporate travel policies', isCorrect: false },
      { id: 'opt4', text: 'Travel insurance for groups', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Group travel management involves coordinating accommodations, transportation, and activities for multiple travelers.',
    points: 2,
    order: 14
  },
  {
    id: 'travel_q15',
    text: 'What are the advantages of advance travel booking?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Better prices and availability', isCorrect: true },
      { id: 'opt2', text: 'More time for planning and preparation', isCorrect: true },
      { id: 'opt3', text: 'Greater selection of options', isCorrect: true },
      { id: 'opt4', text: 'Guaranteed perfect weather', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Advance booking typically offers better prices, availability, planning time, and selection of travel options.',
    points: 2,
    order: 15
  },
  {
    id: 'travel_q16',
    text: 'What is travel hacking?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Using loyalty programs, credit card rewards, and booking strategies to travel for less', isCorrect: true },
      { id: 'opt2', text: 'Illegally accessing travel booking systems', isCorrect: false },
      { id: 'opt3', text: 'Traveling without proper documentation', isCorrect: false },
      { id: 'opt4', text: 'Avoiding travel altogether', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Travel hacking involves legitimate strategies using loyalty programs, credit card rewards, and smart booking to reduce travel costs.',
    points: 3,
    order: 16
  },
  {
    id: 'travel_q17',
    text: 'What should travelers consider when booking connecting flights?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Minimum connection time requirements', isCorrect: true },
      { id: 'opt2', text: 'Airport layout and terminal changes', isCorrect: true },
      { id: 'opt3', text: 'Immigration and customs procedures', isCorrect: true },
      { id: 'opt4', text: 'Seat color preferences only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Connecting flights require consideration of connection times, airport logistics, immigration procedures, and potential delays.',
    points: 2,
    order: 17
  },

  // Transportation & Logistics (Questions 18-34)
  {
    id: 'travel_q18',
    text: 'What are the main modes of transportation for travel?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Air travel', isCorrect: true },
      { id: 'opt2', text: 'Rail transport', isCorrect: true },
      { id: 'opt3', text: 'Road transport (car, bus)', isCorrect: true },
      { id: 'opt4', text: 'Teleportation', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Main transportation modes include air, rail, road, and water transport, each with specific advantages and use cases.',
    points: 2,
    order: 18
  },
  {
    id: 'travel_q19',
    text: 'What is the hub-and-spoke model in aviation?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'A system where flights are routed through central hub airports to connect passengers to various destinations', isCorrect: true },
      { id: 'opt2', text: 'Direct flights between all destinations', isCorrect: false },
      { id: 'opt3', text: 'Flights that only operate during peak hours', isCorrect: false },
      { id: 'opt4', text: 'Cargo-only flight operations', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'The hub-and-spoke model routes flights through central hubs to maximize connectivity and efficiency.',
    points: 3,
    order: 19
  },
  {
    id: 'travel_q20',
    text: 'What are the different classes of service on airlines?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Economy Class', isCorrect: true },
      { id: 'opt2', text: 'Business Class', isCorrect: true },
      { id: 'opt3', text: 'First Class', isCorrect: true },
      { id: 'opt4', text: 'Tourist Class only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Airlines typically offer Economy, Premium Economy, Business, and First Class, each with different service levels and pricing.',
    points: 2,
    order: 20
  },
  {
    id: 'travel_q21',
    text: 'What is airline yield management?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'A pricing strategy that maximizes revenue by adjusting fares based on demand and booking patterns', isCorrect: true },
      { id: 'opt2', text: 'Managing aircraft fuel efficiency', isCorrect: false },
      { id: 'opt3', text: 'Scheduling flight crews', isCorrect: false },
      { id: 'opt4', text: 'Maintaining aircraft engines', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Yield management optimizes revenue by adjusting prices based on demand forecasting and booking patterns.',
    points: 3,
    order: 21
  },
  {
    id: 'travel_q22',
    text: 'What are the advantages of high-speed rail travel?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Faster than conventional rail', isCorrect: true },
      { id: 'opt2', text: 'City center to city center connectivity', isCorrect: true },
      { id: 'opt3', text: 'Lower environmental impact than flying', isCorrect: true },
      { id: 'opt4', text: 'Always cheaper than all alternatives', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'High-speed rail offers speed, convenience, environmental benefits, and efficient city-center connections.',
    points: 2,
    order: 22
  },
  {
    id: 'travel_q23',
    text: 'What is intermodal transportation?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Using multiple modes of transportation in a single journey', isCorrect: true },
      { id: 'opt2', text: 'Using only one mode of transport', isCorrect: false },
      { id: 'opt3', text: 'International transportation only', isCorrect: false },
      { id: 'opt4', text: 'Transportation for goods only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Intermodal transportation combines different transport modes (air, rail, road, water) in a single journey.',
    points: 2,
    order: 23
  },
  {
    id: 'travel_q24',
    text: 'What factors affect airport security procedures?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'International security regulations', isCorrect: true },
      { id: 'opt2', text: 'Threat levels and risk assessments', isCorrect: true },
      { id: 'opt3', text: 'Destination country requirements', isCorrect: true },
      { id: 'opt4', text: 'Passenger clothing color', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Airport security is influenced by international regulations, threat assessments, destination requirements, and current security protocols.',
    points: 2,
    order: 24
  },
  {
    id: 'travel_q25',
    text: 'What is the purpose of airline alliances?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'To provide passengers with more destinations, coordinated schedules, and shared benefits', isCorrect: true },
      { id: 'opt2', text: 'To increase ticket prices', isCorrect: false },
      { id: 'opt3', text: 'To reduce competition only', isCorrect: false },
      { id: 'opt4', text: 'To share aircraft only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Airline alliances expand networks, coordinate schedules, share lounges, and provide reciprocal benefits to passengers.',
    points: 2,
    order: 25
  },
  {
    id: 'travel_q26',
    text: 'What are the main types of car rental services?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Traditional car rental companies', isCorrect: true },
      { id: 'opt2', text: 'Peer-to-peer car sharing', isCorrect: true },
      { id: 'opt3', text: 'Ride-sharing services', isCorrect: true },
      { id: 'opt4', text: 'Public transportation only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Car rental options include traditional rentals, peer-to-peer sharing, ride-sharing, and various mobility services.',
    points: 2,
    order: 26
  },
  {
    id: 'travel_q27',
    text: 'What is cruise ship positioning?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Moving ships between regions to optimize seasonal demand and itineraries', isCorrect: true },
      { id: 'opt2', text: 'Parking ships at ports', isCorrect: false },
      { id: 'opt3', text: 'Ship navigation systems', isCorrect: false },
      { id: 'opt4', text: 'Crew positioning on deck', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Cruise positioning involves relocating ships between regions to optimize seasonal demand and offer diverse itineraries.',
    points: 3,
    order: 27
  },
  {
    id: 'travel_q28',
    text: 'What are the benefits of public transportation for travelers?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Cost-effective transportation', isCorrect: true },
      { id: 'opt2', text: 'Local cultural experience', isCorrect: true },
      { id: 'opt3', text: 'Reduced environmental impact', isCorrect: true },
      { id: 'opt4', text: 'Guaranteed luxury service', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Public transportation offers cost savings, cultural immersion, environmental benefits, and local connectivity.',
    points: 2,
    order: 28
  },
  {
    id: 'travel_q29',
    text: 'What is the role of travel technology platforms?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Facilitating online booking and reservations', isCorrect: true },
      { id: 'opt2', text: 'Providing real-time travel information', isCorrect: true },
      { id: 'opt3', text: 'Enabling mobile check-in and digital tickets', isCorrect: true },
      { id: 'opt4', text: 'Controlling weather conditions', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Travel technology platforms enable booking, provide real-time information, facilitate mobile services, and enhance travel experiences.',
    points: 2,
    order: 29
  },
  {
    id: 'travel_q30',
    text: 'What is baggage allowance in air travel?',
    type: 'single_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'The weight and size limits for luggage that passengers can bring on flights', isCorrect: true },
      { id: 'opt2', text: 'The number of passengers allowed on a flight', isCorrect: false },
      { id: 'opt3', text: 'The airline\'s cargo capacity', isCorrect: false },
      { id: 'opt4', text: 'The flight duration limit', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Baggage allowance refers to the weight, size, and number restrictions for carry-on and checked luggage.',
    points: 1,
    order: 30
  },
  {
    id: 'travel_q31',
    text: 'What are the main factors affecting transportation choice for travelers?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Cost and budget considerations', isCorrect: true },
      { id: 'opt2', text: 'Time constraints and convenience', isCorrect: true },
      { id: 'opt3', text: 'Comfort and service preferences', isCorrect: true },
      { id: 'opt4', text: 'Vehicle color only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Transportation choice depends on cost, time, convenience, comfort, environmental impact, and personal preferences.',
    points: 2,
    order: 31
  },
  {
    id: 'travel_q32',
    text: 'What is the difference between charter and scheduled flights?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Charter flights are specially arranged for specific groups, while scheduled flights operate on regular timetables', isCorrect: true },
      { id: 'opt2', text: 'Charter flights are always more expensive', isCorrect: false },
      { id: 'opt3', text: 'Scheduled flights are only for business travelers', isCorrect: false },
      { id: 'opt4', text: 'There is no difference', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Charter flights are specially arranged for specific groups or purposes, while scheduled flights operate on published timetables.',
    points: 2,
    order: 32
  },
  {
    id: 'travel_q33',
    text: 'What are the advantages of direct flights over connecting flights?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Shorter total travel time', isCorrect: true },
      { id: 'opt2', text: 'Reduced risk of missed connections', isCorrect: true },
      { id: 'opt3', text: 'Less chance of lost luggage', isCorrect: true },
      { id: 'opt4', text: 'Always cheaper pricing', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Direct flights offer time savings, reduced connection risks, lower luggage loss probability, and greater convenience.',
    points: 2,
    order: 33
  },
  {
    id: 'travel_q34',
    text: 'What is the role of ground transportation in travel?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Connecting airports to city centers', isCorrect: true },
      { id: 'opt2', text: 'Providing local transportation at destinations', isCorrect: true },
      { id: 'opt3', text: 'Enabling exploration and sightseeing', isCorrect: true },
      { id: 'opt4', text: 'Replacing all other transport modes', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Ground transportation connects airports to cities, provides local mobility, and enables destination exploration.',
    points: 2,
    order: 34
  },

  // Travel Experience & Culture (Questions 35-50)
  {
    id: 'travel_q35',
    text: 'What is cultural sensitivity in travel?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Being aware of and respecting local customs, traditions, and social norms', isCorrect: true },
      { id: 'opt2', text: 'Only visiting museums and cultural sites', isCorrect: false },
      { id: 'opt3', text: 'Avoiding interaction with locals', isCorrect: false },
      { id: 'opt4', text: 'Imposing your own cultural values', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Cultural sensitivity involves understanding, respecting, and adapting to local customs, traditions, and social norms.',
    points: 2,
    order: 35
  },
  {
    id: 'travel_q36',
    text: 'Which behaviors demonstrate responsible travel?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Respecting local customs and dress codes', isCorrect: true },
      { id: 'opt2', text: 'Supporting local businesses and communities', isCorrect: true },
      { id: 'opt3', text: 'Minimizing environmental impact', isCorrect: true },
      { id: 'opt4', text: 'Demanding services exactly like home', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Responsible travel includes respecting local culture, supporting communities, and minimizing environmental impact.',
    points: 2,
    order: 36
  },
  {
    id: 'travel_q37',
    text: 'What is jet lag and how can it be minimized?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'A temporary sleep disorder from crossing time zones; can be minimized by adjusting sleep schedules and light exposure', isCorrect: true },
      { id: 'opt2', text: 'Fatigue from long flights only; cannot be prevented', isCorrect: false },
      { id: 'opt3', text: 'A permanent condition from flying', isCorrect: false },
      { id: 'opt4', text: 'Only affects pilots and crew', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Jet lag is a circadian rhythm disruption from crossing time zones, manageable through sleep adjustment and light therapy.',
    points: 2,
    order: 37
  },
  {
    id: 'travel_q38',
    text: 'What are the benefits of learning basic phrases in the local language?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Better communication with locals', isCorrect: true },
      { id: 'opt2', text: 'Enhanced cultural experience', isCorrect: true },
      { id: 'opt3', text: 'Showing respect for local culture', isCorrect: true },
      { id: 'opt4', text: 'Guaranteed discounts everywhere', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Learning local phrases improves communication, enhances cultural experience, and demonstrates respect for local culture.',
    points: 2,
    order: 38
  },
  {
    id: 'travel_q39',
    text: 'What is travel photography etiquette?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Asking permission before photographing people', isCorrect: true },
      { id: 'opt2', text: 'Respecting photography restrictions at sites', isCorrect: true },
      { id: 'opt3', text: 'Being mindful of cultural and religious sensitivities', isCorrect: true },
      { id: 'opt4', text: 'Taking photos anywhere without consideration', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Photography etiquette involves seeking permission, respecting restrictions, and being culturally sensitive.',
    points: 2,
    order: 39
  },
  {
    id: 'travel_q40',
    text: 'What is slow travel?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'A travel philosophy emphasizing longer stays and deeper cultural immersion', isCorrect: true },
      { id: 'opt2', text: 'Traveling at reduced speeds only', isCorrect: false },
      { id: 'opt3', text: 'Budget travel with minimal spending', isCorrect: false },
      { id: 'opt4', text: 'Traveling during off-peak seasons only', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Slow travel emphasizes longer stays, deeper cultural immersion, and meaningful connections with destinations.',
    points: 2,
    order: 40
  },
  {
    id: 'travel_q41',
    text: 'How can travelers support local economies?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Buying from local businesses and markets', isCorrect: true },
      { id: 'opt2', text: 'Eating at locally-owned restaurants', isCorrect: true },
      { id: 'opt3', text: 'Using local guides and services', isCorrect: true },
      { id: 'opt4', text: 'Only shopping at international chains', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Supporting local economies involves purchasing from local businesses, using local services, and engaging with community enterprises.',
    points: 2,
    order: 41
  },
  {
    id: 'travel_q42',
    text: 'What is travel burnout and how can it be prevented?',
    type: 'single_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Physical and mental exhaustion from excessive travel; prevented by pacing, rest, and mindful planning', isCorrect: true },
      { id: 'opt2', text: 'Running out of money while traveling', isCorrect: false },
      { id: 'opt3', text: 'Missing flights due to poor planning', isCorrect: false },
      { id: 'opt4', text: 'Getting lost in unfamiliar places', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Travel burnout is exhaustion from over-traveling, preventable through balanced itineraries, rest periods, and mindful planning.',
    points: 3,
    order: 42
  },
  {
    id: 'travel_q43',
    text: 'What are the benefits of travel for personal development?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Increased cultural awareness and tolerance', isCorrect: true },
      { id: 'opt2', text: 'Enhanced problem-solving and adaptability skills', isCorrect: true },
      { id: 'opt3', text: 'Broader perspective and worldview', isCorrect: true },
      { id: 'opt4', text: 'Guaranteed career advancement', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Travel develops cultural awareness, adaptability, problem-solving skills, and broadens personal perspectives.',
    points: 2,
    order: 43
  },
  {
    id: 'travel_q44',
    text: 'What is digital nomadism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'A lifestyle that combines remote work with travel to different locations', isCorrect: true },
      { id: 'opt2', text: 'Using only digital devices while traveling', isCorrect: false },
      { id: 'opt3', text: 'Traveling without any technology', isCorrect: false },
      { id: 'opt4', text: 'Working only in the technology sector', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Digital nomadism is a lifestyle that enables location independence through remote work while traveling.',
    points: 2,
    order: 44
  },
  {
    id: 'travel_q45',
    text: 'How can travelers handle culture shock?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Maintaining an open and curious mindset', isCorrect: true },
      { id: 'opt2', text: 'Learning about the destination beforehand', isCorrect: true },
      { id: 'opt3', text: 'Connecting with other travelers or expats', isCorrect: true },
      { id: 'opt4', text: 'Avoiding all local interactions', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Managing culture shock involves preparation, open-mindedness, gradual adaptation, and seeking support when needed.',
    points: 3,
    order: 45
  },
  {
    id: 'travel_q46',
    text: 'What is the importance of travel safety awareness?',
    type: 'multiple_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Preventing theft and scams', isCorrect: true },
      { id: 'opt2', text: 'Ensuring personal health and safety', isCorrect: true },
      { id: 'opt3', text: 'Avoiding dangerous situations and areas', isCorrect: true },
      { id: 'opt4', text: 'Eliminating all travel risks completely', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Travel safety awareness helps prevent theft, ensures health and safety, and enables informed decision-making.',
    points: 2,
    order: 46
  },
  {
    id: 'travel_q47',
    text: 'What are the benefits of travel guides and local tours?',
    type: 'multiple_choice' as const,
    complexity: 'easy' as const,
    options: [
      { id: 'opt1', text: 'Local knowledge and insider information', isCorrect: true },
      { id: 'opt2', text: 'Cultural context and historical background', isCorrect: true },
      { id: 'opt3', text: 'Safety and navigation assistance', isCorrect: true },
      { id: 'opt4', text: 'Guaranteed perfect weather', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Guides provide local expertise, cultural insights, historical context, and enhance safety and navigation.',
    points: 2,
    order: 47
  },
  {
    id: 'travel_q48',
    text: 'What is voluntourism?',
    type: 'single_choice' as const,
    complexity: 'medium' as const,
    options: [
      { id: 'opt1', text: 'Combining volunteer work with travel to contribute to local communities', isCorrect: true },
      { id: 'opt2', text: 'Volunteering only at home', isCorrect: false },
      { id: 'opt3', text: 'Free tourism provided by governments', isCorrect: false },
      { id: 'opt4', text: 'Mandatory community service while traveling', isCorrect: false }
    ],
    correctAnswers: ['opt1'],
    explanation: 'Voluntourism combines travel with volunteer work to contribute positively to destination communities.',
    points: 2,
    order: 48
  },
  {
    id: 'travel_q49',
    text: 'How has technology changed the travel experience?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Mobile booking and digital check-in processes', isCorrect: true },
      { id: 'opt2', text: 'Real-time translation and navigation apps', isCorrect: true },
      { id: 'opt3', text: 'Social media sharing and travel inspiration', isCorrect: true },
      { id: 'opt4', text: 'Eliminated the need for any planning', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Technology has revolutionized booking, navigation, communication, sharing, and overall travel convenience.',
    points: 3,
    order: 49
  },
  {
    id: 'travel_q50',
    text: 'What is the future of travel industry trends?',
    type: 'multiple_choice' as const,
    complexity: 'hard' as const,
    options: [
      { id: 'opt1', text: 'Sustainable and eco-friendly travel options', isCorrect: true },
      { id: 'opt2', text: 'Personalized and AI-driven experiences', isCorrect: true },
      { id: 'opt3', text: 'Contactless and health-focused services', isCorrect: true },
      { id: 'opt4', text: 'Return to 1950s travel methods only', isCorrect: false }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Future travel trends include sustainability, personalization, health focus, technology integration, and experiential travel.',
    points: 3,
    order: 50
  }
];