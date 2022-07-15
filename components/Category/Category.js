import React from 'react'
import Icon from '#/components/Icon/Icon'
import DataContext from '#/utils/DataContext';

const Category = ({name, isActive }) => {

    const { filterData } = React.useContext(DataContext);

    if (name == "reset") {
        return (<div id={name} className={`category-select bg-red-500 text-white`} onClick={() => filterData(null)}>X</div>)
    }

    return (
        <div id={name} className={`category-select ${isActive == name ? 'category-selected' : 'category-bg'}`} onClick={isActive == name ? () => filterData(null) : () => filterData(name)}><Icon category={name} w={24} h={24}/></div>
    )
}

export default Category