import Image from "next/image";
import Navbar from '@/app/components/navbar.jsx'
import Profile from '@/app/components/profile.jsx'
import Content from '@/app/components/homeContent.jsx'
import Pseudo from '@/app/components/pseudoDiv.jsx'
import Footer from '@/app/components/footer.jsx'
export default function Home() {

  return (
    <div>
      <Navbar/>
      <Pseudo className="h-[2rem]"/>
      <Profile/>
      <Content/>
      <Footer/>
    </div>
  );
}
