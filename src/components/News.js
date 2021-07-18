import React, { useState } from 'react'
const News = ({ user }) => {

    const [Info, setInfo] = useState(false);

    return (
        <div className="box_div">
            <img src={user.urlToImage} alt="Loading.." className="image" />
            <h3>{Info ? `${user.content}` : `${user.content.substring(0, 90)}...`} {Info && <a className="discription_link" href={user.url} target="__blank">Full-Article</a>}</h3>


            <button className="btn_style" onClick={() => setInfo(!Info)} > {Info ? "ReadLess" : "Readmore"} </button>


        </div >

    )
}

export default News


