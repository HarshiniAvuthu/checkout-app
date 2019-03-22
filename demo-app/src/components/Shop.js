import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

const cate = [
    {
        name: 'Fashion',
        id: 'fashion',
        description: "sub categories under fashion",
        resources: [{
                name: 'womenswear', id: 'womenswear'
            },
            {
                name: 'accessories', id: 'accessories'
            },
            {
                name: 'footwear', id: 'footwear'
            }
        ]
    },
    {
        name: 'Kidswear',
        id: 'kidswear',
        description: 'no sub section'
    },
    {
        name: 'Jewellery',
        id: 'jewellery',
        description: 'sub section under jewellery',
        resources: [{
                name: 'Earring', id: 'Earring'
            },
            {
                name: 'Necklace', id: 'Necklace'
            },
            {
                name: 'headjewellery', id: 'headjewellery'
            }
        ]
    },
    {
        name: 'Wedding gifts favours',
        id: 'weddinggiftsfavours',
        description: 'no sub section'
    }
]

function Resource ({ match }) {
    const topic = cate.find(({ id }) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId)
    return (
        <div>
            <h3>{topic.name}</h3>
        </div>
    )
}

function SubCat ({ match }) { 
    const topic = cate.find(({ id }) => id === match.params.topicId)
    return (
        <div>
            <p>{topic.description}</p>
            <ul>
                {topic.resources.map((sub) => (
                    <li key={sub.id}>
                        <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
                    </li>
                ))}
            </ul>
            <Route path={`${match.path}/:subId`} component={Resource} />
        </div>
    )
}

function Categories ({ match }) { 
    return (
        <div>
            <ul>
                {cate.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={`${match.url}/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
             <h2 className="text-center"> listing pages </h2>
            <Route path={`${match.path}/:topicId`} component={SubCat}/>
        </div>
    )
}

class Shop extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/categories'>categories</Link>
                    <Route path='/categories' component={Categories} />
                </div>
            </Router>
        )
    }
}

export default Shop;