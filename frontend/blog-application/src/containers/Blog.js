import React from 'react'
import BlogBody from '../components/BlogBody'
import Header from '../components/Header'
import LatestPost from '../components/LatestPost'

export default function Blog() {
    return (
        <div>
            <Header/>
            <BlogBody/>
            <LatestPost/>
        </div>
    )
}
