import React, { useState } from 'react';

function ApplianceCard({ appliance,click }) {
  

  return (
    <div className="appliance-card" onClick={click}>
      <h3>{appliance}</h3>
    </div>
  );
}

export default ApplianceCard;
