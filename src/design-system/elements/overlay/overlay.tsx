const Overlay = () => {
  //REMBEMBER PUT ABSOLUTE IN THE COMPONENT FATHER.
  return (
    <>
      <div className="bg-red absolute top-0 z-10 h-full w-full bg-background/30" />
      {/* <div className="bg-red absolute top-0 z-10 h-10 w-full bg-gradient-to-b from-background md:h-40" />
      <div className="bg-red absolute bottom-0 z-10  w-full bg-gradient-to-t from-background h-[60%]" />
      <div className="absolute z-10 h-full w-full bg-gradient-radial from-background/20 to-background "></div> */}
    </>
  );
};

export default Overlay;
