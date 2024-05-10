import { QRCode } from "./components/qrcode.jsx";

function App() {
  return (
    <>
      <QRCode url="https://reactjs.org/" />
      <QRCode url="https://ja.vitejs.dev/" />
    </>
  );
}

export default App;
