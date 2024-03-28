// App.js
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';

function App() {
    const myProps = {
        siteTitle: "Gopikrishna Pavuluri",
        headerPages: [
            { title: "Home", url: "https://gopikrishna.ai/" },
            { title: "Blog", url: "https://gopikrishna.ai/posts" }
        ],author:"Gopikrishna Pavuluri"
    };
    useEffect(() => {
        document.title = "Projects | gopikrishna.ai";
    }, []);

    return (
        <div>
            <Header {...myProps}/>
            <Projects />
            <Footer {...myProps}/>
        </div>
    );
}

export default App;
