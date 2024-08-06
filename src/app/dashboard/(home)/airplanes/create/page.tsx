// interface CreateAirplanePageProps {}

import { FC } from "react";
import FormAirplane from "../components/form-airplane";

const CreateAirplanePage: FC = () => {
  return (
    <div>
      <div className="flex flex-row item-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Airplane</div>
      </div>
      <FormAirplane type="ADD" />
    </div>
  );
};
export default CreateAirplanePage;
