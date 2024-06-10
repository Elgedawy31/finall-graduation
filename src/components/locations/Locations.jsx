import { Row } from "react-bootstrap";
import LocationsCard from "./LocationsCard";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOutline, IoTimeOutline } from "react-icons/io5";

function Locations() {
  return (
    <div className="container">
      <Row
        className="space-between-sections locations "
        style={{ marginTop: "12rem" }}
      >
        <LocationsCard
          icon={<CiLocationOn />}
          title="Locate Us"
          desc="Riverside 25, San Francisco, California
"
        />
        <LocationsCard
          icon={<IoTimeOutline />}
          title="Open Hours"
          desc="Sat To Fri 9:00 AM - 9:00 PM"
        />
        <LocationsCard
          icon={<IoMailOutline />}
          title="Mail Us"
          desc="resturantate@yahoo.com"
        />
      </Row>
    </div>
  );
}

export default Locations;
