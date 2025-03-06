import React, { createContext, useContext, useState, useEffect } from 'react';
import flip from "../assets/img/flip.png";
import nskshopify from "../assets/img/nskshopify.png";
import moviesnow from "../assets/img/moviesnow.png";
import pingpal from "../assets/img/pingpal.png";
import reset from "../assets/img/reset.webp";
import trabook from "../assets/img/trabook.png";
import edutech from "../assets/img/edutech.png";
import finance from "../assets/img/finance.png";
import shopify from "../assets/img/shopify.png";
import recipie from "../assets/img/recipie.png";
import auth from    "../assets/img/auth.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JAVA from '../assets/img/java.png';
import HTML from '../assets/img/HTML.png'
import CSS from '../assets/img/CSS.png'
import JS from '../assets/img/JS.png'
import render from '../assets/img/render.jpeg';
import SQL from '../assets/img/SQL.png'
import MONGODB from '../assets/img/MONGODB.png'
import aws from '../assets/img/aws.png';
import TAILWIND from '../assets/img/TAILWINDCSS.png'
import REACT from '../assets/img/REACT.png'
import jenkins from '../assets/img/jenkins.jpg'
import NEXT_JS from '../assets/img/NEXTJS.png'
import PYTHON from '../assets/img/PYTHON.png'
import NODEJS from '../assets/img/NODEJS.png'
import EXPRESS_JS from '../assets/img/EXPRESSJS.png'
import REDUX from '../assets/img/REDUX.png'
import POSTMAN from '../assets/img/POSTMAN.png'
import ANGULAR from '../assets/img/ANGULAR.png'
import vscode from '../assets/img/vscode.jpg'
import NETLIFY from '../assets/img/NETLIFY.png'
import github from '../assets/img/github.png';
import microsoft from '../assets/img/microsoft.png';
import google from '../assets/img/google.webp';


export const userContext = createContext(null);

//      data pass to all components
export const useUserContext = () => {
    const { activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate,  MERNprojects, JsGames, skillsLists, scrollPercentage, setScrollPercentage } = useContext(userContext);

    return { activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate,  MERNprojects, JsGames, skillsLists, scrollPercentage, setScrollPercentage };
};


export default function UserContextProvider({ children }) {

    //  Scroll functions
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    //  Scroll
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0 || window.scrollY < 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    //  Scroll
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    // banner page functions
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["AIML Engineer", "FullStack Developer", "Backend Developer", "Software Engineer", "Web Developer"];
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])


    //Skills page functions
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    //MERN page functions
    const MERNprojects = [
        
        { title: "trabook", link: "https://trabooknsk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/Landing-Page", imgUrl: trabook},
        { title: "Edutech", link: "https://askmeidentitynsk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/LANDING-PAGE--TAILWIND-CSS-", imgUrl: edutech},
        { title: "e-finance", link: "https://financecalculatornsk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/Finance-Calculator", imgUrl: finance},
        { title: "flip- game", link: "https://flipmatchgamensk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/Flip-Match-DOM-", imgUrl: flip},
        { title: "nskshopify", link: "https://nskshopify.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/ReactHooks", imgUrl: shopify },
        { title: "MoviesNow", link: "https://moviesnownsk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/Moviesnow-", imgUrl: moviesnow },
    ];

    //project page functions
    const projects = [
        { title: "nskshopify", link: "https://nsk-comerce.onrender.com/", gitHub: "https://github.com/Sanjay-Kumar-R-A/node-js-2", imgUrl: nskshopify },
        { title: "AuthWebApp", link: "https://password-rest-i89s.onrender.com/", gitHub: "https://github.com/Sanjay-Kumar-R-A/reset-password", imgUrl: auth },
        { title: "PingPal", link: "https://backendpingpal.onrender.com/", gitHub: "https://github.com/Sanjay-Kumar-R-A/BackendPingPal", imgUrl: pingpal},
        { title: "RecipieApp", link: "https://recipewebapp-ivrt.onrender.com/", gitHub: "https://github.com/Sanjay-Kumar-R-A/Recipe-app", imgUrl: recipie },
        
    ];

    // JS Games
    const JsGames = [
        { title: "PingPal", link: "https://pingpalnsk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/FrontendPingPal", imgUrl: pingpal },
        { title: "MoviesNow", link: "https://moviesnownsk.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/Moviesnow-", imgUrl: moviesnow },
        { title: "PasswordReset WebApp", link: "https://authwebapp.netlify.app/", gitHub: "https://github.com/Sanjay-Kumar-R-A/reset-password--Frontend-", imgUrl: reset },
    ];

    //contact page functions
    const formInitialDetails = { Name: '', email: '', phone: '', message: '' }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    //  Contact form
    const onFormUpdate = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value })
    }

    //  Contact form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        axios.defaults.withCredentials = true;
        await axios.post('http://localhost:5000/api/inquiry/contact', { ...formDetails })
            .then(res => {
                console.log(res.data);
                if (res.data.code === 200) {
                    setStatus({ success: true, message: 'Message sent successfully' });
                } else {
                    setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                }
            }).catch(err => console.log(err))
        setButtonText("Sent");
        toast.success("Contact form successfully saved!")
        setFormDetails(formInitialDetails);
        setTimeout(() => {
            setStatus({})
        }, 2000)
    }

    //  Skills lists
    const skillsLists =
        [
            { src: JAVA, now: 90, label: "JAVA" },
            { src: JS, now: 90, label: "Javascript" },
            { src: PYTHON, now: 60, label: "Python" },
            { src: MONGODB, now: 90, label: "MongoDB" },
            { src: SQL, now: 90, label: "MySQL" },
            { src: HTML, now: 90, label: "HTML" },
            { src: CSS, now: 90, label: "CSS" },
            { src: TAILWIND, now: 90, label: "Tailwind css" },
            { src: REACT, now: 90, label: "React" },
            { src: NEXT_JS, now: 90, label: "NextJs" },
            { src: NODEJS, now: 90, label: "NodeJs" },
            { src: EXPRESS_JS, now: 80, label: "ExpressJs" },
            { src: REDUX, now: 90, label: "Redux" },
            { src: ANGULAR, now: 60, label: "Angular" },
            { src: vscode, now: 60, label: "Visual Studio Code" },
            { src: github, now: 60, label: "Github" },
            { src: jenkins, now: 60, label: "Jenkins" },
            { src: POSTMAN, now: 90, label: "Postman" },
            { src:aws, now: 90, label: "AWS" },
            { src: NETLIFY, now: 80, label: "Netlify" },
            { src: render, now: 90, label: "Render" },
            { src: microsoft, now: 90, label: "Microsoft Workspace" },
            { src: google, now: 90, label: "Google Workspace" },

           
        ]

    //  Scroll-indicator
    const [scrollPercentage, setScrollPercentage] = useState(0)

    //  Scroll
    function handleScrollPercentage() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)
        return () => {
            window.removeEventListener("scroll", () => { })
        }
    }, [])
    // eslint-disable-next-line react-hooks/exhaustive-deps


    return (
        <userContext.Provider value={{ activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate,  MERNprojects, JsGames, skillsLists, handleScrollPercentage, setScrollPercentage, scrollPercentage }}>
            {children}
        </userContext.Provider>
    );
};

