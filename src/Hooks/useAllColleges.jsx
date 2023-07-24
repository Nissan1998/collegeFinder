import { useEffect, useState } from "react";

const useAllColleges = () => {
  const [allColleges, setCollege] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allcolleges")
      .then((res) => res.json())
      .then((data) => setCollege(data))
      .catch((err) => console.log(err));
  }, []);
  return allColleges;
};

export default useAllColleges;
