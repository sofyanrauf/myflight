import type { Metadata } from "next";
import React, { type FC } from "react";
import FormFlight from "../components/form-flight";
import { getAirplanes } from "../../airplanes/lib/data";

export const metadata: Metadata = {
  title: "Dashboard | create data flights",
};
const CreateFlightPage: FC = async () => {
  const aiplanes = await getAirplanes();
  return (
    <div>
      <div className="flex flex-row item-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah Data Flight</div>
      </div>
      <FormFlight type="ADD" airplanes={aiplanes} />
    </div>
  );
};

export default CreateFlightPage;
