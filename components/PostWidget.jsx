import React from 'react'
import {useEffect , useState} from 'react'
import moment from 'moment';
import Link from 'next/link'
import Categories from './Categories';
import {getSimilarposts,getRecentPosts} from '../services/index';




const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
  
    useEffect(() => {
      if (slug) {
        getSimilarPosts(categories, slug).then((result) => {
          setRelatedPosts(result);
        });
      } else {
        getRecentPosts().then((result) => {
          setRelatedPosts(result);
        });
      }
    }, [slug]);
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
    <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
  {relatedPosts.map((post) =>(
    <div className='flex items-center w-full' key={post.title}>
<div className='w-16 flex-none'>
<img 
    alt={post.title}
    height="60px"
    width="60px"
    className="align-middle rounded-full p-3"
    src={ post.featuredImage.url }
    
    />
    
</div>
<div className=' flex-grow ml-4'>
    <p className='font-xs text-gray-500'>
    {moment(post.createdAt).format('MMM DD YYYY')}
    </p>
    <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
        {post.title}
    </Link>
</div>
    </div>
  )
  )}
  </div>
  )
}

export default PostWidget
