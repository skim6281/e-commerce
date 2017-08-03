import React from 'react';
import { withRouter } from 'react-router';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ file: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    const { createProducts, history } = this.props;
    e.preventDefault();
    createProducts(this.state.file).then(history.push('/'));
  }

  render() {
    if(this.props.currentUser.admin) {
      return(
        <div className="below-nav">
          <input type='file'
            onChange={this.updateFile} />
          <button className="upload" onClick={this.handleSubmit}>Upload</button>
        </div>
      )
    } else {
      return(<div className="below-nav">Unauthorized</div>)
    }
  }
}

export default withRouter(Upload);
