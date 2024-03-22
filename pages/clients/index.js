import Link from "next/link";

export const clients = [
  {
    clientid: 'company-1',
    name: 'Fredzilla',
    projects: [
      {
        projectid: 'proj-1',
        name: 'Project 01'
      },
      {
        projectid: 'proj-2',
        name: 'Project 02'
      },
      {
        projectid: 'proj-3',
        name: 'Project 03'
      },
      {
        projectid: 'proj-4',
        name: 'Project 04'
      },
      {
        projectid: 'proj-5',
        name: 'Project 05'
      },
    ]
  },
  {
    clientid: 'company-2',
    name: 'YouBoobs',
    projects: [
      {
        projectid: 'proj-1',
        name: 'Project 01'
      },
      {
        projectid: 'proj-2',
        name: 'Project 02'
      },
      {
        projectid: 'proj-3',
        name: 'Project 03'
      },
      {
        projectid: 'proj-4',
        name: 'Project 04'
      },
      {
        projectid: 'proj-5',
        name: 'Project 05'
      },
    ]

  },
  {
    clientid: 'company-3',
    name: 'Bananas Inc',
    projects: [
      {
        projectid: 'proj-1',
        name: 'Project 01'
      },
      {
        projectid: 'proj-2',
        name: 'Project 02'
      },
      {
        projectid: 'proj-3',
        name: 'Project 03'
      },
      {
        projectid: 'proj-4',
        name: 'Project 04'
      },
      {
        projectid: 'proj-5',
        name: 'Project 05'
      },
    ]
  },
  {
    clientid: 'company-4',
    name: 'Bones and Boothe',
    projects: [
      {
        projectid: 'proj-1',
        name: 'Project 01'
      },
      {
        projectid: 'proj-2',
        name: 'Project 02'
      },
      {
        projectid: 'proj-3',
        name: 'Project 03'
      },
      {
        projectid: 'proj-4',
        name: 'Project 04'
      },
      {
        projectid: 'proj-5',
        name: 'Project 05'
      },
    ]
  },
  {
    clientid: 'company-5',
    name: 'Mikes Marbles',
    projects: [
      {
        projectid: 'proj-1',
        name: 'Project 01'
      },
      {
        projectid: 'proj-2',
        name: 'Project 02'
      },
      {
        projectid: 'proj-3',
        name: 'Project 03'
      },
      {
        projectid: 'proj-4',
        name: 'Project 04'
      },
      {
        projectid: 'proj-5',
        name: 'Project 05'
      },
    ]

  },
];

export default function ClientsPage() {
  return <div>
    <h1>The Clients List Page</h1>
    <ul>
      {
        clients.map((itm)=>{
          return <li key={itm.clientid}>
            <Link href={{
              pathname: "/clients/[clientid]",
              query: { clientid: itm.clientid }
            }}>{itm.name}</Link>
          </li>
        })
      }
    </ul>
    <p><Link href="/">Back Home</Link></p>
  </div>;
}