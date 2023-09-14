class Footer extends React.Component{
    render(){
        return(
            <div className="App-footer">
               
               <img className="imgLogo" alt="Logo" src="/images/logo192.png"/>
            </div>
        );
    }
}

ReactDOM.render(<Footer/>, document.getElementById('Footer'));