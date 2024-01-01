# Namster React Ep 1 
1. git branch -M main  // create default as main instead of master
2. git init //
3. git add .  //adding all out files
4. git comit -m "message"
5. 
6.

# Parcel
- dev build
- local server
- HMR -> Hot Module Repacement ( exchanges, adds, or removes modules while an application is running, without a full reload. )
- File Watching algo - written in c++, keeps a watch on the files
- Caching - Faster builds ( so when you save after nmaking small change it happens faster)
- Image Optimization ( img loading is expensive)
- Minification (minify our file too)
- Bundling
- Compress File ( remove white spaces )
- Consistent hashing (to generate unique filenames for cache busting. This ensures that whenever you make changes to your code, the browser fetches the latest version from the server, eliminating the need for users to manually clear their browser cache.)
- Code splitting 
- Differnetial Bundling (when the app will be hosted it can be opened in chrome , internet exp etc , older browsers )
- Diagnostic ,behind the scene 
- Erro handling
- also gives a way to use https
- Tree shaking: if we have a lot of code but we are usinf only 3 -4 function , parcel also removes unused , unneccesary code 
- differnt dev and prod build ( npx parcel build index.html,, but for this remove main from package json else will throw error)

react app is not just react it used many other packages which helps it in being faster





/* before we ignite out app( put it in production) we have to complete few tasks like removing comments, 

npm is standard repository for all the packages

package.json is the configuration for npm 
why do we need it? it manages dependencies , its related info

bundlers bundles your app so that is can be shipped to production
bundler eg: webpacks, wheat , parcel
npm install -D parcel

two types of dependencies :
1. dev dependencies - it is required in the development phase   ( -D  ... you want the dependency as a dev dependency)
2. normal dependencies -  they are used in production also


note:
tilde (~) eg ~2.7.1 : signifies that the package should update if major update happens  
so here if 3.0.1 comes out the packege will update to that

caret(^) eg: ^2.7.1 : here is minor update occurs the package updates

like if 2.7.2 comes out the package will update to it

it is better to use caret as many a times with major updates major changes are introduced which may not 

if you dont use either the the version stays the same


package-lock.json keeps exact track of version of parcel
(parkage.json has approx)
integrity - keeps a track that the version locally used is same are the remote one so that we dont get error



Transitive dependencies
when we download parcel many packages get downloaded
that is because parcel may be dependent of other packages , those packages on other and so on , this is known as transitive dependencies


we gitignore all the node modules 
cause they take a lot of space
and those exact modules can be recreating using package.json and package-lock.json

note : whatever you can regenerate dont put it on git

to ignite out app: npx parcel index.html

when we do npm we are callin the command
npx means executing a package
it goes to source ( index.html ) and builds a development build for our app
it hoists that dev built to localhost
and we are able to access out app on localhost

cdn is not a preferred way to bring react into app
- cause it is a costly operation
-if new version comes in , we have to change the urls 
-if we already have it in node module it will be easier

npm install react
npm install react-dom
- after downloading we need to import



note app.js is normal js and doesnot contain import 
so you have to change the type to module


dist and parcel cache are automatically generated when execute
so we dont add them to git 

use browser list to see different browser coverage over the users 
in package.json{
    "browserList":[
        "last 2 version"
    ]
}

or :
in package.json{
    "browserList" : [
        "last 2 chrome version",
        "last 2 firefox version",
    ]
}

and many more ways...


*/