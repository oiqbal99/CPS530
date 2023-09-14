class MainBody extends React.Component {
    render() {
        return(
                
                <div id="Introduction">
                
                <div className="container">
                    <h2 className="App-subheader">Frontend: React Framework</h2>
                    <h3 className="App-subheader">Introduction</h3>
                    <div className="fluid-container App-stdDiv">
                        <p>React is a open source frontend framework developed by facebook <br/>
                            and it is maintained by both facebook and from contributors from<br/>
                            around the world. The framework mainly uses HTML/CSS and Javascript<br/>
                            to create responsive and dynamic web pages.</p>


                    </div>

                    <h3 className="App-subheader">Advantages</h3>
                    <div className="container-fluid App-stdDiv">
                        <p>The main advantages of React come from its ability to allow developers<br/>
                            to break a web page into several reusable components. React allows developers<br/>
                            to separate the web page by components such as body, header, footer, and etc.<br/>
                            This structure combined with javascript enables developers to build web pages<br/>
                            efficiently and effectively.</p>


                    </div>

                    <h3 className="App-subheader">Disadvantages</h3>
                    <div className="fluid-container App-stdDiv">
                        <p>Even though React assists developers with building and maintaining web pages<br/>
                            effectively and efficiently it has its drawbacks and disadvantages. The biggest<br/>
                            disadvantage of React is that it is excellent with single page websites but does <br/>
                            not perform well with multiple pages. That is the reason this framework was created<br/>
                            and still used by facebook.</p>
                    </div>

                    <h3 className="App-subheader">Development Applications & Popularity</h3>
                    <div className="fluid-container App-stdDiv">
                        <p>React is an extremely popular frontend framework because it is developed<br/>
                            by facebook and because of its re-usability and simplicity.Also, it is popular<br/>
                            because it is an open source framework. The framework is mainly used to develop<br/>
                            single page websites similar to facebook, that is the purpose for which this <br/>
                            framework was developed.</p>

                    </div>


                    <h2 className="App-subheader">Backend:Ruby Framework</h2>


                    <h3 className="App-subheader">Introduction</h3>
                    <div className="fluid-container App-stdDiv">
                        <p>Ruby on Rails is a backend open source framework created in 2004 by David Hansson <br/>
                         in the process of coding Basecamp. It’s basis, Ruby, was created in 1995 by Yukihiro Matsumoto.
                         Both Hansson and Matsumoto strongly stressed the idea of beautiful, elegant code, and this has 
                         shaped the language right up until the present day. It is maintained mostly by a large but
                         shrinking community of dedicated programmers.</p>


                    </div>

                    <h3 className="App-subheader">Advantages</h3>
                    <div className="container-fluid App-stdDiv">
                        <p>Ruby on Rails has always been thought of as a community effort, which means there is great
                         infrastructure for community support/edits. The whole project is entirely open source, which 
                         allows the community to continue maintaining, changing and adapting the language so it stays relevant. 
                         Another key tenant of the language is optimization for programmer happiness. This means that code
                          is easy to write, easy to read, and looks good!</p>


                    </div>

                    <h3 className="App-subheader">Disadvantages</h3>
                    <div className="fluid-container App-stdDiv">
                        <p>Because of the upsurge of “build your own website” services, Ruby is declining in popularity. 
                        This decline has led to a quieter community, and therefore less community support/updates</p>
                    </div>

                    <h3 className="App-subheader">Development Applications & Popularity</h3>
                    <div className="fluid-container App-stdDiv">
                        <p>While still vital to the function of many important websites (e.g. GitHub, Shopify, Airbnb),
                         Ruby’s status as the easiest way to make a website has been dethroned by the likes of Wordpress,
                          Squarespace, and Wix, leading to a decline in popularity.</p>

                    </div>
                    
                </div>
            </div>
        );
    }

    
}


ReactDOM.render(<MainBody/>, document.getElementById('Page1'));
