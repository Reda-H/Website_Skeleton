import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>BANNER</h1>
          <ul>
            <li className="e1"><button>Element1</button></li>
            <li className="e2"><button>Element2</button></li>
            <li className="e3"><button>Element3</button></li>
            <li className="e4"><button>Element4</button></li>
            <li className="e5"><button>Element5</button></li>
          </ul>
      </div>
    );
  }
}

export default Header;
