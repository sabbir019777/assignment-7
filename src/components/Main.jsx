
import React, { useState, useMemo } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner';


const initialTickets = [
  { id: 1001, title: "Login Issues - Can't Access Account", description: "Customer is unable to log in to their account...", status: "Open", priority: "HIGH", user: "John Smith", date: "1/15/2024", resolved: false },

  { id: 1002, title: "Payment Failed - Card Declined", description: "Customer attempted to pay using Visa ending 1234...", status: "Open", priority: "HIGH", user: "Sarah Johnson", date: "1/16/2024", resolved: false },

  { id: 1003, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice...", status: "In-Progress", priority: "MEDIUM", user: "Michael Brown", date: "1/17/2024", resolved: false },

  { id: 1004, title: "Incorrect Billing Address", description: "Customer's billing address shows a different city...", status: "Open", priority: "LOW", user: "Emily Davis", date: "1/18/2024", resolved: false },

  { id: 1005, title: "App Crash on Launch", description: "Customer reports that the mobile app crashes...", status: "Open", priority: "HIGH", user: "David Wilson", date: "1/19/2024", resolved: false },

  { id: 1006, title: "Refund Not Processed", description: "Customer requested a refund two weeks ago...", status: "In-Progress", priority: "MEDIUM", user: "Sophia Taylor", date: "1/20/2024", resolved: false },

  { id: 1007, title: "Two-Factor Authentication Issue", description: "Customer is not receiving 2FA codes...", status: "Open", priority: "HIGH", user: "James Anderson", date: "1/21/2024", resolved: false },

  { id: 1008, title: "Unable to Update Profile Picture", description: "Customer tries to upload a new profile picture...", status: "Open", priority: "LOW", user: "Olivia Martinez", date: "1/22/2024", resolved: false },

  { id: 1009, title: "Subscription Auto-Renewal", description: "Customer wants to enable auto-renewal...", status: "In-Progress", priority: "MEDIUM", user: "Liam Thomas", date: "1/23/2024", resolved: false },

  { id: 1010, title: "Missing Order Confirmation Email", description: "Customer placed an order but didn't receive...", status: "Open", priority: "MEDIUM", user: "Isabella Garcia", date: "1/24/2024", resolved: false },
];


const TicketCard = ({ ticket, isSelected, onClick }) => {
  const handleClick = () => onClick(ticket.id);

  const statusClasses = {
    "Open": 'bg-green-100 text-green-800 border border-green-300',
    "In-Progress": 'bg-yellow-100 text-yellow-800 border border-yellow-300',
    "Closed": 'bg-gray-100 text-gray-800 border border-gray-300'
  }[ticket.status] || 'bg-gray-100 text-gray-800 border border-gray-300';

  const priorityClasses = {
    "HIGH": 'text-red-500 font-bold',
    "MEDIUM": 'text-yellow-600 font-medium',
    "LOW": 'text-green-600 font-medium'
  }[ticket.priority] || 'text-gray-600 font-medium';

  const CalendarIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
   <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  return (
    <div 
    className={`p-4 bg-white rounded-xl shadow-sm cursor-pointer transition duration-150 ease-in-out border-2 ${isSelected ? 'border-gray-200 bg-indigo-50' : 'border-transparent hover:border-gray-200'}`}
      onClick={handleClick}
 >
  <div className="flex flex-col mb-2">
  <div className="flex justify-between items-start mb-1">
   <h3 className="text-base font-semibold text-gray-900 leading-tight pr-4 overflow-hidden"
      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
     {ticket.title}
   </h3>
  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full whitespace-nowrap flex items-center ${statusClasses}`}>
   <span className={`inline-block w-2 h-2 rounded-full mr-1`} style={{ backgroundColor: ticket.status === 'Open' ? '#16a34a' : '#facc15' }}></span>
     {ticket.status}
      </span>
   </div>
  <p className="text-gray-500 text-sm mb-3 overflow-hidden"
     style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
    {ticket.description}
   </p>
  </div>
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs mt-1 pt-2 border-t border-gray-100 space-y-1 sm:space-y-0">
    <span className="flex items-center space-x-3">
    <span className="text-gray-600 font-medium">#{ticket.id}</span>
   <span className={priorityClasses}>{ticket.priority} PRIORITY</span>
    </span>
  <span className="flex items-center space-x-3 text-gray-700">
    <span className="font-medium">{ticket.user}</span>
    <CalendarIcon />
  <span className="font-medium">{ticket.date}</span>
  </span>
 </div>
    </div>
  );
};


const TaskStatus = ({ selectedTicket, onComplete, resolvedTicket }) => {
  const completeButtonClasses = "mt-4 w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-200 shadow-md";
  const resolvedTaskClasses = "p-4 bg-indigo-100 text-gray-800 font-medium rounded-lg shadow-sm";

  return (
   <div className="h-full lg:sticky lg:top-6 space-y-6">
      
   <div className="space-y-4">
 <h3 className="text-xl font-bold text-gray-800">Task Status</h3>
     {selectedTicket ? (
  <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
     <p className="text-base font-semibold text-gray-900">{selectedTicket.title}</p>
    <button className={completeButtonClasses} onClick={() => onComplete(selectedTicket.id)}>Complete</button>
     </div>
   ) : (
   <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
    <p className="text-base text-gray-500 italic">Select a ticket to begin work.</p>
    </div>
  )}
   </div>

      {/* --- Resolved Task --- */}
   <div className="space-y-4">
   <h3 className="text-xl font-bold text-gray-800">Resolved Task</h3>
     {resolvedTicket ? (
    <div className={resolvedTaskClasses}>
       <p>{resolvedTicket.title}</p>
   </div>
   ) : (
     <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
    <p className="text-sm text-gray-500 italic">No recently resolved tasks.</p>
    </div>
    )}
   </div>
    </div>
  );
};


const Main = () => {
const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
const [resolvedTicket, setResolvedTicket] = useState(null);
 const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const selectedTicket = useMemo(() => tickets.find(t => t.id === selectedTicketId), [selectedTicketId, tickets]);

  const handleTicketClick = (id) => {
const ticket = tickets.find(t => t.id === id);
   if (!ticket) return;

 setSelectedTicketId(id);

  if (!ticket.addedToProgress) {
   setInProgressCount(prev => prev + 1);
      setTickets(prev => prev.map(t => t.id === id ? { ...t, addedToProgress: true } : t));
    }

    if (ticket.status === 'In-Progress') {
      toast.info(`🚀 Ticket "${ticket.title}" is in progress`, {
        position: "top-right", autoClose: 2500, theme: "colored"
      });
    }
  };

  const handleComplete = (id) => {
 const ticket = tickets.find(t => t.id === id);
    if (!ticket) return;

    if (ticket.addedToProgress) setInProgressCount(prev => prev - 1);
    setResolvedCount(prev => prev + 1);

    setResolvedTicket(ticket); 
    setTickets(prev => prev.filter(t => t.id !== id));
    setSelectedTicketId(null);

  toast.success(`✅ Ticket "${ticket.title}" marked as resolved!`, {
      position: "top-right", autoClose: 2500, theme: "colored"
    });

    setTimeout(() => { setResolvedTicket(null); }, 5000);
  };

  return (
    <>
  <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
  <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 font-sans">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="lg:col-span-2 space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Customer Tickets</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tickets.map(ticket => (
     <TicketCard key={ticket.id} ticket={ticket} isSelected={ticket.id === selectedTicketId} onClick={handleTicketClick} />
     ))}
   </div>
    </div>

    <div className="lg:col-span-1 mt-6 lg:mt-0">
   <TaskStatus selectedTicket={selectedTicket} onComplete={handleComplete} resolvedTicket={resolvedTicket} />
    </div>
    </div>
  </div>
 </div>

 <ToastContainer transition={Slide} />
    </>
  );
};

export default Main;
