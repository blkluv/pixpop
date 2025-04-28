export interface PhotoPreviewProps {
    imageData: string;
  }
  
  export default function PhotoPreview({ imageData }: PhotoPreviewProps) {
    return (
      <div className="relative mt-6">
        <img
          src={imageData}
          className="w-64 rounded-xl shadow-xl transform transition-all duration-700 ease-out"
          alt="Captured"
        />
        <div className="absolute top-0 left-0 w-full h-full border-8 border-white rounded-xl shadow-lg"></div>
      </div>
    );
  }
  