import React, { useState, useEffect } from 'react';
import withLayout from '../hocs/withLayout';
import api from '../apis';
import { Table } from 'antd';

export default withLayout(
  () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      api.get(`/data`).then(res => {
        setData(res.data);
      });
    }, []);
    return (
      <div>
        <Table
          dataSource={data}
          rowKey={row => row.id}
        >
          <Table.Column title="id" dataIndex="id" key="id" />
          <Table.Column title="name" dataIndex="name" key="name" />
        </Table>
      </div>
    );
  },
  { hasFooter: false },
);
