const Blog = ({posts}) => {
  return (
    <div>
      {posts.map((post) => <Post key={post.id} post={post}/>)}
    </div>
  )
}