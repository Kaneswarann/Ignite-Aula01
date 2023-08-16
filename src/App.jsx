
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'
import './global.css'
import sytles from "./components/App.module.css";



export function App() {

  return (
    <div>
      <Header />
      <div className={sytles.wrapper}> 
        <Sidebar />
        <main>
        <Post />
        </main>
      </div>

   </div>
  )
}


