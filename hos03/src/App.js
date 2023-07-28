import Gallery from "./Components/Gallery";
import { Profile } from "./Components/Gallery";
import "./styles.css";
import { getImageUrl } from "./Utils/utils";
import { people } from "./Data/people";
let guest = 0;
function Cup({ guest }) {
  return <h2>Tea for guest # {guest}</h2>;
}
function App() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

export default App;
