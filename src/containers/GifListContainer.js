import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default function GifListContainer() {
    return (
        <div>
            <GifSearch />
            <GifList />
        </div>
    )
}