import FaqDatas from "./Data";
import Faq from "./Faq";

function FaqS() {
  return (
    <main>
      {FaqDatas.map((FaqItem) => (
        <Faq key={FaqItem.id} {...FaqItem} />
      ))}
    </main>
  );
}

export default FaqS;
