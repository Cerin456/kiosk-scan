// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                EduScan.ai
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
              <a href="/evaluate" className="text-muted-foreground hover:text-foreground transition-colors">
                Evaluate
              </a>
              <a href="/history" className="text-muted-foreground hover:text-foreground transition-colors">
                History
              </a>
              <a href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                Settings
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AI-Powered Answer Sheet Evaluation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transform your grading process with advanced AI technology. Upload answer sheets and answer keys 
            to get instant, accurate evaluations with detailed feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/evaluate" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Start Evaluating
            </a>
            <a 
              href="/dashboard" 
              className="inline-flex items-center justify-center px-8 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium"
            >
              View Dashboard
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Pattern Recognition</h3>
            <p className="text-muted-foreground">
              Advanced AI algorithms analyze handwriting patterns and mark distributions for accurate evaluation.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-accent text-xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">OCR Text Analysis</h3>
            <p className="text-muted-foreground">
              Optical Character Recognition technology converts handwritten text for precise comparison.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border border-border bg-card">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-secondary-foreground text-xl">👁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Visual Comparison</h3>
            <p className="text-muted-foreground">
              Visual analysis compares answer layouts and structures for comprehensive evaluation.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Upload Answer Sheet</h3>
              <p className="text-sm text-muted-foreground">Upload the student's answer sheet image</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Upload Answer Key</h3>
              <p className="text-sm text-muted-foreground">Provide the correct answer key for comparison</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Our AI evaluates using multiple methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4 text-success-foreground font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Results</h3>
              <p className="text-sm text-muted-foreground">Receive detailed evaluation and feedback</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 EduScan.ai - AI-Powered Answer Sheet Evaluation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
