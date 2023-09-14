class MainHeader extends React.Component{

    render(){
        return(
            <div className="App-header">
                <h1 id="title">React & Ruby Demo</h1>
            </div>
        );
    }

}

ReactDOM.render(<MainHeader/>, document.getElementById('Header'));