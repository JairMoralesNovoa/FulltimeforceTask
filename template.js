//Res of root ('/') entry of the app
//Basic HTML code to use REACT
//Title:  Repo History
//Run: <webpack> bundle.js

export default () => {
    return `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Repo History</title>
            </head>
            <body>
                <div id="root"></div>
                <script type="text/javascript" src="/dist/bundle.js">
                </script>
            </body>
        </html>`
};