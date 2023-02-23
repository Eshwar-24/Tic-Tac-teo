import React from "react";
const winner = ({ value }) => {
  if (value[0] != null && value[0] == value[1] && value[1] == value[2])
    return true;
  else if (value[3] != null && value[3] == value[4] && value[4] == value[5])
    return true;
  else if (value[6] != null && value[6] == value[7] && value[7] == value[8])
    return true;
  else if (value[0] != null && value[3] == value[0] && value[0] == value[6])
    return true;
  else if (value[1] != null && value[1] == value[4] && value[4] == value[7])
    return true;
  else if (value[2] != null && value[2] == value[5] && value[5] == value[8])
    return true;
  else if (value[0] != null && value[0] == value[4] && value[4] == value[8])
    return true;
  else if (value[2] != null && value[2] == value[4] && value[4] == value[6])
    return true;
  return false;
};
export { winner };
