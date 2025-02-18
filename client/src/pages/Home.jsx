import { APP_NAME } from '../constants/constants';

function Home() {
  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="">Welcome to { APP_NAME }!</h1>
          <h3 className="italic mt-4">...where artists meet the limelight.</h3>
          <p className="py-6 mt-12">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
