import Image from 'next/image'
import Introduction from './components/introductionSection'
import { NavBar } from './components/navBar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-6">
          <Introduction/>
      </div>
    </main>
  )
}
