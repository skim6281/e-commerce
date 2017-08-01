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
    return(
      <div>
        <input type='file'
          onChange={this.updateFile} />
        <button onClick={this.handleSubmit}>Upload</button>
      </div>
    )
  }
}

export default withRouter(Upload);
