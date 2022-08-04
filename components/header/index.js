import { PageHeader } from 'antd';
import React from 'react';
const styles = {
    border: '1px solid rgb(235, 237, 240)'
}
const header = () => (
  <PageHeader
    style={styles}
    //className="site-page-header"
    backIcon={false}
    title="Mangadu Pulic School"
  />
);

export default header;

