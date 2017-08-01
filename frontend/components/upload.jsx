import React from 'react';

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
    e.preventDefault();
    console.log(this.props);
    this.props.createProducts(this.state.file);
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

export default Upload;
