import axios from "axios";
import type { OrgAndDesType } from "../redux/slices/navSlice";

export const getTravellTime = async (
  origin: OrgAndDesType,
  destination: OrgAndDesType
) => {
  try {
    let res = await axios.get(
      `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin.location.lat},${origin.location.lng}&destinations=${destination.location.lat},${destination.location.lng}&key=oxFG1UOc7fwDda1LPmVVYWXTBwGhp78sczmop3C5VZyvXWGZdZUHw67wiqDY1aHs`
    );

    return res.data;
  } catch (error) {
    console.log((error as Error).message);
  }
};
