import React from "react";
import gps from "../assets/images/location.svg";
import icon from "../assets/images/search.svg";

function Search(props) {
  return (
    <div className="search-section">
        <input 
            type="text"
            id="search_input"
            className="input"
            name="text"
        />
        <button className="search-icon"><embed src={gps}></embed></button>
        <select name="category" id="category">
            <option value="category" disabled selected>類別</option>
            <option value="attractions">景點</option>
            <option value="activity">活動</option>
        </select>
        <select name="country" id="country" className="country">
            <option value="country" disabled selected>不分縣市</option>
            <option value="新北市">新北市</option>
            <option value="桃園市">桃園市</option>
            <option value="台中市">台中市</option>
            <option value="台南市">台南市</option>
            <option value="高雄市">高雄市</option>
            <option value="基隆市">基隆市</option>
            <option value="新竹市">新竹市</option>
            <option value="新竹縣">新竹縣</option>
            <option value="苗栗縣">苗栗縣</option>
            <option value="彰化縣">彰化縣</option>
            <option value="南投縣">南投縣</option>
            <option value="雲林縣">雲林縣</option>
            <option value="嘉義縣">嘉義縣</option>
            <option value="嘉義市">嘉義市</option>
            <option value="屏東縣">屏東縣</option>
            <option value="宜蘭縣">宜蘭縣</option>
            <option value="花蓮縣">花蓮縣</option>
            <option value="台東縣">台東縣</option>
            <option value="金門縣">金門縣</option>
        </select>
        <button className="search-icon"><embed src={icon}></embed></button>
    </div>
  );
}

export default Search;