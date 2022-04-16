import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";

import MoreVert from "@mui/icons-material/MoreVert";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} />
        </div>
        <p className="title">Total sale today</p>
        <p className="amount">$420y</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be inclued
        </p>
        <div className="sumary">
          <div className="item">
            <div className="itemTitle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
