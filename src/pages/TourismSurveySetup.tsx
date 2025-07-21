import React, { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { TourismSurveyService } from '../services/tourismSurveyService';
import { CheckCircle, AlertTriangle, BookOpen, Users, Leaf, Clock, Target, FileText, Play } from 'lucide-react';

export function TourismSurveySetup() {
  const [isCreating, setIsCreating] = useState(false);
  const [creationResult, setCreationResult] = useState<{ success: boolean; message: string; surveyId?: string } | null>(null);

  const handleCreateSurvey = async () => {
    setIsCreating(true);
    setCreationResult(null);
    
    try {
      const result = await TourismSurveyService.createTourismSurvey();
      setCreationResult(result);
    } catch (error) {
      setCreationResult({
        success: false,
        message: 'An error occurred while creating the survey'
      });
    } finally {
      setIsCreating(false);
    }
  };

  const sampleData = TourismSurveyService.getSampleData();
  const sectionSummary = TourismSurveyService.getSectionSummary();
  const totalQuestions = TourismSurveyService.getTotalQuestions();

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tourism Survey Setup</h1>
            <p className="text-gray-600 mt-2">Create a comprehensive tourism industry knowledge assessment</p>
          </div>
        </div>

        {/* Survey Overview */}
        <Card className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{sampleData.survey.title}</h2>
              <p className="text-gray-600">{sampleData.survey.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{sampleData.survey.duration}</p>
              <p className="text-sm text-gray-600">Minutes</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">{totalQuestions}</p>
              <p className="text-sm text-gray-600">Total Questions</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Target className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-yellow-600">{sampleData.survey.passingScore}%</p>
              <p className="text-sm text-gray-600">Passing Score</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Play className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">{sampleData.survey.maxAttempts}</p>
              <p className="text-sm text-gray-600">Max Attempts</p>
            </div>
          </div>
        </Card>

        {/* Sections Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {sectionSummary.map((section, index) => {
            const icons = [Users, BookOpen, Leaf];
            const colors = ['blue', 'green', 'purple'];
            const Icon = icons[index];
            const color = colors[index];
            
            return (
              <Card key={section.title} className="hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-${color}-100 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-sm text-gray-500">Section {section.order}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Questions:</span>
                  <span className={`text-lg font-bold text-${color}-600`}>{section.actualQuestions}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    <p>• Covers {section.title.toLowerCase()} fundamentals</p>
                    <p>• Multiple difficulty levels</p>
                    <p>• Practical scenarios included</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Question Breakdown */}
        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Distribution by Complexity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectionSummary.map((section) => {
              const questions = TourismSurveyService.getQuestionsBySection(section.title);
              const easyCount = questions.filter(q => q.complexity === 'easy').length;
              const mediumCount = questions.filter(q => q.complexity === 'medium').length;
              const hardCount = questions.filter(q => q.complexity === 'hard').length;
              
              return (
                <div key={section.title} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">{section.title}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-600">Easy</span>
                      <span className="font-medium">{easyCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-yellow-600">Medium</span>
                      <span className="font-medium">{mediumCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-red-600">Hard</span>
                      <span className="font-medium">{hardCount}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Creation Status */}
        {creationResult && (
          <Card className={`mb-8 border-l-4 ${creationResult.success ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
            <div className="flex items-center space-x-3">
              {creationResult.success ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-red-600" />
              )}
              <div>
                <h3 className={`font-semibold ${creationResult.success ? 'text-green-900' : 'text-red-900'}`}>
                  {creationResult.success ? 'Survey Created Successfully!' : 'Creation Failed'}
                </h3>
                <p className={`text-sm ${creationResult.success ? 'text-green-700' : 'text-red-700'}`}>
                  {creationResult.message}
                </p>
                {creationResult.success && creationResult.surveyId && (
                  <p className="text-xs text-green-600 mt-1">
                    Survey ID: {creationResult.surveyId}
                  </p>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* Action Buttons */}
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Create the Tourism Survey?</h3>
            <p className="text-gray-600 mb-6">
              This will create a comprehensive tourism assessment with {totalQuestions} questions across {sectionSummary.length} sections.
              The survey includes questions on tourism fundamentals, hospitality management, and sustainable tourism practices.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleCreateSurvey}
                loading={isCreating}
                disabled={creationResult?.success}
                className="flex items-center space-x-2"
              >
                {creationResult?.success ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Survey Created</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4" />
                    <span>Create Tourism Survey</span>
                  </>
                )}
              </Button>
              
              {creationResult?.success && (
                <Button
                  variant="secondary"
                  onClick={() => window.location.href = '/surveys'}
                  className="flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Surveys</span>
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}