export default function AlbumPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Album {params.id}</h1>
      <p>This is the page for Album {params.id}. Display the album content here.</p>
    </div>
  )
}

