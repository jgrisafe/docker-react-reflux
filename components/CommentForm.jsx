import React from 'react';

export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    }
  }

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value});
  }

  handleTextChange = (e) => {
    this.setState({text: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if(!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author, text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input 
          type="text" 
          placeholder="Say Something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}