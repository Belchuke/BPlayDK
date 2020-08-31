import React, {Component} from 'react';


interface route {
    name: string,
    component: JSX.Element
}


interface props {
    current: string,
    routes: route[]
}


const DynamicSwitch = (props: props)  => {
    let found = props.routes.find(x => x.name == props.current);

    if (found && found.component) {return found.component};

    return <></>
};


export default DynamicSwitch;
