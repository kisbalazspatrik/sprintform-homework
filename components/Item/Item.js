import React from 'react';
import Icon from '#/components/Icon/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Item = ({ id, category, summary, paid, sum, currency}) => {

    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);
    }

    const variants = {
        open: {
            height: '100%',
            opacity: 1,
        },
        closed: {
            height: '0px',
            opacity: 0,
        }
    }

    return (
        <AnimatePresence>
            <motion.div key={`item-${id}`} className={`${isActive ? 'bg-neutral-200 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-300' : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-500 dark:border-neutral-400'} transition-all mb-3 p-5 border-l-8 rounded-r-2xl cursor-pointer`} onClick={() => toggle()}>
                <div className="flex items-center">
                    <Icon category={category} w={48} h={48}/>
                    <div className="pl-5">
                        <h1 className="font-bold">{summary}</h1>
                        <p>{paid}</p>
                    </div>
                    <div className="ml-auto">
                        <p className="font-bold select-none">{sum} {currency}</p>
                    </div>
                </div>
                <motion.div
                    key={`id-${id}`}
                    animate={isActive ? variants.open : variants.closed}
                    className={isActive ? 'mt-3' : ''}
                    layout
                >
                    {isActive ? <div>További információ a vásárlásról, szerkesztés, stb.</div> : ' '}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Item