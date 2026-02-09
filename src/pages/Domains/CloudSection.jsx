import Group1 from "../../assets/Group1.png";
import Group2 from "../../assets/Group2.png";
import Group3 from "../../assets/Group3.png";
import Group4 from "../../assets/Group4.png";
import Group5 from "../../assets/Group5.png";

const cloudData = [
  { id: 1, img: Group1, title: "Payments" },
  { id: 2, img: Group2, title: "Unsecured Loans" },
  { id: 3, img: Group3, title: "Retail Banking" },
  { id: 4, img: Group4, title: "Collections" },
  { id: 5, img: Group5, title: "Insurance" },
];

const CloudSection = () => {
  return (
    <section
      className="
        w-full
        flex flex-col items-center
        mt-0 !mt-0
        pt-0 !pt-0
        pb-4
      "
      style={{
        marginTop: 0,
        paddingTop: 0,
      }}
    >
      {/* ROW 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 lg:gap-13 justify-items-center mb-6 lg:mt-7 md:mt-7">
        {cloudData.slice(0, 3).map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-[200px] h-[200px] object-cover mb-1"
            />

            <div className="mt-3 relative flex items-center translate-x-1">
              <span
                className="absolute -left-3.5 -top-1 text-[15px] font-light" // Changed to -left-1
                style={{ fontFamily: "Cabinet Grotesk Variable", color: "#32312B" }}
              >
                {item.id}.
              </span>

              <p
                className="text-[22px] font-light" // Removed ml-1
                style={{ fontFamily: "Cabinet Grotesk Variable", color: "#32312B" }}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 lg:gap-13 justify-items-center mt-5">
        {cloudData.slice(3).map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-[200px] h-[200px] object-cover mb-1"
            />

            <div className="mt-3 relative flex items-center">
              <span
                className="absolute -left-4 -top-1 text-[15px] font-light" // Changed to -left-1
                style={{ fontFamily: "Cabinet Grotesk Variable", color: "#32312B" }}
              >
                {item.id}.
              </span>

              <p
                className="text-[22px] font-light" // Removed ml-1
                style={{ fontFamily: "Cabinet Grotesk Variable", color: "#32312B" }}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudSection;