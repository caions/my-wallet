import React, { ReactNode } from 'react';
import "./styles.css";

interface Props {
  children: ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='main-container'>
      {children}
    </div>
  )
}

export default MainLayout;