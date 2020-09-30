import React from 'react'
import BlogBody from './BlogBody'
import Header from './Header'
import LatestPost from './LatestPost'

export default function Blog() {
    return (
        <div>
            <Header/>
            <BlogBody/>
            <LatestPost/>
        </div>
    )
}
