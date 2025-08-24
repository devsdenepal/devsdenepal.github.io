import data from '/data/data.json';
const TechStack = () => {
  return (
    <div className="row mt-4 mb-4"  data-aos="fade-right">
      {data.techStack.map((tech, index) => (
        <div className="col-2 gy-4" key={index}>
          <img src={tech.image} alt={tech.name} className="img-fluid" width={80} height={80}/>
        </div>
      ))}
    </div>
  );
};

export default TechStack;