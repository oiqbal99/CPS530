class Credits extends React.Component{
    render(){
        return(

            <div id="Credits">
                <div className="container">
                <h2 className="App-subheader">Amar Singh</h2>
                
                 <div className="App-stdDiv container-fluid">
                    <p>
                        Setup server and worked on Backend develpment. <br/>
                        References: <br/>
                        <a href="https://code.tutsplus.com/articles/ruby-on-rails-study-guide-the-history-of-rails--net-29439" >Ruby on Rails</a> <br/>
                        <a href="https://naturaily.com/blog/who-gives-f-about-rails">Article on Ruby</a> <br/>
                        <a href="https://guides.rubyonrails.org/getting_started.html">Introduction to ruby</a> <br/>
                        <a href="https://rubyonrails.org" > offical ruby site</a> <br/>

                    </p>
                 </div>
                
                 <h2 className="App-subheader">Felix Moreno</h2>
                 <div className="App-stdDiv container-fluid">
                    <p>
                        
                    Helped on the front-end part of the demo web page, and worked on the tutorial of the demo page. <br />
                    <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page" > Bulbapedia (Information/Images of Pokemon)</a> <br/>
                    </p>
                 </div>
                 <h2 className="App-subheader">Osama Iqbal</h2>
                 <div className="App-stdDiv container-fluid">
                    <p>

                        Worked on interface and navigation of website. Along with working mostly on installation and instroduction page Helped with tutorial and demo pages. <br/>
                        References: <br/>
                        <a href="https://reactjs.org/docs/introducing-jsx.html"> JSX setup </a><br/>
                        <a href="https://reactjs.org/docs/add-react-to-a-website.html"> React on website</a><br/>
                        <a href="https://reactjs.org/docs/jsx-in-depth.html"> JSX Guide</a><br/>
                        <a href="https://reactjs.org/tutorial/tutorial.html"> React and react components </a>
                       
                    </p>
                 </div>

                 <h2 className="App-subheader">Sean Riddell</h2>
                 <div className="App-stdDiv container-fluid">
                    <p>
                         Worked backend and created a stable server.
                    </p>
                 </div>

               

                </div>
            </div>

        );
    }
}

ReactDOM.render(<Credits/>, document.getElementById('Page6'));