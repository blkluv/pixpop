export interface SelectArtistProps {
    artist: string;
    style: string;
    onArtistChange: (artist: string) => void;
    onStyleChange: (style: string) => void;
  }
  
  export default function SelectArtist({ artist, style, onArtistChange, onStyleChange }: SelectArtistProps) {
    return (
      <div className="mt-6 w-full max-w-sm">
        <label className="block text-purple-700 font-semibold mb-1">Select Artist:</label>
        <select
          value={artist}
          onChange={(e) => onArtistChange(e.target.value)}
          className="w-full p-2 mb-4 border-2 border-purple-300 rounded-xl"
        >
          <option>Lisa Blackpink</option>
          <option>Justin Bieber</option>
          <option>Selena Gomez</option>
          <option>Jungkook BTS</option>
        </select>
  
        <label className="block text-purple-700 font-semibold mb-1">Select Style:</label>
        <select
          value={style}
          onChange={(e) => onStyleChange(e.target.value)}
          className="w-full p-2 border-2 border-purple-300 rounded-xl"
        >
          <option>Vintage</option>
          <option>Retro</option>
          <option>Modern</option>
          <option>Cyberpunk</option>
        </select>
      </div>
    );
  }
  