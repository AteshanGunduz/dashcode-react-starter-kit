import React, { useContext, useState } from "react";
import Card from "@/components/ui/Card";
import { UserContext } from "@/useContext/useContext";



const Dashboard = () => {
  const {toggleLanguage} = useContext(UserContext)

  return (
    <div>
      <Card title="Starter Kit">{!toggleLanguage ? "Your Dashboard" : "Gösterge Panelim"}</Card>
    </div>
  );
};

export default Dashboard;
