# React-intro

React JS
.ts

SPA (Single Page Application)
Components (Grp Codes)
data Binding => Uni Directional, flow of the data
Virtual DOM
|   |   |   |   home.jsx(it have html+js code)

            BannerSection.jsx       Navbar.jsx      Section.jsx         Footer.jsx

                home.jsx    aboutUs.jsx

Virtual DOM:
         
         updated <p> in <body>--------->Virtual DOM----->DOM------>HTML Manipulations reflected on web pg

SPA:
index.html
     <html>
        <body>  
           <div id="root"> 
           </div>    
        </body>  
     </html> 

Components:
  >>Class Components (Older version)  
  >>Function Components (Newest edition)

Redux (State Managment)
Hooks (Lifecycle methods )

npx => node package execution
npx create-react-app project-name

## RUN:
cd(ProjectName)
npm start

### Components n workflow
## State & Props

### State => Data required for a component

<!-- var name= "Dewtown" -->
<!-- state ={ 
  [ 
    { 

    },
    { 

    }
  ]
} -->

## hookS -> useStates(), setStates()....(methods)
import {useState} from "react";
const [variable, func] = useStates();
const [count, setCount] = useState();

const [num, setnum] = useState(0);
num += 1;

btn => 

### props(Where we will be passing data among the components)
## Parent Node -> Child Node
## eg: App.js -> ClassComponents.jsx | functionComponents.jsx

<functionComponents name="devtown" age="20">