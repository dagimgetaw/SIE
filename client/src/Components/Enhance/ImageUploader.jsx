import { useState } from "react";
import { FiUpload, FiImage, FiX, FiCheck, FiSend } from "react-icons/fi";

export default function ImageUploader({ onImageUpload }) {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.match("image.*")) {
      processImage(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      processImage(file);
    }
  };

  const processImage = (file) => {
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    setUploadedFile(file);

    // Simulate upload process
    setUploadStatus("uploading");
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadStatus("success");
      }
      setUploadProgress(progress);
    }, 200);
  };

  const handleSubmit = () => {
    if (uploadedFile && onImageUpload) {
      onImageUpload(uploadedFile);
    }
    resetUpload();
  };

  const resetUpload = () => {
    setPreview(null);
    setUploadStatus("idle");
    setUploadProgress(0);
    setUploadedFile(null);
  };

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case "uploading":
        return (
          <div className="w-4 h-4 border-2 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        );
      case "success":
        return <FiCheck className="text-green-500" />;
      case "error":
        return <FiX className="text-red-500" />;
      default:
        return <FiUpload />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-40 p-4 bg-gray-50">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">
          Enhance Your Satellite Image
        </h2>

        {!preview ? (
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              isDragging
                ? "border-sky-500 bg-sky-50"
                : "border-gray-300 hover:border-sky-400 bg-gray-50"
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="p-4 bg-sky-100 rounded-full">
                <FiImage className="w-10 h-10 text-sky-600" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-700">
                  Drag & drop your satellite image here
                </p>
                <p className="text-sm text-gray-500">or</p>
              </div>
              <label className="cursor-pointer">
                <span className="px-6 py-3 bg-sky-600 text-white cursor-pointer rounded-lg hover:bg-sky-700 transition-colors inline-flex items-center shadow-md">
                  <FiUpload className="mr-2" />
                  Browse Files
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.tif,.tiff"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-xs text-gray-500 mt-2">
                Supported formats: JPEG, PNG, TIFF (Max 50MB)
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="relative bg-gray-100 rounded-lg p-4 flex justify-center min-h-[400px]">
              <img
                src={preview}
                alt="Preview"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
              {uploadStatus === "idle" && (
                <button
                  onClick={resetUpload}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Remove image"
                >
                  <FiX className="text-gray-600" />
                </button>
              )}
            </div>

            {uploadStatus !== "idle" && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    {uploadStatus === "uploading"
                      ? "Processing..."
                      : "Ready for submission!"}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {Math.round(uploadProgress)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      uploadStatus === "success" ? "bg-green-500" : "bg-sky-500"
                    }`}
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="flex space-x-4 pt-4">
              {uploadStatus === "idle" && (
                <>
                  <button
                    onClick={resetUpload}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setUploadStatus("uploading")}
                    className="flex-1 px-6 py-3 bg-sky-600 text-gray-50 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center font-medium shadow-md"
                  >
                    {getStatusIcon()}
                    <span className="ml-2">Enhance Image</span>
                  </button>
                </>
              )}
              {uploadStatus === "success" && (
                <>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-green-600 cursor-pointer text-gray-50 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-medium shadow-md"
                  >
                    <FiSend className="mr-2" />
                    Submit
                  </button>
                  <button
                    onClick={resetUpload}
                    className="flex-1 px-6 py-3 bg-red-600 border border-gray-300 cursor-pointer text-gray-50 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
