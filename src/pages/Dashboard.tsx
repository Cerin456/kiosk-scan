import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  FileCheck, 
  Upload, 
  Clock, 
  TrendingUp,
  CheckCircle,
  AlertCircle,
  FileX
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Evaluations",
      value: "247",
      change: "+12%",
      icon: FileCheck,
      color: "text-primary"
    },
    {
      title: "Today's Evaluations", 
      value: "18",
      change: "+5%",
      icon: Clock,
      color: "text-success"
    },
    {
      title: "Average Accuracy",
      value: "94.2%",
      change: "+2.1%", 
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      title: "Processing Time",
      value: "2.3s",
      change: "-0.4s",
      icon: CheckCircle,
      color: "text-success"
    }
  ];

  const recentEvaluations = [
    {
      id: "1",
      name: "Math Quiz - Grade 7",
      score: "85%",
      status: "completed",
      time: "2 minutes ago"
    },
    {
      id: "2", 
      name: "Science Test - Chapter 5",
      score: "92%",
      status: "completed",
      time: "15 minutes ago"
    },
    {
      id: "3",
      name: "History Assignment",
      score: "78%", 
      status: "completed",
      time: "1 hour ago"
    },
    {
      id: "4",
      name: "English Literature",
      score: "Processing...",
      status: "processing",
      time: "2 hours ago"
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your AI answer sheet evaluations and performance metrics
            </p>
          </div>
          <Link to="/evaluate">
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity">
              <Upload className="w-4 h-4 mr-2" />
              New Evaluation
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="bg-gradient-to-br from-card to-card/50 border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-success">
                    {stat.change} from last week
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Get started with evaluating answer sheets
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Link to="/evaluate">
              <Button variant="outline" className="flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Upload & Evaluate</span>
              </Button>
            </Link>
            <Link to="/history">
              <Button variant="outline" className="flex items-center space-x-2">
                <FileCheck className="w-4 h-4" />
                <span>View History</span>
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="outline" className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>Settings</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Evaluations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Evaluations</CardTitle>
            <CardDescription>
              Your latest answer sheet evaluation results
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvaluations.map((evaluation) => (
                <div
                  key={evaluation.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      {evaluation.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : evaluation.status === "processing" ? (
                        <Clock className="w-5 h-5 text-warning animate-spin" />
                      ) : (
                        <FileX className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{evaluation.name}</h3>
                      <p className="text-sm text-muted-foreground">{evaluation.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        evaluation.status === "completed" 
                          ? "default"
                          : evaluation.status === "processing"
                          ? "secondary"
                          : "destructive"
                      }
                      className="mb-1"
                    >
                      {evaluation.score}
                    </Badge>
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

export default Dashboard;