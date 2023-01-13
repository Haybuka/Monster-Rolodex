import { ChangeEventHandler,ChangeEvent } from "react";
import "./search-box.styles.css";

// interface ISearchBoxProps {
//   className  : string;
//   placeholder:string;
//   onChangeHandler :
// }
//type offers chance for union+---
// type CanadianAddress = {
//   street : string;
//   province : string;
// }

// type USAddress = {
//   street : string;
//   state : string;
// }
// type NorthAmericanAddress = USAddress | CanadianAddress
// const Address:NorthAmericanAddress = {
//   street:'ere',
//   province:'rew'
// }

type SearchBoxProps = {
  className : string;
  placeholder?:string;
  onChangeHandler : (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onChangeHandler, placeholder, className }:SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
