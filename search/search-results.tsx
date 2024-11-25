'use client'

import { useSearchParams } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

// Mock data for search results
const searchResults = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', type: 'song' },
  { id: 2, title: 'Album 1', artist: 'Artist 2', type: 'album' },
  { id: 3, title: 'Playlist 1', creator: 'User 1', type: 'playlist' },
  // ... more results
]

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  // In a real app, you'd use the query to fetch results from an API
  const results = query
    ? searchResults.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.artist && item.artist.toLowerCase().includes(query.toLowerCase())) ||
        (item.creator && item.creator.toLowerCase().includes(query.toLowerCase()))
      )
    : []

  return (
    <>
      {query && <h2 className="text-xl font-semibold mb-4">Results for "{query}"</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${item.title}`}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-auto rounded-md mb-2"
              />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.type === 'playlist' ? item.creator : item.artist}
              </p>
              <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {query && results.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No results found</p>
      )}
    </>
  )
}

