import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Header = ({ onSearchInputChange }) => {
  return (
    <div className="header">
      <h1>Front End Challenge - MIHO</h1>
      <Input
        className="search-input"
        prefix={<SearchOutlined />}
        placeholder="Search People..."
        bordered={false}
        onChange={onSearchInputChange}
      />
    </div>
  );
};

export default Header;
