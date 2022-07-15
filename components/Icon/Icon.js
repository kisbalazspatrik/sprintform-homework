import Image from 'next/image';
import React from 'react';

import Home from '#/public/svg/home.svg';
import Airplane from "#/public/svg/airplane.svg";
import Food from "#/public/svg/coffee.svg";
import Utilities from "#/public/svg/tools.svg";
import Insurance from "#/public/svg/activity.svg";
import Healthcare from "#/public/svg/h-circle.svg";
import Financial from "#/public/svg/bank.svg";
import Lifestyle from "#/public/svg/person-lines-fill.svg";
import Entertainment from "#/public/svg/controller.svg";
import Miscellaneous from "#/public/svg/list-check.svg";
import Default from '#/public/svg/exclamation-square-fill.svg';

const Icon = ({ category, w, h }) => {

    const imageTag = (cat) => {
        return (<Image src={cat} width={w} height={h}/>);
    }

    switch(category) {
        case 'housing':
            return(imageTag(Home));
        case 'travel':
            return(imageTag(Airplane));
        case 'food':
            return(imageTag(Food));
        case 'utilities':
            return(imageTag(Utilities));
        case 'insurance':
            return(imageTag(Insurance));
        case 'healthcare':
            return(imageTag(Healthcare));
        case 'financial':
            return(imageTag(Financial));
        case 'lifestyle':
            return(imageTag(Lifestyle));
        case 'entertainment':
            return(imageTag(Entertainment));
        case 'miscellaneous':
            return(imageTag(Miscellaneous));
        default:
            return(imageTag(Default));
    }
}

export default Icon;