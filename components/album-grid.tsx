'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

const albums = [
  { title: 'Album 1', artist: 'Artist 1' },
  { title: 'Album 2', artist: 'Artist 2' },
  { title: 'Album 3', artist: 'Artist 3' },
  { title: 'Album 4', artist: 'Artist 4' },
  { title: 'Album 5', artist: 'Artist 5' },
  { title: 'Album 6', artist: 'Artist 6' },
  { title: 'Album 7', artist: 'Artist 7' },
  { title: 'Album 8', artist: 'Artist 8' },
]

export default function AlbumGrid() {
  const router = useRouter()

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Featured Albums</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.map((album, index) => (
          <Card key={index} className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => router.push(`/album/${index + 1}`)}>
            <CardContent className="p-4">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${album.title}`}
                alt={album.title}
                width={200}
                height={200}
                className="w-full h-auto rounded-md mb-2"
              />
              <h3 className="font-semibold">{album.title}</h3>
              <p className="text-sm text-muted-foreground">{album.artist}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

