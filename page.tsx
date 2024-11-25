import Sidebar from './components/sidebar'
import Header from './components/header'
import AlbumGrid from './components/album-grid'

export default function Home() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <AlbumGrid />
      </main>
    </div>
  )
}

