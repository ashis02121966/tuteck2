import { tourismQuestions } from '../data/tourismQuestions';
import { travelQuestions } from '../data/travelQuestions';
import { Survey, Section, Question } from '../types';

export interface SurveyTemplate {
  id: string;
  title: string;
  description: string;
  duration: number;
  totalQuestions: number;
  passingScore: number;
  maxAttempts: number;
  sections: SectionTemplate[];
}

export interface SectionTemplate {
  title: string;
  description: string;
  questionsCount: number;
  order: number;
  questions: Question[];
}

export const tourismSurveyTemplate: SurveyTemplate = {
  id: 'tourism_survey',
  title: 'Tourism Industry Knowledge Assessment',
  description: 'Comprehensive assessment covering tourism fundamentals, hospitality management, and sustainable tourism practices',
  duration: 90, // 90 minutes
  totalQuestions: 50,
  passingScore: 75,
  maxAttempts: 3,
  sections: [
    {
      title: 'Tourism Fundamentals',
      description: 'Basic concepts, definitions, and principles of tourism industry',
      questionsCount: 17,
      order: 1,
      questions: tourismQuestions.slice(0, 17)
    },
    {
      title: 'Hospitality Management',
      description: 'Hotel operations, customer service, and hospitality industry practices',
      questionsCount: 17,
      order: 2,
      questions: tourismQuestions.slice(17, 34)
    },
    {
      title: 'Sustainable Tourism',
      description: 'Environmental responsibility, community engagement, and sustainable practices',
      questionsCount: 16,
      order: 3,
      questions: tourismQuestions.slice(34, 50)
    }
  ]
};

export const travelSurveyTemplate: SurveyTemplate = {
  id: 'travel_survey',
  title: 'Travel Industry Professional Certification',
  description: 'Comprehensive assessment covering travel planning, transportation logistics, and travel experience management',
  duration: 90, // 90 minutes
  totalQuestions: 50,
  passingScore: 75,
  maxAttempts: 3,
  sections: [
    {
      title: 'Travel Planning & Booking',
      description: 'Travel documentation, booking strategies, and trip planning fundamentals',
      questionsCount: 17,
      order: 1,
      questions: travelQuestions.slice(0, 17)
    },
    {
      title: 'Transportation & Logistics',
      description: 'Airlines, ground transport, and travel logistics management',
      questionsCount: 17,
      order: 2,
      questions: travelQuestions.slice(17, 34)
    },
    {
      title: 'Travel Experience & Culture',
      description: 'Cultural sensitivity, travel safety, and enhancing travel experiences',
      questionsCount: 16,
      order: 3,
      questions: travelQuestions.slice(34, 50)
    }
  ]
};

export const surveyTemplates = [
  tourismSurveyTemplate,
  travelSurveyTemplate
];

export class SurveySetupService {
  static async createSurveyFromTemplate(template: SurveyTemplate): Promise<{ success: boolean; message: string; surveyId?: string }> {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log(`Creating survey: ${template.title}`);
      console.log(`Total questions: ${template.totalQuestions}`);
      console.log(`Sections: ${template.sections.length}`);
      
      // In a real implementation, this would make API calls to:
      // 1. Create the survey
      // 2. Create sections
      // 3. Create questions and options
      // 4. Set up survey assignments
      
      const surveyId = `survey_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      return {
        success: true,
        message: `Successfully created ${template.title} with ${template.totalQuestions} questions across ${template.sections.length} sections.`,
        surveyId
      };
    } catch (error) {
      console.error('Failed to create survey:', error);
      return {
        success: false,
        message: 'Failed to create survey. Please try again.'
      };
    }
  }
  
  static async createAllSurveys(): Promise<{ success: boolean; message: string; results: any[] }> {
    const results = [];
    
    for (const template of surveyTemplates) {
      const result = await this.createSurveyFromTemplate(template);
      results.push({
        template: template.title,
        ...result
      });
    }
    
    const successCount = results.filter(r => r.success).length;
    
    return {
      success: successCount === surveyTemplates.length,
      message: `Created ${successCount} out of ${surveyTemplates.length} surveys successfully.`,
      results
    };
  }
}