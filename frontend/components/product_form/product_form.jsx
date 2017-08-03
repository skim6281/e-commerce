import React from 'react';
import { withRouter } from 'react-router';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      model: "",
      sku: "",
      price: "",
      desc: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    const { createProduct, history } = this.props;
    e.preventDefault();
    const product = this.state;
    createProduct(product).then(() => {
      this.props.removeErrors();
      history.push('/');
    });
  }

  renderErrors() {
    return(
      <p>{this.props.errors[0]}</p>
    )
  }

  render() {
    const { currentUser } = this.props;
    if(currentUser.admin) {
      return(
        <div className="below-nav">
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.update("name")}/>
            <input type="text"
              placeholder="Brand"
              value={this.state.brand}
              onChange={this.update("brand")}/>
            <input type="text"
              placeholder="Model"
              value={this.state.model}
              onChange={this.update("model")} />
            <input type="text"
              placeholder="SKU"
              value={this.state.sku}
              onChange={this.update("sku")} />
            <input type="text"
              placeholder="Price"
              value={this.state.price}
              onChange={this.update("price")} />
            <textarea
              placeholder="Description"
              value={this.state.desc}
              onChange={this.update("desc")} />
            <div>{this.renderErrors()}</div>
            <button>Submit</button>
          </form>
        </div>
      )
    }else {
      return(<div className="below-nav">Unauthorized</div>)
    }
  }
}

export default withRouter(ProductForm);
