import Telewizjon from "@/components/Telewizjon";
import { Helmet } from "react-helmet";

export default function Tv() {
  return (
    <>
      <Helmet>
        <title>Tv - {import.meta.env.VITE_APP_NAME}</title>
      </Helmet>

      <div className="page">
        <h1 className="page-title">TV</h1>
            <Telewizjon/>
      </div>
    </>
  );
}
