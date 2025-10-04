import About from "../pages/About";
import Hero from "../pages/Hero";
import { Routes, Route } from 'react-router-dom'
import Projects from "../pages/Projects";

export default function Home() {
    return(
        <>
        <div className="home" style={{marginLeft: '250px'}}>
<Hero />
<About/>
<Projects/>

        </div>
        </>
    )
}