import { tourismSurveyData } from '../data/tourismQuestions';
import { surveyApi, questionApi } from './api';

export class TourismSurveyService {
  static async createTourismSurvey() {
    try {
      console.log('Creating tourism survey...');
      
      // Create the main survey
      const surveyResponse = await surveyApi.createSurvey(tourismSurveyData.survey);
      
      if (!surveyResponse.success || !surveyResponse.data) {
        throw new Error('Failed to create survey');
      }
      
      const surveyId = surveyResponse.data.id;
      console.log('Survey created with ID:', surveyId);
      
      // Create sections and questions
      for (const sectionData of tourismSurveyData.sections) {
        console.log(`Creating section: ${sectionData.title}`);
        
        const sectionResponse = await surveyApi.createSection(surveyId, sectionData);
        
        if (!sectionResponse.success || !sectionResponse.data) {
          console.error(`Failed to create section: ${sectionData.title}`);
          continue;
        }
        
        const sectionId = sectionResponse.data.id;
        const questions = tourismSurveyData.questions[sectionData.title as keyof typeof tourismSurveyData.questions];
        
        if (!questions) {
          console.error(`No questions found for section: ${sectionData.title}`);
          continue;
        }
        
        // Create questions for this section
        for (let i = 0; i < questions.length; i++) {
          const questionData = {
            ...questions[i],
            sectionId: sectionId,
            order: i + 1
          };
          
          try {
            const questionResponse = await questionApi.createQuestion(questionData);
            if (!questionResponse.success) {
              console.error(`Failed to create question ${i + 1} in section ${sectionData.title}`);
            }
          } catch (error) {
            console.error(`Error creating question ${i + 1}:`, error);
          }
        }
        
        console.log(`Created ${questions.length} questions for section: ${sectionData.title}`);
      }
      
      return {
        success: true,
        surveyId: surveyId,
        message: 'Tourism survey created successfully with all sections and questions'
      };
      
    } catch (error) {
      console.error('Error creating tourism survey:', error);
      return {
        success: false,
        message: 'Failed to create tourism survey'
      };
    }
  }
  
  static getSampleData() {
    return tourismSurveyData;
  }
  
  static getQuestionsBySection(sectionTitle: string) {
    return tourismSurveyData.questions[sectionTitle as keyof typeof tourismSurveyData.questions] || [];
  }
  
  static getTotalQuestions() {
    return Object.values(tourismSurveyData.questions).reduce((total, questions) => total + questions.length, 0);
  }
  
  static getSectionSummary() {
    return tourismSurveyData.sections.map(section => ({
      ...section,
      actualQuestions: this.getQuestionsBySection(section.title).length
    }));
  }
}