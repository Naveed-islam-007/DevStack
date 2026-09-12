
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Stack from './components/Stack'
import type { st } from './type'
import Footer from './components/Footer'


 const stackFetch=async():Promise<st[]>=>{
    const res=await fetch('/public.json')
    const data=await res.json()
    return data
  }

function App() {

const stackPromise=stackFetch();
 

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<p className="text-center py-12">Loading stack...</p>}>
        <Stack stackPromise={stackPromise} />
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
