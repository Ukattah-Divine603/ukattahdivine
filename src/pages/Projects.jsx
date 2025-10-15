import ProCard from "../components/ProCard";
import graph from "/public/images/graphty.png";
import picky from "/public/images/picky.png";
import savery from "/public/images/savery.png";
import todo from "/public/images/todo.png";
import discord from "/public/images/discord-clone.png";
import product from "/public/images/product-showcase.png";
import calculator from "/public/images/calculator.png";
import portfolio from "/public/images/portfolio-final-version.png";
import voxscribe from "/public/images/voxscribe.jpeg";
import db from "/public/images/db.png";
import dbs from "/public/images/db-1.png";
export default function Projects() {
  return (
    <>
      <div id="projects" className="project-container">
        <h1>My Projects</h1>
        <div className="project-grid">
          <ProCard
            image={voxscribe}
            title="VOXSCRIBE"
            description="An AI-powered voice transcription web app that converts speech to text in real time, built with React.js for interactivity and a clean, responsive UI, enabling seamless audio uploads and instant text output.."
            framework="NEXT.JS | CSS"
            url="https://google.com"
          />
          <ProCard
            image={portfolio}
            title="FINAL PORTFOLIO"
            description="A dynamic personal portfolio website showcasing skills and projects, built with React.js for interactive components, alongside HTML for structure and CSS for responsive styling."
            framework="REACT.JS | HTML | CSS"
            url="https://google.com"
          />
          <ProCard
            image={dbs}
            title="DIVINEBASE SOLAR"
            description="A sleek landing page for a solar distribution company, highlighting products and services using React.js for efficient rendering, HTML for layout, and CSS for modern, eco-friendly design."
            framework="REACT.JS | HTML | CSS"
            url="https://google.com"
          />
          <ProCard
            image={picky}
            title="PICKY"
            description="An engaging ecommerce website landing page designed to promote online shopping, developed with HTML for core structure, CSS for visual appeal, and JavaScript for interactive elements like carousels."
            framework="HTML | CSS | JAVASCRIPT"
            url="https://ukattah-divine603.github.io/Picky/"
          />
          <ProCard
            image={savery}
            title="SAVERY HAVEN"
            description="A welcoming restaurant website featuring menus, reservations, and ambiance visuals, crafted using HTML for content organization, CSS for appetizing layouts, and JavaScript for dynamic features like image sliders"
            framework="HTML | CSS | JAVASCRIPT"
            url="https://ukattah-divine603.github.io/SAVERY-HAVEN/"
          />
          <ProCard
            image={graph}
            title="GRAPHTY"
            description="A professional medical website landing page focused on healthcare services and patient info, implemented with HTML for accessibility, CSS for clean typography, and JavaScript for smooth navigation."
            framework="HTML | CSS | JAVASCRIPT"
            url="https://ukattah-divine603.github.io/Graphty/"
          />
          <ProCard
            image={todo}
            title="TO-DO LIST"
            description="A simple yet functional task management app allowing users to add, edit, and delete items, built with HTML for the interface, CSS for a minimalist design, and JavaScript for real-time updates."
            framework="HTML | CSS | JAVASCRIPT"
            url="https://ukattah-divine603.github.io/ToDo-App/"
          />
          <ProCard
            image={discord}
            title="DISCORD CLONE"
            description="A custom recreation of Discord's homepage with chat previews and community features, created using HTML for semantic markup and CSS for vibrant, grid-based layouts mimicking the original's style"
            framework="HTML | CSS"
            url="https://ukattah-divine603.github.io/Discord/"
          />
          <ProCard
            image={calculator}
            title="FUNCTIONAL CALCULATOR"
            description="A fully operational web-based calculator supporting basic arithmetic and advanced functions, developed with HTML for the button grid, CSS for a compact UI, and JavaScript for computation logic."
            framework="HTML | CSS | JAVASCRIPT"
            url="https://ukattah-divine603.github.io/Calculator-App/"
          />
          <ProCard
            image={db}
            title="DIVINEBASE SOLAR"
            description="A customizable WordPress template tailored for a solar distribution company, enabling easy content management, blog integration, and SEO-optimized pages for promoting renewable energy solutions."
            framework="WORDPRESS"
            url="https://mintcream-stingray-665207.hostingersite.com/"
          />
          <ProCard
            image={product}
            title="PRODUCT SHOWCASE"
            description="An interactive display page for highlighting various products with zoom and hover effects, constructed using HTML for item cards and CSS for elegant, responsive animations."
            framework="HTML | CSS"
            url="https://ukattah-divine603.github.io/Product-Showcase/"
          />
        </div>
      </div>
    </>
  );
}
