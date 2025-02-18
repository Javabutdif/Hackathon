import avatar from "../assets/images/avatar/avatar.jpg";
import artwork1 from '../assets/images/artworks/artwork1.jpg';
import artwork2 from '../assets/images/artworks/artwork2.jpg';
import artwork3 from '../assets/images/artworks/artwork3.jpg';
import artwork4 from '../assets/images/artworks/artwork4.jpg';
import artwork5 from '../assets/images/artworks/artwork5.jpg';
import artwork6 from '../assets/images/artworks/artwork6.jpg';
import { USER_DETAILS, USER_ARTWORKS } from "../constants/constants";

const user = USER_DETAILS[0];
const artwork_urls = [
  artwork1, artwork2, artwork3, artwork4, artwork5, artwork6
];

function Dashboard() {
  return (
    <div>
      <div className="card bg-neutral-900 w-full shadow-xl">
        <figure className="md:py-12">
          <img src={avatar} alt="Avatar" />
        </figure>
        <div className="card-body text-center">
          <h1 className="text-center">{user.firstname} {user.lastname}</h1>
          <h4 className="!font-normal">{user.profession.join(" • ")}</h4>
          <h6 className="!font-normal">from {user.region}, {user.country}</h6>
          <h6 className="!font-normal mt-2">Following: {user.following_count}, Followers: {user.followers_count}, Friends: {user.friends}</h6>
          <h6 className="italic">@{user.username}</h6>
        </div>
      </div>
      <br />
      <div className="card bg-neutral-900 w-full shadow-xl">
        <div className="card-body">
          <h2>About {user.firstname},</h2>
          <hr className="border-neutral-700" />
          <p>{user.profile_description}</p>
        </div>
      </div>
      <br />
      <div className="card bg-neutral-900 w-full shadow-xl">
        <div className="card-body">
          <h2>Artworks</h2>
          <hr className="border-neutral-700" />
        {
          USER_ARTWORKS.map( (artwork, index) => (
          <div className="card w-full border-none md:card-side">
          <figure className="md:w-1/2 md:h-[20vh]">
            <img className="w-full" src={artwork_urls[index]} alt="artwork" />
          </figure>
            <div className="card-body p-2 mb-2 text-center !font-normal">
              <h2>{artwork.title}</h2>
              <p className="!indent-0">{artwork.genre} • {artwork.type}</p>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
