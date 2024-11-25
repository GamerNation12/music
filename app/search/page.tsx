import { Suspense } from 'react'
import SearchResults from './search-results'

export default function SearchPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}

