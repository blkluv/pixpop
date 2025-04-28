'use client';

import { useRef } from 'react';

export interface CameraProps {
  onCapture: (imageData: string) => void;
}

export default function Camera({ onCapture }: CameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    if (navigator.mediaDevices?.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/png');
      onCapture(dataUrl);
      video.srcObject = null; // stop webcam stream
    }
  };

  return (
    <div className="flex flex-col items-center">
      <video ref={videoRef} autoPlay playsInline className="rounded-xl shadow-lg w-full max-w-md border-4 border-purple-400" />
      <canvas ref={canvasRef} className="hidden" />

      <div className="flex gap-4 mt-4">
        <button onClick={startCamera} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-xl shadow">
          Start Camera
        </button>
        <button onClick={capturePhoto} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-xl shadow">
          Capture Photo
        </button>
      </div>
    </div>
  );
}
