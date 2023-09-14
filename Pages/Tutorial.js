
class Tutorial extends React.Component{
    render(){
        return(

            <div id="Tutorial">
                <div className="container">
                 <div className="App-stdDiv container-fluid">
                    <p>
                    For our example page, it will showcase the “Top Five favourite Pokemon.'' It requires information about the Pokemon themselves and customization options for our web page.
                     You need to create an HTML, CSS and JS file. HTML for the web page, CSS for the customization aspect of the webpage, and JS for the storage of the information. With ReactJS,
                    it helps the user to organize information being outputted to the web page, similar to JSON. 
                    Without the use of ReactJS, a JS file is not needed and the information being outputted will be not as organized compared to with the JS file.
                    </p>
                 </div>
            
                <img src="/images/tutorial/pic1.PNG" alt="tutorial_1" />

                 <div className="App-stdDiv container-fluid">
                    <p>
                    First, we need to create the html tags and body tags to set up the web page. Additionally with other text tags showing the title of the page,
                     and to import our separate CSS file. It is a must to have the script tags to import ReactJS into our web page and our separate JS file.

                    </p>
                 </div>
                 
                 <img src="/images/tutorial/pic2.PNG" alt="tutorial_2" />
                 
                 <div className="App-stdDiv container-fluid">
                    <p>
                    
                    Additionally, it is recommended to use boostrap aswell because React is good at organization but for styling
                    it is easier and faster to use bootstrap.
                     
                    </p>
                 </div>

                 <img src="/images/tutorial/pic6.PNG" alt="tutorial_6"/>

                 <div className="App-stdDiv container-fluid">
                    <p>
                    In the ReactJS file, first we need to create a function named Pokemon. This file returns html code to the HTML file to output. 
                    As a parameter, it’s props, which collects elements from a certain variable if called for. Inside the return parameters,
                    we put statements called “React.createElement”. With this command we create an html tag element to return to the webpage.
                    Parameters are called as first the tag, then any additional style or class tags, then text for the output.
                    </p>
                 </div>

                 <img src="/images/tutorial/pic3.PNG" alt="tutorial_3" />

                 <div className="App-stdDiv container-fluid">
                    <p>
                    As shown, there are times where it says props.variable. It collects the elements as said before, but we need to initialize the variable afterwards 
                    to make the function have a purpose. We initialize a variable called pokemonInfo, which has an array of information of Pokemon.
                     We have a React.createElement with parameters of the tag, the additional style/class names and another React.createElement. 
                     We have another React.createElement since it’s an element of one Pokemon, 
                    which contains all the information in regards to the Pokemon. Inside the last React.createElement, it has Pokemon(The function) and a list of elements as parameters.
                    </p>
                 </div>

                 <div className="App-stdDiv container-fluid">
                    <p>

                    An example shown is React.createElement with Pikachu,
                    which contains the name, type, the image used, and much more.
                     To add an additional Pokemon, a comma must be added between each React.createElement. 

                    </p>
                 </div>

                 <img src="/images/tutorial/pic4.PNG" alt="tutorial_4" />

                 <div className="App-stdDiv container-fluid">
                    <p>
                    The Pokemon is a parameter to React.createElement to each Pokemon list because each 
                    listing uses the function Pokemon that was used before. Inside the function, it is now able to receive the elements in each given Pokemon listing. 
                    </p>
                 </div>

                 <div className="App-stdDiv container-fluid">
                    <p>
                    Now to call the function to the webpage, we use the command ReactDOM.render(pokemonInfo, document.querySelector(‘#pokemon’)). The first parameter 
                    is the variable needed for the function which includes all the information of the pokemon. And the use of the command of document.querySelector is 
                    for outputting to a certain tag in the HTML file. 
                    As a parameter in the command is the id name for the tag to output into the main web page. In our case, the id name in the HTML file is “pokemon”.
                    </p>
                 </div>

                 <img src="/images/tutorial/pic5.PNG" alt="tutorial_5" />   

                 <div className="App-stdDiv container-fluid">
                    <p>
                    Afterwards, the customization of the web page is available in the CSS file. To customize, it’s possible to customize the webpage by tag or by id/class name.
                     Some notable commands that is used is margin, to put spaces between images/text. As well as custom text and sizes for each text/images. The following classes
                     are the main design classes.
                    </p>
                 </div>

                 <img src="/images/tutorial/pic7.PNG" alt="tutorial_7" />  

                 <div className="App-stdDiv container-fluid">
                    <p>

                    Additionally you can create multiple components and attach them at their respective position in the main html file:

                    </p>
                 </div>
  

                 <h2 className="App-subheader"> Back-End Tutorial</h2>

                 <div className="App-stdDiv container-fluid">
                    <p>

                    Once you’re in the Rails environment, login as the “rails” user with sudo -I -u rails . This gives you access to the full functionality of Rails.

                    </p>
                 </div>
                 <div className="App-stdDiv container-fluid">
                    <p>

                    rails new projectname will generate the skeleton of your project. Navigate into your project folder.

                    </p>
                 </div>
                 <div className="App-stdDiv container-fluid">
                    <p>

                    Rails uses the MCV paradigm, but all we need right now is a controller and a view. Rails g controller main hmpg will generate the controller “main” and a homepage file “hmpg.html.erb
                    </p>
                 </div>
                
                 <div className="App-stdDiv container-fluid">
                    <p>

                    Under apps/views/main/ you’ll find your homepage file, which you can modify and edit to your hearts content with regular HTML. 
                   .Navigate to projectname/config/ and you’ll find “routes.rb”. You should see a command get ‘main/hmpg’. Under that, type root ‘main#hmpg’ . Now, when you visit your IP address or domain name, you’ll see your homepage!


                    </p>
                 </div>

                 <div className="App-stdDiv container-fluid">
                    <p>

                    Now to make more pages. rails g controller pages followed by the names of your pages separated by spaces, i.e. pg1 pg2 pg3, will generate a controller and page files just like before. Under apps/views/pages/ you’ll find these files which can be edited just like your homepage. 
                    </p>
                 </div>

                 <div className="App-stdDiv container-fluid">
                    <p>

                    To make these files visible through a browser, first go back to routes.rb and add resources :pages between the two existing commands. Go to projectname/app/controllers to find pages_controller.rb, and define a new method. Below the header, type def new, then under that type end. Now, you can type your IP address or domain name, then /pages/pagename, and you’ll be able to access all of your pages!
                    </p>
                 </div>

                </div>
            </div>

        );
    }
}

ReactDOM.render(<Tutorial/>, document.getElementById('Page4'));