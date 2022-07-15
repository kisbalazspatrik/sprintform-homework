import React, { useState, useEffect } from "react";
import Icon from "#/components/Icon/Icon";
import Category from "#/components/Category/Category";
import DataContext from "#/utils/DataContext";
import ModeSwitch from "#/components/ModeSwitch/ModeSwitch";
import Item from "#/components/Item/Item";

export const getStaticProps = async () => {
  /*
    Észrevétel: 'Clothing' mint kategória van a lekérdezett adatok között, viszont az 
    oldalon az 'Összes lehetséges kategória' között nem szerepelt, így az ikonja is a 'Default' lesz.
  */
  const res = await fetch('https://development.sprintform.com/transactions.json');
  const data = await res.json();

  return {
    props: { transactions: data }
  }
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString({ year: 'numeric', month: 'numeric', day: 'numeric' });
}

const formatSummary = (sum) => {
    return sum.toLocaleString();
}

export default function Home({ transactions }) {

    const [data, setData] = useState([]);
    const [isActive, setIsActive] = useState("");

    useEffect(() => {
        setData(transactions.sort((a, b) => {
            return new Date(b.paid) - new Date(a.paid);
        }));
    }, [])

    const filterData = (category) => {
        if (category) {
            setIsActive(category)
            setData(transactions.filter(transaction => transaction.category === category));
        } else {
            setIsActive("")
            setData(transactions);
        }
    }

    return (
        <DataContext.Provider value={{ filterData }}>
        <div className="wrapper flex justify-center">
            <div className="max-w-6xl flex-grow">
                <div className="flex justify-center flex-wrap">
                    <ModeSwitch/>
                    <Category name="housing" isActive={isActive}/>
                    <Category name="travel" isActive={isActive}/>
                    <Category name="food" isActive={isActive}/>
                    <Category name="utilities" isActive={isActive}/>
                    <Category name="insurance" isActive={isActive}/>
                    <Category name="healthcare" isActive={isActive}/>
                    <Category name="financial" isActive={isActive}/>
                    <Category name="lifestyle" isActive={isActive}/>
                    <Category name="entertainment" isActive={isActive}/>
                    <Category name="miscellaneous" isActive={isActive}/>
                    <Category name="reset" isActive={isActive}/>
                </div>
                {data.map(tx => (
                    <Item 
                        key={tx.id}
                        id={tx.id} 
                        category={tx.category}
                        summary={tx.summary}
                        paid={formatDate(tx.paid)}
                        sum={formatSummary(tx.sum)}
                        currency={tx.currency}
                    />
                ))}
            </div>
        </div>
        </DataContext.Provider>
    )
}
