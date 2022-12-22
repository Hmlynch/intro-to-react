import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post'
import { DataContext } from '../contexts/DataProvider';


export default function BlogSingle() {
    const [post, setPost] = useState({})
    const { id, uid } = useParams()
    const { getPost } = useContext(DataContext)

    useEffect(() => {
        async function handleGetPost() {
            const data = await getPost(uid, id)
            setPost(data)
        }
        handleGetPost()
    }, [id])

    return (
        <div className="post">
            Post Singles: {id}
            <Post post={post}/>
        </div>
    )
}