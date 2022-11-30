import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold m-2'>1. What are the different ways to manage a state in a React application?</h2>
            <p className='m-2'>
                There are four main types of state need to properly manage in React apps: Local state, Global state, Server state, URL state.
                <br />
                Local (UI) state-Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.
                <br />
                Global (UI) state-Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                <br />
                Server state-Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                <br />
                URL state-Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.
            </p>
            <h2 className='text-xl font-semibold m-2'>2. How does prototypical inheritance work?</h2>
            <p className='m-2'>
                In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Prototypal inheritance is a language feature that helps in that.
                <br />
                In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. When we read a property from object, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we'll study many examples of such inheritance, as well as cooler language features built upon it.
            </p>
            <h2 className='text-xl font-semibold m-2'>3. What is a unit test? Why should we write unit tests?</h2>
            <p className='m-2'>
                Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                <br />
                A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.
            </p>
            <h2 className='text-xl font-semibold m-2'>4. React vs. Angular vs. Vue?</h2>
            <p className='m-2'>
                If the choice you're making is based on Angular vs React alone, then you'll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready. React often requires extra modules and components, which keeps the core library small, but means there's extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn't require extras like React often does, though it does have a steeper learning curve for its core compared to React. React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                <br />
                The choice between React vs Vue is often debated and it's not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there's no sign that React is on the decline either. Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. Overall, Vue might be the best choice if you're a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
            </p>
        </div>
    );
};

export default Blog;