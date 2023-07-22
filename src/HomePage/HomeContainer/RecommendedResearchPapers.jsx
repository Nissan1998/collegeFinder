import React from "react";

const researchPapers = [
  {
    title: "Humility, Listening and ‘Teaching in a Strong Sense’",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlNLUKUw1vgVl4a41DEyIktNzUiVj0wIOKQ&usqp=CAU",
    link: "https://core.ac.uk/works/8856438",
    authors: "Andrea R",
    abstract:
      "My argument in this paper is that humility is implied in the concept of teaching, if teaching is construed in a strong 1...",
  },
  {
    title: "Intercultural Humility in Social Work Education",
    img: "https://media.istockphoto.com/id/487336206/photo/woman-with-laptop-at-cafe.jpg?s=612x612&w=0&k=20&c=U7J_qIx8ynvwPsUJC9dIsw64o9o4TNlc7l7ASXV8LY0=",
    link: "https://core.ac.uk/works/69565416?source=1&algorithmId=15&similarToDoc=8856438&similarToDocKey=CORE&recSetID=90d3e979-4ac0-422b-94aa-64677e0511d4&position=3&recommendation_type=same_repo&otherRecs=125855743,63079360,69565416,123426007,74198601",
    authors: "Anthony A, Bibus, Bibiana Koh",
    abstract:
      "This conceptual study draws from social work, education, psychology, and moral philosophy (i.e., virtue and Confucian ethics) ...",
  },
  // Add more research paper objects...
];

const RecommendedResearchPapers = () => {
  return (
    <section>
      <h2 className="text-center underline font-bold text-3xl my-10">
        Recommended Research Papers
      </h2>
      <div
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/illustration-neon-tropical-theme-with-palm-tree-exotic-floral-ai_564714-1270.jpg)`,
        }}
        className="w-full bg-fixed rounded-2xl  max-w-screen-2xl mx-auto flex justify-center bg-cover items-center"
      >
        <ul className="grid p-10 pb-5  md:grid-cols-2 gap-10 container mx-auto ">
          {researchPapers.map((paper, index) => (
            <li
              className=" relative card rounded-3xl bg-sky-500 mb-5"
              key={index}
            >
              <div className="card-body mt-10  text-white font-semibold">
                <h3>
                  <span className=" text-xl font-bold">Title: </span>{" "}
                  {paper.title}
                </h3>
                <p>Authors: {paper.authors}</p>
                <p>Abstract: {paper.abstract}</p>
                <a
                  className="glass btn text-white w-28 hover:text-black"
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
              </div>
              <div className=" absolute top-0 btn btn-circle">
                <img
                  className="object-cover  btn btn-circle"
                  src={paper.img}
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecommendedResearchPapers;
