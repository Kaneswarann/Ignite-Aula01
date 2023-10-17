
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'
import './global.css'
import sytles from "./components/App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/kaneswarann.png',
      name: 'Rebeka Palmeira',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/JuanTavares.png',
      name: 'Juan Carlos Tavares',
      role: 'IT Analyst'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={sytles.wrapper}> 
        <Sidebar />
        <main>
        {posts.map(post => {
          return (
          <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />)
        })}
        </main>
      </div>

   </div>
  )
}


