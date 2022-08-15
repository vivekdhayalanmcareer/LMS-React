import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
const tabListNoTitle = [
  {
    key: 'mine',
    tab: 'all courses',
  },
  {
    key: 'completed',
    tab: 'completed courses',
  },
  {
    key: 'all',
    tab: 'available courses',
  },
];
const contentListNoTitle = {
  mine: <p>My Courses</p>,
  completed: <p>Courses completed by me</p>,
  all: <p>List of all courses</p>,
};

const CourseGrid = () => {
  const [activeTabKey2, setActiveTabKey2] = useState('all');
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };
  return (
    <>
    <Row>
    <Col span={6} push={18}>
    </Col>
    <Col span={18} pull={6}>
      
    <Card
        style={{
          width: '100%',
        }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={(key) => {
          onTab2Change(key);
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </Col>
  </Row>
      
    </>
  );
};

export default CourseGrid;