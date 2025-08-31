import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { 
  Download,
  Share,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  FileText,
  Clock
} from "lucide-react";

const Results = () => {
  const evaluationMethods = {
    "AI Pattern Recognition": {
      overallScore: 87,
      totalQuestions: 25,
      correctAnswers: 22,
      partialCredit: 1,
      incorrectAnswers: 2,
      timeAnalyzed: "2024-01-15 14:30:22",
      evaluationTime: "1.8 seconds",
      questionResults: [
        { id: 1, status: "correct", score: 4, maxScore: 4, feedback: "AI detected correct pattern match" },
        { id: 2, status: "correct", score: 4, maxScore: 4, feedback: "Solution structure recognized by neural network" },
        { id: 3, status: "correct", score: 4, maxScore: 4, feedback: "Mathematical expression parsed correctly" },
        { id: 4, status: "incorrect", score: 0, maxScore: 4, feedback: "Pattern not recognized in handwriting" },
        { id: 5, status: "correct", score: 4, maxScore: 4, feedback: "AI confidence: 95% match" },
        { id: 6, status: "correct", score: 4, maxScore: 4, feedback: "Deep learning model identified key concepts" },
        { id: 7, status: "partial", score: 3, maxScore: 4, feedback: "Partial pattern match detected" },
        { id: 8, status: "incorrect", score: 0, maxScore: 4, feedback: "Low confidence score from AI model" },
      ]
    },
    "OCR Text Analysis": {
      overallScore: 82,
      totalQuestions: 25,
      correctAnswers: 20,
      partialCredit: 3,
      incorrectAnswers: 2,
      timeAnalyzed: "2024-01-15 14:30:22",
      evaluationTime: "3.1 seconds",
      questionResults: [
        { id: 1, status: "correct", score: 4, maxScore: 4, feedback: "Text extraction successful, exact match" },
        { id: 2, status: "correct", score: 4, maxScore: 4, feedback: "OCR confidence: 98%" },
        { id: 3, status: "partial", score: 2, maxScore: 4, feedback: "Some characters misread by OCR" },
        { id: 4, status: "incorrect", score: 0, maxScore: 4, feedback: "Handwriting too unclear for OCR" },
        { id: 5, status: "correct", score: 4, maxScore: 4, feedback: "Clear text, perfect recognition" },
        { id: 6, status: "correct", score: 4, maxScore: 4, feedback: "Mathematical symbols detected correctly" },
        { id: 7, status: "partial", score: 3, maxScore: 4, feedback: "Minor text recognition errors" },
        { id: 8, status: "partial", score: 2, maxScore: 4, feedback: "Partial character recognition" },
      ]
    },
    "Visual Comparison": {
      overallScore: 78,
      totalQuestions: 25,
      correctAnswers: 19,
      partialCredit: 2,
      incorrectAnswers: 4,
      timeAnalyzed: "2024-01-15 14:30:22",
      evaluationTime: "4.2 seconds",
      questionResults: [
        { id: 1, status: "correct", score: 4, maxScore: 4, feedback: "Visual layout matches reference perfectly" },
        { id: 2, status: "correct", score: 4, maxScore: 4, feedback: "Shape and structure recognition successful" },
        { id: 3, status: "incorrect", score: 0, maxScore: 4, feedback: "Visual differences detected in solution format" },
        { id: 4, status: "incorrect", score: 0, maxScore: 4, feedback: "Diagram structure does not match" },
        { id: 5, status: "correct", score: 4, maxScore: 4, feedback: "Visual elements align with answer key" },
        { id: 6, status: "correct", score: 4, maxScore: 4, feedback: "Geometric shapes recognized correctly" },
        { id: 7, status: "partial", score: 2, maxScore: 4, feedback: "Some visual elements match" },
        { id: 8, status: "partial", score: 3, maxScore: 4, feedback: "Good visual similarity, minor differences" },
      ]
    }
  };

  const [selectedMethod, setSelectedMethod] = useState<keyof typeof evaluationMethods>("AI Pattern Recognition");
  const results = evaluationMethods[selectedMethod];
  const questionResults = results.questionResults;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "correct":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "partial":
        return <AlertCircle className="w-4 h-4 text-warning" />;
      case "incorrect":
        return <XCircle className="w-4 h-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Evaluation Results</h1>
            <p className="text-muted-foreground">
              Compare results across different evaluation methods
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Method Selection */}
        <Tabs value={selectedMethod} onValueChange={(value) => setSelectedMethod(value as keyof typeof evaluationMethods)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="AI Pattern Recognition">AI Pattern Recognition</TabsTrigger>
            <TabsTrigger value="OCR Text Analysis">OCR Text Analysis</TabsTrigger>
            <TabsTrigger value="Visual Comparison">Visual Comparison</TabsTrigger>
          </TabsList>

          {Object.entries(evaluationMethods).map(([method, methodResults]) => (
            <TabsContent key={method} value={method} className="space-y-8">

              {/* Overall Score */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold">
                    <span className={getScoreColor(methodResults.overallScore)}>
                      {methodResults.overallScore}%
                    </span>
                  </CardTitle>
                  <CardDescription>Overall Score - {method}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={methodResults.overallScore} className="w-full h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Summary Stats */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Correct Answers</CardTitle>
                    <CheckCircle className="w-5 h-5 text-success" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">{methodResults.correctAnswers}</div>
                    <p className="text-xs text-muted-foreground">
                      out of {methodResults.totalQuestions} questions
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Partial Credit</CardTitle>
                    <AlertCircle className="w-5 h-5 text-warning" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-warning">{methodResults.partialCredit}</div>
                    <p className="text-xs text-muted-foreground">
                      questions with partial points
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Incorrect</CardTitle>
                    <XCircle className="w-5 h-5 text-destructive" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-destructive">{methodResults.incorrectAnswers}</div>
                    <p className="text-xs text-muted-foreground">
                      questions answered incorrectly
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Analysis Time</CardTitle>
                    <Clock className="w-5 h-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{methodResults.evaluationTime}</div>
                    <p className="text-xs text-muted-foreground">
                      processing duration
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Question-by-Question Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Question-by-Question Analysis - {method}</span>
                  </CardTitle>
                  <CardDescription>
                    Detailed breakdown using {method.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {methodResults.questionResults.map((question) => (
                      <div
                        key={question.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(question.status)}
                          <div>
                            <h3 className="font-medium">Question {question.id}</h3>
                            <p className="text-sm text-muted-foreground">{question.feedback}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge
                            variant={
                              question.status === "correct" 
                                ? "default"
                                : question.status === "partial"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {question.score}/{question.maxScore} pts
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Recommendations</span>
            </CardTitle>
            <CardDescription>
              Areas for improvement based on current evaluation method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {selectedMethod === "AI Pattern Recognition" && (
                <>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Improve handwriting clarity for better AI pattern recognition</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Use consistent mathematical notation for neural network analysis</p>
                  </div>
                </>
              )}
              {selectedMethod === "OCR Text Analysis" && (
                <>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Write more clearly to improve OCR text recognition accuracy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Avoid complex mathematical symbols that OCR struggles with</p>
                  </div>
                </>
              )}
              {selectedMethod === "Visual Comparison" && (
                <>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Maintain consistent formatting and layout structure</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm">Draw diagrams clearly with proper proportions</p>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Results;