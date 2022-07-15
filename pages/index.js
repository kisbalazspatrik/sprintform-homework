import React, { useState } from "react";
import Icon from "#/components/Icon/Icon";
import Category from "#/components/Category/Category";

export const getStaticProps = async () => {
  /*
  id
  summary
  category
  sum
  currency
  paid

  housing, travel, food, utilities, insurance, healthcare, financial, lifestyle, entertainment, miscellaneous

  észrevétel: clothing category van, viszont nem kéne, hogy legyen?
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

    const [data, setData] = useState(transactions);

    const filterData = (category) => {
        setData(transactions.filter(transaction => transaction.category === category));
    }

    return (
        <div className="wrapper flex justify-center">
            <div className="max-w-6xl flex-grow">
                <div className="flex justify-center">
                    <div className="category-select bg-neutral-200" onClick={() => filterData("housing")}><Icon category={"housing"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("travel")}><Icon category={"travel"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("food")}><Icon category={"food"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("utilities")}><Icon category={"utilities"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("insurance")}><Icon category={"insurance"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("healthcare")}><Icon category={"healthcare"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("financial")}><Icon category={"financial"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("lifestyle")}><Icon category={"lifestyle"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("entertainment")}><Icon category={"entertainment"} w={24} h={24}/></div>
                    <div className="category-select bg-neutral-200" onClick={() => filterData("miscellaneous")}><Icon category={"miscellaneous"} w={24} h={24}/></div>
                    <div className="category-select bg-red-500" onClick={() => setData(transactions)}>X</div>
                </div>
                {data.map(tx => (
                <div key={tx.id} className="bg-neutral-100 mb-3 p-5 border-l-8 border-neutral-500">
                    <div className="flex items-center">
                        <Icon category={tx.category} w={48} h={48}/>
                        <div className="pl-5">
                            <h1 className="font-bold">{tx.summary}</h1>
                            <p>{formatDate(tx.paid)}</p>
                        </div>
                        <div className="ml-auto">
                            <p className="font-bold">{formatSummary(tx.sum)} {tx.currency}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
