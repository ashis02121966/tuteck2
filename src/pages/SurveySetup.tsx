import React, { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { Modal } from '../components/UI/Modal';
import { SurveySetupService, surveyTemplates, SurveyTemplate } from '../services/surveySetupService';
import { FileText, Users, Clock, Target, CheckCircle, AlertTriangle, Play, Eye, BookOpen, Plane, MapPin } from 'lucide-react';
import { formatDuration } from '../utils';

export function SurveySetup() {
  const [isCreating, setIsCreating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<SurveyTemplate | null>(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [creationResults, setCreationResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleCreateSurvey = async (template: SurveyTemplate) => {
    setIsCreating(true);
    try {
      const result = await SurveySetupService.createSurveyFromTemplate(template);
      if (result.success) {
        alert(`✅ ${result.message}`);
      } else {
        alert(`❌ ${result.message}`);
      }
    } catch (error) {
      alert('Failed to create survey. Please try again.');
    } finally {
      setIsCreating(false);
      setIsCreateModalOpen(false);
    }
  };

  const handleCreateAllSurveys = async () => {
    setIsCreating(true);
    setShowResults(false);
    try {
      const result = await SurveySetupService.createAllSurveys();
      setCreationResults(result.results);
      setShowResults(true);
    } catch (error) {
      alert('Failed to create surveys. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  const openPreviewModal = (template: SurveyTemplate) => {
    setSelectedTemplate(template);
    setIsPreviewModalOpen(true);
  };

  const openCreateModal = (template: SurveyTemplate) => {
    setSelectedTemplate(template);
    setIsCreateModalOpen(true);
  };

  const getSurveyIcon = (templateId: string) => {
    switch (templateId) {
      case 'tourism_survey':
        return <MapPin className="w-8 h-8 text-blue-600" />;
      case 'travel_survey':
        return <Plane className="w-8 h-8 text-green-600" />;
      default:
        return <FileText className="w-8 h-8 text-gray-600" />;
    }
  };

  const getSurveyColor = (templateId: string) => {
    switch (templateId) {
      case 'tourism_survey':
        return 'from-blue-500 to-blue-600';
      case 'travel_survey':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Survey Setup</h1>
            <p className="text-gray-600 mt-2">Create comprehensive surveys with pre-built question banks</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              onClick={handleCreateAllSurveys}
              loading={isCreating}
              className="flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Create All Surveys</span>
            </Button>
          </div>
        </div>

        {/* Results Display */}
        {showResults && (
          <Card className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Survey Creation Results</h3>
            <div className="space-y-3">
              {creationResults.map((result, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                  result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}>
                  {result.success ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  )}
                  <div className="flex-1">
                    <p className={`font-medium ${result.success ? 'text-green-900' : 'text-red-900'}`}>
                      {result.template}
                    </p>
                    <p className={`text-sm ${result.success ? 'text-green-700' : 'text-red-700'}`}>
                      {result.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Survey Templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {surveyTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <div className={`bg-gradient-to-r ${getSurveyColor(template.id)} p-6 rounded-t-lg -m-6 mb-6`}>
                <div className="flex items-center space-x-4 text-white">
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    {getSurveyIcon(template.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{template.title}</h3>
                    <p className="text-blue-100 text-sm">{template.totalQuestions} Questions • {template.sections.length} Sections</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{template.description}</p>

                {/* Survey Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {formatDuration(template.duration)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Target className="w-4 h-4" />
                    <span>Pass: {template.passingScore}%</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>{template.totalQuestions} Questions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{template.maxAttempts} Attempts</span>
                  </div>
                </div>

                {/* Sections Overview */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Sections</h4>
                  <div className="space-y-2">
                    {template.sections.map((section, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{section.title}</p>
                          <p className="text-sm text-gray-600">{section.description}</p>
                        </div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {section.questionsCount} Q
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t">
                  <Button
                    variant="secondary"
                    onClick={() => openPreviewModal(template)}
                    className="flex-1 flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview Questions</span>
                  </Button>
                  <Button
                    onClick={() => openCreateModal(template)}
                    className="flex-1 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Create Survey</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <Card className="mt-8">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About These Surveys</h3>
              <div className="space-y-2 text-gray-600">
                <p>• <strong>Tourism Survey:</strong> Covers tourism fundamentals, hospitality management, and sustainable tourism practices</p>
                <p>• <strong>Travel Survey:</strong> Focuses on travel planning, transportation logistics, and cultural travel experiences</p>
                <p>• Each survey contains 50 carefully crafted questions with varying difficulty levels</p>
                <p>• Questions include detailed explanations to support learning outcomes</p>
                <p>• Surveys are designed for industry professionals, students, and certification programs</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Preview Modal */}
        <Modal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          title={`Preview: ${selectedTemplate?.title}`}
          size="xl"
        >
          {selectedTemplate && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{selectedTemplate.totalQuestions}</p>
                  <p className="text-sm text-gray-600">Total Questions</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{selectedTemplate.sections.length}</p>
                  <p className="text-sm text-gray-600">Sections</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">{formatDuration(selectedTemplate.duration)}</p>
                  <p className="text-sm text-gray-600">Duration</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Sample Questions</h4>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {selectedTemplate.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h5 className="font-medium text-gray-900 mb-2">{section.title}</h5>
                      <div className="space-y-3 ml-4">
                        {section.questions.slice(0, 3).map((question, questionIndex) => (
                          <div key={questionIndex} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                Q{questionIndex + 1}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded ${
                                question.complexity === 'easy' ? 'bg-green-100 text-green-700' :
                                question.complexity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {question.complexity}
                              </span>
                              <span className="text-xs text-gray-500">{question.points} pts</span>
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-2">{question.text}</p>
                            <div className="grid grid-cols-1 gap-1">
                              {question.options.map((option, optIndex) => (
                                <div key={optIndex} className={`text-xs p-2 rounded ${
                                  option.isCorrect ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'
                                }`}>
                                  {String.fromCharCode(65 + optIndex)}. {option.text}
                                  {option.isCorrect && <span className="ml-2 text-green-600">✓</span>}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        {section.questions.length > 3 && (
                          <p className="text-sm text-gray-500 italic">
                            ... and {section.questions.length - 3} more questions in this section
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Create Confirmation Modal */}
        <Modal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Create Survey"
        >
          {selectedTemplate && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {getSurveyIcon(selectedTemplate.id)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Create {selectedTemplate.title}?</h3>
                <p className="text-gray-600">
                  This will create a complete survey with {selectedTemplate.totalQuestions} questions across {selectedTemplate.sections.length} sections.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Survey Details:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-2 font-medium">{formatDuration(selectedTemplate.duration)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Passing Score:</span>
                    <span className="ml-2 font-medium">{selectedTemplate.passingScore}%</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Max Attempts:</span>
                    <span className="ml-2 font-medium">{selectedTemplate.maxAttempts}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Questions:</span>
                    <span className="ml-2 font-medium">{selectedTemplate.totalQuestions}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button
                  variant="secondary"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => handleCreateSurvey(selectedTemplate)}
                  loading={isCreating}
                  className="flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Create Survey</span>
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </Layout>
  );
}