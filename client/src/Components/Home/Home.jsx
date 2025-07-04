import bg from "../../assets/16.jpg";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center relative z-10 px-4">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
          Satellite Image Enhancement
        </h1>
        <p className="text-xl md:text-1xl text-white mb-8 max-w-3xl">
          Advanced techniques to bring clarity and detail from above.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 animate-bounce z-10">
        <div className="w-8 h-14 border-4 border-gray-200 rounded-full flex justify-center items-start pt-2">
          <div className="w-1 h-3 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
