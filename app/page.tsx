import Image from "next/image";
import Link from "next/link";
import Last from './mcomponents/1';
import First from './mcomponents/2';
import "./home.css";

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Page</h1>
      <Last />
      <First />
    </div>
  );
}

export default HomePage;