import React, { useContext } from 'react'
import { userContext } from "../NewsContext";
import News from "../components/News"

const NewsList = () => {

    const user = useContext(userContext);
    console.log(user);

    return (
        <div className="container">
            <h1 className="main_heading">Check the current news </h1>
            <div className="center_div">

                {user ? user.articles.map(user => <News user={user} key={Math.random()} />) : "loading"}
            </div>
        </div>
    )
}

export default NewsList
