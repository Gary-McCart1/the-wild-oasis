//import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
//import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button"
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import AddCabin from "../features/cabins/AddCabin"
import CabinTableOperations from "../features/cabins/CabinTableOperations"

function Cabins() {
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <AddCabin />
    </>
    
  );
}

export default Cabins;
