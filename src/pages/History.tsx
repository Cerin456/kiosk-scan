import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { 
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  FileText,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const evaluations = [
    {
      id: "1",
      name: "Math Quiz - Grade 7",
      date: "2024-01-15",
      time: "14:30",
      score: 85,
      status: "completed",
      questions: 25,
      duration: "2.3s"
    },
    {
      id: "2",
      name: "Science Test - Chapter 5",
      date: "2024-01-15",
      time: "10:15",
      score: 92,
      status: "completed",
      questions: 30,
      duration: "3.1s"
    },
    {
      id: "3",
      name: "History Assignment",
      date: "2024-01-14",
      time: "16:45",
      score: 78,
      status: "completed",
      questions: 20,
      duration: "1.8s"
    },
    {
      id: "4",
      name: "English Literature",
      date: "2024-01-14",
      time: "11:20",
      score: 94,
      status: "completed",
      questions: 15,
      duration: "2.7s"
    },
    {
      id: "5",
      name: "Physics Problem Set",
      date: "2024-01-13",
      time: "09:30",
      score: 67,
      status: "completed",
      questions: 12,
      duration: "4.2s"
    },
    {
      id: "6",
      name: "Chemistry Lab Report",
      date: "2024-01-12",
      time: "15:10",
      score: 88,
      status: "completed",
      questions: 18,
      duration: "2.9s"
    }
  ];

  const filteredEvaluations = evaluations.filter(evaluation =>
    evaluation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return "default";
    if (score >= 70) return "secondary";
    return "destructive";
  };

  const averageScore = Math.round(
    evaluations.reduce((sum, evaluation) => sum + evaluation.score, 0) / evaluations.length
  );

  const totalEvaluations = evaluations.length;
  const totalQuestions = evaluations.reduce((sum, evaluation) => sum + evaluation.questions, 0);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Evaluation History</h1>
            <p className="text-muted-foreground">
              View and manage your past answer sheet evaluations
            </p>
          </div>
          <Link to="/evaluate">
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
              <FileText className="w-4 h-4 mr-2" />
              New Evaluation
            </Button>
          </Link>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Evaluations</CardTitle>
              <FileText className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalEvaluations}</div>
              <p className="text-xs text-muted-foreground">
                assessments completed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <TrendingUp className="w-5 h-5 text-success" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>
                {averageScore}%
              </div>
              <p className="text-xs text-muted-foreground">
                across all evaluations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Questions Evaluated</CardTitle>
              <CheckCircle className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalQuestions}</div>
              <p className="text-xs text-muted-foreground">
                total questions processed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search evaluations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Evaluations List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Evaluations</CardTitle>
            <CardDescription>
              {filteredEvaluations.length} of {totalEvaluations} evaluations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredEvaluations.map((evaluation) => (
                <div
                  key={evaluation.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      {evaluation.score >= 90 ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : evaluation.score >= 70 ? (
                        <AlertCircle className="w-5 h-5 text-warning" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{evaluation.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{evaluation.date} at {evaluation.time}</span>
                        </div>
                        <span>•</span>
                        <span>{evaluation.questions} questions</span>
                        <span>•</span>
                        <span>{evaluation.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Badge variant={getScoreBadgeVariant(evaluation.score)}>
                      {evaluation.score}%
                    </Badge>
                    <Link to="/results">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default History;