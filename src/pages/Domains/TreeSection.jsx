import TreeLayer from "../../assets/treelayer.png";
import BlossomTree from "../../assets/Bloosm_tree.png"

const TreeSection = () => {
  return (
    <section className="w-full mt-12 flex flex-col items-center justify-center px-4">
      <p
        className="text-center -mb-2 mx-auto text-[7px] sm:text-[10px] md:text-[12px] lg:text-[12px] translate-y-8 z-10"
        style={{
          fontFamily: "Times Now",
          fontWeight: 350,
          fontStyle: "italic",
          lineHeight: "120%",
          letterSpacing: "0.01em",
          color: "#32312B",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Turning bold aspirations into executable plans powered by decisive
        actions and effective change management.
      </p>

      {/* Container that physically cuts off the tree */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          height: "200px", // Adjust this height to control how much tree shows
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <img
          src={BlossomTree}
          alt="Blossom Tree"
          className="absolute -bottom-4"
          style={{ 
            width: "300px",
            height: "auto",
            maxWidth: "none",
            objectFit: "contain",
            objectPosition: "bottom"
          }}
        />
      </div>
    </section>
  );
};

export default TreeSection;