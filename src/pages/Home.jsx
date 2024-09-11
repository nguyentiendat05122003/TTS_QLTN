import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Home() {
    const [roles, setRoles] = useState(JSON.parse(sessionStorage.getItem('roles')));
    const { setlogout } = useAuth();
    const handleClickLogout = () => {
        setlogout();
    };
    return (
        <div>
            <h1>Home Page</h1>
            {/* <div
        style={{ paddingBottom: "20px" }}
        className="flex justify-content-center gap-2"
      >
        {roles.length > 0 ? (
          roles.map((item, idx) => <div key={idx}>{item.description}</div>)
        ) : (
          <>
            <p>Người dùng không có chức năng nào</p>
          </>
        )}
      </div> */}
            <Button label="Logout" onClick={handleClickLogout} />
        </div>
    );
}
