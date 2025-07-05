import React from "react";
import { useSelector } from "react-redux";
import styles from "./DeviceTable.module.scss";

function DeviceTable() {
  const devices = useSelector((state) => state.devices.list);

  return (
    <table className={styles.deviceTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Facility</th>
          <th>Status</th>
          <th>Battery</th>
          <th>Last Service</th>
          <th>AMC/CMC</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <tr key={device.id}>
            <td>{device.id}</td>
            <td>{device.type}</td>
            <td>{device.facility}</td>
            <td>{device.status}</td>
            <td>{device.battery}%</td>
            <td>{device.lastService}</td>
            <td>{device.contractStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DeviceTable;
