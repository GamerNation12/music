export default function PlaylistPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Playlist {params.id}</h1>
      <p>This is the page for Playlist {params.id}. Display the playlist content here.</p>
    </div>
  )
}

