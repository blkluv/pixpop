export interface ResultImageProps {
    src: string;
  }
  
  export default function ResultImage({ src }: ResultImageProps) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Result ✨</h2>
        <img
          src={src}
          alt="Generated Result"
          className="w-72 rounded-xl shadow-2xl border-4 border-purple-400"
        />
      </div>
    );
  }
  