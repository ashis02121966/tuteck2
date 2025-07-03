import React, { useState } from 'react';
import { Layout } from '../components/Layout/Layout';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { Modal } from '../components/UI/Modal';
import { questionApi } from '../services/api';
import { FileUploadResult } from '../types';
import { Upload, FileText, AlertTriangle, CheckCircle, X } from 'lucide-react';

export function Questions() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedSurvey, setSelectedSurvey] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<FileUploadResult | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !selectedSurvey) return;

    setIsUploading(true);
    try {
      const response = await questionApi.uploadQuestions(selectedSurvey, selectedFile);
      if (response.success && response.data) {
        setUploadResult(response.data);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const resetUpload = () => {
    setSelectedFile(null);
    setSelectedSurvey('');
    setUploadResult(null);
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Question Bank</h1>
            <p className="text-gray-600 mt-2">Manage questions for your surveys and assessments</p>
          </div>
          <Button
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center space-x-2"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Questions</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Instructions */}
          <div className="lg:col-span-1">
            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Instructions</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>Follow these guidelines for successful question upload:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use CSV format with proper headers</li>
                  <li>Include question text, options, and correct answers</li>
                  <li>Specify complexity level (easy, medium, hard)</li>
                  <li>Maximum file size: 10MB</li>
                </ul>
                <div className="mt-4">
                  <Button variant="secondary" size="sm">
                    Download Template
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Question Statistics */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="text-center">
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </Card>
              <Card className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">Active Surveys</div>
              </Card>
              <Card className="text-center">
                <div className="text-2xl font-bold text-yellow-600">15</div>
                <div className="text-sm text-gray-600">Question Banks</div>
              </Card>
            </div>

            <Card>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Uploads</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Digital Literacy Questions</p>
                      <p className="text-sm text-gray-500">25 questions • 2 hours ago</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Success
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Data Collection Assessment</p>
                      <p className="text-sm text-gray-500">30 questions • 1 day ago</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Partial
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Upload Modal */}
        <Modal
          isOpen={isUploadModalOpen}
          onClose={() => {
            setIsUploadModalOpen(false);
            resetUpload();
          }}
          title="Upload Questions"
          size="lg"
        >
          {!uploadResult ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Survey
                </label>
                <select
                  value={selectedSurvey}
                  onChange={(e) => setSelectedSurvey(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose a survey</option>
                  <option value="1">Digital Literacy Assessment 2024</option>
                  <option value="2">Data Collection Training</option>
                  <option value="3">Quality Assurance Test</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload File
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 transition-colors">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          accept=".csv,.xlsx,.xls"
                          onChange={handleFileSelect}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">CSV, XLSX up to 10MB</p>
                  </div>
                </div>
                {selectedFile && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: {selectedFile.name}
                  </div>
                )}
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsUploadModalOpen(false);
                    resetUpload();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpload}
                  disabled={!selectedFile || !selectedSurvey}
                  loading={isUploading}
                >
                  Upload Questions
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">Upload Complete</h3>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">File:</span>
                  <span className="text-sm font-medium text-gray-900">{uploadResult.fileName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Questions Added:</span>
                  <span className="text-sm font-medium text-green-600">{uploadResult.questionsAdded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Questions Skipped:</span>
                  <span className="text-sm font-medium text-yellow-600">{uploadResult.questionsSkipped}</span>
                </div>
              </div>

              {uploadResult.errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Issues Found</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <ul className="list-disc list-inside space-y-1">
                          {uploadResult.errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  onClick={() => {
                    setIsUploadModalOpen(false);
                    resetUpload();
                  }}
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </Layout>
  );
}