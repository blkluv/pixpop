'use client';

import { useState } from 'react';
import Camera from '@/components/Photobooth/Camera';
import PhotoPreview from '@/components/Photobooth/PhotoPreview';
import SelectArtist from '@/components/Photobooth/SelectArtist';
import GenerateButton from '@/components/Photobooth/GenerateButton';
import LoadingSpinner from '@/components/Photobooth/LoadingSpinner';
import ResultImage from '@/components/Photobooth/ResultImage';
import { generateImage } from '@/lib/generateImage';

const artistImages: Record<string, string> = {
  'Lisa Blackpink': 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=500&h=500',
  'Justin Bieber': 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=faces&fit=crop&w=500&h=500',
  'Selena Gomez': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=500&h=500',
  'Jungkook BTS': 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=faces&fit=crop&w=500&h=500',
};

export default function HomePage() {
  const [imageData, setImageData] = useState<string | null>(null);
  const [artist, setArtist] = useState('Lisa Blackpink');
  const [style, setStyle] = useState('Vintage');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!imageData) {
      alert('Capture an image first!');
      return;
    }

    setLoading(true);
    setResultImage(null);

    try {
      const prompt = `A photobooth picture of a person with ${artist}, in a ${style} style.`;
      const url = await generateImage(prompt);
      setResultImage(url);
    } catch (error) {
      console.error('Error during generate:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gradient-to-b from-purple-200 to-pink-300 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-6 drop-shadow-md animate-bounce">
        AI Photobooth 🎞️
      </h1>

      {!imageData && <Camera onCapture={setImageData} />}
      {imageData && <PhotoPreview imageData={imageData} />}

      <SelectArtist
        artist={artist}
        style={style}
        onArtistChange={setArtist}
        onStyleChange={setStyle}
      />

      <GenerateButton onGenerate={handleGenerate} />

      {loading && <LoadingSpinner />}
      {resultImage && <ResultImage src={resultImage} />}
    </main>
  );
}
