import { APP_NAME } from "../constants/constants";
import volunteerism from "../assets/images/volunteerism.jpg";

function Home() {
  return (
    <div className="hero h-screen text-primary-content w-full" style={{backgroundImage: `url(${volunteerism})`, backgroundAttachment: 'fixed',}}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="">Welcome to {APP_NAME}!</h1>
          <h3 className="italic mt-4">Volunteers help co-volunteers.</h3>
          <p className="py-6 my-12 hover:card-body hover:bg-amber-50/40 rounded-box transition-all">
            Join a thriving community of volunteers dedicated to making a
            difference. Connect, collaborate, and contribute to meaningful
            projects with like-minded individuals.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
