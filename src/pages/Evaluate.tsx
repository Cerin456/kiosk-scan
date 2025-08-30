import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Layout from "@/components/Layout";
import UploadArea from "@/components/UploadArea";
import { 
  Play,
  CheckCircle,
  AlertCircle,
  Loader2,
  FileCheck,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Evaluate = () => {
  const [answerSheet, setAnswerSheet] = useState<File | null>(null);
  const [answerKey, setAnswerKey] = useState<File | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [kioskMode, setKioskMode] = useState(false);
  const navigate = useNavigate();

  const handleEvaluate = async () => {
    if (!answerSheet || !answerKey) return;
    
    setIsEvaluating(true);
    setKioskMode(true);
    setProgress(0);

    // Simulate evaluation process
    const intervals = [
      { delay: 500, progress: 20, text: "Processing answer sheet..." },
      { delay: 1000, progress: 40, text: "Analyzing answer key..." },
      { delay: 1500, progress: 60, text: "Comparing responses..." },
      { delay: 2000, progress: 80, text: "Calculating scores..." },
      { delay: 2500, progress: 100, text: "Evaluation complete!" }
    ];

    for (const interval of intervals) {
      await new Promise(resolve => setTimeout(resolve, interval.delay));
      setProgress(interval.progress);
    }

    setTimeout(() => {
      setIsEvaluating(false);
      setKioskMode(false);
      navigate("/results");
    }, 1000);
  };

  const canEvaluate = answerSheet && answerKey && !isEvaluating;

  return (
    <Layout kioskMode={kioskMode}>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Answer Sheet Evaluation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Upload an answer sheet and answer key to automatically evaluate and score the responses using AI
          </p>
        </div>

        {isEvaluating && (
          <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                <span>Evaluating Answer Sheet</span>
              </CardTitle>
              <CardDescription>
                Please wait while AI analyzes and scores the responses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progress} className="w-full" />
              <p className="text-center text-sm text-muted-foreground">
                {progress < 20 && "Processing answer sheet..."}
                {progress >= 20 && progress < 40 && "Analyzing answer key..."}
                {progress >= 40 && progress < 60 && "Comparing responses..."}
                {progress >= 60 && progress < 80 && "Calculating scores..."}
                {progress >= 80 && "Evaluation complete!"}
              </p>
            </CardContent>
          </Card>
        )}

        {!isEvaluating && (
          <>
            {/* Upload Areas */}
            <div className="grid gap-8 lg:grid-cols-2">
              <UploadArea
                title="Answer Sheet"
                description="Upload the student's completed answer sheet (PNG, JPG, PDF)"
                onFileUpload={setAnswerSheet}
                className="h-80"
              />
              <UploadArea
                title="Answer Key"
                description="Upload the correct answer key for comparison (PNG, JPG, PDF)"
                onFileUpload={setAnswerKey}
                className="h-80"
              />
            </div>

            {/* Evaluation Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Evaluation Settings</span>
                </CardTitle>
                <CardDescription>
                  Configure how the AI will evaluate the answer sheet
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Scoring Method</label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option value="strict">Strict Matching</option>
                    <option value="partial">Partial Credit</option>
                    <option value="ai">AI-Powered Grading</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Total Points</label>
                  <input 
                    type="number" 
                    defaultValue="100" 
                    className="w-full p-2 border rounded-md bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Pass Threshold</label>
                  <input 
                    type="number" 
                    defaultValue="60" 
                    min="0" 
                    max="100"
                    className="w-full p-2 border rounded-md bg-background"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Status & Action */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {answerSheet ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span className="text-sm">Answer Sheet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {answerKey ? (
                          <CheckCircle className="w-5 h-5 text-success" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-muted-foreground" />
                        )}
                        <span className="text-sm">Answer Key</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {canEvaluate 
                        ? "Ready to evaluate. Click 'Start Evaluation' to begin."
                        : "Please upload both files to start evaluation."
                      }
                    </p>
                  </div>
                  <Button 
                    onClick={handleEvaluate}
                    disabled={!canEvaluate}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Evaluation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Evaluate;