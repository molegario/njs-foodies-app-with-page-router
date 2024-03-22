import { useRouter } from 'next/router';

export default function PortfolioPage() {
  const {query, pathname} = useRouter();
  // console.log(
  //   "EXPOSE::",
  //   router.pathname,
  //   router.query
  // );
  return <div>
    <h1>The Portfolio Projects Page</h1>
    <p>{query.projectid}</p>
    <p>{pathname}</p>
  </div>;
}