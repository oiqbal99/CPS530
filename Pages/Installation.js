class Installation extends React.Component {
    render() {
        return(
            <div id="Installation" >
                <div className="container">
                    <h2 className="App-subheader">Installing React</h2>

                    <div className="container-fluid App-stdDiv">
                        <p>
                           The React framework can be installed <span><a href=" https://reactjs.org/docs/add-react-to-a-website.html">locally</a></span> into a pre-existing project or <br/> 
                           React can be installed <span><a href="https://reactjs.org/docs/create-a-new-react-app.html">globally</a></span> on a PC or Laptop using Node js and the npm Installer<br/>   
                        </p>
                    </div>
                    <h3 className="App-subheader">Installing React to an existing website</h3>
                    <div className="container-fluid App-stdDiv">
                        <p>
                            To add React to a pre-existing project or a brand new HTML file add two following script<br/> 
                            tags the source attribute to the links provided below: <br/>
                            just before the closing body tag. This install react components and libraries.<br/>
                        </p>
                    </div>

                    <img  src="/images/intsl_front1.png" alt="react embedding"/>

                    <div className="container-fluid App-stdDiv">
                        <p>
                            Next, include another script tag with a src attribute connecting a Javascript file to the project <br/>
                            Include another attribute of type to indicate the language used in the file. This Javascript file <br/>
                            will contain your React components.
                        </p>
                    </div>

                    <img  src="/images/instl_front2.png" alt="react embedding"/>

                    <div className="container-fluid App-stdDiv">
                        <p>
                            Inside the Javascript file created in the step above, create a class which has a render <br/>function which
                            returns the contents of the react components. There are several methods to do this but two of them are: 
                        </p>
                    </div>

                    <img src="/images/instl_front3.png" alt="react embedding"/>
                    <br/>

                    <div className="pokemonDiv">OR</div>

                    <br/>

                    <img className="margin" src="/images/instl_front4.png" alt="react embedding"/><br/>
                    <img  src="/images/instl_front5.png" alt="react embedding"/>
 
                    <div className="fluid-container App-stdDiv">
                        <p>
                           In both cases it is important to have the ReactDOM render the Component   
                        </p>
                    </div>

                    <img src="/images/instl_front7.png" alt="react embedding"/>

                    <div className="fluid-container App-stdDiv">
                        <p>
                            Optionally, add another script tag with the src attribute to access the JSX language <br/>
                            For more information on <span><a href="https://reactjs.org/docs/add-react-to-a-website.html">Adding React to an existing project and Babel</a></span> or 
                             <span><a href="https://reactjs.org/docs/introducing-jsx.html"> JSX </a></span>  click the highlighted links
                            <br/>       
                        </p>
                    </div>

                    <img src="/images/instl_front6.png" alt="react embedding"/>

                    <h2 className="App-subheader"> Installing React Globally</h2>

                    <div className="fluid-container App-stdDiv">
                        <p>First we need to install <span><a href="https://nodejs.org/en/download/">Node.js</a></span> to obtain the npm package installer. This installer <br/>
                        will allow us to obtain all required React Libraries to use react.</p>
                    </div>
                
                    <div className="fluid-container App-stdDiv">
                        <p>Next, we use the node package manager (npm) to create a app with a skeleton <br/>of the React framework .
                            In the command prompt run the following command: <br/> npm -g create-react-app NAME-OF-FOLDER</p>
                    </div>
                        
                    <img  src="/images/instl_g_front1.png" alt="react global installation"/>

                    <div className="fluid-container App-stdDiv">
                        <p>If you would like to create an app in an existing folder then simply goto the working <br/>
                            directory and run the following command into the command prompt:<br/>
                            $npx create-react-app . <br/>
                            The dot operator is used to specify the current working directory </p>
                    </div>

                    <img  src="/images/instl_g_front2.png" alt="react global installation"/>

                    <div className="fluid-container App-stdDiv">
                        <p>The react and react-dom libraries can be installed indvidually, Along with other libraries
                        ,if required. This can be achieved by using the following commands in command prompt  </p>

                    </div>
                    
                    <img  src="/images/instl_g_front3.png" alt="react global installation"/><br/>
                    <img  src="/images/instl_g_front4.png" alt="react global installation"/>


                    <h2 className="App-subheader">Installing Ruby</h2>

                    <div className="fluid-container App-stdDiv">
                        <p>
                        We’re going to install our framework on a Digital Ocean server. You’re going to set up a 
                        “droplet” (this is what they call development environments for different frameworks within a project).
                         Go under the create menu, select droplet, and click on the Ruby on Rails icon.
                        </p>
                    </div>
                    <img  src="/images/intsl_back.png" alt="setup-backend"/><br/>
                    <img  src="/images/instl_back2.png" alt="setup-backend"/>
                    
                    <div className="fluid-container App-stdDiv">
                        <p>
                        If you want more customization of your Ruby on Rails environment, you can alternatively 
                        install an Ubuntu droplet, and manually install Ruby on Rails onto it.  
                        </p>
                    </div>

                    <img  src="/images/instl_back3.png" alt="setup-backend"/>

        
                    <div className="fluid-container App-stdDiv">
                        <p>
                        Do you have a domain name? Under your project folder on your Digital Ocean account,
                         on the right side of your droplet, click on the option to add a domain. This will point 
                         your domain to your IP address.
                        </p>
                    </div>

                    <img  src="/images/instl_back4.png" alt="setup-backend"/>

                    <div className="fluid-container App-stdDiv">
                        <p>
                         Now that you’ve created your droplet, log into it through your terminal with ssh
                         root@your.ip.address or ssh root@yourdomain. You’ll be able to login with an emailed password. 
                         Set up an alternate user with sudo privileges to prevent major mistakes being propagated
                          through your whole droplet, and proceed as that user. Now, time to build your website! 
                        </p>
                    </div>
            
                    <div className="fluid-container App-stdDiv">
                        <p>
                            Note: In other tutorials, you’ll see mention of needing to “start” your server, 
                            as well as mentions of being able to view your work from http://localhost:3000 .
                             Because your site is being hosted on a remote server, the former isn’t necessary, 
                             and neither will work.
                        </p>
                    </div>
            
                </div>
            </div>
        );
    }

    
}

ReactDOM.render(<Installation/>, document.getElementById('Page2'));
