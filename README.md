# react-app

Create a react app and make the following changes to make it work with our shell.

1. Create a setupProxy.js file under src folder and add the below lines to resolve the CORS error when accessing from shell.
```
module.exports = app => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }); 
};
```

2. Add the below script to the public/index.html file to make it work locally (without shell)<br/>
```
<script type="text/javascript"> 
  `window.shell = { 
    register: (name, { install }) => {
      window.onload = () => { 
        install({ containerId: "root" });
      }; 
    }, 
  }; 
</script>
```

3. Checkout the code in `src/index.tsx file`(this repo) and `Shell.tsx` file from our Shell app to know how this code is connected to the Shell app. This is necessary to do the mounting/unmounting of the react app manually.

4. Update `src/App.tsx` to pass the history object coming from shell to App component. IMP to keep track of route history.
