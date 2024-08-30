'use client';

import { Radius } from 'lucide-react';

const series = [
  { name: 'nazwa', url: 'https://dlhd.sx/embed/stream-259.php' },
  { name: 'nazwa', url: 'https://dlhd.sx/embed/stream-48.php' },
  { name: 'nazwa', url: 'https://d.daddylivehd.sx/embed/stream-71.php' },
  { name: 'nazwa', url: 'https://dlhd.sx/embed/stream-259.php' },
  { name: 'nazwa', url: 'https://dlhd.sx/embed/stream-48.php' },
  { name: 'nazwa', url: 'https://d.daddylivehd.sx/embed/stream-71.php' },
  { name: 'nazwa', url: 'https://dlhd.sx/embed/stream-259.php' },
  { name: 'nazwa', url: 'https://dlhd.sx/embed/stream-48.php' },
  { name: 'nazwa', url: 'https://d.daddylivehd.sx/embed/stream-71.php' }
];

export default function Telewizjon() {
  return (
    <div className=" px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {series.map(show => (
        <div key={show.url} className="aspect-w-16 aspect-h-9">
          <h2 className="absolute top-0 left-0 bg-black bg-opacity-50 text-white text-xs font-semibold p-2 z-10">{show.name}</h2>
          <div className="flex">
            <iframe
              src={show.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
              loading="lazy"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
