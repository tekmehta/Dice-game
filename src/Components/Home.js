import React from "react";
import './home.css'
function Home() {
    return (
        <div className="homebody">
            <h2>About Project</h2>
            <p className="cls1">This web application offers a versatile experience, combining gaming and calculation functionalities. Within this platform, you can utilize the <b>'Number Generator'</b> component to generate random numbers. Engage in interactive gaming with the <b>'Dice Rolling'</b> component, where you have the chance to win or lose. Additionally, our <b>'Contact Me'</b> feature enables you to get in touch through various social media channels. Lastly, the <b>'SI Calculator'</b> empowers you to calculate the interest on your amount with ease.</p>
            <p></p>

            <h2>React.js</h2>
            <p className="cls1">React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces (UIs) and front-end applications. Developed and maintained by Facebook, React has gained widespread popularity for its simplicity, efficiency, and component-based architecture.</p>
            <h4>Key Features of React.js:</h4>
            <ul>
                <li>Component-Based: </li><p className="cls1"> React is the concept of reusable components. Developers can create UI elements as self-contained components, making code modular and maintainable.</p>
                <li>Virtual DOM:</li><p className="cls1">React utilizes a virtual representation of the DOM (Document Object Model) for efficient rendering. It minimizes the need to manipulate the actual DOM, resulting in improved performance and a smoother user experience.</p>
                <li>JSX (JavaScript XML): </li><p className="cls1">JSX is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code within their JavaScript, making it easier to define UI components and their structure.</p>
                <li>React Native: </li><p className="cls1"> React can be used to develop not only web applications but also mobile applications through React Native. It allows developers to use React principles to create native mobile apps for iOS and Android.</p>
            </ul>
            <h4>Use Cases:</h4>
            <ul>
                <li>Building single-page applications (SPAs)</li>
                <li>Developing interactive user interfaces for web applications</li>
                <li>Creating dynamic web pages</li>
                <li>Building cross-platform mobile applications using React Native</li>
            </ul>
        </div>
    )
}
export default Home;