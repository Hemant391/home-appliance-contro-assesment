
import React from 'react';
import ApplianceCard from './ApplianceCard';

function ApplianceList({ appliances }) {
  return (
    <div className="appliance-list">
      {appliances.map((appliance) => (
        <ApplianceCard key={appliance.id} appliance={appliance} />
        
      ))}
    </div>
  );
}

export default ApplianceList;
