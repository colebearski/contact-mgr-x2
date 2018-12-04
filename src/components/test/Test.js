// import React, { Component } from "react";

// class Test extends Component {
//   state = {
//     test: "test"
//   };

//   componentDidMount() {
//     console.log("componentDidMount...");
//   }

//   componentWillMount() {
//     console.log("componentWillMount...");
//     // UNSAFE_
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate...");
//   }

//   componentWillUpdate() {
//     console.log("componentWillUpdate...");
//     // UNSAFE_
//   }

//   componentWillReceiveProps(nextProps, nextState) {
//     console.log("WillReceiveProps");
//     // UNSAFE_
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     // return state or return null
//     return null;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("manipulate things as we need");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Test Component</h1>
//       </div>
//     );
//   }
// }

// export default Test;

// ComponentDidMount
// whatever is placed in function fires once it's mounted
// HTTP calls to an api or backend

// ComponentWillMount
// runs before anything mounts

// ComponentDidUpdate
// only runs when component updates
// changing state, etc..

// ComponentWIllReceiveProps
// when component recieves props then this runs
// used with redux
// application level state
// turn this piece of state into a component prop

// READ
// https://reactjs.org/docs/state-and-lifecycle.htmlS
// https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705
