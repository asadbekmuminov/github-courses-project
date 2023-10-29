import CourseSearch from "@/components/CourseSearch";
import Link from "next/link";
function HomePage() {
  return (
    <div className="container">
      <h1>courses</h1>
      <CourseSearch />
    </div>
  );
}

export default HomePage;
