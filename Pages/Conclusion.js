class Conclusion extends React.Component{
    render(){
        return(

            <div id="Conclusion">
                <div className="container">
                
                <h2 className="App-subheader" >Conclusions on React</h2>
                    <div className="App-stdDiv container-fluid">
                        <p>
                        Overall I have enjoyed my experience with ReactJS and I would give it a 7/10. ReactJS perform to my expectations 
                        due to it helping with organizing the information given by the user. As well as learning that there are 
                        many more uses for ReactJS that is used for more advanced functionalities which can be useful later on. 
                        The installation of ReactJS into HTML is not difficult, and was straightforward. Since the installation 
                        we have used is linking the ReactJS commands in the script tag in the HTML file. It was difficult at first
                         getting used to, but became easier as time went on. The 
                         learning curve wasn’t as steep as I have expected, since we have dealt with basic commands. The only thing 
                         I would change is the usage of JSX file, due to it being it more convenient and easier to understand. No I 
                         do not regret our choice of frameworks, since ReactJS is quite popular in the field of web development. 
                         With knowledge of ReactJS, it will help with experience and helping me getting started with front-end frameworks.
                        </p>
                    </div>
                    <h2 className="App-subheader" >Conclusions on Ruby</h2>
                    <div className="App-stdDiv container-fluid">
                        <p>
                        I would give Ruby on Rails a 6/10. It performed well, and the learning curve was not 
                        too steep. I would compare it’s difficulty to one of the (usually) easier languages like Python. The only 
                        reason I rate it so low is that the installation/configuration was oddly difficult. It was not intuitive, 
                        and I ran into problems pretty much immediately. These were mostly related to me missing plugins that 
                        it was not clear that I was supposed to have in the first place. This had me wishing
                        that I maybe used something we had spent a little more time with, such as Perl.
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Conclusion/>, document.getElementById('Page5'));