import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar, { SidebarItem } from "./assets/components/Sidebar";
import {
  Package,
  LayoutDashboard,
  Users,
  BookOpen,
  ReceiptText,
  Store,
  Heart,
} from "lucide-react";

import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import Menu from './pages/MenuPage';
import Transactions from './pages/TransactionsPage';
import Inventory from './pages/InventoryPage';
import Branch from './pages/Branches';
import Feedback from './pages/FeedbackPage';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation(); // Get current location

  return (
    <div className="App flex h-screen overflow-hidden">
      <Sidebar className="flex-none w-64 h-full bg-white border-r border-gray-200 overflow-y-auto">
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" active={location.pathname === '/'} />
        <SidebarItem icon={<Users size={20} />} text="Users" to="/users" active={location.pathname === '/users'} />
        <SidebarItem icon={<BookOpen size={20} />} text="Menu" to="/menu" active={location.pathname === '/menu'} />
        <SidebarItem icon={<ReceiptText size={20} />} text="Transactions" to="/transactions" active={location.pathname === '/transactions'} />
        <SidebarItem icon={<Package size={20} />} text="Inventory" to="/inventory" active={location.pathname === '/inventory'} />
        <SidebarItem icon={<Store size={20} />} text="Branch" to="/branch" active={location.pathname === '/branch'} />
        <SidebarItem icon={<Heart size={20} />} text="Feedback" to="/feedback" active={location.pathname === '/feedback'} />
      </Sidebar>
      <div className="flex-1 p-5 bg-gray-100 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
