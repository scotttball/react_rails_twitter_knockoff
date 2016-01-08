class Mentions extends React.Component{
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
  }
  componentDidMount() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      data: { mentions: true }
    }).success( data => {
      this.setState({ tweets: data.tweets });
    });
  }
  render() {
    let tweets = this.state.tweets.map( tweet => {
      return(<Tweet key={ `tweet-${tweet.id}` } {...tweet} /> );
    });
    return(<div>
              <h3 className='center'>Mentions</h3>
            {tweets}
           </div>);
  }
}