export default function LoadingSpinner() {
    return (
      <div className="mt-6 flex items-center gap-2 text-purple-700 font-semibold">
        <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-purple-500"></div>
        Processing...
      </div>
    );
  }
  