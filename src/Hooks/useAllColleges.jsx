import { useEffect, useState } from "react";

const useAllColleges = () => {
  const [allColleges, setCollege] = useState([]);
  useEffect(() => {
    fetch("https://college-finder-server-three.vercel.app/allcolleges")
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.log(err));
  }, []);
  return allColleges;
};

export default useAllColleges;
