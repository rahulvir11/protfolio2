import react from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function App() {
useGSAP(()=>{
  
const container = document.querySelectorAll(".allprojcet");
const container1 = document.querySelectorAll(".project-info");

gsap.from(".main .pageone .right .img",{
    scale:.5,
    duration: 1,
    ease:"power3"
});
gsap.from(".main .pageone .left h2",{
    y:100,
    opacity:0,
    duration: .6,
    ease:"linear",
    stagger:.6
});


gsap.from([".pagetwo .info p", ".pagetwo .info .img", ".pagetwo h2"], {
    scrollTrigger: {
        trigger: ".pagetwo .info",
        start: "top 80%",
        end: "100% bottom",
        // markers: true, 
        scrub: 1, 
    },
    y: 100,      
    opacity: 0,  
    duration: 2, 
    stagger: 0.3 
});



// Loop through each container element
container.forEach((elem) => {
    const vid = elem.querySelector(".project-video");
    // Animation for the first child element
    gsap.from(elem.firstElementChild, {
        scrollTrigger: {
            trigger: elem,
            start: "top 70%",
            end: "50% bottom",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
    });
    
    // Animation for the second child element (assumed to be the one at index 1)
    gsap.from(elem.children[1], {
        scrollTrigger: {
            trigger: elem,
            start: "top 70%",
            end: "50% bottom",
            scrub: 1,
        },
        x: -100,
        opacity: 0,
        duration: 2,
    });
    
    // Animation for the video element
    gsap.from(vid, {
        scrollTrigger: {
            trigger: elem,
            start: "top 70%",
            end: "50% bottom",
            scrub: 2,
        },
        scale: 0,
        rotate: 360,
        opacity: 0,
        duration: 1,
    });
});

// Loop through each container1 element
container1.forEach((elem) => {
    const p = elem.querySelectorAll('p');
    const li = elem.querySelectorAll('li');
    const h3 = elem.querySelectorAll('h3');

    // Animation for <p> and <li> elements
    gsap.from([...p, ...li], { // Combine p and li NodeLists into one array
        scrollTrigger: {
            trigger: elem,
            start: "top 70%",
            end: "50% bottom",
            scrub: 1,
        },
        x: 100,
        opacity: 0,
        duration: 2,
    });

    // Animation for <h3> elements
    gsap.from(h3, {
        scrollTrigger: {
            trigger: elem,
            start: "top 70%",
            end: "50% bottom",
            scrub: 1,
        },
        x: -100,
        opacity: 0,
        duration: 2,
    });
});
})  

  return (
    <>
      <div className="main">
        <section className="pageone">
            <aside className="right">
                <img className="img" src="/images/bg-image.png" alt=""/>
            </aside>

            <aside className="left">
                <h2>i am <span className="text-orange">rahul</span>,</h2>
                <h2><span className="underline"> full stack developer</span></h2>
            </aside>
            <div className="custom-shape-divider-bottom-1724080202">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25" className="shape-fill"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5" className="shape-fill"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        className="shape-fill"></path>
                </svg>
            </div>

        </section>

         {/* about scection  */}
        <section className="pagetwo">
            <h2><span className="underline">more about me</span></h2>
            <div className="info">
              <p>My name is <span className="text-yellow">Rahul kumar mandal</span> from Bihar,<br></br>I am a full-stackdeveloper with two years of experience specializing in building web applications. My expertise includes working with React.js for the frontend and Tailwind CSS for styling. On the backend, I utilize Node.js and Express to create efficient server-side logic and manage data with MongoDB. <br></br> I am also proficient in designing and implementing RESTful APIs. Additionally, I use Next.js as a framework to enhance my applications, ensuring they are scalable and performant.!</p>
                <img className="img" src="/images/aboutme.png" alt="aboutme"/>
          </div>

        </section>
         {/* my first project cloud note  */}
        <section className="allprojcet cloudnote">
            <h2><span className="underline">explore my projects</span></h2>
            <h3>my first project <a href="#" target="_blank">cloud note</a></h3>
            <section className="project ">

                <aside className="project-info cloudnote-info">
                    <h3>➡️few information about cloud-note</h3>
                    <p className="mt"> This is my first project, built from October 15 to December 1, 2023. Through it, I
                        discovered my passion for software development. I chose this small project because it's an
                        effective way for beginners to learn the fundamentals of front-end, back-end, and database
                        development. It's a full-stack application using the MERN stack, which helped me solidify my
                        skills and understanding of these technologies </p>

                    <h3 className="mt">➡️key feature </h3>
                    <ul>
                        <li>Credentials login and signup</li>
                        <li>all button are clickable and working</li>
                        <li>fast response and notification</li>
                        <li>search note with heading</li>

                    </ul>
                    <h3 className="mt">➡️use technology to build</h3>
                    <ul>
                        <li>html</li>
                        <li>css</li>
                        <li>js</li>
                        <li>gsap</li>
                        <li>react js</li>
                        <li>node js</li>
                        <li>express js</li>
                    </ul>
                </aside>
                <aside className="project-video cloudnote-video">
                    <video src="/vidoes/cloudNoute.mp4" autoPlay muted loop></video>
                </aside>

            </section>
            <section className="project-images">
                <div className="box bg">
                    <h3>home page</h3>
                    <img src="/images/home-page-cloud-note.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>notes page</h3>
                    <img src="/images/notes-page.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>add note page</h3>
                    <img src="/images/add-note.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>profile box </h3>
                    <img src="/images/profile-cloudenote.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>edit profile page</h3>
                    <img src="/images/profile-updatepage-cloudnote.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>read and update box</h3>
                    <img src="/images/update-note-page.jpg" alt="home"/>
                </div>
            </section>
        </section>
        {/* <!-- my secound project e-commerce --> */}
        <section className="allprojcet ecommerce ">
            <h2></h2>
            <h3>my secound project <a href="#" target="_blank"> e-commerce</a></h3>
            <section className="project row">
                <aside className="project-info cloudnote-info ecommerce-info">
                    <h3>➡️few information about e-commerce</h3>
                    <p className="mt"> This is my secound project, built from February 2 to April 16, 2024. I chose this big
                        project because it's an effective way to learn the more fundamentals of front-end, back-end,
                        API, and database development. It's a full-stack application using the MERN stack, which helped
                        me solidify my skills and understanding of these technologies </p>

                    <h3 className="mt">➡️key feature </h3>
                    <ul>
                        <li>Credentials login and signup</li>
                        <li>all button are clickable and working</li>
                        <li>fast response and notification</li>
                        <li>admin panal and graph representation , react-table</li>
                    </ul>
                    <h3 className="mt">➡️use technology to build</h3>
                    <ul>
                        <li>react js</li>
                        <li>node js and express js </li>
                        <li>html</li>
                        <li>css and tailwinCss</li>
                        <li>js</li>
                        <li>rest full API</li>
                        <li>mongoDB</li>
                    </ul>
                </aside>
                <aside className="project-video cloudnote-video ecommerce-video">
                    <video src="/vidoes/ecommerce.mp4" autoPlay muted loop></video>
                </aside>

            </section>
            <section className="project-images">
                <div className="box bg1">
                    <h3>home page</h3>
                    <img src="/images/ecommerce/home.jpg" alt="home"/>
                </div>
                <div className="box bg1">
                    <h3>bia chart </h3>
                    <img src="/images/ecommerce/barchart.jpg" alt="home"/>
                </div>
                <div className="box bg1">
                    <h3>update product page</h3>
                    <img src="/images/ecommerce/manageProduct.jpg" alt="home"/>
                </div>
                <div className="box bg1">
                    <h3>graphes page</h3>
                    <img src="/images/ecommerce/linechart.jpg" alt="home"/>
                </div>
                <div className="box bg1">
                    <h3>admin desboard page</h3>
                    <img src="/images/ecommerce/adminDesboard.jpg" alt="home"/>
                </div>
                <div className="box bg1">
                    <h3>user list & product list with manage button</h3>
                    <img src="/images/ecommerce/userlist.jpg" alt="home"/>
                </div>
            </section>
        </section>
        {/* <!-- my third project collage canteen --> */}
        <section className="allprojcet canteen">
            <h2></h2>
            <h3>my third project <a href="#" target="_blank">collage canteen</a></h3>
            <section className="project ">

                <aside className="project-info cloudnote-info canteen-info">
                    <h3>➡️few information about canteen</h3>
                    <p className="mt"> This is my third project, built from June 1 to August 3, 2024. Through it,
                        I chose this project because it's an effective way for beginners to learn the fundamentals of
                        front-end, back-end, and database development. It's a full-stack application using the MERN
                        stack, which helped me solidify my skills and understanding of these technologies </p>

                    <h3 className="mt">➡️key feature </h3>
                    <ul>
                        <li>Credentials login and signup</li>
                        <li>all button are clickable and working</li>
                        <li>fast response and notification</li>
                        <li>admin panal and graph representation , react-table</li>
                        <li>shorting product by price and avaible</li>
                    </ul>
                    <h3 className="mt">➡️use technology to build</h3>
                    <ul>
                        <li>next.js as a framwork</li>
                        <li>module css and tailwinCss</li>
                        <li>rest full API</li>
                        <li>mongoDB</li>
                    </ul>
                </aside>
                <aside className="project-video cloudnote-video canteen-video">
                    <video autoPlay muted loop src="/vidoes/canteen.mp4"></video>
                </aside>

            </section>
            <section className="project-images">
                <div className="box bg">
                    <h3>home page</h3>
                    <img src="/images/canteen/home.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>add product page</h3>
                    <img src="/images/canteen/addItems.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>update product page</h3>
                    <img src="/images/canteen/updateItem.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>contact page</h3>
                    <img src="/images/canteen/contactpage.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>login and signup page</h3>
                    <img src="/images/canteen/login.jpg" alt="home"/>
                </div>
                <div className="box bg">
                    <h3>send message </h3>
                    <img src="/images/canteen/sendMessage.jpg" alt="home"/>
                </div>
            </section>
        </section>
        {/* <!-- other project --> */}
        <section className="allprojcet">
            <h2></h2>
            <h3> <span className="underline">other (clone or youtube) project</span></h3>
            <section className="project-images">
                <div className="box2 bg">
                    <h3 className="pl font-s">Tic-Tac-Toe</h3>
                    <video src=""></video>
                </div>
                <div className="box2 bg1">
                    <h3 className="pl font-s">Instagram clone |node js, express js and ejs as a view engin</h3>

                    <video src=""></video>
                </div>
                <div className="box2 bg font-s">
                    <h3 className="pl ">Duo-studio.co clone</h3>
                    <video src=""></video>
                </div>
                <div className="box2 bg1 font-s">
                    <h3 className="pl ">Awward Ochi | react.js</h3>
                    <video src=""></video>
                </div>
                <div className="box2 bg font-s">
                    <h3 className="pl ">realtime video and chart application</h3>
                    <video src=""></video>
                </div>
                <div className="box2 bg1">
                    <h3 className="pl font-s">music player</h3>
                    <video src="/vidoes/cloudNoute.mp4" muted loop autoPlay></video>
                </div>
            </section>
        </section>
        <footer>
            <h1 className="underline2">thank you for visting my protofolio</h1>
        </footer>
      </div>
    </>
  )
}

export default App
