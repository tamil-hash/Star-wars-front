//components
import { Table } from "antd";
import NoDataFound from "Components/NoDataFound";

const columns = [
  {
    title: "Species",
    dataIndex: "icon",
    key: "icon",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Mass",
    dataIndex: "mass",
    key: "mass",
  },
  {
    title: "Hair color",
    dataIndex: "hair_color",
    key: "hair_color",
  },
  {
    title: "Skin color",
    dataIndex: "skin_color",
    key: "skin_color",
  },
  {
    title: "Eye color",
    dataIndex: "eye_color",
    key: "eye_color",
  },
  {
    title: "Birth year",
    dataIndex: "birth_year",
    key: "birth_year",
  },
  {
    title: "gender",
    dataIndex: "gender",
    key: "gender",
  },
];

const PeoplesTable = ({
  data = [],
  changePagination,
  pagination,
  loading = false,
}) => {
  return (
    <Table
      locale={{ emptyText: <NoDataFound /> }}
      className="peoples-table"
      columns={columns}
      dataSource={data}
      loading={{
        spinning: loading,
        indicator: <i className="fa fa-spinner" aria-hidden="true"></i>,
      }}
      onChange={changePagination}
      pagination={{
        position: ["bottomCenter"],
        current: pagination.current,
        total: pagination.total,
        showSizeChanger: false,
      }}
      rowKey="url"
    />
  );
};

export default PeoplesTable;
