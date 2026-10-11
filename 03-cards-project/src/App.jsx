import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    logo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    "name": "Google",
    posted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bengaluru, India",
  },
  {
    id: 2,
    logo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
    "name": "Microsoft",
    posted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45/hour",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    "name": "Amazon",
    posted: "1 day ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India",
  },
  {
    id: 4,
    logo: "https://substackcdn.com/image/fetch/%24s_!G1lk!%2Cf_auto%2Cq_auto:good%2Cfl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    "name": "Apple",
    posted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Bengaluru, India",
  },
  {
    id: 5,
    logo: "https://www.bing.com/th/id/OIP.FByy5YxoyiTK599CeZOJzgHaHa?w=193&h=193&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=ImgAns&rm=2",
    "name": "Meta",
    posted: "4 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Remote, India",
  },
  {
    id: 6,
    logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    "name": "Netflix",
    posted: "6 days ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Remote, USA",
  },
  {
    id: 7,
    logo: "https://www.bing.com/th/id/OIP.K_wC7lAYcLvL0WGGrz461gHaDt?w=193&h=135&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=ImgAns&rm=2",
    "name": "NVIDIA",
    posted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Pune, India",
  },
  {
    id: 8,
    logo: "https://cdn.mos.cms.futurecdn.net/DtGtLda47VdS8pE2iJLbBZ.jpg",
    "name": "Adobe",
    posted: "7 days ago",
    post: "Frontend Engineer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Noida, India",
  },
  {
    id: 9,
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png",
    "name": "Salesforce",
    posted: "3 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Gurugram, India",
  },
  {
    id: 10,
    logo: "https://www.bing.com/th/id/OIP.J75aXfAnw2JdjXKwaPsumwHaEK?w=193&h=135&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.3&pid=ImgAns&rm=2",
    "name": "OpenAI",
    posted: "1 day ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Remote, USA",
  },
];
  return (
    <div>
      {jobOpenings.map(function(elem){
        return (
          <div key={elem.id}>
            <Card
              id={elem.id}
              logo={elem.logo}
              name={elem.name}
              posted={elem.posted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        )
      })}

    </div>
  )
}

export default App
