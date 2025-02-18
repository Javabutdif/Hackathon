import { APP_NAME } from "../constants/constants";
import volunteerism from "../assets/images/volunteerism.jpg";
import { useRef } from "react";

function Home() {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const communityRef = useRef(null);

  const handleGetStarted = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full text-primary-content">
      {/* Hero Section */}
      <div
        className="hero h-screen w-full text-center"
        style={{
          backgroundImage: `url(${volunteerism})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content max-w-md p-6 text-center text-neutral-100">
          <div className="max-w-md">
            <h1 className="">Welcome to {APP_NAME}!</h1>
            <h3 className="italic mt-4">Volunteers help co-volunteers.</h3>
            <p className="py-6 my-6 hover:bg-white/20 p-4 rounded-lg transition-all">
              Empower volunteers to create organizations, manage volunteer
              groups, and collaborate on meaningful initiatives. Build a
              community, organize events, and make a real impact together.
            </p>
            <button className="btn btn-primary" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* About Section - User scrolls here on click */}
      <div
        ref={aboutRef}
        className="min-h-screen flex flex-col items-center justify-center p-12"
      >
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="mt-4 max-w-2xl text-center">
          Create and manage your own volunteer organization. Connect with
          passionate individuals, coordinate events, and build a network of
          changemakers working towards a common goal.
        </p>
      </div>
      {/* Mission Section */}
      <div
        ref={missionRef}
        className="min-h-screen flex flex-col items-center justify-center p-12 bg-primary text-white"
      >
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 max-w-2xl text-center">
          At {APP_NAME}, we believe in the power of community and the ability of
          volunteers to make meaningful change. Our mission is to provide the
          tools and platform for people to organize, collaborate, and build
          lasting relationships that will lead to impactful social change.
        </p>
      </div>
      {/* Community Section */}
      <div
        ref={communityRef}
        className="min-h-screen flex flex-col items-center justify-center p-12 bg-gray-200 text-black"
      >
        <h2 className="text-3xl font-bold">Join the Community</h2>
        <p className="mt-4 max-w-2xl text-center">
          Ready to make a difference? Join a network of passionate volunteers,
          create your own organization, or become part of an existing group.
          Together, we can build a brighter future. Sign up today!
        </p>
        <a className="btn btn-primary mt-4" href="/register">
          Create an account!
        </a>
      </div>
    </div>
  );
}

export default Home;
