import { DatePicker, message, Alert } from "antd";
import React, { useState } from "react";
import Header from "../../components/header";
import CourseGrid from "../../components/grids/course-grid"

function CoursesHomePage() {
  return (
    <div>
      <Header />
      <CourseGrid /> 
    </div>
  );
}
export default CoursesHomePage;
