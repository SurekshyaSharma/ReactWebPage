import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

function AppTwo()
{
  return <h1> Murphy Training Session Compilation</h1>
}

ReactDOM.render(
  //react gragment acts likes a wrapper because we cannt render two different component with out wrapping and it is not adding anything into the DOM
  //short cut to <React.Fragment> </React.Fragment> is <> </>
<>
<App />,
<AppTwo />
</>, document.getElementById('root')
);
