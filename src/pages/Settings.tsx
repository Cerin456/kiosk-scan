import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { 
  Settings as SettingsIcon,
  Monitor,
  Bell,
  Shield,
  Download,
  Upload,
  Trash2,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [kioskMode, setKioskMode] = useState(false);
  const [autoEvaluate, setAutoEvaluate] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [scoringMethod, setScoringMethod] = useState("ai");
  const [passThreshold, setPassThreshold] = useState("60");
  const [maxFileSize, setMaxFileSize] = useState("10");
  
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Export started",
      description: "Your evaluation data is being prepared for download.",
    });
  };

  const handleClearHistory = () => {
    toast({
      title: "History cleared",
      description: "All evaluation history has been removed.",
      variant: "destructive",
    });
  };

  return (
    <Layout kioskMode={kioskMode}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure your AI Answer Evaluator preferences and system settings
          </p>
        </div>

        {/* Kiosk Mode Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Monitor className="w-5 h-5" />
              <span>Kiosk Mode</span>
            </CardTitle>
            <CardDescription>
              Configure fullscreen kiosk mode settings for evaluation sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="kiosk-mode">Enable Kiosk Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically enter fullscreen mode during evaluations
                </p>
              </div>
              <Switch
                id="kiosk-mode"
                checked={kioskMode}
                onCheckedChange={setKioskMode}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-evaluate">Auto-start Evaluation</Label>
                <p className="text-sm text-muted-foreground">
                  Begin evaluation immediately when both files are uploaded
                </p>
              </div>
              <Switch
                id="auto-evaluate"
                checked={autoEvaluate}
                onCheckedChange={setAutoEvaluate}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-file-size">Maximum File Size (MB)</Label>
              <Input
                id="max-file-size"
                type="number"
                value={maxFileSize}
                onChange={(e) => setMaxFileSize(e.target.value)}
                className="w-32"
              />
            </div>
          </CardContent>
        </Card>

        {/* Evaluation Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5" />
              <span>Evaluation Preferences</span>
            </CardTitle>
            <CardDescription>
              Configure how the AI evaluates and scores answer sheets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="scoring-method">Default Scoring Method</Label>
              <select
                id="scoring-method"
                value={scoringMethod}
                onChange={(e) => setScoringMethod(e.target.value)}
                className="w-full p-2 border rounded-md bg-background"
              >
                <option value="strict">Strict Matching</option>
                <option value="partial">Partial Credit</option>
                <option value="ai">AI-Powered Grading</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pass-threshold">Default Pass Threshold (%)</Label>
              <Input
                id="pass-threshold"
                type="number"
                value={passThreshold}
                onChange={(e) => setPassThreshold(e.target.value)}
                min="0"
                max="100"
                className="w-32"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ai-instructions">AI Grading Instructions</Label>
              <Textarea
                id="ai-instructions"
                placeholder="Enter custom instructions for AI grading..."
                rows={4}
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                Provide specific guidelines for how the AI should evaluate responses
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </CardTitle>
            <CardDescription>
              Manage notification preferences and alerts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Enable Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when evaluations are complete
                </p>
              </div>
              <Switch
                id="notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Use dark theme for the interface
                </p>
              </div>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Data Management</span>
            </CardTitle>
            <CardDescription>
              Manage your evaluation data and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Export Evaluation Data</h3>
                <p className="text-sm text-muted-foreground">
                  Download all your evaluation history and results
                </p>
              </div>
              <Button variant="outline" onClick={handleExportData}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Import Previous Data</h3>
                <p className="text-sm text-muted-foreground">
                  Upload evaluation data from a previous export
                </p>
              </div>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-destructive">Clear All History</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete all evaluation records (cannot be undone)
                </p>
              </div>
              <Button variant="destructive" onClick={handleClearHistory}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSaveSettings} size="lg">
            <Save className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;