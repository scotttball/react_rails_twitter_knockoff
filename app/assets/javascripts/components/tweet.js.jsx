class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(<div className='row'>
            <div className='card blue-grey darken-1 col s10 offset-s1'>
              <div className='card-content white-text'>
                <p>{this.props.body}</p>
              </div>
              <div className='card-content right'>
                <a onClick={this.userTweets}>{this.props.handle}</a>
              </div>
            </div>
           </div>);
  }
}