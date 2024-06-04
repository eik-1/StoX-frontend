import Home from "../components/Home";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-4">
      <Navbar />
      <Home />
    </main>
  );
}

export default Homepage;
