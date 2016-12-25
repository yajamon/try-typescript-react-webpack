import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// stateless functional components
export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>

// export class Hello extends React.Component<HelloProps, undefined> {
//     render() {
//         return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
//     }
// }
