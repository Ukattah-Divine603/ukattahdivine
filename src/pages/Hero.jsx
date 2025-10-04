import Frameworks from '../components/Frameworks'
function Hero() {
    return(
        <>
        <main className="hero">
<div className="black-cover">
 
    <div className="left-sed">
<p>KONICHIWA</p>
<h1>My Name Is</h1>
<h3>Ukattah Divine<br/>
A Front-End Developer</h3>
<p>Learning never ends, and I am dedicated to growing as a Front-End Developer. I have a solidfoundation in HTML, CSS, and JavaScript, and I am continuously expanding my skills. My goal is to become a top Front-End Developer and eventually transition into Full Stack development. I am passionate about building responsive, user-friendly web applications and staying current with industry trends. So Help Me God!</p>

<h4>TECH</h4>
<div className="framework-list">
<Frameworks name="HTML"/>
<Frameworks name="CSS"/>
<Frameworks name="JavaScript"/>
<Frameworks name="React"/>
<Frameworks name="Tailwind CSS"/>
<Frameworks name="Git"/>

</div>
    </div>
</div>
        </main>
        </>
    )
}

export default Hero