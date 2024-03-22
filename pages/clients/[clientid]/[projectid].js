import Link from 'next/link';
import { useRouter } from 'next/router';
export default function ClientProjectPage() {
  const {query, pathname} = useRouter();

  return <div>
    <h1>Client Project: { query.projectid }</h1>
    <p>{pathname}</p>
    <p><Link href={{
      pathname: `/clients/[clientid]`,
      query: {
        clientid: query.clientid
      }
    }}>Back to client { query.clientid } projects</Link></p>
  </div>;
}