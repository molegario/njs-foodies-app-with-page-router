import Link from 'next/link';
import { useRouter } from 'next/router';
export default function BlogPostsPage() {
  const {
    query,
    pathname
  } = useRouter();

  // console.log("BLOGSPOST::", query);
  return <div>
    <h1>The Blogs</h1>
    <p>{query.slug ? query.slug.join('/') : null}</p>
    <p>{pathname}</p>
    <p><Link href="/">Back Home</Link></p>
  </div>;
}