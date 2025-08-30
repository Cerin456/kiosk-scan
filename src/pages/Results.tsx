import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  const results = {
    overallScore: 85,
    totalQuestions: 25,
    correctAnswers: 21,
    partialCredit: 2,
    incorrectAnswers: 2,
    timeAnalyzed: "2024-01-15 14:30:22",
    evaluationTime: "2.3 seconds"
  };

  const questionResults = [
    { id: 1, status: "correct", score: 4, maxScore: 4, feedback: "Perfect match with answer key" },
    { id: 2, status: "correct", score: 4, maxScore: 4, feedback: "Correct solution approach" },
    { id: 3, status: "partial", score: 2, maxScore: 4, feedback: "Correct method, minor calculation error" },
    { id: 4, status: "incorrect", score: 0, maxScore: 4, feedback: "Incorrect formula applied" },
    { id: 5, status: "correct", score: 4, maxScore: 4, feedback: "Excellent explanation provided" },
    { id: 6, status: "correct", score: 4, maxScore: 4, feedback: "Perfect match with answer key" },
    { id: 7, status: "partial", score: 3, maxScore: 4, feedback: "Good approach, missing final step" },
    { id: 8, status: "incorrect", score: 0, maxScore: 4, feedback: "Answer does not match key" },
  ];

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
              Detailed analysis of the answer sheet evaluation
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

        {/* Overall Score */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              <span className={getScoreColor(results.overallScore)}>
                {results.overallScore}%
              </span>
            </CardTitle>
            <CardDescription>Overall Score</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={results.overallScore} className="w-full h-3" />
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
              <div className="text-2xl font-bold text-success">{results.correctAnswers}</div>
              <p className="text-xs text-muted-foreground">
                out of {results.totalQuestions} questions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Partial Credit</CardTitle>
              <AlertCircle className="w-5 h-5 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{results.partialCredit}</div>
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
              <div className="text-2xl font-bold text-destructive">{results.incorrectAnswers}</div>
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
              <div className="text-2xl font-bold">{results.evaluationTime}</div>
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
              <span>Question-by-Question Analysis</span>
            </CardTitle>
            <CardDescription>
              Detailed breakdown of each question's evaluation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questionResults.map((question) => (
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

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Recommendations</span>
            </CardTitle>
            <CardDescription>
              Areas for improvement based on the evaluation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Review algebraic manipulation techniques for questions 3 and 7</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Practice formula application for geometry problems</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Show more detailed work steps for full credit</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Results;