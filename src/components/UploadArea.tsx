import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Upload, File, X, CheckCircle } from "lucide-react";

interface UploadAreaProps {
  title: string;
  description: string;
  accept?: Record<string, string[]>;
  onFileUpload?: (file: File) => void;
  className?: string;
}

const UploadArea = ({ 
  title, 
  description, 
  accept = { 'image/*': ['.png', '.jpg', '.jpeg', '.pdf'] },
  onFileUpload,
  className 
}: UploadAreaProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
        onFileUpload?.(file);
      }, 1500);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false
  });

  const removeFile = () => {
    setUploadedFile(null);
  };

  const hasFile = uploadedFile !== null;

  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "p-8 border-2 border-dashed rounded-lg transition-all duration-300 cursor-pointer",
          "hover:border-primary/50 hover:bg-accent/50",
          isDragActive && "border-primary bg-accent",
          hasFile && "border-success bg-success/5"
        )}
      >
        <input {...getInputProps()} />
        
        <div className="text-center space-y-4">
          {hasFile ? (
            <>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-success/10 rounded-full">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-success">{title} Uploaded</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {uploadedFile.name} ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="flex items-center space-x-2"
              >
                <X className="w-4 h-4" />
                <span>Remove</span>
              </Button>
            </>
          ) : isUploading ? (
            <>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full animate-pulse">
                <Upload className="w-8 h-8 text-primary animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Uploading {title}...</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary/10 rounded-full">
                {isDragActive ? (
                  <Upload className="w-8 h-8 text-primary animate-bounce" />
                ) : (
                  <File className="w-8 h-8 text-primary" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Drop files here or click to browse</p>
                <p>Supports: PNG, JPG, JPEG, PDF</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default UploadArea;