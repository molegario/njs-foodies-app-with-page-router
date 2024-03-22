import Link from "next/link";
import { useRouter } from "next/router";
import { clients } from "../index";

export default function ClientPage() {
  const { query, pathname, push:routerpush } = useRouter();
  const Client = clients && clients.find(itm=>{
    return itm.clientid === query.clientid;
  });

  function handleBtnClick() {
    if(
      Client && 
      Client.projects && 
      Client.projects.length > 0      
    ) {
      routerpush({
        pathname: `/clients/[clientid]/[projectid]`,
        query: {
          clientid: query.clientid,
          projectid: Client.projects[0].projectid
        }
      });
    }
  }

  return <div>
    <h1>Client Page</h1>
    <p>{ query.clientid }</p>
    <h2>Projects of client:: { query.clientid }</h2>
    {
      Client && 
      Client.projects && 
      Client.projects.length > 0 && <>
        <button onClick={handleBtnClick}>Load First Project</button>
        <ul>
          {
            Client.projects.map(
              project=><li key={`${query.clientid}__${project.projectid}`}>
                <Link href={{
                  pathname: `/clients/[clientid]/[projectid]`,
                  query: {
                    clientid: query.clientid,
                    projectid: project.projectid,
                  },
                }} >{project.name}</Link>      
              </li>
            )
          }
        </ul>      
      </>
    }
    <p><Link href="/clients">Back to clients</Link></p>
    <p>{ pathname }</p>
  </div>
}