import React from 'react';

export const GlobalContext = React.createContext();

class GlobalContextContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      setProducts: this.setProducts,
    };
  }

  setProducts = (data) => {
    this.setState({
      products: data,
    });
  };

  render() {

    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextContainer;
