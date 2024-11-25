'use client'

import { Home, Search, Library, PlusCircle, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from 'next/navigation'

export default function Sidebar() {
  const router = useRouter()

  return (
    <div className="w-64 bg-card text-card-foreground p-4 flex flex-col h-full">
      <div className="space-y-4">
        <Button variant="ghost" className="w-full justify-start" onClick={() => router.push('/')}>
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => router.push('/search')}>
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={() => router.push('/library')}>
          <Library className="mr-2 h-4 w-4" />
          Your Library
        </Button>
      </div>
      <div className="mt-4 space-y-4">
        <Button variant="outline" className="w-full justify-start" onClick={() => alert('Create Playlist clicked')}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Playlist
        </Button>
        <Button variant="outline" className="w-full justify-start" onClick={() => router.push('/liked-songs')}>
          <Heart className="mr-2 h-4 w-4" />
          Liked Songs
        </Button>
      </div>
      <ScrollArea className="flex-1 mt-4">
        <div className="space-y-2">
          {Array.from({length: 50}, (_, i) => (
            <Button key={i} variant="ghost" className="w-full justify-start" onClick={() => router.push(`/playlist/${i + 1}`)}>
              Playlist {i + 1}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

