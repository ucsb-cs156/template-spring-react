import OurTable from "main/components/OurTable";

export default {
  title: "components/OurTable",
  component: OurTable,
};

const Template = (args) => {
  return <OurTable {...args} />;
};

export const Sample = Template.bind({});

Sample.args = {
  columns: [
    {
      Header: "Column 1",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Column 2",
      accessor: "col2",
    },
  ],
  data: [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "react-table",
      col2: "rocks",
    },
    {
      col1: "whatever",
      col2: "you want",
    },
  ],
};
