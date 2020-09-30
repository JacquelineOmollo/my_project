import React from "react";
import * as emailjs from "emailjs-com";

function Home() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
             });
             e.target.reset();
    }

    return (
        <div>
            <div >
                <div>
                        <header>
                            <div className="logo">
                            <a href="index.html" className="name">
                                JO
                            </a>
                            </div>
                            <a href="index.html" className="name"></a>
                            <div className="header-menu">
                            <a href="index.html" className="name"></a>
                            <a href="index.html">Home</a>
                            <a href="index.html#services-section">About</a>
                            <a href="index.html#portfolio-section">Portfolio</a>
                            <a href="index.html#experience-section">Experience</a>
                            <a href="index.html#testimonials-section">Contact</a>
                            </div>
                            <div className="menu-btn">
                            <i className="fas fa-bars" />
                            </div>
                        </header>
                        <div className="mobile-menu">
                            <a href="index.html">Home</a>
                            <a href="index.html#services-section">About</a>
                            <a href="index.html#portfolio-section">Portfolio</a>
                            <a href="index.html#experience-section">Experience</a>
                            <a href="index.html#testimonials-section">Contact</a>
                        </div>
                        <section id="top">
                            <div className="container">
                            <div className="info">
                                <div className="blue-square" />
                                <h1>Jacqueline Omollo</h1>
                                <p>Software Engineer</p>
                                <a href="index.html#portfolio-section">Latest Works</a>
                            </div>
                            <div className="img">
                                <div className="background-img"></div>
                            </div>
                            </div>
                        </section>
                        <section id="services-section">
                            <div className="container">
                            <div className="title">
                                <div className="circle" />
                                <h1>About</h1>
                            </div>
                            <div className="services-container">
                                <div className="box blue">
                                <i className="fas fa-trophy" />
                                <h5>Learning Ability</h5>
                                <p>
                                    Originally I taught my self the basics of programming almost two
                                    years ago with a strong desire to transform my career into a
                                    Software Engineer. Quickly I came to a conclusion that I need to be
                                    among a group of like minded people that I can work with and learn
                                    along side of them. This is where my journey started with Lambda
                                    School. Team Leader of eight student to get
                                </p>
                                </div>
                                <div className="box red">
                                <i className="fas fa-plane" />
                                <h5>Best Qualities</h5>
                                <p>
                                    My qualities can be sum up in these seven words: Drive, Willpower,
                                    Passion, Integrity,Connection and Communication. I value myself in
                                    having the drive to learn new things and having the will and passion
                                    to push myself to grow in my craft a little more each day. Thrive
                                    when connecting with people and exhibit constructive communication
                                    to come up with creative solutions. Meanwhile, professing integrity
                                    with the community.
                                </p>
                                </div>
                                <div className="box yellow">
                                <i className="fas fa-money-check-alt" />
                                <h5>Leadership Qualities</h5>
                                <p>
                                    Team Leader in a internship position mentoring eight students.able
                                    to be honest when I don't know something and make myself accountable
                                    to finding out the answers to questions I don't know. Coming up with
                                    creative ways to make students understand technical concepts.
                                </p>
                                </div>
                            </div>
                            </div>
                        </section>
                        <section id="portfolio-section">
                            <div className="container">
                            <div className="title">
                                <div className="square" />
                                <h1>portfolio</h1>
                            </div>
                            <div className="portfolio-container">
                                <a href="./portfolio/HairCare.html " className="box image1">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">Hair Care Project</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="./portfolio/RickM.html" className="box image2">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">Rick &amp; Morty React App</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="./portfolio/We_Work_Remotely.html" className="box image3">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">We Work Remotely</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="portfoli/#" className="box image4">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">Real Estate Full-Stack Project</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="portfoli/#" className="box image5">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">Node.js Backend Project</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="portfoli/#" className="box image6">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">GitHub Friends</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="portfoli/#" className="box image7">
                                <div className="image">
                                    <div className="hover-bg">
                                    <div className="title">
                                        <div className="text">Ecommerce</div>
                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </div>
                        </section>
                        <section id="experience-section">
                            <div className="container">
                            <div className="large-title">Experience</div>
                            <div className="experience-container">
                                <div className="large-icons">
                                <div className="square">
                                    <div className="blue-box">Teaching</div>
                                </div>
                                <div className="circle">
                                    <div className="white-box">Learning</div>
                                </div>
                                <div className="triangle">
                                    <div className="triangle-box">
                                    <div className="text">Collab</div>
                                    </div>
                                </div>
                                </div>
                                <div className="info">
                                <div className="info-box">
                                    <h4>Lambda School - Team Leader</h4>
                                    <span className="date">September 2019 - present</span>
                                    <p>
                                    Provide daily feedback and issue resolution of all curriculum
                                    questions. <br />
                                    Deliver one-on-one feedback and code review on a daily basis.{" "}
                                    <br />
                                    Mentor students on how to learn effectively and solve programming
                                    problems.
                                    <br />
                                    Review student code and deliver feedback on areas of improvement.{" "}
                                    <br />
                                    Lead daily stand-up meetings to build camaraderie, facilitate the
                                    sharing of ideas and work-progress, and provide guidance for that
                                    week’s study material. <br />
                                    Act as Project Lead for a national and international teams during
                                    build week.
                                    </p>
                                </div>

                                </div>
                            </div>
                            </div>
                        </section>
                        <section id="testimonials-section">
                            <div className="container">
                            <div className="title">
                                <div className="square" />
                                <h1>Contact</h1>
                            </div>
                            <form onSubmit={sendEmail}>
                                <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputName1"></label>
                                    <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="form-control"
                                    id="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputemail1"></label>
                                    <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    id="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1"></label>
                                    <textarea
                                    type="text"
                                    name="message"
                                    placeholder="Message"
                                    className="form-control"
                                    id="message"
                                    rows={3}
                                    defaultValue={""}
                                    />
                                    <button name="submit" className="btn btn-primary">
                                    Submit
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </section>
                        <footer>
                            <div className="social-container">
                            <a href="https://github.com/JacquelineOmollo">
                                <i className="fab fa-github" />
                            </a>
                            <a href="http://www.linkedin.com/JacquelineOmollo">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href="http://www.twitter.com/jackieomollo">
                                <i className="fab fa-twitter" />
                            </a>
                            </div>
                            <h5>Jacqueline Omollo</h5>
                            <h6>Software Engineer</h6>
                        </footer>
                        </div>

            </div>
        </div>
    )
}

export default Home;