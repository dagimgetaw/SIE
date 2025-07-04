export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 px-6 md:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-sky-600">
          About <span className="text-gray-900">SIE</span>
        </h2>
        <p className="text-sm md:text-lg pb-6 text-gray-700 leading-relaxed text-left">
          <strong>Satellite Image Enhancement (SIE)</strong> is a web based
          platform that uses AI and geospatial processing to enhance satellite
          image by improving resolution, removing noise/clouds, and optimizing
          image clarity for analysis and decison making.
        </p>
        <p className="text-sm md:text-lg pb-6 text-gray-700 leading-relaxed text-left">
          It leverages the combined power of{" "}
          <span className="text-sky-500 font-semibold">
            geospatial intelligence
          </span>{" "}
          with
          <span className="text-sky-500 font-semibold">
            {" "}
            machine learning algorithms
          </span>
          , SIE aims to support governments, researchers, and organizations in
          tackling real-world problems from urban planning, agriculture to
          environmental monitoring, disaster response, and more.
        </p>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-left">
          Our goal is to build a lightweight, accessible tool that turns raw
          satellite images into clearer, more usable visuals for geospatial
          decision-making.
        </p>
      </div>
    </section>
  );
}
