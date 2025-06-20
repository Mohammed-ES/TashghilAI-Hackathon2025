import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Send,
  Brain,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

const InterviewSimulatorPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isSimulationStarted, setIsSimulationStarted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sampleQuestions = [
    "Tell me about yourself and your background.",
    "What are your greatest strengths and weaknesses?",
    "Why do you want to work for our company?",
    "Describe a challenging project you've worked on.",
    "Where do you see yourself in 5 years?",
    "How do you handle stress and pressure?",
    "What motivates you in your work?",
    "Describe a time when you had to work with a difficult team member."
  ];

  const startNewQuestion = () => {
    const randomQuestion = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    setCurrentQuestion(randomQuestion);
    setIsSimulationStarted(true);
    setUserAnswer('');
    setFeedback(null);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual voice recording functionality
  };

  const resetAnswer = () => {
    setUserAnswer('');
    setIsRecording(false);
  };

  const submitForFeedback = async () => {
    if (!userAnswer.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI feedback generation
    setTimeout(() => {
      const mockFeedback = {
        score: Math.floor(Math.random() * 30) + 70, // Score between 70-100
        strengths: [
          "Clear communication",
          "Relevant examples provided",
          "Confident delivery"
        ],
        improvements: [
          "Could provide more specific details",
          "Consider structuring answer with STAR method",
          "Maintain eye contact throughout"
        ],
        overallComment: "Good response overall. Your answer demonstrates relevant experience and shows enthusiasm for the role. Consider adding more quantifiable achievements to strengthen your response."
      };
      
      setFeedback(mockFeedback);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Interview Simulator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practice your interview skills with our AI-powered simulator. Get real-time feedback on your 
            responses to common interview questions.
          </p>
        </div>

        {/* Start Button */}
        {!isSimulationStarted && (
          <div className="text-center mb-8">
            <Button 
              onClick={startNewQuestion}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              New Question
            </Button>
          </div>
        )}

        {/* Interview Question Section */}
        {isSimulationStarted && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Interview Question
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentQuestion ? (
                  <p className="text-lg text-gray-800 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    {currentQuestion}
                  </p>
                ) : (
                  <p className="text-gray-500 italic">
                    Click 'New Question' to start the interview simulation.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Answer Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mic className="h-5 w-5 mr-2" />
                  Your Answer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Voice Recording Button */}
                <div className="flex justify-center">
                  <Button
                    onClick={toggleRecording}
                    variant={isRecording ? "destructive" : "outline"}
                    size="lg"
                    className="rounded-full w-16 h-16"
                  >
                    {isRecording ? (
                      <MicOff className="h-6 w-6" />
                    ) : (
                      <Mic className="h-6 w-6" />
                    )}
                  </Button>
                </div>

                {isRecording && (
                  <div className="text-center">
                    <Badge variant="destructive" className="animate-pulse">
                      Recording...
                    </Badge>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type or edit your answer:
                  </label>
                  <Textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type your answer here or record using the microphone button above..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Button
                    onClick={resetAnswer}
                    variant="outline"
                    className="flex items-center"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                  
                  <Button
                    onClick={submitForFeedback}
                    disabled={!userAnswer.trim() || isLoading}
                    className="flex items-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit for Feedback
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Section */}
            {feedback && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    AI Feedback
                  </CardTitle>
                  <CardDescription>
                    Here's your personalized feedback based on your response
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-2">
                      <span className="text-2xl font-bold text-green-600">{feedback.score}</span>
                    </div>
                    <p className="text-sm text-gray-600">Overall Score</p>
                  </div>

                  {/* Strengths */}
                  <div>
                    <h3 className="font-semibold text-green-600 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Strengths
                    </h3>
                    <ul className="space-y-2">
                      {feedback.strengths.map((strength, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas for Improvement */}
                  <div>
                    <h3 className="font-semibold text-orange-600 mb-3 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-2">
                      {feedback.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Overall Comment */}
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2">Overall Feedback</h3>
                    <p className="text-blue-700 text-sm">{feedback.overallComment}</p>
                  </div>

                  {/* Try Another Question */}
                  <div className="text-center pt-4">
                    <Button 
                      onClick={startNewQuestion}
                      variant="outline"
                      className="mr-4"
                    >
                      Try Another Question
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Interview Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Before You Start:</h4>
                <ul className="space-y-1">
                  <li>• Find a quiet environment</li>
                  <li>• Ensure good lighting and camera angle</li>
                  <li>• Have your resume and notes ready</li>
                  <li>• Practice speaking clearly and confidently</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">During the Interview:</h4>
                <ul className="space-y-1">
                  <li>• Use the STAR method (Situation, Task, Action, Result)</li>
                  <li>• Provide specific examples from your experience</li>
                  <li>• Maintain eye contact with the camera</li>
                  <li>• Take a moment to think before answering</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterviewSimulatorPage;

