export interface GenerateButtonProps {
    onGenerate: () => void;
  }
  
  export default function GenerateButton({ onGenerate }: GenerateButtonProps) {
    return (
      <button
        onClick={onGenerate}
        className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
      >
        Generate AI Photobooth
      </button>
    );
  }
  