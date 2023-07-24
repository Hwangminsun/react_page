function Travel() {
  return(
    <>
    <SkipComponent />
    <Header />
    <WrapComponent />
    <Footer />
    </>
  )
}

// Skip
function SkipComponent() {

  return (
    <>
      <ul className="skip">
        <li><a href="#container">내용바로가기</a></li>
      </ul>
    </>
  );
}


// Header
function Header() {

  return (
    <>

      <header>
        <div className="slogan">
            <h2>LOREM IPSUM</h2>
            <h1>Travel</h1>
            <p>The inspirational adventures around the world</p>
        </div>
      </header>

    </>
  );
}



// Wrap
function WrapComponent() {

  return (
    <>

      <MainComponent />

    </>
  );
}



// main
function MainComponent() {

    return (
      <>
      
      <main id="container">
        
        <section className="about_us shadow">
            <h2 className="main-tt first">About me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
            </p>
            <p>
                <a href="" className="more btn">Read more</a>
            </p>
            <img src="images/about_me.jpg" alt="photo1" className="shadow" />
        </section>

        <section className="latest_articles">
            <h2 className="main-tt">Latest Articles</h2>
            <ul className="clearfix">
                <li>
                    <img src="images/latest_articles_01.png" alt="photo2" />
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </p>
                    <a href="">read more <img src="images/more_arrow.png" alt="arrow" /></a>
                </li>
                <li>
                    <img src="images/latest_articles_02.png" alt="photo3" />
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </p>
                    <a href="">read more <img src="images/more_arrow.png" alt="arrow" /></a>
                </li>
                <li>
                    <img src="images/latest_articles_03.png" alt="photo4" />
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                    </p>
                    <a href="">read more <img src="images/more_arrow.png" alt="arrow" /></a>
                </li>
            </ul>
        </section>
        
        <section className="contact shadow">
            <img src="images/contact.jpg" alt="photo5" className="shadow" />
            <form action="">
                <h2 className="main-tt">Contact</h2>
                <div className="field clearfix">
                    <label for="username">name</label>
                    <input type="text" id="username" placeholder="Your name" />
                    <label for="useremail">email</label>
                    <input type="text" id="useremail" placeholder="Your email" />
                </div>
                <div className="field">
                    <label for="message">Message</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <button className="btn">Send Message</button>
            </form>
        </section>
    </main>

      </>
    );
}

function Footer() {

  return (
    <>
    
      <footer>
        <ul class="sns_links clearfix">
            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i className="fab fa-twitter"></i></a></li>
            <li><a href=""><i className="fab fa-instagram"></i></a></li>
            <li><a href=""><i className="fab fa-instagram"></i></a></li>
        </ul>
      </footer>

    </>
  );
}

ReactDOM.render(
  <Travel/>,
  document.getElementById("root")
);