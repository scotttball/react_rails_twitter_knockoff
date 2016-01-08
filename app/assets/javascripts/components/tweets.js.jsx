class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.newTweet = this.newTweet.bind(this);
    this.search = this.search.bind(this);
    this.state = { tweets: [] };
  }
  componentDidMount() {
    $.ajax({
      url: '/tweets',
      type: 'GET'
    }).success( data => {
      this.setState({ tweets: data.tweets });
    });
  }
  newTweet() {
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { tweet: { body: this.refs.newTweet.value } }
    }).success( data => {
      let tweets = this.state.tweets;
      tweets.unshift(data.tweet);
      this.refs.newTweet.value = '';
      this.setState({ tweets: tweets });
    }).error( data =>{
      console.log('error');
    });
  }
  search() {
    $.ajax({
      url: '/tweet_search',
      type: 'GET',
      data: { search_term: this.refs.search.value }
    }).success( data => {
      this.setState({ tweets: data.tweets });
    });
  }
  render() {
    let tweets = this.state.tweets.map( tweet => {
      let key = `tweet-${tweet.id}`;
      return(<Tweet key={key} {...tweet} />);
    });
    return(<div className='row'>
            <div className='col s8 offset-s2'>
              <h3 className='center'>Post a Tweet</h3>
              <input placeholder="What's on your mind?" ref='newTweet' autofocus={true} />
              <button className='btn' onClick={this.newTweet}>Post</button>
              <input placeholder='Search' ref='search' onChange={this.search} />
              <h1 className='center'>Tweets</h1>
                {tweets}
            </div>
           </div>);
  }
}