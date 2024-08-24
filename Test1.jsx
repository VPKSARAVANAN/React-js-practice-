<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>
  class car extends React.Component{
        render(){
              return<h2> i am a car</h2>
      }
      } 
    
      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<car />);

  </body>
</html>
