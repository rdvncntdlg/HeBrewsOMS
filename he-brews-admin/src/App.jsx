import Sidebar, { SidebarItem } from "./assets/components/Sidebar";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  Package,
  LayoutDashboard,
  Users,
  BookOpen,
  ReceiptText,
  Store,
  Heart,
} from "lucide-react"

import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import Menu from './pages/MenuPage';
import Transactions from './pages/TransactionsPage';
import Inventory from './pages/InventoryPage';
import Branch from './pages/Branches';
import Feedback from './pages/FeedbackPage';

export default function App() {
  return (
    <Router>
      <main className="App flex ">
        <Sidebar style={{ width: '200px' }}>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" active={location.pathname === '/'}/>
          <SidebarItem icon={<Users size={20} />} text="Users" to="/users" active={location.pathname === '/users'}/>
          <SidebarItem icon={<BookOpen size={20} />} text="Menu" to="/menu" active={location.pathname === '/menu'}/>
          <SidebarItem icon={<ReceiptText size={20} />} text="Transactions" to="/transactions" active={location.pathname === '/transactions'} />
          <SidebarItem icon={<Package size={20} />} text="Inventory" to="/inventory" active={location.pathname === '/inventory'}/>
          <SidebarItem icon={<Store size={20} />} text="Branch" to="/branch" active={location.pathname === '/branch'} />
          <SidebarItem icon={<Heart size={20} />} text="Feedback" to="/feedback" active={location.pathname === '/feedback'}/>
        </Sidebar>
        <div className="flex-1 p-5 bg-gray-100">
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
      </main>
    </Router>
  )
}